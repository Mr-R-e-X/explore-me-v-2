"use client";
import React, { useState, useEffect } from "react";
import { userData } from "@/constants/user";
import { Code, GithubIcon, Heart, LinkedinIcon, Zap } from "lucide-react";
import CodeBlock from "./code-block";
import EditorWrapper from "./editor-wraper";
import { XIcon } from "./svg-icons";

export const About: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);
  return (
    <section className="py-20">
      <div
        className={
          "transition-all duration-1000 delay-300 " +
          (isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10")
        }
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About{" "}
            <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <p className="text-lg text-neutral-300 leading-relaxed">
              {userData.bio}
            </p>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center space-x-2 bg-neutral-900/50 px-4 py-2 rounded-lg">
                <Code className="w-5 h-5 text-orange-400" />
                <span className="text-neutral-300">Code Enthusiast</span>
              </div>
              <div className="flex items-center space-x-2 bg-neutral-900/50 px-4 py-2 rounded-lg">
                <Heart className="w-5 h-5 text-red-400" />
                <span className="text-neutral-300">Fullstack TA</span>
              </div>
              <div className="flex items-center space-x-2 bg-neutral-900/50 px-4 py-2 rounded-lg">
                <Zap className="w-5 h-5 text-yellow-400" />
                <span className="text-neutral-300">Problem Solver</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 pt-6">
              <a
                href={userData.social.github}
                className="w-12 h-12 bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 hover:border-orange-500 rounded-xl flex items-center justify-center text-neutral-400 hover:text-orange-400 transition-all duration-300 hover:scale-110"
              >
                <GithubIcon className="w-6 h-6" />
              </a>
              <a
                href={userData.social.linkedin}
                className="w-12 h-12 bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 hover:border-blue-500 rounded-xl flex items-center justify-center text-neutral-400 hover:text-blue-400 transition-all duration-300 hover:scale-110"
              >
                <LinkedinIcon className="w-6 h-6" />
              </a>
              <a
                href={userData.social.twitter}
                className="w-12 h-12 bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 hover:border-sky-500 rounded-xl flex items-center justify-center text-neutral-400 hover:text-sky-400 transition-all duration-300 hover:scale-110"
              >
                <XIcon className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div className="relative mx-auto">
            <EditorWrapper title="developer.js">
              <CodeBlock
                code={`const developer = new SoftwareDev({\n    name: ${userData.name},\n    title: ${userData.title}\n    location: ${userData.location},\n    available: ${userData.availableForHire},\n    skills: ['Node.js', 'Typescript', 'Python', 'Golang'],\n    passion: 'Building amazing things'\n})`}
                languageType="javascript"
              />
            </EditorWrapper>
          </div>
        </div>
      </div>
    </section>
  );
};
