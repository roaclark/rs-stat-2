import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
} from "@mui/material";
import _ from "lodash";

import skills from "../data/skills";

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
      <div className="grid grid-cols-3 max-w-xs gap-2 gap-x-6 pt-4">
        {statsGridOrder.map((key) => {
          return (
            <div className="flex gap-2">
              <div className="rounded-full h-8 w-8 mx-auto overflow-hidden border-2 flex items-center justify-center dark:bg-gray-300">
                <img className="object-cover" src={skills[key].icon} />
              </div>
              <p>30</p>
            </div>
          );
        })}
      </div>
      <div className="pt-8">
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
                  <TableCell align="right">{30}</TableCell>
                  <TableCell align="right">
                    <Chip
                      label={10}
                      color="success"
                      size="small"
                      variant="outlined"
                    />
                  </TableCell>
                  <TableCell align="right">
                    <Chip
                      label={40}
                      color="success"
                      size="small"
                      variant="outlined"
                    />
                  </TableCell>
                  <TableCell align="right">
                    <Chip
                      label={50}
                      color="success"
                      size="small"
                      variant="outlined"
                    />
                  </TableCell>
                  <TableCell align="right">
                    <Chip
                      label={60}
                      color="success"
                      size="small"
                      variant="outlined"
                    />
                  </TableCell>
                  <TableCell align="right">
                    <Chip
                      label={70}
                      color="error"
                      size="small"
                      variant="outlined"
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}
