import { v4 as uuidv4 } from "uuid";

const url = "https://www.tutorialspoint.com/data_structures_algorithms";

export const algoContents = [
  {
    id: uuidv4(),
    title: "Algorithms",
    isLargerTitle: true,
    path: "/algorithms",
    url: `${url}/index.htm`,
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
    title: "Categories Of Algorithms",
    isLargerTitle: false,
    path: "/algorithms",
    url: `${url}/algorithms_basics.htm`,
    anchor: "categories_of_algorithms",
    text: {
      p1: (
        <ol className="list">
          <li>
            <strong>Search</strong> - Algorithm to search an item in a data
            structure.
          </li>
          <li>
            <strong>Sort</strong> - Algorithm to sort items in a certain order.
          </li>
          <li>
            <strong>Insert</strong> - Algorithm to insert item in a data
            structure.
          </li>
          <li>
            <strong>Update</strong> - Algorithm to update an existing item in a
            data structure.
          </li>
          <li>
            <strong>Delete</strong> - Algorithm to delete an existing item from
            a data structure.
          </li>
        </ol>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Characteristics of an Algorithm",
    isLargerTitle: false,
    path: "/algorithms",
    url: `${url}/index.htm`,
    anchor: "Characteristics_of_an_Algorithm",
    text: {
      p1: (
        <>
          <p>
            Not all procedures can be called an algorithm. An algorithm should
            have the following characteristics -
          </p>
          <ol className="list">
            <li>
              <strong>Unambiguous</strong> - Algorithm should be clear and
              unambiguous. Each of its steps (or phases), and their
              inputs/outputs should be clear and must lead to only one meaning.
            </li>
            <li>
              <strong>Input</strong> - An algorithm should have 0 or more
              well-defined inputs.
            </li>
            <li>
              <strong>Output</strong> - An algorithm should have 1 or more
              well-defined outputs, and should match the desired output.
            </li>
            <li>
              <strong>Finiteness</strong> - Algorithms must terminate after a
              finite number of steps.
            </li>
            <li>
              <strong>Feasibility</strong> - Should be feasible with the
              available resources.
            </li>
            <li>
              <strong>Independent</strong> - An algorithm should have
              step-by-step directions, which should be independent of any
              programming code.
            </li>
          </ol>
        </>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "How to Write an Algorithm?",
    isLargerTitle: false,
    path: "/algorithms",
    url: `${url}/index.htm`,
    anchor: "How_to_Write_an_Algorithm?",
    text: {
      p1: (
        <p>
          There are no well-defined standards for writing algorithms. Rather, it
          is problem and resource dependent. Algorithms are never written to
          support a particular programming code. As we know that all programming
          languages share basic code constructs like loops (do, for, while),
          flow-control (if-else), etc. These common constructs can be used to
          write an algorithm. We write algorithms in a step-by-step manner, but
          it is not always the case. Algorithm writing is a process and is
          executed after the problem domain is well-defined. That is, we should
          know the problem domain, for which we are designing a solution.
        </p>
      ),
    },
  },
];
