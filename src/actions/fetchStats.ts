"use server";

import _ from "lodash";

const fetchStats = async (): Promise<{
  [skill: string]: { level: number; experience: number };
}> => {
  // TODO hardcoded username
  const response = await fetch(
    "https://oldschool.tools/ajax/hiscore-stats/reqant"
  );
  const data = await response.json();
  return _.mapValues(data.stats, (skill) => ({
    level: skill.level,
    experience: skill.experience,
  }));
};
export default fetchStats;
