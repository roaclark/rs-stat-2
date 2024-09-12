"use client";

import _ from "lodash";
import { createContext, useEffect, useState, useTransition } from "react";
import skills from "../data/skills";
import fetchStats from "../actions/fetchStats";

export const PlayerLevelContext = createContext({
  stats: _.mapValues(skills, () => ({ level: 0, experience: 0 })),
  update: () => {},
  isPending: true,
});

const getPlayerLevels = () => {
  return typeof window !== "undefined"
    ? JSON.parse(localStorage.getItem("stats") || "{}")
    : {};
};

const PlayerLevelProvider = ({ children }: { children: React.ReactNode }) => {
  const [stats, setStats] = useState({});
  const [isPending, startTransition] = useTransition();

  function updateStats() {
    startTransition(async () => {
      const data = await fetchStats();
      localStorage.setItem("stats", JSON.stringify(data));
      setStats(data);
    });
  }

  useEffect(() => {
    startTransition(async () => {
      const data = getPlayerLevels();
      setStats(data);
    });
  }, []);

  return (
    <PlayerLevelContext.Provider
      value={{ stats, update: updateStats, isPending }}
    >
      {children}
    </PlayerLevelContext.Provider>
  );
};
export default PlayerLevelProvider;
