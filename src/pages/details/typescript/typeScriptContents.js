import { v4 as uuidv4 } from "uuid";

export const typeScriptContents = [
  {
    id: uuidv4(),
    title: "TypeScript",
    isLargerTitle: true,
    path: "/typescript",
    url: "https://www.typescriptlang.org",
    anchor: "typescript",
    text: {
      p1: (
        <p>
          TypeScript is a programming language developed and maintained by
          Microsoft. It is a strict syntactical superset of JavaScript and adds
          optional static typing to the language.
        </p>
      ),
    },
  },
];
