"use client";

import { PlayerLevelContext } from "@/context/PlayerLevelContext";
import { use } from "react";

const ClientLevel = ({ skill }: { skill: string }) => {
  const { stats, isPending } = use(PlayerLevelContext);
  if (isPending) {
    return <p>?</p>;
  }
  return <p>{stats[skill]?.level || "-"}</p>;
};
export default ClientLevel;
