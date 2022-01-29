import { v4 as uuidv4 } from "uuid";

const tpUrl = "https://www.tutorialspoint.com/data_structures_algorithms";
const wikiUrl = "https://en.wikipedia.org/wiki";

export const algoContents = [
  {
    id: uuidv4(),
    title: "Algorithms",
    isLargerTitle: true,
    path: "/algorithms",
    url: `${tpUrl}/index.htm`,
    anchor: "algorithms",
    text: {
      p1: (
        <p>
          Algorithm is a step-by-step procedure, which defines a set of
          instructions to be executed in a certain order to get the desired
          output. Algorithms tell the programmers how to code the program.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Divide-and-conquer algorithm",
    isLargerTitle: false,
    path: "/data_structure",
    url: `${wikiUrl}//Divide-and-conquer_algorithm`,
    anchor: "Divide-and-conquer_algorithm",
    text: {
      p1: (
        <p>
          In computer science, divide and conquer is an algorithm design
          paradigm. A divide-and-conquer algorithm recursively breaks down a
          problem into two or more sub-problems of the same or related type,
          until these become simple enough to be solved directly. The solutions
          to the sub-problems are then combined to give a solution to the
          original problem.
        </p>
      ),
    },
  },
];
