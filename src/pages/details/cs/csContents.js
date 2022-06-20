import { v4 as uuidv4 } from "uuid";
import addSubpath from "../../../utils/addSubpath";
import { sortContentsByOrder } from "../../../utils/sortContentsByOrder";

const wikiUrl = "https://en.wikipedia.org/wiki";

// Common terms in computer sicence.
export const csContents = [
  {
    id: uuidv4(),
    title: "Computer Science terms",
    isLargerTitle: true,
    path: "/cs",
    url: "",
    anchor: "computer_science_terms",
    text: {
      p1: (
        <p>
          This topic is about the common terms in computer science or computer
          programming languages. Want to know more? Please{" "}
          <a href={`${wikiUrl}/Category:Computers`} target="blank">
            CLICK HERE.
          </a>
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Single-responsibility principle",
    isLargerTitle: false,
    path: "/cs",
    url: `${wikiUrl}/Single-responsibility_principle`,
    anchor: "single_responsibility_principle",
    text: {
      p1: (
        <p>
          The single-responsibility principle (SRP) is a computer-programming
          principle that states that every module, class or function in a
          computer program should have responsibility over a single part of that
          program's functionality, and it should encapsulate that part. All of
          that module, class or function's services should be narrowly aligned
          with that responsibility.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Don't repeat yourself",
    isLargerTitle: false,
    path: "/cs",
    url: `${wikiUrl}/Don%27t_repeat_yourself`,
    anchor: "dont_repeat_yourself",
    text: {
      p1: (
        <p>
          "Don't repeat yourself" (DRY, or sometimes "do not repeat yourself")
          is a principle of software development aimed at reducing repetition of
          software patterns, replacing it with abstractions or using data
          normalization to avoid redundancy. The DRY principle is stated as
          "Every piece of knowledge must have a single, unambiguous,
          authoritative representation within a system". When the DRY principle
          is applied successfully, a modification of any single element of a
          system does not require a change in other logically unrelated
          elements. Additionally, elements that are logically related all change
          predictably and uniformly, and are thus kept in sync.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Memoization",
    isLargerTitle: false,
    path: "/cs",
    url: `${wikiUrl}/Memoization`,
    anchor: "memoization",
    text: {
      p1: (
        <p>
          In computing, memoization or memoisation is an optimization technique
          used primarily to speed up computer programs by storing the results of
          expensive function calls and returning the cached result when the same
          inputs occur again. Memoization has also been used in other contexts
          (and for purposes other than speed gains), such as in simple mutually
          recursive descent parsing. Although related to caching, memoization
          refers to a specific case of this optimization, distinguishing it from
          forms of caching such as buffering or page replacement. In the context
          of some logic programming languages, memoization is also known as
          tabling.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Computer Programming",
    isLargerTitle: false,
    path: "/cs",
    url: `${wikiUrl}/Computer_programming`,
    anchor: "computer_programming",
    text: {
      p1: (
        <p>
          Computer programming is the process of designing and building an
          executable computer program to accomplish a specific computing result
          or to perform a particular task.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Variable",
    isLargerTitle: false,
    path: "/cs",
    url: `${wikiUrl}/Variable_(computer_science)`,
    anchor: "variable",
    text: {
      p1: (
        <p>
          In computer programming, a variable or scalar is an abstract storage
          location paired with an associated symbolic name, which contains some
          known or unknown quantity of information referred to as a value; or in
          simpler terms, a variable is a container for a particular set of bits
          or type of data (like integer, float, String etc...).
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Subroutine",
    isLargerTitle: false,
    path: "/cs",
    url: `${wikiUrl}/Subroutine`,
    anchor: "subroutine",
    text: {
      p1: (
        <p>
          In computer programming, a subroutine is a sequence of program
          instructions that performs a specific task, packaged as a unit. This
          unit can then be used in programs wherever that particular task should
          be performed.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Identifier",
    isLargerTitle: false,
    path: "/cs",
    url: `${wikiUrl}/Identifier_(computer_languages)`,
    anchor: "identifier",
    text: {
      p1: (
        <p>
          In computer programming languages, an identifier is lexical token
          (also called symbol, but not to be confused with the symbol primitive
          data type) that names the language's entities. Some of the kinds of
          entities an identifier might denote include variables, data types,
          labels, subroutines, and modules.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Name binding",
    isLargerTitle: false,
    path: "/cs",
    url: `${wikiUrl}/Name_binding`,
    anchor: "name_binding",
    text: {
      p1: (
        <p>
          In programming languages, name binding is the association of entities
          (data and/or code) with identifiers. An identifier bound to an object
          is said to reference that object. Machine languages have no built-in
          notion of identifiers, but name-object bindings as a service and
          notation for the programmer is implemented by programming languages.
          Binding is intimately connected with scoping, as scope determines
          which names bind to which objects - at which locations in the program
          code (lexically) and in which one of the possible execution paths
          (temporally).
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Reference",
    isLargerTitle: false,
    path: "/cs",
    url: `${wikiUrl}/Reference_(computer_science)`,
    anchor: "reference",
    text: {
      p1: (
        <p>
          In computer science, a reference is a value that enables a program to
          indirectly access a particular data, such as a variable's value or a
          record, in the computer's memory or in some other storage device. The
          reference is said to refer to the datum, and accessing the datum is
          called dereferencing the reference.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Statement",
    isLargerTitle: false,
    path: "/cs",
    url: `${wikiUrl}/Statement_(computer_science)`,
    anchor: "statement",
    text: {
      p1: (
        <p>
          In computer programming, a statement is a syntactic unit of an
          imperative programming language that expresses some action to be
          carried out. A program written in such a language is formed by a
          sequence of one or more statements. A statement may have internal
          components (e.g., expressions).
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Expression",
    isLargerTitle: false,
    path: "/cs",
    url: `${wikiUrl}/Expression_(computer_science)`,
    anchor: "expression",
    text: {
      p1: (
        <p>
          In computer science, an expression is a syntactic entity in a
          programming language that may be evaluated to determine its value. It
          is a combination of one or more constants, variables, functions, and
          operators that the programming language interprets (according to its
          particular rules of precedence and of association) and computes to
          produce ("to return", in a stateful environment) another value. This
          process, for mathematical expressions, is called evaluation.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Assignment",
    isLargerTitle: false,
    path: "/cs",
    url: `${wikiUrl}/Assignment_(computer_science)`,
    anchor: "assignment",
    text: {
      p1: (
        <p>
          In computer programming, an assignment statement sets and/or re-sets
          the value stored in the storage location(s) denoted by a variable
          name; in other words, it copies a value into the variable. In most
          imperative programming languages, the assignment statement (or
          expression) is a fundamental construct.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Operator",
    isLargerTitle: false,
    path: "/cs",
    url: `${wikiUrl}/Operator_(computer_science)`,
    anchor: "operator",
    text: {
      p1: (
        <p>
          In computer programming, operators are constructs defined within
          programming languages which behave generally like functions, but which
          differ syntactically or semantically.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Immutable object",
    isLargerTitle: false,
    path: "/cs",
    url: `${wikiUrl}/Immutable_object`,
    anchor: "immutable_object",
    text: {
      p1: (
        <p>
          In object-oriented and functional programming, an immutable object
          (unchangeable object) is an object whose state cannot be modified
          after it is created. This is in contrast to a mutable object
          (changeable object), which can be modified after it is created. In
          some cases, an object is considered immutable even if some internally
          used attributes change, but the object's state appears unchanging from
          an external point of view. For example, an object that uses
          memoization to cache the results of expensive computations could still
          be considered an immutable object.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Object-oriented programming",
    isLargerTitle: false,
    path: "/cs",
    url: `${wikiUrl}/Object-oriented_programming`,
    anchor: "object_oriented_programming",
    text: {
      p1: (
        <p>
          Object-oriented programming (OOP) is a programming paradigm based on
          the concept of "objects", which can contain data and code: data in the
          form of fields (often known as attributes or properties), and code, in
          the form of procedures (often known as methods). A feature of objects
          is that an object's own procedures can access and often modify the
          data fields of itself (objects have a notion of this or self). In OOP,
          computer programs are designed by making them out of objects that
          interact with one another. OOP languages are diverse, but the most
          popular ones are class-based, meaning that objects are instances of
          classes, which also determine their types.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Object",
    isLargerTitle: false,
    path: "/cs",
    url: `${wikiUrl}/Object_(computer_science)`,
    anchor: "object",
    text: {
      p1: (
        <p>
          In computer science, an object can be a variable, a data structure, a
          function, or a method. As regions of memory, they contain value and
          are referenced by identifiers. In the object-oriented programming
          paradigm, object can be a combination of variables, functions, and
          data structures; in particular in class-based variations of the
          paradigm it refers to a particular instance of a class. In the
          relational model of database management, an object can be a table or
          column, or an association between data and a database entity (such as
          relating a person's age to a specific person).
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "State",
    isLargerTitle: false,
    path: "/cs",
    url: `${wikiUrl}/State_(computer_science)`,
    anchor: "state",
    text: {
      p1: (
        <p>
          In information technology and computer science, a system is described
          as stateful if it is designed to remember preceding events or user
          interactions; the remembered information is called the state of the
          system. Similarly, a computer program stores data in variables, which
          represent storage locations in the computer's memory. The contents of
          these memory locations, at any given point in the program's execution,
          is called the program's state.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Data structure",
    isLargerTitle: false,
    path: "/cs",
    url: `${wikiUrl}/Data_structure`,
    anchor: "data_structure",
    text: {
      p1: (
        <p>
          In computer science, a data structure is a data organization,
          management, and storage format that enables efficient access and
          modification. More precisely, a data structure is a collection of data
          values, the relationships among them, and the functions or operations
          that can be applied to the data, i.e., it is an algebraic structure
          about data.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Algorithm",
    isLargerTitle: false,
    path: "/cs",
    url: `${wikiUrl}/Algorithm`,
    anchor: "algorithm",
    text: {
      p1: (
        <p>
          In mathematics and computer science, an algorithm is a finite sequence
          of well-defined instructions, typically used to solve a class of
          specific problems or to perform a computation. Algorithms are used as
          specifications for performing calculations, data processing, automated
          reasoning, automated decision-making and other tasks. In contrast, a
          heuristic is an approach to problem solving that may not be fully
          specified or may not guarantee correct or optimal results, especially
          in problem domains where there is no well-defined correct or optimal
          result.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Input/output",
    isLargerTitle: false,
    path: "/cs",
    url: `${wikiUrl}/Input/output`,
    anchor: "Input/output",
    text: {
      p1: (
        <p>
          In computing, input/output (I/O, or informally io or IO) is the
          communication between an information processing system, such as a
          computer, and the outside world, possibly a human or another
          information processing system. Inputs are the signals or data received
          by the system and outputs are the signals or data sent from it. The
          term can also be used as part of an action; to "perform I/O" is to
          perform an input or output operation.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Side effect",
    isLargerTitle: false,
    path: "/cs",
    url: `${wikiUrl}/Side_effect_(computer_science)`,
    anchor: "Side_effect",
    text: {
      p1: (
        <p>
          In computer science, an operation, function or expression is said to
          have a side effect if it modifies some state variable value(s) outside
          its local environment, that is to say has an observable effect besides
          returning a value (the intended effect) to the invoker of the
          operation. State data updated "outside" of the operation may be
          maintained "inside" a stateful object or a wider stateful system
          within which the operation is performed. Example side effects include
          modifying a non-local variable, modifying a static local variable,
          modifying a mutable argument passed by reference, performing I/O or
          calling other side-effect functions. In the presence of side effects,
          a program's behaviour may depend on history; that is, the order of
          evaluation matters. Understanding and debugging a function with side
          effects requires knowledge about the context and its possible
          histories.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Scope",
    isLargerTitle: false,
    path: "/cs",
    url: `${wikiUrl}/Scope_(computer_science)`,
    anchor: "Scope",
    text: {
      p1: (
        <p>
          In computer programming, the scope of a name binding—an association of
          a name to an entity, such as a variable—is the part of a program where
          the name binding is valid, that is where the name can be used to refer
          to the entity. In other parts of the program the name may refer to a
          different entity (it may have a different binding), or to nothing at
          all (it may be unbound). The scope of a name binding is also known as
          the visibility of an entity, particularly in older or more technical
          literature—this is from the perspective of the referenced entity, not
          the referencing name.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Asynchrony",
    isLargerTitle: false,
    path: "/cs",
    url: `${wikiUrl}/Asynchrony_(computer_programming)`,
    anchor: "Asynchrony",
    text: {
      p1: (
        <p>
          Asynchrony, in computer programming, refers to the occurrence of
          events independent of the main program flow and ways to deal with such
          events. These may be "outside" events such as the arrival of signals,
          or actions instigated by a program that take place concurrently with
          program execution, without the program blocking to wait for results.
          Asynchronous input/output is an example of the latter case of
          asynchrony, and lets programs issue commands to storage or network
          devices that service these requests while the processor continues
          executing the program. Doing so provides a degree of parallelism.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Futures and promises",
    isLargerTitle: false,
    path: "/cs",
    url: `${wikiUrl}/Futures_and_promises`,
    anchor: "Futures_and_promises",
    text: {
      p1: (
        <p>
          In computer science, future, promise, delay, and deferred refer to
          constructs used for synchronizing program execution in some concurrent
          programming languages. They describe an object that acts as a proxy
          for a result that is initially unknown, usually because the
          computation of its value is not yet complete.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Control flow",
    isLargerTitle: false,
    path: "/cs",
    url: `${wikiUrl}/Control_flow`,
    anchor: "Control_flow",
    text: {
      p1: (
        <p>
          In computer science, control flow (or flow of control) is the order in
          which individual statements, instructions or function calls of an
          imperative program are executed or evaluated. The emphasis on explicit
          control flow distinguishes an imperative programming language from a
          declarative programming language.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Block (programming)",
    isLargerTitle: false,
    path: "/cs",
    url: `${wikiUrl}/Block_(programming)`,
    anchor: "Block_(programming)",
    text: {
      p1: (
        <p>
          In computer programming, a block or code block or block of code is a
          lexical structure of source code which is grouped together. Blocks
          consist of one or more declarations and statements. A programming
          language that permits the creation of blocks, including blocks nested
          within other blocks, is called a block-structured programming
          language. Blocks are fundamental to structured programming, where
          control structures are formed from blocks.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Declaration",
    isLargerTitle: false,
    path: "/cs",
    url: `${wikiUrl}/Declaration_(computer_programming)`,
    anchor: "Declaration",
    text: {
      p1: (
        <p>
          In computer programming, a declaration is a language construct that
          specifies properties of an identifier: it declares what a word
          (identifier) "means". Declarations are most commonly used for
          functions, variables, constants, and classes, but can also be used for
          other entities such as enumerations and type definitions.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Modular programming",
    isLargerTitle: false,
    path: "/cs",
    url: `${wikiUrl}/Modular_programming`,
    anchor: "Modular_programming",
    text: {
      p1: (
        <p>
          Modular programming is a software design technique that emphasizes
          separating the functionality of a program into independent,
          interchangeable modules, such that each contains everything necessary
          to execute only one aspect of the desired functionality.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Programming paradigm",
    isLargerTitle: false,
    path: "/cs",
    url: `${wikiUrl}/Programming_paradigm`,
    anchor: "Programming_paradigm",
    text: {
      p1: (
        <p>
          Programming paradigms are a way to classify programming languages
          based on their features. Languages can be classified into multiple
          paradigms.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Imperative programming",
    isLargerTitle: false,
    path: "/cs",
    url: `${wikiUrl}/Imperative_programming`,
    anchor: "Imperative_programming",
    text: {
      p1: (
        <>
          <p>
            In computer science, imperative programming is a programming
            paradigm that uses statements that change a program's state. In much
            the same way that the imperative mood in natural languages expresses
            commands, an imperative program consists of commands for the
            computer to perform. Imperative programming focuses on describing
            how a program operates.
          </p>
          <p>
            The term is often used in contrast to declarative programming, which
            focuses on what the program should accomplish without specifying all
            the details of how the program should achieve the result.
          </p>
        </>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Declarative programming",
    isLargerTitle: false,
    path: "/cs",
    url: `${wikiUrl}/Declarative_programming`,
    anchor: "Declarative_programming",
    text: {
      p1: (
        <p>
          In computer science, declarative programming is a programming
          paradigm—a style of building the structure and elements of computer
          programs—that expresses the logic of a computation without describing
          its control flow. This is in contrast with imperative programming,
          which implements algorithms in explicit steps.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Language primitive",
    isLargerTitle: false,
    path: "/cs",
    url: `${wikiUrl}/Language_primitive`,
    anchor: "Language_primitive",
    text: {
      p1: (
        <p>
          In computing, language primitives are the simplest elements available
          in a programming language. A primitive is the smallest 'unit of
          processing' available to a programmer of a given machine, or can be an
          atomic element of an expression in a language.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Event-driven programming",
    isLargerTitle: false,
    path: "/cs",
    url: `${wikiUrl}/Event-driven_programming`,
    anchor: "Event-driven_programming",
    text: {
      p1: (
        <p>
          In computer programming, event-driven programming is a programming
          paradigm in which the flow of the program is determined by events such
          as user actions (mouse clicks, key presses), sensor outputs, or
          message passing from other programs or threads. Event-driven
          programming is the dominant paradigm used in graphical user interfaces
          and other applications (e.g., JavaScript web applications) that are
          centered on performing certain actions in response to user input. This
          is also true of programming for device drivers (e.g., P in USB device
          driver stacks).
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Event loop",
    isLargerTitle: false,
    path: "/cs",
    url: `${wikiUrl}/Event_loop`,
    anchor: "Event_loop",
    text: {
      p1: (
        <p>
          In computer science, the event loop is a programming construct or
          design pattern that waits for and dispatches events or messages in a
          program. The event loop works by making a request to some internal or
          external "event provider" (that generally blocks the request until an
          event has arrived), then calls the relevant event handler ("dispatches
          the event"). The event loop is also sometimes referred to as the
          message dispatcher, message loop, message pump, or run loop.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Blocking (computing)",
    isLargerTitle: false,
    path: "/cs",
    url: `${wikiUrl}/Blocking_(computing)`,
    anchor: "Blocking_(computing)",
    text: {
      p1: (
        <p>
          In computing, a process is an instance of a computer program that is
          being executed. A process always exists in exactly one process state.
          A process that is blocked is one that is waiting for some event, such
          as a resource becoming available or the completion of an I/O
          operation.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Process",
    isLargerTitle: false,
    path: "/cs",
    url: `${wikiUrl}/Process_(computing)`,
    anchor: "Process",
    text: {
      p1: (
        <p>
          In computing, a process is the instance of a computer program that is
          being executed by one or many threads. It contains the program code
          and its activity. Depending on the operating system (OS), a process
          may be made up of multiple threads of execution that execute
          instructions concurrently.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Instance",
    isLargerTitle: false,
    path: "/cs",
    url: `${wikiUrl}/Instance_(computer_science)`,
    anchor: "Instance",
    text: {
      p1: (
        <p>
          In a computer system, any time a new context is created based on some
          model, it is said that the model has been instantiated. In practice,
          this instance usually has a data structure in common with other
          instances, but the values stored in the instances are separate.
          Changing the values in one instance will then not interfere with the
          values of some other instance. A compute instance can be software or
          hardware which can run code, for example a CPU, GPU or a virtual
          machine.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Event",
    isLargerTitle: false,
    path: "/cs",
    url: `${wikiUrl}/Event_(computing)`,
    anchor: "Event",
    text: {
      p1: (
        <p>
          In programming and software design, an event is an action or
          occurrence recognized by software, often originating asynchronously
          from the external environment, that may be handled by the software.
          Computer events can be generated or triggered by the system, by the
          user, or in other ways. Typically, events are handled synchronously
          with the program flow; that is, the software may have one or more
          dedicated places where events are handled, frequently an event loop.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Dynamic programming",
    isLargerTitle: false,
    path: "/cs",
    url: `${wikiUrl}/Dynamic_programming`,
    anchor: "Dynamic_programming",
    text: {
      p1: (
        <p>
          Dynamic programming is both a mathematical optimization method and a
          computer programming method.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Closure",
    isLargerTitle: false,
    path: "/cs",
    url: `${wikiUrl}/Closure_(computer_programming)`,
    anchor: "Closure",
    text: {
      p1: (
        <p>
          In programming languages, a closure, also lexical closure or function
          closure, is a technique for implementing lexically scoped name binding
          in a language with first-class functions. Operationally, a closure is
          a record storing a function together with an environment. The
          environment is a mapping associating each free variable of the
          function (variables that are used locally, but defined in an enclosing
          scope) with the value or reference to which the name was bound when
          the closure was created. Unlike a plain function, a closure allows the
          function to access those captured variables through the closure's
          copies of their values or references, even when the function is
          invoked outside their scope.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Callback",
    isLargerTitle: false,
    path: "/cs",
    url: `${wikiUrl}/Callback_(computer_programming)`,
    anchor: "Callback",
    text: {
      p1: (
        <p>
          In computer programming, a callback, also known as a "call-after"
          function, is any executable code that is passed as an argument to
          other code; that other code is expected to call back (execute) the
          argument at a given time. This execution may be immediate as in a
          synchronous callback, or it might happen at a later point in time as
          in an asynchronous callback. Programming languages support callbacks
          in different ways, often implementing them with subroutines, lambda
          expressions, blocks, or function pointers.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Computer architecture",
    isLargerTitle: false,
    path: "/cs",
    url: `${wikiUrl}/Computer_architecture`,
    anchor: "Computer_architecture",
    text: {
      p1: (
        <p>
          In computer engineering, computer architecture is a set of rules and
          methods that describe the functionality, organization, and
          implementation of computer systems. The architecture of a system
          refers to its structure in terms of separately specified components of
          that system and their interrelationships.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Lexical analysis",
    isLargerTitle: false,
    path: "/cs",
    url: `${wikiUrl}/Lexical_analysis`,
    anchor: "Lexical_analysis",
    text: {
      p1: (
        <p>
          In computer science, lexical analysis, lexing or tokenization is the
          process of converting a sequence of characters (such as in a computer
          program or web page) into a sequence of tokens (strings with an
          assigned and thus identified meaning). A program that performs lexical
          analysis may be termed a lexer, tokenizer, or scanner, although
          scanner is also a term for the first stage of a lexer. A lexer is
          generally combined with a parser, which together analyze the syntax of
          programming languages, web pages, and so forth.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Data type",
    isLargerTitle: false,
    path: "/cs",
    url: `${wikiUrl}/Data_type`,
    anchor: "Data_type",
    text: {
      p1: (
        <p>
          In computer science and computer programming, a data type or simply
          type is an attribute of data which tells the compiler or interpreter
          how the programmer intends to use the data. Most programming languages
          support basic data types of integer numbers (of varying sizes),
          floating-point numbers (which approximate real numbers), characters
          and Booleans. A data type constrains the values that an expression,
          such as a variable or a function, might take. This data type defines
          the operations that can be done on the data, the meaning of the data,
          and the way values of that type can be stored. A data type provides a
          set of values from which an expression (i.e. variable, function, etc.)
          may take its values.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Type system",
    isLargerTitle: false,
    path: "/cs",
    url: `${wikiUrl}/Type_system`,
    anchor: "Type_system",
    text: {
      p1: (
        <p>
          In programming languages, a type system is a logical system comprising
          a set of rules that assigns a property called a type to the various
          constructs of a computer program, such as variables, expressions,
          functions or modules.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Class",
    isLargerTitle: false,
    path: "/cs",
    url: `${wikiUrl}/Class_(computer_programming)`,
    anchor: "class",
    text: {
      p1: (
        <p>
          In object-oriented programming, a class is an extensible
          program-code-template for creating objects, providing initial values
          for state (member variables) and implementations of behavior (member
          functions or methods).
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Polymorphism",
    isLargerTitle: false,
    path: "/cs",
    url: `${wikiUrl}/Polymorphism_(computer_science)`,
    anchor: "Polymorphism",
    text: {
      p1: (
        <p>
          In programming languages and type theory, polymorphism is the
          provision of a single interface to entities of different types or the
          use of a single symbol to represent multiple different types.The
          concept is borrowed from a principle in biology where an organism or
          species can have many different forms or stages.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Protocol",
    isLargerTitle: false,
    path: "/cs",
    url: `${wikiUrl}/Protocol_(object-oriented_programming)`,
    anchor: "Protocol",
    text: {
      p1: (
        <p>
          Protocol is a term used by particular object-oriented programming
          languages with a variety of specific meanings, which other languages
          may term interface or trait.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Interface",
    isLargerTitle: false,
    path: "/cs",
    url: `${wikiUrl}/Interface_(computing)`,
    anchor: "Interface",
    text: {
      p1: (
        <p>
          In computing, an interface is a shared boundary across which two or
          more separate components of a computer system exchange information.
          The exchange can be between software, computer hardware, peripheral
          devices, humans, and combinations of these. Some computer hardware
          devices, such as a touchscreen, can both send and receive data through
          the interface, while others such as a mouse or microphone may only
          provide an interface to send data to a given system.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "API",
    isLargerTitle: false,
    path: "/cs",
    url: `${wikiUrl}/API`,
    anchor: "API",
    text: {
      p1: (
        <p>
          An application programming interface (API) is a connection between
          computers or between computer programs. It is a type of software
          interface, offering a service to other pieces of software. A document
          or standard that describes how to build or use such a connection or
          interface is called an API specification. A computer system that meets
          this standard is said to implement or expose an API. The term API may
          refer either to the specification or to the implementation.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Literal",
    isLargerTitle: false,
    path: "/cs",
    url: `${wikiUrl}/Literal_(computer_programming)`,
    anchor: "Literal",
    text: {
      p1: (
        <p>
          In computer science, a literal is a notation for representing a fixed
          value in source code. Almost all programming languages have notations
          for atomic values such as integers, floating-point numbers, and
          strings, and usually for booleans and characters; some also have
          notations for elements of enumerated types and compound values such as
          arrays, records, and objects. An anonymous function is a literal for
          the function type.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Value",
    isLargerTitle: false,
    path: "/cs",
    url: `${wikiUrl}/Value_(computer_science)`,
    anchor: "Value",
    text: {
      p1: (
        <p>
          In computer science, a value is the representation of some entity that
          can be manipulated by a program. The members of a type are the values
          of that type.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Syntax",
    isLargerTitle: false,
    path: "/cs",
    url: `${wikiUrl}/Syntax_(programming_languages)`,
    anchor: "Syntax",
    text: {
      p1: (
        <p>
          In computer science, the syntax of a computer language is the set of
          rules that defines the combinations of symbols that are considered to
          be correctly structured statements or expressions in that language.
          This applies both to programming languages, where the document
          represents source code, and to markup languages, where the document
          represents data.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Member variable",
    isLargerTitle: false,
    path: "/cs",
    url: `${wikiUrl}/Member_variable`,
    anchor: "Member_variable",
    text: {
      p1: (
        <>
          <p>
            In object-oriented programming, a member variable (sometimes called
            a member field) is a variable that is associated with a specific
            object, and accessible for all its methods (member functions).
          </p>
          <p>
            In class-based programming languages, these are distinguished into
            two types: class variables (also called static member variables),
            where only one copy of the variable is shared with all instances of
            the class; and instance variables, where each instance of the class
            has its own independent copy of the variable.
          </p>
        </>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Data hierarchy",
    isLargerTitle: false,
    path: "/cs",
    url: `${wikiUrl}/Data_hierarchy`,
    anchor: "Data_hierarchy",
    text: {
      p1: (
        <p>
          Data hierarchy refers to the systematic organization of data, often in
          a hierarchical form. Data organization involves characters, fields,
          records, files and so on. This concept is a starting point when trying
          to see what makes up data and whether data has a structure.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Software design",
    isLargerTitle: false,
    path: "/cs",
    url: `${wikiUrl}/Software_design`,
    anchor: "Software_design",
    text: {
      p1: (
        <p>
          Software design is the process by which an agent creates a
          specification of a software artifact intended to accomplish goals,
          using a set of primitive components and subject to constraints.
          Software design may refer to either "all the activity involved in
          conceptualizing, framing, implementing, commissioning, and ultimately
          modifying complex systems" or "the activity following requirements
          specification and before programming, as ... [in] a stylized software
          engineering process."
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Software design pattern",
    isLargerTitle: false,
    path: "/cs",
    url: `${wikiUrl}/Software_design_pattern`,
    anchor: "Software_design_pattern",
    text: {
      p1: (
        <p>
          In software engineering, a software design pattern is a general,
          reusable solution to a commonly occurring problem within a given
          context in software design. It is not a finished design that can be
          transformed directly into source or machine code. Rather, it is a
          description or template for how to solve a problem that can be used in
          many different situations. Design patterns are formalized best
          practices that the programmer can use to solve common problems when
          designing an application or system.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Reusability",
    isLargerTitle: false,
    path: "/cs",
    url: `${wikiUrl}/Reusability`,
    anchor: "Reusability",
    text: {
      p1: (
        <p>
          In computer science and software engineering, reusability is the use
          of existing assets in some form within the software product
          development process; these assets are products and by-products of the
          software development life cycle and include code, software components,
          test suites, designs and documentation. The opposite concept of
          reusability is leverage, which modifies existing assets as needed to
          meet specific system requirements. Because reuse implies the creation
          of a separately maintained version of the assets[clarification
          needed], it is preferred over leverage.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Functional programming",
    isLargerTitle: false,
    path: "/cs",
    url: `${wikiUrl}/Functional_programming`,
    anchor: "Functional_programming",
    text: {
      p1: (
        <p>
          In computer science, functional programming is a programming paradigm
          where programs are constructed by applying and composing functions. It
          is a declarative programming paradigm in which function definitions
          are trees of expressions that map values to other values, rather than
          a sequence of imperative statements which update the running state of
          the program.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Function composition",
    isLargerTitle: false,
    path: "/cs",
    url: `${wikiUrl}/Function_composition_(computer_science)`,
    anchor: "Function_composition",
    text: {
      p1: (
        <p>
          In computer science, function composition is an act or mechanism to
          combine simple functions to build more complicated ones. Like the
          usual composition of functions in mathematics, the result of each
          function is passed as the argument of the next, and the result of the
          last one is the result of the whole.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Object composition",
    isLargerTitle: false,
    path: "/cs",
    url: `${wikiUrl}/Object_composition`,
    anchor: "Object_composition",
    text: {
      p1: (
        <p>
          In computer science, object composition is a way to combine objects or
          data types into more complex ones. Common kinds of compositions are
          objects used in object-oriented programming, tagged unions, sets,
          sequences, and various graph structures. Object compositions relate
          to, but are not the same as, data structures.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Decomposition",
    isLargerTitle: false,
    path: "/cs",
    url: `${wikiUrl}/Decomposition_(computer_science)`,
    anchor: "Decomposition",
    text: {
      p1: (
        <p>
          Decomposition in computer science, also known as factoring, is
          breaking a complex problem or system into parts that are easier to
          conceive, understand, program, and maintain.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Generic programming",
    isLargerTitle: false,
    path: "/cs",
    url: `${wikiUrl}/Generic_programming`,
    anchor: "Generic_programming",
    text: {
      p1: (
        <p>
          Generic programming is a style of computer programming in which
          algorithms are written in terms of types to-be-specified-later that
          are then instantiated when needed for specific types provided as
          parameters.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "High-level programming language",
    isLargerTitle: false,
    path: "/cs",
    url: `${wikiUrl}/High-level_programming_language`,
    anchor: "High-level_programming_language",
    text: {
      p1: (
        <p>
          In computer science, a high-level programming language is a
          programming language with strong abstraction from the details of the
          computer. In contrast to low-level programming languages, it may use
          natural language elements, be easier to use, or may automate (or even
          hide entirely) significant areas of computing systems (e.g. memory
          management), making the process of developing a program simpler and
          more understandable than when using a lower-level language. The amount
          of abstraction provided defines how "high-level" a programming
          language is.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Computer science",
    isLargerTitle: false,
    path: "/cs",
    url: `${wikiUrl}/Computer_science`,
    anchor: "Computer_science",
    text: {
      p1: (
        <p>
          Computer science is the study of computation, automation, and
          information. Computer science spans theoretical disciplines, such as
          algorithms, theory of computation, and information theory, to
          practical disciplines including the design and implementation of
          hardware and software. Computer science is generally considered an
          area of academic research and distinct from computer programming.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Control flow analysis",
    isLargerTitle: false,
    path: "/cs",
    url: `${wikiUrl}/Control_flow_analysis`,
    anchor: "Control_flow_analysis",
    text: {
      p1: (
        <p>
          In computer science, control-flow analysis (CFA) is a
          static-code-analysis technique for determining the control flow of a
          program. The control flow is expressed as a control-flow graph (CFG).
          For both functional programming languages and object-oriented
          programming languages, the term CFA, and elaborations such as k-CFA,
          refer to specific algorithms that compute control flow.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Static program analysis",
    isLargerTitle: false,
    path: "/cs",
    url: `${wikiUrl}/Static_program_analysis`,
    anchor: "Static_program_analysis",
    text: {
      p1: (
        <p>
          Static program analysis is the analysis of computer software performed
          without executing any programs, in contrast with dynamic analysis,
          which is performed on programs during their execution.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Program analysis",
    isLargerTitle: false,
    path: "/cs",
    url: `${wikiUrl}/Program_analysis`,
    anchor: "Program_analysis",
    text: {
      p1: (
        <p>
          In computer science, program analysis is the process of automatically
          analyzing the behavior of computer programs regarding a property such
          as correctness, robustness, safety and liveness. Program analysis
          focuses on two major areas: program optimization and program
          correctness. The first focuses on improving the program's performance
          while reducing the resource usage while the latter focuses on ensuring
          that the program does what it is supposed to do.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Control-flow diagram",
    isLargerTitle: false,
    path: "/cs",
    url: `${wikiUrl}/Control-flow_diagram`,
    anchor: "Control-flow_diagram",
    text: {
      p1: (
        <p>
          A control-flow diagram (CFD) is a diagram to describe the control flow
          of a business process, process or review.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Data-flow analysis",
    isLargerTitle: false,
    path: "/cs",
    url: `${wikiUrl}/Data-flow_analysis`,
    anchor: "Data-flow_analysis",
    text: {
      p1: (
        <p>
          Data-flow analysis is a technique for gathering information about the
          possible set of values calculated at various points in a computer
          program. A program's control-flow graph (CFG) is used to determine
          those parts of a program to which a particular value assigned to a
          variable might propagate. The information gathered is often used by
          compilers when optimizing a program. A canonical example of a
          data-flow analysis is reaching definitions.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Data-flow diagram",
    isLargerTitle: false,
    path: "/cs",
    url: `${wikiUrl}/Data-flow_diagram`,
    anchor: "Data-flow_diagram",
    text: {
      p1: (
        <p>
          A data-flow diagram is a way of representing a flow of data through a
          process or a system (usually an information system). The DFD also
          provides information about the outputs and inputs of each entity and
          the process itself. A data-flow diagram has no control flow - there
          are no decision rules and no loops. Specific operations based on the
          data can be represented by a flowchart.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Control-flow graph",
    isLargerTitle: false,
    path: "/cs",
    url: `${wikiUrl}/Control-flow_graph`,
    anchor: "Control-flow_graph",
    text: {
      p1: (
        <p>
          In computer science, a control-flow graph (CFG) is a representation,
          using graph notation, of all paths that might be traversed through a
          program during its execution.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Execution",
    isLargerTitle: false,
    path: "/cs",
    url: `${wikiUrl}/Execution_(computing)`,
    anchor: "Execution",
    text: {
      p1: (
        <p>
          Execution in computer and software engineering is the process by which
          a computer or virtual machine reads and acts on the instructions of a
          computer program. Each instruction of a program is a description of a
          particular action which must be carried out, in order for a specific
          problem to be solved. Execution involves repeatedly following a
          'fetch-decode-execute' cycle for each instruction. As the executing
          machine follows the instructions, specific effects are produced in
          accordance with the semantics of those instructions.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Batch processing",
    isLargerTitle: false,
    path: "/cs",
    url: `${wikiUrl}/Batch_processing`,
    anchor: "Batch_processing",
    text: {
      p1: (
        <p>
          Computerized batch processing is the running of "jobs that can run
          without end user interaction, or can be scheduled to run as resources
          permit."
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Abstract data type",
    isLargerTitle: false,
    path: "/cs",
    url: `${wikiUrl}/Abstract_data_type`,
    anchor: "Abstract_data_type",
    text: {
      p1: (
        <p>
          In computer science, an abstract data type (ADT) is a mathematical
          model for data types. An abstract data type is defined by its behavior
          (semantics) from the point of view of a user, of the data,
          specifically in terms of possible values, possible operations on data
          of this type, and the behavior of these operations. This mathematical
          model contrasts with data structures, which are concrete
          representations of data, and are the point of view of an implementer,
          not a user.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Queue (abstract data type)",
    isLargerTitle: false,
    path: "/cs",
    url: `${wikiUrl}/Queue_(abstract_data_type)`,
    anchor: "Queue",
    text: {
      p1: (
        <p>
          In computer science, a queue is a collection of entities that are
          maintained in a sequence and can be modified by the addition of
          entities at one end of the sequence and the removal of entities from
          the other end of the sequence. By convention, the end of the sequence
          at which elements are added is called the back, tail, or rear of the
          queue, and the end at which elements are removed is called the head or
          front of the queue, analogously to the words used when people line up
          to wait for goods or services.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Separation of concerns",
    isLargerTitle: false,
    path: "/cs",
    url: `${wikiUrl}/Separation_of_concerns`,
    anchor: "Separation_of_concerns",
    text: {
      p1: (
        <p>
          In computer science, separation of concerns (SoC) is a design
          principle for separating a computer program into distinct sections.
          Each section addresses a separate concern, a set of information that
          affects the code of a computer program. A concern can be as general as
          "the details of the hardware for an application", or as specific as
          "the name of which class to instantiate". A program that embodies SoC
          well is called a modular program. Modularity, and hence separation of
          concerns, is achieved by encapsulating information inside a section of
          code that has a well-defined interface. Encapsulation is a means of
          information hiding. Layered designs in information systems are another
          embodiment of separation of concerns (e.g., presentation layer,
          business logic layer, data access layer, persistence layer).
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Software engineering",
    isLargerTitle: false,
    path: "/cs",
    url: `${wikiUrl}/Software_engineering`,
    anchor: "Software_engineering",
    text: {
      p1: (
        <p>
          Software engineering is an engineering approach on a software
          development of systematics application. A software engineer is a
          person who applies the principles of software engineering to design,
          develop, maintain, test, and evaluate computer software. The term
          programmer is sometimes used as a synonym, but may also lack
          connotations of engineering education or skills.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Software",
    isLargerTitle: false,
    path: "/cs",
    url: `${wikiUrl}/Software`,
    anchor: "Software",
    text: {
      p1: (
        <p>
          Software is a collection of instructions that tell a computer how to
          work. This is in contrast to hardware, from which the system is built
          and actually performs the work.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Business logic",
    isLargerTitle: false,
    path: "/cs",
    url: `${wikiUrl}/Business_logic`,
    anchor: "Business_logic",
    text: {
      p1: (
        <p>
          In computer software, business logic or domain logic is the part of
          the program that encodes the real-world business rules that determine
          how data can be created, stored, and changed. It is contrasted with
          the remainder of the software that might be concerned with lower-level
          details of managing a database or displaying the user interface,
          system infrastructure, or generally connecting various parts of the
          program.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Create, read, update and delete",
    isLargerTitle: false,
    path: "/cs",
    url: `${wikiUrl}/Create,_read,_update_and_delete`,
    anchor: "Create,_read,_update_and_delete",
    text: {
      p1: (
        <p>
          In computer programming, create, read, update, and delete (CRUD) are
          the four basic operations of persistent storage. CRUD is also
          sometimes used to describe user interface conventions that facilitate
          viewing, searching, and changing information using computer-based
          forms and reports.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Server (computing)",
    isLargerTitle: false,
    path: "/cs",
    url: `${wikiUrl}/Server_(computing)`,
    anchor: "Server_(computing)",
    text: {
      p1: (
        <p>
          In computing, a server is a piece of computer hardware or software
          (computer program) that provides functionality for other programs or
          devices, called "clients". This architecture is called the
          client-server model. Servers can provide various functionalities,
          often called "services", such as sharing data or resources among
          multiple clients, or performing computation for a client. A single
          server can serve multiple clients, and a single client can use
          multiple servers. A client process may run on the same device or may
          connect over a network to a server on a different device. Typical
          servers are database servers, file servers, mail servers, print
          servers, web servers, game servers, and application servers.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Computer file",
    isLargerTitle: false,
    path: "/cs",
    url: `${wikiUrl}/Computer_file`,
    anchor: "Computer_file",
    text: {
      p1: (
        <p>
          A computer file is a computer resource for recording data in a
          computer storage device, primarily identified by its file name. Just
          as words can be written to paper, so can data be written to a computer
          file. Files can be edited and transferred through the Internet on that
          particular computer system.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Pointer (computer programming)",
    isLargerTitle: false,
    path: "/cs",
    url: `${wikiUrl}/Pointer_(computer_programming)`,
    anchor: "Pointer_(computer_programming)",
    text: {
      p1: (
        <p>
          In computer science, a pointer is an object in many programming
          languages that stores a memory address. This can be that of another
          value located in computer memory, or in some cases, that of
          memory-mapped computer hardware. A pointer references a location in
          memory, and obtaining the value stored at that location is known as
          dereferencing the pointer. As an analogy, a page number in a book's
          index could be considered a pointer to the corresponding page;
          dereferencing such a pointer would be done by flipping to the page
          with the given page number and reading the text found on that page.
          The actual format and content of a pointer variable is dependent on
          the underlying computer architecture.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Higher-order function",
    isLargerTitle: false,
    path: "/cs",
    url: `${wikiUrl}/Higher-order_function`,
    anchor: "Higher-order_function",
    text: {
      p1: (
        <>
          <p>
            In mathematics and computer science, a higher-order function is a
            function that does at least one of the following:
          </p>
          <ol className="list">
            <li>
              takes one or more functions as arguments (i.e. a procedural
              parameter, which is a parameter of a procedure that is itself a
              procedure),
            </li>
            <li>returns a function as its result.</li>
          </ol>
        </>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Parameter (computer programming)",
    isLargerTitle: false,
    path: "/cs",
    url: `${wikiUrl}/Parameter_(computer_programming)`,
    anchor: "Parameter_(computer_programming)",
    text: {
      p1: (
        <p>
          In computer programming, a parameter or a formal argument is a special
          kind of variable used in a subroutine to refer to one of the pieces of
          data provided as input to the subroutine. These pieces of data are the
          values of the arguments (often called actual arguments or actual
          parameters) with which the subroutine is going to be called/invoked.
          An ordered list of parameters is usually included in the definition of
          a subroutine, so that, each time the subroutine is called, its
          arguments for that call are evaluated, and the resulting values can be
          assigned to the corresponding parameters.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Programming language",
    isLargerTitle: false,
    path: "/cs",
    url: `${wikiUrl}/Programming_language`,
    anchor: "Programming_language",
    text: {
      p1: (
        <p>
          A programming language is any set of rules that converts strings, or
          graphical program elements in the case of visual programming
          languages, to various kinds of machine code output. Programming
          languages are one kind of computer language, and are used in computer
          programming to implement algorithms.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Record (computer science)",
    isLargerTitle: false,
    path: "/cs",
    url: `${wikiUrl}/Record_(computer_science)`,
    anchor: "Record_(computer_science)",
    text: {
      p1: (
        <p>
          In computer science, a record (also called a structure, struct, or
          compound data) is a basic data structure. Records in a database or
          spreadsheet are usually called "rows". A record is a collection of
          fields, possibly of different data types, typically in a fixed number
          and sequence. The fields of a record may also be called members,
          particularly in object-oriented programming; fields may also be called
          elements, though this risks confusion with the elements of a
          collection.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Cohesion (computer science)",
    isLargerTitle: false,
    path: "/cs",
    url: `${wikiUrl}/Cohesion_(computer_science)`,
    anchor: "Cohesion_(computer_science)",
    text: {
      p1: (
        <p>
          In computer programming, cohesion refers to the degree to which the
          elements inside a module belong together. In one sense, it is a
          measure of the strength of relationship between the methods and data
          of a class and some unifying purpose or concept served by that class.
          In another sense, it is a measure of the strength of relationship
          between the class's methods and data themselves.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Language construct",
    isLargerTitle: false,
    path: "/cs",
    url: `${wikiUrl}/Language_construct`,
    anchor: "Language_construct",
    text: {
      p1: (
        <p>
          A language construct is a syntactically allowable part of a program
          that may be formed from one or more lexical tokens in accordance with
          the rules of a programming language. The term "language construct" is
          often used as a synonym for control structure. Control flow statements
          (such as conditionals, foreach loops, while loops, etc) are language
          constructs, not functions. So while (true) is a language construct,
          while add(10) is a function call.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "this (computer programming)",
    isLargerTitle: false,
    path: "/cs",
    url: `${wikiUrl}/This_(computer_programming)`,
    anchor: "this_(computer_programming)",
    text: {
      p1: (
        <p>
          this, self, and Me are keywords used in some computer programming
          languages to refer to the object, class, or other entity of which the
          currently running code is a part. The entity referred to by these
          keywords thus depends on the execution context (such as which object
          is having its method called). Different programming languages use
          these keywords in slightly different ways. In languages where a
          keyword like "this" is mandatory, the keyword is the only way to
          access data and methods stored in the current object. Where optional,
          they can disambiguate variables and functions with the same name.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Value type and reference type",
    isLargerTitle: false,
    path: "/cs",
    url: `${wikiUrl}/Value_type_and_reference_type`,
    anchor: "Value_type_and_reference_type",
    text: {
      p1: (
        <p>
          In computer programming, data types can be divided into two
          categories: value types and reference types. A value of value type is
          the actual value. A value of reference type is a reference to another
          value.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Primitive data type",
    isLargerTitle: false,
    path: "/cs",
    url: `${wikiUrl}/Primitive_data_type`,
    anchor: "Primitive_data_type",
    text: {
      p1: (
        <p>
          In computer science, primitive data types are a set of basic data
          types from which all other data types are constructed. Specifically it
          often refers to the limited set of data representations in use by a
          particular processor, which all compiled programs must use. Most
          processors support a similar set of primitive data types, although the
          specific representations vary. More generally "primitive data types"
          may refer to the standard data types built into a programming
          language. Data types which are not primitive are referred to as
          derived or composite data types. Primitive types are almost always
          value types, but composite types may also be value types.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Composite data type",
    isLargerTitle: false,
    path: "/cs",
    url: `${wikiUrl}/Composite_data_type`,
    anchor: "Composite_data_type",
    text: {
      p1: (
        <p>
          In computer science, a composite data type or compound data type is
          any data type which can be constructed in a program using the
          programming language's primitive data types and other composite types.
          It is sometimes called a structure or aggregate data type, although
          the latter term may also refer to arrays, lists, etc. The act of
          constructing a composite type is known as composition. Composite data
          types are often contrasted with scalar variables.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Message passing",
    isLargerTitle: false,
    path: "/cs",
    url: `${wikiUrl}/Message_passing`,
    anchor: "Message_passing",
    text: {
      p1: (
        <p>
          In computer science, message passing is a technique for invoking
          behavior (i.e., running a program) on a computer. The invoking program
          sends a message to a process (which may be an actor or object) and
          relies on that process and its supporting infrastructure to then
          select and run some appropriate code. Message passing differs from
          conventional programming where a process, subroutine, or function is
          directly invoked by name. Message passing is key to some models of
          concurrency and object-oriented programming.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Serialization",
    isLargerTitle: false,
    path: "/cs",
    url: `${wikiUrl}/Serialization`,
    anchor: "Serialization",
    text: {
      p1: (
        <p>
          In computing, serialization (US spelling) or serialisation (UK
          spelling) is the process of translating a data structure or object
          state into a format that can be stored (for example, in a file or
          memory data buffer) or transmitted (for example, over a computer
          network) and reconstructed later (possibly in a different computer
          environment). When the resulting series of bits is reread according to
          the serialization format, it can be used to create a semantically
          identical clone of the original object. For many complex objects, such
          as those that make extensive use of references, this process is not
          straightforward. Serialization of object-oriented objects does not
          include any of their associated methods with which they were
          previously linked. This process of serializing an object is also
          called marshalling an object in some situations. The opposite
          operation, extracting a data structure from a series of bytes, is
          deserialization, (also called unserialization or unmarshalling).
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Object copying",
    isLargerTitle: false,
    path: "/cs",
    url: `${wikiUrl}/Object_copying`,
    anchor: "Object_copying",
    text: {
      p1: (
        <p>
          In object-oriented programming, object copying is creating a copy of
          an existing object, a unit of data in object-oriented programming. The
          resulting object is called an object copy or simply copy of the
          original object. Copying is basic but has subtleties and can have
          significant overhead. There are several ways to copy an object, most
          commonly by a copy constructor or cloning. Copying is done mostly so
          the copy can be modified or moved, or the current value preserved. If
          either of these is unneeded, a reference to the original data is
          sufficient and more efficient, as no copying occurs.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Node (computer science)",
    isLargerTitle: false,
    path: "/cs",
    url: `${wikiUrl}/Node_(computer_science)`,
    anchor: "Node_(computer_science)",
    text: {
      p1: (
        <p>
          A node is a basic unit of a data structure, such as a linked list or
          tree data structure. Nodes contain data and also may link to other
          nodes. Links between nodes are often implemented by pointers.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Iteration",
    isLargerTitle: false,
    path: "/cs",
    url: `${wikiUrl}/Iteration`,
    anchor: "Iteration",
    text: {
      p1: (
        <p>
          Iteration is the repetition of a process in order to generate a
          (possibly unbounded) sequence of outcomes. Each repetition of the
          process is a single iteration, and the outcome of each iteration is
          then the starting point of the next iteration. In mathematics and
          computer science, iteration (along with the related technique of
          recursion) is a standard element of algorithms.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "List (abstract data type)",
    isLargerTitle: false,
    path: "/cs",
    url: `${wikiUrl}/List_(abstract_data_type)`,
    anchor: "List_(abstract_data_type)",
    text: {
      p1: (
        <p>
          In computer science, a list or sequence is an abstract data type that
          represents a finite number of ordered values, where the same value may
          occur more than once. An instance of a list is a computer
          representation of the mathematical concept of a tuple or finite
          sequence; the (potentially) infinite analog of a list is a stream.
          Lists are a basic example of containers, as they contain other values.
          If the same value occurs multiple times, each occurrence is considered
          a distinct item.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Iterator",
    isLargerTitle: false,
    path: "/cs",
    url: `${wikiUrl}/Iterator`,
    anchor: "Iterator",
    text: {
      p1: (
        <p>
          In computer programming, an iterator is an object that enables a
          programmer to traverse a container, particularly lists. Various types
          of iterators are often provided via a container's interface. Though
          the interface and semantics of a given iterator are fixed, iterators
          are often implemented in terms of the structures underlying a
          container implementation and are often tightly coupled to the
          container to enable the operational semantics of the iterator. An
          iterator performs traversal and also gives access to data elements in
          a container, but does not itself perform iteration (i.e., not without
          some significant liberty taken with that concept or with trivial use
          of the terminology)
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Context (computing)",
    isLargerTitle: false,
    path: "/cs",
    url: `${wikiUrl}/Context_(computing)`,
    anchor: "Context_(computing)",
    text: {
      p1: (
        <p>
          In computer science, a task context is the minimal set of data used by
          a task (which may be a process, thread, or fiber) that must be saved
          to allow a task to be interrupted, and later continued from the same
          point. The concept of context assumes significance in the case of
          interruptible tasks, wherein, upon being interrupted, the processor
          saves the context and proceeds to serve the interrupt service routine.
          Thus, the smaller the context is, the smaller the latency is.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Call stack",
    isLargerTitle: false,
    path: "/cs",
    url: `${wikiUrl}/Call_stack`,
    anchor: "Call_stack",
    text: {
      p1: (
        <p>
          In computer science, a call stack is a stack data structure that
          stores information about the active subroutines of a computer program.
          This kind of stack is also known as an execution stack, program stack,
          control stack, run-time stack, or machine stack, and is often
          shortened to just "the stack". Although maintenance of the call stack
          is important for the proper functioning of most software, the details
          are normally hidden and automatic in high-level programming languages.
          Many computer instruction sets provide special instructions for
          manipulating stacks.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Memory management",
    isLargerTitle: false,
    path: "/cs",
    url: `${wikiUrl}/Memory_management`,
    anchor: "Memory_management",
    text: {
      p1: (
        <p>
          Memory management is a form of resource management applied to computer
          memory. The essential requirement of memory management is to provide
          ways to dynamically allocate portions of memory to programs at their
          request, and free it for reuse when no longer needed. This is critical
          to any advanced computer system where more than a single process might
          be underway at any time.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Evaluation strategy",
    isLargerTitle: false,
    path: "/cs",
    url: `${wikiUrl}/Evaluation_strategy`,
    anchor: "Evaluation_strategy",
    text: {
      p1: (
        <p>
          In a programming language, an evaluation strategy is a set of rules
          for evaluating expressions. The term is often used to refer to the
          more specific notion of a parameter-passing strategy that defines the
          kind of value that is passed to the function for each parameter (the
          binding strategy), whether to evaluate the parameters of a function
          call, and if so in what order (the evaluation order). The notion of
          reduction strategy is distinct, although some authors conflate the two
          terms and the definition of each term is not widely agreed upon.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Local variable",
    isLargerTitle: false,
    path: "/cs",
    url: `${wikiUrl}/Local_variable`,
    anchor: "Local_variable",
    text: {
      p1: (
        <p>
          In computer science, a local variable is a variable that is given
          local scope. Local variable references in the function or block in
          which it is declared override the same variable name in the larger
          scope. In programming languages with only two levels of visibility,
          local variables are contrasted with global variables. On the other
          hand, many ALGOL-derived languages allow any number of nested levels
          of visibility, with private variables, functions, constants and types
          hidden within them, either by nested blocks or nested functions. Local
          variables are fundamental to procedural programming, and more
          generally modular programming: variables of local scope are used to
          avoid issues with side-effects that can occur with global variables.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Global variable",
    isLargerTitle: false,
    path: "/cs",
    url: `${wikiUrl}/Global_variable`,
    anchor: "Global_variable",
    text: {
      p1: (
        <p>
          In computer programming, a global variable is a variable with global
          scope, meaning that it is visible (hence accessible) throughout the
          program, unless shadowed. The set of all global variables is known as
          the global environment or global state. In compiled languages, global
          variables are generally static variables, whose extent (lifetime) is
          the entire runtime of the program, though in interpreted languages
          (including command-line interpreters), global variables are generally
          dynamically allocated when declared, since they are not known ahead of
          time.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Static variable",
    isLargerTitle: false,
    path: "/cs",
    url: `${wikiUrl}/Static_variable`,
    anchor: "Static_variable",
    text: {
      p1: (
        <p>
          In computer programming, a static variable is a variable that has been
          allocated "statically", meaning that its lifetime (or "extent") is the
          entire run of the program. This is in contrast to shorter-lived
          automatic variables, whose storage is stack allocated and deallocated
          on the call stack; and in contrast to objects, whose storage is
          dynamically allocated and deallocated in heap memory.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Stack-based memory allocation",
    isLargerTitle: false,
    path: "/cs",
    url: `${wikiUrl}/Stack-based_memory_allocation`,
    anchor: "Stack-based_memory_allocation",
    text: {
      p1: (
        <p>
          Stacks in computing architectures are regions of memory where data is
          added or removed in a last-in-first-out (LIFO) manner.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Method (computer programming)",
    isLargerTitle: false,
    path: "/cs",
    url: `${wikiUrl}/Method_(computer_programming)`,
    anchor: "Method_(computer_programming)",
    text: {
      p1: (
        <p>
          A method in object-oriented programming (OOP) is a procedure
          associated with a message and an object. An object consists of data
          and behavior; these compose an interface, which specifies how the
          object may be utilized by any of its various consumers. Data is
          represented as properties of the object, and behaviors are represented
          as methods. For example, a Window object could have methods such as
          open and close, while its state (whether it is open or closed at any
          given point in time) would be a property.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Property (programming)",
    isLargerTitle: false,
    path: "/cs",
    url: `${wikiUrl}/Property_(programming)`,
    anchor: "Property_(programming)",
    text: {
      p1: (
        <p>
          A property, in some object-oriented programming languages, is a
          special sort of class member, intermediate in functionality between a
          field (or data member) and a method or a property is a member that
          provides a flexible mechanism to read, write, or compute the value of
          a private field. The syntax for reading and writing of properties is
          like for fields, but property reads and writes are (usually)
          translated to 'getter' and 'setter' method calls. The field-like
          syntax is easier to read and write than many method calls[citation
          needed], yet the interposition of method calls "under the hood" allows
          for data validation, active updating (e.g., of GUI elements), or
          implementation of what may be called "read-only fields".
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Class variable",
    isLargerTitle: false,
    path: "/cs",
    url: `${wikiUrl}/Class_variable`,
    anchor: "Class_variable",
    text: {
      p1: (
        <p>
          In object-oriented programming with classes, a class variable is any
          variable declared with the `static` modifier of which a single copy
          exists, regardless of how many instances of the class exist. Note that
          in Java, the terms "field" and "variable" are used interchangeably for
          member variable.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Instance variable",
    isLargerTitle: false,
    path: "/cs",
    url: `${wikiUrl}/Instance_variable`,
    anchor: "Instance_variable",
    text: {
      p1: (
        <p>
          In object-oriented programming with classes, an instance variable is a
          variable defined in a class (i.e. a member variable), for which each
          instantiated object of the class has a separate copy, or instance. An
          instance variable has similarities with a class variable, but is
          non-static. An instance variable is a variable which is declared in a
          class but outside of constructors, methods, or blocks. Instance
          variables are created when an object is instantiated, and are
          accessible to all the constructors, methods, or blocks in the class.
          Access modifiers can be given to the instance variable.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Constructor (object-oriented programming)",
    isLargerTitle: false,
    path: "/cs",
    url: `${wikiUrl}/Constructor_(object-oriented_programming)`,
    anchor: "Constructor_(object-oriented_programming)",
    text: {
      p1: (
        <p>
          In class-based object-oriented programming, a constructor is a special
          type of subroutine called to create an object. It prepares the new
          object for use, often accepting arguments that the constructor uses to
          set required member variables.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Nested function",
    isLargerTitle: false,
    path: "/cs",
    url: `${wikiUrl}/Nested_function`,
    anchor: "Nested_function",
    text: {
      p1: (
        <p>
          In computer programming, a nested function (or nested procedure or
          subroutine) is a function which is defined within another function,
          the enclosing function. Due to simple recursive scope rules, a nested
          function is itself invisible outside of its immediately enclosing
          function, but can see (access) all local objects (data, functions,
          types, etc.) of its immediately enclosing function as well as of any
          function(s) which, in turn, encloses that function. The nesting is
          theoretically possible to unlimited depth, although only a few levels
          are normally used in practical programs.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Model-view-viewmodel",
    isLargerTitle: false,
    path: "/cs",
    url: "https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93viewmodel",
    anchor: "mvvm",
    text: {
      p1: (
        <p>
          Model-view-viewmodel (MVVM) is a software architectural pattern that
          facilitates the separation of the development of the graphical user
          interface (the view) - be it via a markup language or GUI code – from
          the development of the business logic or back-end logic (the model) so
          that the view is not dependent on any specific model platform. The
          viewmodel of MVVM is a value converter, meaning the viewmodel is
          responsible for exposing (converting) the data objects from the model
          in such a way that objects are easily managed and presented. In this
          respect, the viewmodel is more model than view, and handles most if
          not all of the view's display logic. The viewmodel may implement a
          mediator pattern, organizing access to the back-end logic around the
          set of use cases supported by the view.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Encapsulation (computer programming)",
    isLargerTitle: false,
    path: "/cs",
    url: `${wikiUrl}/Encapsulation_(computer_programming)`,
    anchor: "Encapsulation",
    text: {
      p1: (
        <p>
          In object-oriented programming (OOP), encapsulation refers to the
          bundling of data with the methods that operate on that data, or the
          restricting of direct access to some of an object's components.
          Encapsulation is used to hide the values or state of a structured data
          object inside a class, preventing direct access to them by clients in
          a way that could expose hidden implementation details or violate state
          invariance maintained by the methods.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Inheritance (object-oriented programming)",
    isLargerTitle: false,
    path: "/cs",
    url: `${wikiUrl}/Inheritance_(object-oriented_programming)`,
    anchor: "Inheritance",
    text: {
      p1: (
        <p>
          In object-oriented programming, inheritance is the mechanism of basing
          an object or class upon another object (prototype-based inheritance)
          or class (class-based inheritance), retaining similar implementation.
          Also defined as deriving new classes (sub classes) from existing ones
          such as super class or base class and then forming them into a
          hierarchy of classes.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Logic gate",
    isLargerTitle: false,
    path: "/cs",
    url: `${wikiUrl}/Logic_gate`,
    anchor: "Logic_gate",
    text: {
      p1: (
        <p>
          A logic gate is an idealized model of computation or a physical
          electronic device implementing a Boolean function, a logical operation
          performed on one or more binary inputs that produces a single binary
          output. Depending on the context, the term may refer to an ideal logic
          gate, one that has for instance zero rise time and unlimited fan-out,
          or it may refer to a non-ideal physical device(see Ideal and real
          op-amps for comparison).
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Branch (computer science)",
    isLargerTitle: false,
    path: "/cs",
    url: `${wikiUrl}/Branch_(computer_science)`,
    anchor: "Branch_(computer_science)",
    text: {
      p1: (
        <p>
          A branch is an instruction in a computer program that can cause a
          computer to begin executing a different instruction sequence and thus
          deviate from its default behavior of executing instructions in order.
          Branch (or branching, branched) may also refer to the act of switching
          execution to a different instruction sequence as a result of executing
          a branch instruction. Branch instructions are used to implement
          control flow in program loops and conditionals (i.e., executing a
          particular sequence of instructions only if certain conditions are
          satisfied).
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Dataflow programming",
    isLargerTitle: false,
    path: "/cs",
    url: `${wikiUrl}/Dataflow_programming`,
    anchor: "Dataflow_programming",
    text: {
      p1: (
        <p>
          In computer programming, dataflow programming is a programming
          paradigm that models a program as a directed graph of the data flowing
          between operations, thus implementing dataflow principles and
          architecture. Dataflow programming languages share some features of
          functional languages, and were generally developed in order to bring
          some functional concepts to a language more suitable for numeric
          processing. Some authors use the term datastream instead of dataflow
          to avoid confusion with dataflow computing or dataflow architecture,
          based on an indeterministic machine paradigm.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Computer memory",
    isLargerTitle: false,
    path: "/cs",
    url: `${wikiUrl}/Computer_memory`,
    anchor: "Computer_memory",
    text: {
      p1: (
        <p>
          In computing, memory is a device or system that is used to store
          information for immediate use in a computer or related computer
          hardware and digital electronic devices. The term memory is often
          synonymous with the term primary storage or main memory. An archaic
          synonym for memory is store.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Object lifetime",
    isLargerTitle: false,
    path: "/cs",
    url: `${wikiUrl}/Object_lifetime`,
    anchor: "Object_lifetime",
    text: {
      p1: (
        <p>
          In object-oriented programming (OOP), the object lifetime (or life
          cycle) of an object is the time between an object's creation and its
          destruction. Rules for object lifetime vary significantly between
          languages, in some cases between implementations of a given language,
          and lifetime of a particular object may vary from one run of the
          program to another.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Aliasing (computing)",
    isLargerTitle: false,
    path: "/cs",
    url: `${wikiUrl}/Aliasing_(computing)`,
    anchor: "Aliasing_(computing)",
    text: {
      p1: (
        <p>
          In computing, aliasing describes a situation in which a data location
          in memory can be accessed through different symbolic names in the
          program. Thus, modifying the data through one name implicitly modifies
          the values associated with all aliased names, which may not be
          expected by the programmer. As a result, aliasing makes it
          particularly difficult to understand, analyze and optimize programs.
          Aliasing analysers intend to make and compute useful information for
          understanding aliasing in programs.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Abstraction (computer science)",
    isLargerTitle: false,
    path: "/cs",
    url: `${wikiUrl}/Abstraction_(computer_science)`,
    anchor: "Abstraction_(computer_science)",
    text: {
      p1: (
        <>
          <p>In software engineering and computer science, abstraction is:</p>
          <ol className="list">
            <li>
              The process of removing physical, spatial, or temporal details or
              attributes in the study of objects or systems to focus attention
              on details of greater importance; it is similar in nature to the
              process of generalization;
            </li>
            <li>
              the creation of abstract concept-objects by mirroring common
              features or attributes of various non-abstract objects or systems
              of study - the result of the process of abstraction.
            </li>
          </ol>
        </>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Task (computing)",
    isLargerTitle: false,
    path: "/cs",
    url: `${wikiUrl}/Task_(computing)`,
    anchor: "Task_(computing)",
    text: {
      p1: (
        <p>
          In computing, a task is a unit of execution or a unit of work. The
          term is ambiguous; precise alternative terms include process,
          light-weight process, thread (for execution), step, request, or query
          (for work). In the adjacent diagram, there are queues of incoming work
          to do and outgoing completed work, and a thread pool of threads to
          perform this work. Either the work units themselves or the threads
          that perform the work can be referred to as "tasks", and these can be
          referred to respectively as requests/responses/threads, incoming
          tasks/completed tasks/threads (as illustrated), or
          requests/responses/tasks.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Message passing",
    isLargerTitle: false,
    path: "/cs",
    url: `${wikiUrl}/Message_passing`,
    anchor: "Message_passing",
    text: {
      p1: (
        <p>
          In computer science, message passing is a technique for invoking
          behavior (i.e., running a program) on a computer. The invoking program
          sends a message to a process (which may be an actor or object) and
          relies on that process and its supporting infrastructure to then
          select and run some appropriate code. Message passing differs from
          conventional programming where a process, subroutine, or function is
          directly invoked by name. Message passing is key to some models of
          concurrency and object-oriented programming.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Scheduling (computing)",
    isLargerTitle: false,
    path: "/cs",
    url: `${wikiUrl}/Scheduling_(computing)`,
    anchor: "Scheduling_(computing)",
    text: {
      p1: (
        <p>
          In computing, scheduling is the action of assigning resources to
          perform tasks. The resources may be processors, network links or
          expansion cards. The tasks may be threads, processes or data flows.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Recursion (computer science)",
    isLargerTitle: false,
    path: "/cs",
    url: `${wikiUrl}/Recursion_(computer_science)`,
    anchor: "Recursion_(computer_science)",
    text: {
      p1: (
        <p>
          In computer science, recursion is a method of solving a computational
          problem where the solution depends on solutions to smaller instances
          of the same problem. Recursion solves such recursive problems by using
          functions that call themselves from within their own code. The
          approach can be applied to many types of problems, and recursion is
          one of the central ideas of computer science.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Theoretical computer science",
    isLargerTitle: false,
    path: "/cs",
    url: `${wikiUrl}/Theoretical_computer_science`,
    anchor: "Theoretical_computer_science",
    text: {
      p1: (
        <p>
          Theoretical computer science (TCS) is a subset of general computer
          science and mathematics that focuses on mathematical aspects of
          computer science such as the theory of computation, lambda calculus,
          and type theory.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Analysis of algorithms",
    isLargerTitle: false,
    path: "/cs",
    url: `${wikiUrl}/Analysis_of_algorithms`,
    anchor: "Analysis_of_algorithms",
    text: {
      p1: (
        <p>
          In computer science, the analysis of algorithms is the process of
          finding the computational complexity of algorithms—the amount of time,
          storage, or other resources needed to execute them. Usually, this
          involves determining a function that relates the size of an
          algorithm's input to the number of steps it takes (its time
          complexity) or the number of storage locations it uses (its space
          complexity). An algorithm is said to be efficient when this function's
          values are small, or grow slowly compared to a growth in the size of
          the input. Different inputs of the same size may cause the algorithm
          to have different behavior, so best, worst and average case
          descriptions might all be of practical interest. When not otherwise
          specified, the function describing the performance of an algorithm is
          usually an upper bound, determined from the worst case inputs to the
          algorithm.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Memory address",
    isLargerTitle: false,
    path: "/cs",
    url: `${wikiUrl}/Memory_address`,
    anchor: "Memory_address",
    text: {
      p1: (
        <p>
          In computing, a memory address is a reference to a specific memory
          location used at various levels by software and hardware. Memory
          addresses are fixed-length sequences of digits conventionally
          displayed and manipulated as unsigned integers. Such numerical
          semantic bases itself upon features of CPU (such as the instruction
          pointer and incremental address registers), as well upon use of the
          memory like an array endorsed by various programming languages.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Domain Name System",
    isLargerTitle: false,
    path: "/cs",
    url: `${wikiUrl}/Domain_Name_System`,
    anchor: "Domain_Name_System",
    text: {
      p1: (
        <p>
          The Domain Name System (DNS) is the hierarchical and decentralized naming system used to identify computers reachable through the Internet or other Internet Protocol (IP) networks. The resource records contained in the DNS associate domain names with other forms of information. These are most commonly used to map human-friendly domain names to the numerical IP addresses computers need to locate services and devices using the underlying network protocols, but have been extended over time to perform many other functions as well. The Domain Name System has been an essential component of the functionality of the Internet since 1985.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "IP address",
    isLargerTitle: false,
    path: "/cs",
    url: `${wikiUrl}/IP_address`,
    anchor: "IP_address",
    text: {
      p1: (
        <p>
          An Internet Protocol address (IP address) is a numerical label such as 192.0.2.1 that is connected to a computer network that uses the Internet Protocol for communication. An IP address serves two main functions: network interface identification and location addressing. 
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Persistence (computer science)",
    isLargerTitle: false,
    path: "/cs",
    url: `${wikiUrl}/Persistence_(computer_science)`,
    anchor: "Persistence_(computer_science)",
    text: {
      p1: (
        <p>
          In computer science, persistence refers to the characteristic of state of a system that outlives (persists more than) the process that created it. This is achieved in practice by storing the state as data in computer data storage. Programs have to transfer data to and from storage devices and have to provide mappings from the native programming-language data structures to the storage device data structures.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Synchronization",
    isLargerTitle: false,
    path: "/cs",
    url: `${wikiUrl}/Synchronization`,
    anchor: "Synchronization",
    text: {
      p1: (
        <p>
          In computer science, synchronization refers to one of two distinct but related concepts: synchronization of processes, and synchronization of data. Process synchronization refers to the idea that multiple processes are to join up or handshake at a certain point, in order to reach an agreement or commit to a certain sequence of action. Data synchronization refers to the idea of keeping multiple copies of a dataset in coherence with one another, or to maintain data integrity. Process synchronization primitives are commonly used to implement data synchronization. 
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Ontology (information science)",
    isLargerTitle: false,
    path: "/cs",
    url: `${wikiUrl}/Ontology_(information_science)`,
    anchor: "Ontology_(information_science)",
    text: {
      p1: (
        <p>
          In computer science and information science, an ontology encompasses a representation, formal naming, and definition of the categories, properties, and relations between the concepts, data, and entities that substantiate one, many, or all domains of discourse. More simply, an ontology is a way of showing the properties of a subject area and how they are related, by defining a set of concepts and categories that represent the subject.
        </p>
      ),
    },
  },
];

// The contents length.
export const contentsLength = csContents.length;
// The sorted contents by the order.
sortContentsByOrder(csContents);

// To hold the items that added subpath(i.e cs/p1, cs/p2) to the path.
let subpathContents = [];
// Add the url parameter to the cs contents' path to show the content based on the route when click the breadcrumbs.
export const csContentsAddedSubpath = addSubpath(
  subpathContents,
  contentsLength,
  csContents
);
