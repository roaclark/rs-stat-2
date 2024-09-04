"use client";

import _ from "lodash";
import { createContext, useActionState, useTransition } from "react";
import skills from "../data/skills";
import fetchStats from "../actions/fetchStats";

export const PlayerLevelContext = createContext({
  stats: _.mapValues(skills, () => ({ level: 0, experience: 0 })),
  update: () => {},
  isPending: false,
});

const getPlayerLevels = () => {
  return typeof window !== "undefined"
    ? JSON.parse(localStorage.getItem("stats") || "{}")
    : {};
};

const PlayerLevelProvider = ({ children }: { children: React.ReactNode }) => {
  const [stats, updateStats, isPending] = useActionState(async () => {
    const data = await fetchStats();
    // TODO update localstorage
    return data;
  }, getPlayerLevels());

  return (
    <PlayerLevelContext.Provider
      value={{ stats, update: updateStats, isPending }}
    >
      {children}
    </PlayerLevelContext.Provider>
  );
};
export default PlayerLevelProvider;
