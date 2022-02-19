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
