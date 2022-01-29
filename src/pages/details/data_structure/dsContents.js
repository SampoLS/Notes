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
  {
    id: uuidv4(),
    title: "Linked list",
    isLargerTitle: false,
    path: "/data_structure",
    url: `${wikiUrl}/Linked_list`,
    anchor: "Linked_list",
    text: {
      p1: (
        <p>
          In computer science, a linked list is a linear collection of data
          elements whose order is not given by their physical placement in
          memory. Instead, each element points to the next. It is a data
          structure consisting of a collection of nodes which together represent
          a sequence. In its most basic form, each node contains: data, and a
          reference (in other words, a link) to the next node in the sequence.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Stack (abstract data type)",
    isLargerTitle: false,
    path: "/data_structure",
    url: `${wikiUrl}/Stack_(abstract_data_type)`,
    anchor: "Stack_(abstract_data_type)",
    text: {
      p1: (
        <p>
          In computer science, a stack is an abstract data type that serves as a
          collection of elements, with two main principal operations: Push,
          which adds an element to the collection, and Pop, which removes the
          most recently added element that was not yet removed.
        </p>
      ),
    },
  },
];
