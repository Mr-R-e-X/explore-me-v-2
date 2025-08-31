import { FileCodeIcon } from "lucide-react";
import React, { ReactNode } from "react";

type EditorWrapperProps = {
  title?: string;
  children?: ReactNode;
};

const EditorWrapper: React.FC<EditorWrapperProps> = ({
  title = "index.tsx",
  children,
}) => {
  return (
    <div className="w-full max-w-2xl rounded-lg shadow-lg overflow-hidden font-mono text-sm bg-gray-900">
      <div className="flex items-center px-3 py-2 bg-gray-800 cursor-pointer select-none">
        <FileCodeIcon className="size-4 text-blue-500" />
        <span className="ml-3 text-gray-300">{title}</span>
      </div>

      <div className="px-4 py-2 bg-transparent leading-relaxed whitespace-pre-wrap">
        {children}
      </div>
    </div>
  );
};

export default EditorWrapper;
