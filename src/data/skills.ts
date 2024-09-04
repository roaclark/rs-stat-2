const skills: {
  [key: string]: {
    name: string;
    icon: string;
    members: boolean;
    diaryLevels: {
      easy: number;
      medium: number;
      hard: number;
      elite: number;
    };
  };
} = {
  agility: {
    name: "Agility",
    icon: "https://oldschool.runescape.wiki/images/8/86/Agility_icon.png",
    members: true,
    diaryLevels: { easy: 20, medium: 52, hard: 71, elite: 90 },
  },
  attack: {
    name: "Attack",
    icon: "https://oldschool.runescape.wiki/images/f/fe/Attack_icon.png",
    members: false,
    diaryLevels: { easy: 0, medium: 0, hard: 50, elite: 50 },
  },
  construction: {
    name: "Construction",
    icon: "https://oldschool.runescape.wiki/images/f/f6/Construction_icon.png",
    members: true,
    diaryLevels: { easy: 25, medium: 37, hard: 65, elite: 78 },
  },
  cooking: {
    name: "Cooking",
    icon: "https://oldschool.runescape.wiki/images/d/dc/Cooking_icon.png",
    members: false,
    diaryLevels: { easy: 30, medium: 43, hard: 70, elite: 95 },
  },
  crafting: {
    name: "Crafting",
    icon: "https://oldschool.runescape.wiki/images/c/cf/Crafting_icon.png",
    members: false,
    diaryLevels: { easy: 23, medium: 50, hard: 70, elite: 85 },
  },
  defence: {
    name: "Defence",
    icon: "https://oldschool.runescape.wiki/images/b/b7/Defence_icon.png",
    members: false,
    diaryLevels: { easy: 0, medium: 30, hard: 70, elite: 70 },
  },
  farming: {
    name: "Farming",
    icon: "https://oldschool.runescape.wiki/images/f/fc/Farming_icon.png",
    members: true,
    diaryLevels: { easy: 23, medium: 45, hard: 74, elite: 91 },
  },
  firemaking: {
    name: "Firemaking",
    icon: "https://oldschool.runescape.wiki/images/9/9b/Firemaking_icon.png",
    members: false,
    diaryLevels: { easy: 15, medium: 50, hard: 65, elite: 85 },
  },
  fishing: {
    name: "Fishing",
    icon: "https://oldschool.runescape.wiki/images/3/3b/Fishing_icon.png",
    members: false,
    diaryLevels: { easy: 20, medium: 65, hard: 70, elite: 96 },
  },
  fletching: {
    name: "Fletching",
    icon: "https://oldschool.runescape.wiki/images/9/93/Fletching_icon.png",
    members: true,
    diaryLevels: { easy: 20, medium: 50, hard: 70, elite: 95 },
  },
  herblore: {
    name: "Herblore",
    icon: "https://oldschool.runescape.wiki/images/0/03/Herblore_icon.png",
    members: true,
    diaryLevels: { easy: 20, medium: 48, hard: 66, elite: 90 },
  },
  hitpoints: {
    name: "Hitpoints",
    icon: "https://oldschool.runescape.wiki/images/9/96/Hitpoints_icon.png",
    members: false,
    diaryLevels: { easy: 0, medium: 0, hard: 0, elite: 70 },
  },
  hunter: {
    name: "Hunter",
    icon: "https://oldschool.runescape.wiki/images/d/dd/Hunter_icon.png",
    members: true,
    diaryLevels: { easy: 11, medium: 53, hard: 69, elite: 70 },
  },
  magic: {
    name: "Magic",
    icon: "https://oldschool.runescape.wiki/images/5/5c/Magic_icon.png",
    members: false,
    diaryLevels: { easy: 21, medium: 60, hard: 72, elite: 96 },
  },
  mining: {
    name: "Mining",
    icon: "https://oldschool.runescape.wiki/images/4/4a/Mining_icon.png",
    members: false,
    diaryLevels: { easy: 40, medium: 55, hard: 70, elite: 85 },
  },
  prayer: {
    name: "Prayer",
    icon: "https://oldschool.runescape.wiki/images/f/f2/Prayer_icon.png",
    members: false,
    diaryLevels: { easy: 0, medium: 47, hard: 70, elite: 85 },
  },
  ranged: {
    name: "Ranged",
    icon: "https://oldschool.runescape.wiki/images/1/19/Ranged_icon.png",
    members: false,
    diaryLevels: { easy: 30, medium: 50, hard: 70, elite: 70 },
  },
  runecrafting: {
    name: "Runecrafting",
    icon: "https://oldschool.runescape.wiki/images/6/63/Runecraft_icon.png",
    members: false,
    diaryLevels: { easy: 9, medium: 23, hard: 65, elite: 91 },
  },
  slayer: {
    name: "Slayer",
    icon: "https://oldschool.runescape.wiki/images/2/28/Slayer_icon.png",
    members: true,
    diaryLevels: { easy: 15, medium: 50, hard: 72, elite: 95 },
  },
  smithing: {
    name: "Smithing",
    icon: "https://oldschool.runescape.wiki/images/d/dd/Smithing_icon.png",
    members: false,
    diaryLevels: { easy: 20, medium: 50, hard: 75, elite: 91 },
  },
  strength: {
    name: "Strength",
    icon: "https://oldschool.runescape.wiki/images/1/1b/Strength_icon.png",
    members: false,
    diaryLevels: { easy: 0, medium: 45, hard: 0, elite: 76 },
  },
  thieving: {
    name: "Thieving",
    icon: "https://oldschool.runescape.wiki/images/4/4a/Thieving_icon.png",
    members: true,
    diaryLevels: { easy: 25, medium: 47, hard: 75, elite: 91 },
  },
  woodcutting: {
    name: "Woodcutting",
    icon: "https://oldschool.runescape.wiki/images/f/f4/Woodcutting_icon.png",
    members: false,
    diaryLevels: { easy: 40, medium: 61, hard: 71, elite: 90 },
  },
};
export default skills;
