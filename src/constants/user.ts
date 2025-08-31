import {
  CssIcon,
  DockerIcon,
  ExpressIcon,
  GitIcon,
  GolangIcon,
  GqlIcon,
  HtmlIcon,
  JavaScriptIcon,
  MongoDbIcon,
  NestJsIcon,
  NextJsIcon,
  NodeJsIcon,
  PostgreSQLIcon,
  PrismaIcon,
  PythonIcon,
  ReactIcon,
  RedisIcon,
  ReduxIcon,
  RestApiIcon,
  SocketIcon,
  TailwindCssIcon,
  TenstackIcon,
  TrpcIcon,
  TurborepoIcon,
  TypescriptIcon,
  VsCodeIcon,
  WebRtcIcon,
  ZustandIcon,
} from "@/components/custom/svg-icons";
import { calculateExperience } from "@/utils/utils";
import {
  Code,
  Database,
  LucideIcon,
  Palette,
  Server,
  WebhookIcon,
} from "lucide-react";
import React from "react";

export const userData = {
  name: "Souvik Hazra",
  title: "Software Developer",
  subTitle: "Full Stack Teaching Assistant",
  tagline: "Crafting digital experiences with code and creativity",
  location: "Bangalore, India",
  email: "souvikhazra151@gmail.com",
  phone: "+91 6294720141",
  website: "https://alexrodriguez.dev",
  resumeUrl: "/souvik_software_developer.pdf",
  avatar: "/souvik.png",

  availableForHire: true,
  availabilityText: "Available for freelance projects",

  bio: `Passionate software developer with ${calculateExperience(
    "2024-01-01"
  )} years of experience crafting scalable web applications. I love turning complex challenges into simple, elegant solutions. In my free time, I mentor aspiring developers and stay curious by exploring new technologies.`,

  social: {
    github: "https://github.com/Mr-R-e-X",
    linkedin: "https://www.linkedin.com/in/souvik-hazra-202321252/",
    twitter: "https://x.com/souvik__hazra",
  },

  stats: {
    experience: parseFloat(calculateExperience("2024-01-01")),
    projects: 20,
    students: 2000,
    bugsFixed: 1000,
  },
};

export const skillCategories: Array<{
  id: "frontend" | "backend" | "database" | "tools";
  name: string;
  icon: LucideIcon;
}> = [
  { id: "frontend", name: "Frontend", icon: Palette },
  { id: "backend", name: "Backend", icon: Server },
  { id: "database", name: "Database", icon: Database },
  { id: "tools", name: "Tools", icon: Code },
];

export const skills: Record<
  string,
  Array<{ name: string; icon: React.FC<{ className?: string }> }>
> = {
  frontend: [
    { name: "HTML", icon: HtmlIcon },
    { name: "CSS", icon: CssIcon },
    { name: "Tailwind_CSS", icon: TailwindCssIcon },
    { name: "JavaScript", icon: JavaScriptIcon },
    { name: "TypeScript", icon: TypescriptIcon },
    { name: "React", icon: ReactIcon },
    { name: "Next.js", icon: NextJsIcon },
    { name: "Tenstack_Query", icon: TenstackIcon },
    { name: "Redux_Toolkit", icon: ReduxIcon },
    { name: "Zustand", icon: ZustandIcon },
    { name: "webRTC", icon: WebRtcIcon },
  ],
  backend: [
    { name: "Node.js", icon: NodeJsIcon },
    { name: "Express.js", icon: ExpressIcon },
    { name: "Nest.js", icon: NestJsIcon },
    { name: "Python", icon: PythonIcon },
    { name: "Golang", icon: GolangIcon },
    { name: "REST_APIs", icon: RestApiIcon },
    { name: "GraphQL", icon: GqlIcon },
    { name: "tRPC", icon: TrpcIcon },
    { name: "Socket.IO", icon: SocketIcon },
    { name: "Webhooks", icon: WebhookIcon },
  ],
  database: [
    { name: "PostgreSQL", icon: PostgreSQLIcon },
    { name: "MongoDB", icon: MongoDbIcon },
    { name: "Redis", icon: RedisIcon },
    { name: "Prisma", icon: PrismaIcon },
  ],
  tools: [
    { name: "Git", icon: GitIcon },
    { name: "Docker", icon: DockerIcon },
    { name: "VS_Code", icon: VsCodeIcon },
  ],
};

export const prodiosSkills = [
  { name: "TypeScript", icon: TypescriptIcon },
  { name: "Node.js", icon: NodeJsIcon },
  { name: "Nestjs", icon: NestJsIcon },
  { name: "React", icon: ReactIcon },
  { name: "Zustand", icon: ZustandIcon },
  { name: "Tailwind Css", icon: TailwindCssIcon },
  { name: "Mongodb", icon: MongoDbIcon },
  { name: "PostgreSQL", icon: PostgreSQLIcon },
  { name: "Prisma", icon: PrismaIcon },
  { name: "Redis", icon: RedisIcon },
  { name: "tRPC", icon: TrpcIcon },
  { name: "Turborepo", icon: TurborepoIcon },
  { name: "Docker", icon: DockerIcon },
];

export const taSkills = [
  { name: "HTML", icon: HtmlIcon },
  { name: "CSS", icon: CssIcon },
  { name: "Bootstrap", icon: CssIcon },
  { name: "JavaScript", icon: JavaScriptIcon },
  { name: "Node.js", icon: NodeJsIcon },
];

export const edvironSkills = [
  { name: "TypeScript", icon: TypescriptIcon },
  { name: "Node.js", icon: NodeJsIcon },
  { name: "Nestjs", icon: NestJsIcon },
  { name: "React", icon: ReactIcon },
  { name: "Tailwind Css", icon: TailwindCssIcon },
  { name: "GraphQl", icon: GqlIcon },
  { name: "Mongodb", icon: MongoDbIcon },
  { name: "Webhooks", icon: WebhookIcon },
  { name: "Payment Gateway", icon: Code },
];
