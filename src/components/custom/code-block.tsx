import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

type CodeBlockProps = {
  code: string;
  languageType?: "javascript" | "typescript" | "bash";
  showLineNumbers?: boolean;
};

const CodeBlock: React.FC<CodeBlockProps> = ({
  code,
  languageType = "typescript",
  showLineNumbers = true,
}) => {
  return (
    <SyntaxHighlighter
      language={languageType}
      style={dracula}
      showLineNumbers={showLineNumbers}
      customStyle={{
        background: "transparent",
        padding: 0,
        margin: 0,
        whiteSpace: "pre-wrap",
        wordBreak: "break-word",
        overflowX: "hidden",
      }}
      codeTagProps={{
        style: {
          background: "transparent",
          whiteSpace: "pre-wrap",
          wordBreak: "break-word",
        },
      }}
    >
      {code}
    </SyntaxHighlighter>
  );
};

export default CodeBlock;
