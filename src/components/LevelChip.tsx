"use client";

import { PlayerLevelContext } from "@/context/PlayerLevelContext";
import { Chip } from "@mui/material";
import { use } from "react";

export const LevelChip = ({
  skill,
  level,
  diff,
}: {
  skill: string;
  level: number;
  diff?: boolean;
}) => {
  const { stats, isPending } = use(PlayerLevelContext);
  const current = stats[skill]?.level;

  if (!stats[skill]) {
    return <Chip label="??" color="error" size="small" variant="outlined" />;
  }

  const color = isPending ? "default" : current < level ? "error" : "success";

  if (level === 0 || (diff && current >= level)) {
    return;
  }
  return (
    <Chip
      label={diff ? level - current : level}
      color={color}
      size="small"
      variant="outlined"
    />
  );
};
