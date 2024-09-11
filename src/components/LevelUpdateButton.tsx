"use client";

import { PlayerLevelContext } from "@/context/PlayerLevelContext";
import { use } from "react";

const ClientLevel = () => {
  const { update, isPending } = use(PlayerLevelContext);
  return (
    <button
      onClick={update}
      className="border rounded-2xl disabled:bg-gray-100 px-2"
      disabled={isPending}
    >
      ↺
    </button>
  );
};
export default ClientLevel;
