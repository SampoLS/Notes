import { v4 as uuidv4 } from "uuid";

const url = "https://git-scm.com/";

export const gitContents = [
  {
    id: uuidv4(),
    title: "Git",
    isLargerTitle: true,
    path: "/git",
    url: `${url}`,
    anchor: "git",
    text: {
      p1: (
        <p>
          Git is a free and open source distributed version control system
          designed to handle everything from small to very large projects with
          speed and efficiency.Git is a version control system. Git helps you
          keep track of code changes. Git is used to collaborate on code.
        </p>
      ),
    },
  },
];
