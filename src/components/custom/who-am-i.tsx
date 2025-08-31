import React from "react";
import Terminal from "./terminal";

export const WhoAmI = () => {
  return (
    <Terminal title="souvik@coder:~$ whoami">
      <p>
        <span className="text-blue-400">{">_"} Terminal - Souvik Hazra</span>
      </p>
    </Terminal>
  );
};
