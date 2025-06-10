import { CodeBlock, dracula } from "react-code-blocks";

interface ApiCodeBlockProps {
  code: string;
  language: string;
}

export default function ApiCodeBlock({ code, language }: ApiCodeBlockProps) {
  return (
    <CodeBlock
      text={code}
      language={language}
      showLineNumbers={false}
      theme={dracula}
      customStyle={{ backgroundColor: "#282a36", borderRadius: "8px" }}
    />
  );
}