import React from "react";

export const FloatingCodeElements = () => {
  return (
    <div className="fixed inset-0 pointer-events-none">
      <div className="absolute top-20 left-10 text-orange-400/20 text-4xl font-mono animate-bounce delay-300">
        {"<>"}
      </div>
      <div className="absolute top-40 right-20 text-blue-400/20 text-3xl font-mono animate-bounce delay-700">
        {"{}"}
      </div>
      <div className="absolute bottom-40 left-20 text-green-400/20 text-5xl font-mono animate-bounce delay-1000">
        {"[]"}
      </div>
      <div className="absolute bottom-20 right-40 text-purple-400/20 text-2xl font-mono animate-bounce delay-1500">
        {"()"}
      </div>

      {/* <div className="absolute top-10 right-30 text-pink-400/20 text-3xl font-mono animate-pulse delay-500">
        .js
      </div>
      <div className="absolute bottom-60 right-30 text-yellow-400/20 text-4xl font-mono animate-pulse delay-800">
        .ts
      </div>
      <div className="absolute top-[40%] left-1/6 text-red-400/20 text-2xl font-mono animate-pulse delay-1200">
        .py
      </div>
      <div className="absolute bottom-10 left-1/6 text-cyan-400/20 text-3xl font-mono animate-pulse delay-1600">
        .go
      </div> */}
    </div>
  );
};
