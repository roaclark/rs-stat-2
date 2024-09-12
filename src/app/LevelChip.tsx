"use client";

import { PlayerLevelContext } from "@/context/PlayerLevelContext";
import { Chip } from "@mui/material";
import { use } from "react";

export const LevelChip = ({
  skill,
  level,
}: {
  skill: string;
  level: number;
}) => {
  const { stats, isPending } = use(PlayerLevelContext);
  const current = stats[skill]?.level;

  if (!stats[skill]) {
    return <Chip label="??" color="error" size="small" variant="outlined" />;
  }

  if (level === 0) {
    return;
  }
  return (
    <Chip
      label={level}
      color={isPending ? "default" : current < level ? "error" : "success"}
      size="small"
      variant="outlined"
    />
  );
};
