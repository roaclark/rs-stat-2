"use client";

import {
  FormControlLabel,
  Switch,
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
import { LevelChip } from "../components/LevelChip";
import { useState } from "react";

export function LevelOverviewTable() {
  const [useDiffs, setUseDiffs] = useState();

  return (
    <>
      <div className="flex content-center justify-center">
        <FormControlLabel
          label="Show differences"
          control={<Switch size="small" />}
          onChange={(e: any) => setUseDiffs(e.target.checked)}
          checked={useDiffs}
        />
      </div>
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
                    diff={useDiffs}
                  />
                </TableCell>
                <TableCell align="right">
                  <LevelChip
                    skill={key}
                    level={skill.diaryLevels.easy}
                    diff={useDiffs}
                  />
                </TableCell>
                <TableCell align="right">
                  <LevelChip
                    skill={key}
                    level={skill.diaryLevels.medium}
                    diff={useDiffs}
                  />
                </TableCell>
                <TableCell align="right">
                  <LevelChip
                    skill={key}
                    level={skill.diaryLevels.hard}
                    diff={useDiffs}
                  />
                </TableCell>
                <TableCell align="right">
                  <LevelChip
                    skill={key}
                    level={skill.diaryLevels.elite}
                    diff={useDiffs}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
