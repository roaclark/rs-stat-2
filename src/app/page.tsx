import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import _ from "lodash";

import skills from "@/data/skills";
import ClientLevel from "@/components/ClientLevel";
import LevelUpdateButton from "@/components/LevelUpdateButton";
import { LevelChip } from "./LevelChip";

const statsGridOrder = [
  "attack",
  "hitpoints",
  "mining",
  "strength",
  "agility",
  "smithing",
  "defence",
  "herblore",
  "fishing",
  "ranged",
  "thieving",
  "cooking",
  "prayer",
  "crafting",
  "firemaking",
  "magic",
  "fletching",
  "woodcutting",
  "runecrafting",
  "slayer",
  "farming",
  "construction",
  "hunter",
];

export default function Overview() {
  return (
    <div className="font-sans flex flex-col items-center">
      <h1 className="pb-4">Overview</h1>
      <div className="grid grid-cols-3 max-w-xs gap-2 gap-x-8 pt-4">
        {statsGridOrder.map((key) => {
          return (
            <div className="flex gap-2 items-center" key={key}>
              <div className="rounded-full h-8 w-8 mx-auto overflow-hidden border-2 flex items-center justify-center dark:bg-gray-300">
                <img className="object-cover" src={skills[key].icon} />
              </div>
              <div className="w-6">
                <ClientLevel skill={key} />
              </div>
            </div>
          );
        })}
        <div className="self-center justify-self-center">
          <LevelUpdateButton />
        </div>
      </div>
      <div className="pt-8">
        <LevelOverviewTable />
      </div>
    </div>
  );
}

function LevelOverviewTable() {
  return (
    <TableContainer>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Skill</TableCell>
            <TableCell align="right">Level</TableCell>
            <TableCell align="right">Quests</TableCell>
            <TableCell align="right">Easy diary</TableCell>
            <TableCell align="right">Medium diary</TableCell>
            <TableCell align="right">Hard diary</TableCell>
            <TableCell align="right">Elite diary</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {_.map(skills, (skill, key) => (
            <TableRow
              key={key}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell>{skill.name}</TableCell>
              <TableCell align="right">
                <ClientLevel skill={key} />
              </TableCell>
              <TableCell align="right">
                <LevelChip
                  skill={key}
                  /* TODO quest levels */
                  level={10}
                />
              </TableCell>
              <TableCell align="right">
                <LevelChip skill={key} level={skill.diaryLevels.easy} />
              </TableCell>
              <TableCell align="right">
                <LevelChip skill={key} level={skill.diaryLevels.medium} />
              </TableCell>
              <TableCell align="right">
                <LevelChip skill={key} level={skill.diaryLevels.hard} />
              </TableCell>
              <TableCell align="right">
                <LevelChip skill={key} level={skill.diaryLevels.elite} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
