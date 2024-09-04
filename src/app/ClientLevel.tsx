"use client";

import { PlayerLevelContext } from "@/context/PlayerLevelContext";
import { use } from "react";

const ClientLevel = ({ skill }: { skill: string }) => {
  const { update, stats } = use(PlayerLevelContext);
  return <div onClick={update}>{stats[skill]?.level || "-"}</div>;
};
export default ClientLevel;
