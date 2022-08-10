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
    url: `${wikiUrl}/Divide-and-conquer_algorithm`,
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
  {
    id: uuidv4(),
    title: "Greedy algorithm",
    isLargerTitle: false,
    path: "/data_structure",
    url: `${wikiUrl}/Greedy_algorithm`,
    anchor: "Greedy_algorithm",
    text: {
      p1: (
        <p>
          A greedy algorithm is any algorithm that follows the problem-solving
          heuristic of making the locally optimal choice at each stage. In many
          problems, a greedy strategy does not produce an optimal solution, but
          a greedy heuristic can yield locally optimal solutions that
          approximate a globally optimal solution in a reasonable amount of
          time.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Sorting algorithm",
    isLargerTitle: false,
    path: "/data_structure",
    url: `${wikiUrl}/Sorting_algorithm`,
    anchor: "Sorting_algorithm",
    text: {
      p1: (
        <p>
          In computer science, a sorting algorithm is an algorithm that puts
          elements of a list into an order. The most frequently used orders are
          numerical order and lexicographical order, and either ascending or
          descending. Efficient sorting is important for optimizing the
          efficiency of other algorithms (such as search and merge algorithms)
          that require input data to be in sorted lists. Sorting is also often
          useful for canonicalizing data and for producing human-readable
          output.
        </p>
      ),
    },
  },
];
