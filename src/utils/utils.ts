import dayjs from "dayjs";

export function calculateExperience(startDate: string): string {
  const start = dayjs(startDate);
  const now = dayjs();
  const months = now.diff(start, "month");
  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;

  if (years === 0) {
    return `0.${remainingMonths}`;
  }
  if (remainingMonths === 0) {
    return `${years}`;
  }
  return `${years}.${remainingMonths}`;
}

type Skill = {
  name: string;
  icon: React.FC<{ className?: string }>;
};

export function generateSkillCode(category: string, skills: Skill[]): string {
  const skillNames = skills.map((s) => s.name).join("  ");
  return `${category}> ls\n${skillNames}`;
}
