import dayjs from "dayjs";

export function calculateExperience(startDate: string): string {
  const years = dayjs().diff(dayjs(startDate), "month", true) / 12;
  return years.toFixed(1);
}

type Skill = {
  name: string;
  icon: React.FC<{ className?: string }>;
};

export function generateSkillCode(category: string, skills: Skill[]): string {
  const skillNames = skills.map((s) => s.name).join("  ");
  return `${category}> ls\n${skillNames}`;
}
