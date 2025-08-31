"use client";
import { userData } from "@/constants/user";
import { CheckCircle, Mail, Send } from "lucide-react";
import React, { useEffect, useState } from "react";

export const Contact: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);
  return (
    <section className="py-20">
      <div
        className={
          "transition-all duration-1000 delay-1100 " +
          (isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10")
        }
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let&apos;s{" "}
            <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
              Work Together
            </span>
          </h2>
          <p className="text-xl text-neutral-300 max-w-2xl mx-auto mb-8">
            Ready to bring your ideas to life? Let&apos;s discuss your next
            project and create something amazing together.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/30 rounded-3xl p-12 text-center">
            <div className="flex items-center justify-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center">
                <Mail className="w-8 h-8 text-white" />
              </div>
            </div>

            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Start a Project?
            </h3>
            <p className="text-lg text-neutral-300 mb-8 max-w-2xl mx-auto">
              I&apos;m currently{" "}
              {userData.availableForHire ? "available" : "not available"} for
              new projects. Let&apos;s discuss how we can work together to
              achieve your goals.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
              <a
                href={"mailto:" + userData.email}
                className="group bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-2xl hover:shadow-orange-500/25 hover:scale-105 flex items-center space-x-3"
              >
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                <span>Send Message</span>
              </a>
            </div>

            <div className="flex justify-center items-center space-x-8 text-neutral-400">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>Quick Response</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>Free Consultation</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>Flexible Rates</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
