"use client";
import React, { useState, useEffect } from "react";
import { userData } from "@/constants/user";
import { Download, Mail, MapPin, Phone, Send } from "lucide-react";
import { Typewriter } from "react-simple-typewriter";
import { Avatar } from "./avatar";
import CountUp from "react-countup";

export const Hero: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);
  return (
    <section className="min-h-screen relative flex items-center justify-center py-20">
      <div
        className={
          "text-center transition-all duration-1000 " +
          (isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10")
        }
      >
        <Avatar
          url={userData.avatar}
          name={userData.name}
          available={userData.availableForHire}
          availableText={userData.availabilityText}
        />
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 leading-tight">
          {userData.name}
        </h1>
        <h2 className="text-2xl md:text-3xl font-bold mb-6">
          <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
            <Typewriter
              words={[userData.title, userData.subTitle]}
              loop={0}
              cursor
              cursorStyle="|"
              cursorColor="#ffffff"
              typeSpeed={100}
              deleteSpeed={60}
              delaySpeed={2000}
            />
          </span>
        </h2>

        <p className="text-xl text-neutral-300 max-w-2xl mx-auto mb-8 leading-relaxed">
          {userData.tagline}
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-black text-orange-400 mb-1">
              <CountUp
                start={0.0}
                end={userData.stats.experience}
                decimals={1}
                startOnMount
              />
              +
            </div>
            <div className="text-neutral-400 text-sm">Years Experience ⏳</div>
          </div>

          <div className="text-center">
            <div className="text-3xl font-black text-blue-400 mb-1">
              <CountUp start={0} end={userData.stats.projects} startOnMount />+
            </div>
            <div className="text-neutral-400 text-sm">
              Projects Completed 🚀
            </div>
          </div>

          <div className="text-center">
            <div className="text-3xl font-black text-green-400 mb-1">
              <CountUp start={0} end={userData.stats.students} startOnMount />+
            </div>
            <div className="text-neutral-400 text-sm">Students Mentored 🎓</div>
          </div>

          <div className="text-center">
            <div className="text-3xl font-black text-purple-400 mb-1">
              <CountUp start={0} end={userData.stats.bugsFixed} startOnMount />+
            </div>
            <div className="text-neutral-400 text-sm">Bugs Fixed 🐛🔨</div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-6">
          <a
            href={"mailto:souvikhazra151@gmail.com"}
            className="group bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-2xl hover:shadow-orange-500/25 hover:scale-105 flex items-center space-x-3"
          >
            <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            <span>Get In Touch</span>
          </a>

          <a
            href={userData.resumeUrl}
            download
            className="group border-2 border-neutral-600 hover:border-orange-500 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 flex items-center space-x-3 hover:bg-gradient-to-r hover:from-orange-500/10 hover:to-red-500/10"
          >
            <Download className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
            <span>Download Resume</span>
          </a>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-8 text-neutral-400">
          <div className="flex items-center space-x-2">
            <MapPin className="w-4 h-4" />
            <span>{userData.location}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Mail className="w-4 h-4" />
            <span>{userData.email}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Phone className="w-4 h-4" />
            <span>{userData.phone}</span>
          </div>
        </div>
      </div>
    </section>
  );
};
