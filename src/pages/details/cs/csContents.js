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
    title: "Block",
    isLargerTitle: false,
    path: "/cs",
    url: `${wikiUrl}/Block_(programming)`,
    anchor: "Block",
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
    title: "Blocking",
    isLargerTitle: false,
    path: "/cs",
    url: `${wikiUrl}/Blocking_(computing)`,
    anchor: "Blocking",
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
          often used as a synonym for control structure.
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
  csContents,
);
