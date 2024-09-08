"use client";

import { PlayerLevelContext } from "@/context/PlayerLevelContext";
import { use } from "react";

const ClientLevel = ({ skill }: { skill: string }) => {
  const { update, stats, isPending } = use(PlayerLevelContext);
  if (isPending) {
    return <div>?</div>;
  }
  return <div onClick={update}>{stats[skill]?.level || "-"}</div>;
};
export default ClientLevel;
