"use client";
import { useState, useEffect } from "react";
import { skillCategories, skills } from "@/constants/user";
import CodeBlock from "./code-block";
import Terminal from "./terminal";

export const Skill: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);
  const [activeSkillCategory, setActiveSkillCategory] = useState<
    "frontend" | "backend" | "database" | "tools"
  >("frontend");

  return (
    <section className="py-20">
      <div
        className={
          "transition-all duration-1000 delay-500 " +
          (isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10")
        }
      >
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            My{" "}
            <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
          <p className="text-xl text-neutral-300 mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {skillCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveSkillCategory(category.id)}
              className={
                "flex items-center space-x-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 " +
                (activeSkillCategory === category.id
                  ? "bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg"
                  : "bg-neutral-900 border border-neutral-700 text-neutral-400 hover:border-orange-500 hover:text-orange-400")
              }
            >
              <category.icon className="w-5 h-5" />
              <span>{category.name}</span>
            </button>
          ))}
        </div>

        <div className="mb-12 mx-auto max-w-3xl">
          <Terminal title="souvik@coder:~skills" collapsible={false}>
            <CodeBlock
              languageType="bash"
              code={`${activeSkillCategory}> ls\n`}
              showLineNumbers={false}
            />
            <div className="flex flex-wrap gap-x-4 gap-y-2 pb-2 bg-transparent">
              {skills[activeSkillCategory].map(({ name, icon: Icon }, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 text-gray-100 hover:text-blue-400 transition"
                >
                  <Icon className="size-4" />
                  <span>{name}</span>
                </div>
              ))}
            </div>
          </Terminal>
        </div>
      </div>
    </section>
  );
};
