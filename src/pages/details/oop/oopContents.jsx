import { v4 as uuidv4 } from "uuid";
import addSubpath from "../../../utils/addSubpath";

const wikiUrl = "https://en.wikipedia.org/wiki";

export const oopContents = [
    {
        id: uuidv4(),
        title: "Object-oriented programming",
        isLargerTitle: true,
        path: "/oop",
        url: `${wikiUrl}/Object-oriented_programming`,
        anchor: "Object-oriented_programming",
        text: {
            p1: <p>Object-oriented programming (OOP) is a programming paradigm based on the concept of "objects", which can contain data and code. The data is in the form of fields (often known as attributes or properties), and the code is in the form of procedures (often known as methods).</p>
        },
    },
    {
        id: uuidv4(),
        title: "Object-oriented analysis and design",
        isLargerTitle: false,
        path: "/oop",
        url: `${wikiUrl}/Object-oriented_analysis_and_design`,
        anchor: "Object-oriented_analysis_and_design",
        text: {
            p1: <p>Object-oriented analysis and design (OOAD) is a technical approach for analyzing and designing an application, system, or business by applying object-oriented programming, as well as using visual modeling throughout the software development process to guide stakeholder communication and product quality.</p>
        },
    },
    {
        id: uuidv4(),
        title: "Prototype-based programming",
        isLargerTitle: false,
        path: "/oop",
        url: `${wikiUrl}/Prototype-based_programming`,
        anchor: "Prototype-based_programming",
        text: {
            p1: <p>Prototype-based programming is a style of object-oriented programming in which behaviour reuse (known as inheritance) is performed via a process of reusing existing objects that serve as prototypes. This model can also be known as prototypal, prototype-oriented, classless, or instance-based programming.</p>
        },
    },
    {
        id: uuidv4(),
        title: "Class invariant",
        isLargerTitle: false,
        path: "/oop",
        url: `${wikiUrl}/Class_invariant`,
        anchor: "Class_invariant",
        text: {
            p1: <p>In computer programming, specifically object-oriented programming, a class invariant (or type invariant) is an invariant used for constraining objects of a class. Methods of the class should preserve the invariant. The class invariant constrains the state stored in the object.</p>
        },
    },
    {
        id: uuidv4(),
        title: "Is-a",
        isLargerTitle: false,
        path: "/oop",
        url: `${wikiUrl}/Is-a`,
        anchor: "Is-a",
        text: {
            p1: <p>In knowledge representation, object-oriented programming and design (see object-oriented program architecture), is-a (is_a or is a) is a subsumption relationship between abstractions (e.g. types, classes), wherein one class A is a subclass of another class B (and so B is a superclass of A). In other words, type A is a subtype of type B when A's specification implies B's specification. That is, any object (or class) that satisfies A's specification also satisfies B's specification, because B's specification is weaker.</p>
        },
    },
    {
        id: uuidv4(),
        title: "Composition over inheritance",
        isLargerTitle: false,
        path: "/oop",
        url: `${wikiUrl}/Composition_over_inheritance`,
        anchor: "Composition_over_inheritance",
        text: {
            p1: <p>Composition over inheritance (or composite reuse principle) in object-oriented programming (OOP) is the principle that classes should achieve polymorphic behavior and code reuse by their composition (by containing instances of other classes that implement the desired functionality) rather than inheritance from a base or parent class. This is an often-stated principle of OOP, such as in the influential book Design Patterns (1994).</p>
        },
    },
    {
        id: uuidv4(),
        title: "Object lifetime",
        isLargerTitle: false,
        path: "/oop",
        url: `${wikiUrl}/Object_lifetime`,
        anchor: "Object_lifetime",
        text: {
            p1: <p>In object-oriented programming (OOP), the object lifetime (or life cycle) of an object is the time between an object's creation and its destruction. Rules for object lifetime vary significantly between languages, in some cases between implementations of a given language, and lifetime of a particular object may vary from one run of the program to another.</p>
        },
    },
    {
        id: uuidv4(),
        title: "Inheritance (object-oriented programming)",
        isLargerTitle: false,
        path: "/oop",
        url: `${wikiUrl}/Inheritance_(object-oriented_programming)`,
        anchor: "Inheritance_(object-oriented_programming)",
        text: {
            p1: <p>In object-oriented programming, inheritance is the mechanism of basing an object or class upon another object (prototype-based inheritance) or class (class-based inheritance), retaining similar implementation. Also defined as deriving new classes (sub classes) from existing ones such as super class or base class and then forming them into a hierarchy of classes.</p>
        },
    },
    {
        id: uuidv4(),
        title: "Encapsulation (computer programming)",
        isLargerTitle: false,
        path: "/oop",
        url: `${wikiUrl}/Encapsulation_(computer_programming)`,
        anchor: "Encapsulation_(computer_programming)",
        text: {
            p1: <p>In object-oriented programming (OOP), encapsulation refers to the bundling of data with the methods that operate on that data, or the restricting of direct access to some of an object's components. Encapsulation is used to hide the values or state of a structured data object inside a class, preventing direct access to them by clients in a way that could expose hidden implementation details or violate state invariance maintained by the methods.</p>
        },
    },
    {
        id: uuidv4(),
        title: "Constructor (object-oriented programming)",
        isLargerTitle: false,
        path: "/oop",
        url: `${wikiUrl}/Constructor_(object-oriented_programming)`,
        anchor: "Constructor_(object-oriented_programming)",
        text: {
            p1: <p>In class-based object-oriented programming, a constructor is a special type of subroutine called to create an object. It prepares the new object for use, often accepting arguments that the constructor uses to set required member variables.</p>
        },
    },
    {
        id: uuidv4(),
        title: "Instance variable",
        isLargerTitle: false,
        path: "/oop",
        url: `${wikiUrl}/Instance_variable`,
        anchor: "Instance_variable",
        text: {
            p1: <p>In object-oriented programming with classes, an instance variable is a variable defined in a class (i.e. a member variable), for which each instantiated object of the class has a separate copy, or instance. An instance variable has similarities with a class variable, but is non-static. An instance variable is a variable which is declared in a class but outside of constructors, methods, or blocks. Instance variables are created when an object is instantiated, and are accessible to all the constructors, methods, or blocks in the class. Access modifiers can be given to the instance variable.</p>
        },
    },
    {
        id: uuidv4(),
        title: "Class variable",
        isLargerTitle: false,
        path: "/oop",
        url: `${wikiUrl}/Class_variable`,
        anchor: "Class_variable",
        text: {
            p1: <p>In object-oriented programming with classes, a class variable is any variable declared with the `static` modifier of which a single copy exists, regardless of how many instances of the class exist. Note that in Java, the terms "field" and "variable" are used interchangeably for member variable.</p>
        },
    },
    {
        id: uuidv4(),
        title: "Property (programming)",
        isLargerTitle: false,
        path: "/oop",
        url: `${wikiUrl}/Property_(programming)`,
        anchor: "Property_(programming)",
        text: {
            p1: <p>A property, in some object-oriented programming languages, is a special sort of class member, intermediate in functionality between a field (or data member) and a method or a property is a member that provides a flexible mechanism to read, write, or compute the value of a private field. The syntax for reading and writing of properties is like for fields, but property reads and writes are (usually) translated to 'getter' and 'setter' method calls. The field-like syntax is easier to read and write than many method calls[citation needed], yet the interposition of method calls "under the hood" allows for data validation, active updating (e.g., of GUI elements), or implementation of what may be called "read-only fields".</p>
        },
    },
    {
        id: uuidv4(),
        title: "Method (computer programming)",
        isLargerTitle: false,
        path: "/oop",
        url: `${wikiUrl}/Method_(computer_programming)`,
        anchor: "Method_(computer_programming)",
        text: {
            p1: <p>A method in object-oriented programming (OOP) is a procedure associated with a message and an object. An object consists of data and behavior; these compose an interface, which specifies how the object may be utilized by any of its various consumers. Data is represented as properties of the object, and behaviors are represented as methods. For example, a Window object could have methods such as open and close, while its state (whether it is open or closed at any given point in time) would be a property.</p>
        },
    },
    {
        id: uuidv4(),
        title: "Object copying",
        isLargerTitle: false,
        path: "/oop",
        url: `${wikiUrl}/Object_copying`,
        anchor: "Object_copying",
        text: {
            p1: <p>In object-oriented programming, object copying is creating a copy of an existing object, a unit of data in object-oriented programming. The resulting object is called an object copy or simply copy of the original object. Copying is basic but has subtleties and can have significant overhead. There are several ways to copy an object, most commonly by a copy constructor or cloning. Copying is done mostly so the copy can be modified or moved, or the current value preserved. If either of these is unneeded, a reference to the original data is sufficient and more efficient, as no copying occurs.</p>
        },
    },
    {
        id: uuidv4(),
        title: "Member variable",
        isLargerTitle: false,
        path: "/oop",
        url: `${wikiUrl}/Member_variable`,
        anchor: "Member_variable",
        text: {
            p1: <p>In object-oriented programming, a member variable (sometimes called a member field) is a variable that is associated with a specific object, and accessible for all its methods (member functions).</p>
        },
    },
    {
        id: uuidv4(),
        title: "Protocol (object-oriented programming)",
        isLargerTitle: false,
        path: "/oop",
        url: `${wikiUrl}/Protocol_(object-oriented_programming)`,
        anchor: "Protocol_(object-oriented_programming)",
        text: {
            p1: <p>Protocol is a term used by particular object-oriented programming languages with a variety of specific meanings, which other languages may term interface or trait.</p>
        },
    },
    {
        id: uuidv4(),
        title: "Class (computer programming)",
        isLargerTitle: false,
        path: "/oop",
        url: `${wikiUrl}/Class_(computer_programming)`,
        anchor: "Class_(computer_programming)",
        text: {
            p1: <p>In object-oriented programming, a class is an extensible program-code-template for creating objects, providing initial values for state (member variables) and implementations of behavior (member functions or methods).[1][2] In many languages, the class name is used as the name for the class (the template itself), the name for the default constructor of the class (a subroutine that creates objects), and as the type of objects generated by instantiating the class; these distinct concepts are easily conflated.[2] Although, to the point of conflation, one could argue that is a feature inherent in a language because of its polymorphic nature and why these languages are so powerful, dynamic and adaptable for use compared to languages without polymorphism present. Thus they can model dynamic systems (i.e. the real world, machine learning, AI) more easily.</p>
        },
    },
]

export const contentsLength = oopContents.length;

let subpathContents = [];

export const calculusContentsAddedSubpath = addSubpath(
    subpathContents,
    contentsLength,
    oopContents 
);
