import { v4 as uuidv4 } from "uuid";

const tpUrl = "https://www.tutorialspoint.com/data_structures_algorithms";
const wikiUrl = "https://en.wikipedia.org/wiki";

export const dsContents = [
  {
    id: uuidv4(),
    title: "Data Structure",
    isLargerTitle: true,
    path: "/data_structure",
    url: `${tpUrl}/index.htm`,
    anchor: "data_structure",
    text: {
      p1: (
        <p>
          Data Structures are the programmatic way of storing data so that data
          can be used efficiently.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Array data structure",
    isLargerTitle: false,
    path: "/data_structure",
    url: `${wikiUrl}/Array_data_structure`,
    anchor: "Array_data_structure",
    text: {
      p1: (
        <p>
          In computer science, an array data structure, or simply an array, is a
          data structure consisting of a collection of elements (values or
          variables), each identified by at least one array index or key. An
          array is stored such that the position of each element can be computed
          from its index tuple by a mathematical formula. The simplest type of
          data structure is a linear array, also called one-dimensional array.
        </p>
      ),
    },
  },
];
