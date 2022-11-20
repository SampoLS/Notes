import { v4 as uuidv4 } from "uuid";

// Official URL.
const tsUrl = "https://www.typescriptlang.org";
// JavatPoint URL.
const javatpointUrl = "https://www.javatpoint.com";

export const typeScriptContents = [
  {
    id: uuidv4(),
    title: "TypeScript",
    isLargerTitle: true,
    path: "/typescript",
    url: `${tsUrl}`,
    anchor: "typescript",
    text: {
      p1: (
        <p>
          TypeScript is a programming language developed and maintained by
          Microsoft. It is a strict syntactical superset of JavaScript and adds
          optional static typing to the language. Types are used to determine
          both reading and writing behavior.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Type Assertion",
    isLargerTitle: false,
    path: "/typescript",
    url: `${javatpointUrl}/typescript-type-assertion`,
    anchor: "Type_Assertion",
    text: {
      p1: (
        <>
          <p>
            In TypeScript, type assertion is a mechanism which tells the
            compiler about the type of a variable. When TypeScript determines
            that the assignment is invalid, then we have an option to override
            the type using a type assertion. If we use a type assertion, the
            assignment is always valid, so we need to be sure that we are right.
            Otherwise, our program may not work correctly. Type assertion is
            explicitly telling the compiler that we want to treat the entity as
            a different type.
          </p>
          <p>
            Two ways to show type assertion: 1.Use bracket "&lt;&gt;". 2.Use
            "as" keyword.
          </p>
        </>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Array",
    isLargerTitle: false,
    path: "/typescript",
    url: `${javatpointUrl}/typescript-arrays`,
    anchor: "array",
    text: {
      p1: (
        <>
          <p>
            An array is a homogenous collection of similar type of elements
            which have a contiguous memory location. An array is a user-defined
            data type.
          </p>
          <p>
            Array declaration: 1. Using square bracket []. 2. Using a generic
            array type.
          </p>
        </>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Tuples",
    isLargerTitle: false,
    path: "/typescript",
    url: `${javatpointUrl}/typescript-tuples`,
    anchor: "tuples",
    text: {
      p1: (
        <p>
          We know that an array holds multiple values of the same data type. But
          sometimes, we may need to store a collection of values of different
          data types in a single variable. Arrays will not provide this feature,
          but TypeScript has a data type called Tuple to achieve this purpose. A
          Tuple is an array which store multiple fields belong to different data
          types. It is similar to the structures in the C programming language.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Union",
    isLargerTitle: false,
    path: "/typescript",
    url: `${javatpointUrl}/typescript-union`,
    anchor: "union",
    text: {
      p1: (
        <p>
          In TypeScript, we can define a variable which can have multiple types
          of values. In other words, TypeScript can combine one or two different
          types of data (i.e., number, string, etc.) in a single type, which is
          called a union type. Union types are a powerful way to express a
          variable with multiple types. Two or more data types can be combined
          by using the pipe ('|') symbol between the types.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Enums",
    isLargerTitle: false,
    path: "/typescript",
    url: `${javatpointUrl}/typescript-enums`,
    anchor: "Enums",
    text: {
      p1: (
        <>
          <p>
            Enums stands for Enumerations. Enums are a new data type supported
            in TypeScript. It is used to define the set of named constants,
            i.e., a collection of related values. TypeScript supports both
            numeric and string-based enums. We can define the enums by using the
            enum keyword.
          </p>
          <p>
            There are three types of Enums in TypeScript. These are: 1. Numeric
            Enums. 2. String Enums. 3. Heterogeneous Enums.
          </p>
        </>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Access Modifiers",
    isLargerTitle: false,
    path: "/typescript",
    url: `${javatpointUrl}/typescript-access-modifiers`,
    anchor: "Access_Modifiers",
    text: {
      p1: (
        <p>
          Like other programming languages, Typescript allows us to use access
          modifiers at the class level. It gives direct access control to the
          class member. These class members are functions and properties. We can
          use class members inside its own class, anywhere outside the class, or
          within its child or derived class.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Function Overloading",
    isLargerTitle: false,
    path: "/typescript",
    url: `${javatpointUrl}/typescript-function-overloading`,
    anchor: "Function_Overloading",
    text: {
      p1: (
        <p>
          Function overloading is a mechanism or ability to create multiple
          methods with the same name but different parameter types and return
          type. However, it can have the same number of parameters. Function
          overloading is also known as method overloading.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Interface",
    isLargerTitle: false,
    path: "/typescript",
    url: `${javatpointUrl}/typescript-interface`,
    anchor: "Interface",
    text: {
      p1: (
        <p>
          An Interface is a structure which acts as a contract in our
          application. It defines the syntax for classes to follow, means a
          class which implements an interface is bound to implement all its
          members. We cannot instantiate the interface, but it can be referenced
          by the class object that implements it. The TypeScript compiler uses
          interface for type-checking (also known as "duck typing" or
          "structural subtyping") whether the object has a specific structure or
          not.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Generics",
    isLargerTitle: false,
    path: "/typescript",
    url: `${javatpointUrl}/typescript-generics`,
    anchor: "Generics",
    text: {
      p1: (
        <p>
          TypeScript Generics is a tool which provides a way to create reusable
          components. It creates a component that can work with a variety of
          data types rather than a single data type. It allows users to consume
          these components and use their own types. Generics ensures that the
          program is flexible as well as scalable in the long term.
        </p>
      ),
    },
  },
];
