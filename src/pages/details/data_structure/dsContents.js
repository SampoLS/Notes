import { v4 as uuidv4 } from "uuid";

const url = "https://www.tutorialspoint.com/data_structures_algorithms";

export const dsContents = [
  {
    id: uuidv4(),
    title: "Data Structure",
    isLargerTitle: true,
    path: "/data_structure",
    url: `${url}/index.htm`,
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
    title: "Foundation Terms",
    isLargerTitle: false,
    path: "/data_structure",
    url: `${url}/data_structure_overview.htm`,
    anchor: "foundation_terms",
    text: {
      p1: (
        <ol className="list">
          <li>
            <strong>Interface</strong> - Each data structure has an interface.
            Interface represents the set of operations that a data structure
            supports. An interface only provides the list of supported
            operations, type of parameters they can accept and return type of
            these operations.
          </li>
          <li>
            <strong>Implementation</strong> - Implementation provides the
            internal representation of a data structure. Implementation also
            provides the definition of the algorithms used in the operations of
            the data structure.
          </li>
        </ol>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Characteristics of a Data Structure",
    isLargerTitle: false,
    path: "/data_structure",
    url: `${url}/data_structure_overview.htm`,
    anchor: "Characteristics_of_a_Data_Structure",
    text: {
      p1: (
        <ol className="list">
          <li>
            <strong>Correctness</strong> - Data structure implementation should
            implement its interface correctly.
          </li>
          <li>
            <strong>Time Complexity</strong> - Running time or the execution
            time of operations of data structure must be as small as possible.
          </li>
          <li>
            <strong>Space Complexity</strong> - Memory usage of a data structure
            operation should be as little as possible.
          </li>
        </ol>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Need for Data Structure",
    isLargerTitle: false,
    path: "/data_structure",
    url: `${url}/data_structure_overview.htm`,
    anchor: "Need_for_Data_Structure",
    text: {
      p1: (
        <>
          <p>
            As applications are getting complex and data rich, there are three
            common problems that applications face now-a-days.
          </p>
          <ol className="list">
            <li>
              <strong>Data Search</strong> - Consider an inventory of 1
              million(106) items of a store. If the application is to search an
              item, it has to search an item in 1 million(106) items every time
              slowing down the search. As data grows, search will become slower.
            </li>
            <li>
              <strong>Processor speed</strong> - Processor speed although being
              very high, falls limited if the data grows to billion records.
            </li>
            <li>
              <strong>Multiple requests</strong> - As thousands of users can
              search data simultaneously on a web server, even the fast server
              fails while searching the data.
            </li>
          </ol>
        </>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Execution Time Cases",
    isLargerTitle: false,
    path: "/data_structure",
    url: `${url}/data_structure_overview.htm`,
    anchor: "Execution_Time_Cases",
    text: {
      p1: (
        <>
          <p>
            There are three cases which are usually used to compare various data
            structure's execution time in a relative manner.
          </p>
          <ol className="list">
            <li>
              <strong>Worst Case</strong> - This is the scenario where a
              particular data structure operation takes maximum time it can
              take. If an operation's worst case time is ƒ(n) then this
              operation will not take more than ƒ(n) time where ƒ(n) represents
              function of n.
            </li>
            <li>
              <strong>Average Case</strong> - This is the scenario depicting the
              average execution time of an operation of a data structure. If an
              operation takes ƒ(n) time in execution, then m operations will
              take mƒ(n) time.
            </li>
            <li>
              <strong>Best Case</strong> - This is the scenario depicting the
              least possible execution time of an operation of a data structure.
              If an operation takes ƒ(n) time in execution, then the actual
              operation may take time as the random number which would be
              maximum as ƒ(n).
            </li>
          </ol>
        </>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Basic Terminology",
    isLargerTitle: false,
    path: "/data_structure",
    url: `${url}/data_structure_overview.htm`,
    anchor: "Basic_Terminology",
    text: {
      p1: (
        <ol className="list">
          <li>
            <strong>Data</strong> - Data are values or set of values.
          </li>
          <li>
            <strong>Data Item</strong> - Data item refers to single unit of
            values.
          </li>
          <li>
            <strong>Group Items</strong> - Data items that are divided into sub
            items are called as Group Items.
          </li>
          <li>
            <strong>Elementary Items</strong> - Data items that cannot be
            divided are called as Elementary Items.
          </li>
          <li>
            <strong>Attribute and Entity</strong> - An entity is that which
            contains certain attributes or properties, which may be assigned
            values.
          </li>
          <li>
            <strong>Entity Set</strong> - Entities of similar attributes form an
            entity set.
          </li>
          <li>
            <strong>Field</strong> - Field is a single elementary unit of
            information representing an attribute of an entity.
          </li>
          <li>
            <strong>Record</strong> - Record is a collection of field values of
            a given entity.
          </li>
          <li>
            <strong>File</strong> - File is a collection of records of the
            entities in a given entity set.
          </li>
        </ol>
      ),
    },
  },
];
