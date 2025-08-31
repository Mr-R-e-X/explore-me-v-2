"use client";
import { ChevronDown, ChevronRight } from "lucide-react";
import React, { ReactNode, useState } from "react";

type TerminalProps = {
  title?: string;
  collapsible?: boolean;
  defaultCollapsed?: boolean;
  children?: ReactNode;
};

const Terminal: React.FC<TerminalProps> = ({
  title = "bash",
  collapsible = true,
  defaultCollapsed = false,
  children,
}) => {
  const [collapsed, setCollapsed] = useState(defaultCollapsed);
  return (
    <div className="w-full max-w-3xl rounded-lg shadow-lg overflow-hidden font-mono text-sm bg-gray-900">
      <div className="flex items-center px-3 py-2 bg-gray-800 cursor-pointer select-none">
        <span className="size-3 mr-2 rounded-full bg-red-500"></span>
        <span className="size-3 mr-2 rounded-full bg-yellow-500"></span>
        <span className="size-3 mr-2 rounded-full bg-green-500"></span>
        <span className="ml-2 text-gray-300">{title}</span>

        {collapsible && (
          <button
            className="ml-auto text-gray-400 hover:text-white transition"
            onClick={() => setCollapsed((prev) => !prev)}
          >
            {collapsed ? (
              <ChevronRight className="size-4" />
            ) : (
              <ChevronDown className="size-4" />
            )}
          </button>
        )}
      </div>

      {!collapsed && (
        <div className="p-4 bg-transparent leading-relaxed whitespace-pre-wrap">
          {children}
        </div>
      )}
    </div>
  );
};

export default Terminal;
