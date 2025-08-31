"use client";
import React, { useState, useEffect } from "react";
import { edvironSkills, prodiosSkills, taSkills } from "@/constants/user";
import CodeBlock from "./code-block";
import EditorWrapper from "./editor-wraper";
import Terminal from "./terminal";

export const Experience: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);
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
              Experience
            </span>
          </h2>
          <p className="text-xl text-neutral-300 max-w-2xl mx-auto">
            The stack of tools and technologies that power my journey from
            concept to deployment.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-6 justify-items-center mx-auto">
          <div className="w-full flex flex-col gap-6">
            <EditorWrapper title="presentFulltime.js">
              <CodeBlock
                languageType="javascript"
                code={`const data = Present_Organization.getDetails("Prodios Labs")\nconsole.log(data);`}
              />
            </EditorWrapper>

            <Terminal title="souvik@coder:~experience">
              <CodeBlock
                languageType="bash"
                code={`experience> node presentFulltime.js\n`}
                showLineNumbers={false}
              ></CodeBlock>

              <div className="text-sm space-y-1 font-mono">
                <div className="text-green-400">
                  Software Developer at Prodios Labs ✅
                  (https://prodioslabs.com) 🌐
                </div>
                <div className="text-blue-400">
                  Duration: May 2025 - Present ⏳
                </div>
                <div className="text-yellow-400 flex flex-wrap gap-x-4 gap-y-1 items-center">
                  <span className="text-yellow-400">TechStack:</span>
                  {prodiosSkills.map(({ name, icon: Icon }, idx) => (
                    <div
                      key={idx}
                      className="flex  items-center gap-2 text-purple-400 hover:text-blue-400 transition"
                    >
                      <Icon className="size-4" />
                      <span>{name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Terminal>
          </div>
          <div className="w-full flex flex-col gap-6">
            <EditorWrapper title="presentPartTime.js">
              <CodeBlock
                languageType="javascript"
                code={`const data = PartTime_Organization.getDetails("Coding Ninjas")\nconsole.log(data);`}
              />
            </EditorWrapper>
            <Terminal title="souvik@coder:~experience">
              <CodeBlock
                languageType="bash"
                code={`experience> node presentPartTime.js\n`}
                showLineNumbers={false}
              ></CodeBlock>
              <div className="text-sm space-y-1 font-mono">
                <div className="text-green-400">
                  Fullstack TA at Sunrise Mentors Pvt Ltd ✅
                  (https://www.codingninjas.com) 🌐
                </div>
                <div className="text-blue-400">
                  Duration: Jan 2025 - Present ⏳
                </div>
                <div className="text-yellow-400 flex flex-wrap gap-x-4 gap-y-1 items-center">
                  <span className="text-yellow-400">TechStack:</span>
                  {taSkills.map(({ name, icon: Icon }, idx) => (
                    <div
                      key={idx}
                      className="flex  items-center gap-2 text-purple-400 hover:text-blue-400 transition"
                    >
                      <Icon className="size-4" />
                      <span>{name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Terminal>
          </div>
          <div className="w-full flex flex-col gap-6">
            <EditorWrapper title="previousInternship.js">
              <CodeBlock
                languageType="javascript"
                code={`const data = Previous_Organization.getDetails("Edviron")\nconsole.log(data);`}
              />
            </EditorWrapper>
            <Terminal title="souvik@coder:~experience">
              <CodeBlock
                languageType="bash"
                code={`experience> node previousInternship.js\n`}
                showLineNumbers={false}
              ></CodeBlock>

              <div className="text-sm space-y-1 font-mono">
                <div className="text-red-400">
                  Software Developer Intern at Edviron 🏁 {"\n"}
                  (https://edviron.com/) 🌐
                </div>

                <div className="text-orange-400">
                  Duration: Jan 2025 - Apr 2025 🗓️
                </div>

                <div className="text-gray-400 flex flex-wrap gap-x-4 gap-y-1 items-center">
                  <span className="text-gray-400">TechStack:</span>
                  {edvironSkills.map(({ name, icon: Icon }, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 text-pink-400 hover:text-red-300 transition"
                    >
                      <Icon className="size-4" />
                      <span>{name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Terminal>
          </div>

          <div className="w-full flex flex-col gap-6">
            <EditorWrapper title="previousFullTime.js">
              <CodeBlock
                languageType="javascript"
                code={`const data = Previous_Organization.getDetails("Coding Ninjas")\nconsole.log(data);`}
              />
            </EditorWrapper>
            <Terminal title="souvik@coder:~experience">
              <CodeBlock
                languageType="bash"
                code={`experience> node previousFullTime.js\n`}
                showLineNumbers={false}
              ></CodeBlock>

              <div className="text-sm space-y-1 font-mono">
                <div className="text-red-400">
                  Fullstack TA at Sunrise Mentors Pvt Ltd 🏁{"\n"}
                  (https://www.codingninjas.com) 🌐
                </div>

                {/* Duration line */}
                <div className="text-orange-400">
                  Duration: Jan 2024 - Dec 2024 🗓️
                </div>

                <div className="text-gray-400 flex flex-wrap gap-x-4 gap-y-1 items-center">
                  <span className="text-gray-400">TechStack:</span>
                  {taSkills.map(({ name, icon: Icon }, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 text-pink-400 hover:text-red-300 transition"
                    >
                      <Icon className="size-4" />
                      <span>{name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Terminal>
          </div>
        </div>
      </div>
    </section>
  );
};
