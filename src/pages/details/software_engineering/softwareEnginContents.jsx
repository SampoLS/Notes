import { v4 as uuidv4 } from "uuid";
import addSubpath from "../../../utils/addSubpath";

const wikiUrl = "https://en.wikipedia.org/wiki";

export const softwareEnginContents = [
    {
        id: uuidv4(),
        title: "Software engineering",
        isLargerTitle: true,
        path: "/software_engineering",
        url: `${wikiUrl}/Software_engineering`,
        anchor: "Software_engineering",
        text: {
            p1: <p>Software engineering is a systematic engineering approach to software development.</p>
        },
    },
    {
        id: uuidv4(),
        title: "Design pattern",
        isLargerTitle: false,
        path: "/software_engineering",
        url: `${wikiUrl}/Design_pattern`,
        anchor: "Design_pattern",
        text: {
            p1: <p>A design pattern is the re-usable form of a solution to a design problem. The idea was introduced by the architect Christopher Alexander and has been adapted for various other disciplines, notably software engineering.</p>
        },
    },
    {
        id: uuidv4(),
        title: "Iterative and incremental development",
        isLargerTitle: false,
        path: "/software_engineering",
        url: `${wikiUrl}/Iterative_and_incremental_development`,
        anchor: "Iterative_and_incremental_development",
        text: {
            p1: <p>Iterative and incremental development is any combination of both iterative design or iterative method and incremental build model for development.</p>
        },
    },
    {
        id: uuidv4(),
        title: "Unified Process",
        isLargerTitle: false,
        path: "/software_engineering",
        url: `${wikiUrl}/Unified_Process`,
        anchor: "Unified_Process",
        text: {
            p1: <p>The Unified Software Development Process or Unified Process is an iterative and incremental software development process framework. The best-known and extensively documented refinement of the Unified Process is the Rational Unified Process (RUP). Other examples are OpenUP and Agile Unified Process.</p>
        },
    },
    {
        id: uuidv4(),
        title: "Model-view-viewmodel",
        isLargerTitle: false,
        path: "/software_engineering",
        url: `${wikiUrl}/Model-view-viewmodel`,
        anchor: "Model-view-viewmodel",
        text: {
            p1: <p>Model-view-viewmodel (MVVM) is a software architectural pattern that facilitates the separation of the development of the graphical user interface (the view) - be it via a markup language or GUI code – from the development of the business logic or back-end logic (the model) so that the view is not dependent on any specific model platform. The viewmodel of MVVM is a value converter, meaning the viewmodel is responsible for exposing (converting) the data objects from the model in such a way that objects are easily managed and presented. In this respect, the viewmodel is more model than view, and handles most if not all of the view's display logic. The viewmodel may implement a mediator pattern, organizing access to the back-end logic around the set of use cases supported by the view.</p>
        },
    },
    {
        id: uuidv4(),
        title: "Software design",
        isLargerTitle: false,
        path: "/software_engineering",
        url: `${wikiUrl}/Software_design`,
        anchor: "Software_design",
        text: {
            p1: <p>Software design is the process by which an agent creates a specification of a software artifact intended to accomplish goals, using a set of primitive components and subject to constraints. Software design may refer to either "all the activity involved in conceptualizing, framing, implementing, commissioning, and ultimately modifying complex systems" or "the activity following requirements specification and before programming, as ... [in] a stylized software engineering process."</p>
        },
    },
    {
        id: uuidv4(),
        title: "Event (computing)",
        isLargerTitle: false,
        path: "/software_engineering",
        url: `${wikiUrl}/Event_(computing)`,
        anchor: "Event_(computing)",
        text: {
            p1: <p>In programming and software design, an event is an action or occurrence recognized by software, often originating asynchronously from the external environment, that may be handled by the software. Computer events can be generated or triggered by the system, by the user, or in other ways. Typically, events are handled synchronously with the program flow; that is, the software may have one or more dedicated places where events are handled, frequently an event loop.</p>
        },
    },
    {
        id: uuidv4(),
        title: "Modular programming",
        isLargerTitle: false,
        path: "/software_engineering",
        url: `${wikiUrl}/Modular_programming`,
        anchor: "Modular_programming",
        text: {
            p1: <p>Modular programming is a software design technique that emphasizes separating the functionality of a program into independent, interchangeable modules, such that each contains everything necessary to execute only one aspect of the desired functionality.</p>
        },
    },
    {
        id: uuidv4(),
        title: "Don't repeat yourself",
        isLargerTitle: false,
        path: "/software_engineering",
        url: `${wikiUrl}/Don%27t_repeat_yourself`,
        anchor: "Don%27t_repeat_yourself",
        text: {
            p1: <p>"Don't repeat yourself" (DRY, or sometimes "do not repeat yourself") is a principle of software development aimed at reducing repetition of software patterns, replacing it with abstractions or using data normalization to avoid redundancy. The DRY principle is stated as "Every piece of knowledge must have a single, unambiguous, authoritative representation within a system". When the DRY principle is applied successfully, a modification of any single element of a system does not require a change in other logically unrelated elements. Additionally, elements that are logically related all change predictably and uniformly, and are thus kept in sync.</p>
        },
    },
    {
        id: uuidv4(),
        title: "Business logic",
        isLargerTitle: false,
        path: "/software_engineering",
        url: `${wikiUrl}/Business_logic`,
        anchor: "Business_logic",
        text: {
            p1: <p>In computer software, business logic or domain logic is the part of the program that encodes the real-world business rules that determine how data can be created, stored, and changed. It is contrasted with the remainder of the software that might be concerned with lower-level details of managing a database or displaying the user interface, system infrastructure, or generally connecting various parts of the program.</p>
        },
    },
    {
        id: uuidv4(),
        title: "Business object",
        isLargerTitle: false,
        path: "/software_engineering",
        url: `${wikiUrl}/Business_object`,
        anchor: "Business_object",
        text: {
            p1: <p>A business object is an entity within a multi-tiered software application that works in conjunction with the data access and business logic layers to transport data.</p>
        },
    },
    {
        id: uuidv4(),
        title: "Model–view–controller",
        isLargerTitle: false,
        path: "/software_engineering",
        url: `${wikiUrl}/Model–view–controller`,
        anchor: "Model–view–controller",
        text: {
            p1: <p>Model–view–controller (MVC) is a software architectural pattern commonly used for developing user interfaces that divide the related program logic into three interconnected elements. This is done to separate internal representations of information from the ways information is presented to and accepted from the user.</p>
        },
    },
    {
        id: uuidv4(),
        title: "Information model",
        isLargerTitle: false,
        path: "/software_engineering",
        url: `${wikiUrl}/Information_model`,
        anchor: "Information_model",
        text: {
            p1: <p>An information model in software engineering is a representation of concepts and the relationships, constraints, rules, and operations to specify data semantics for a chosen domain of discourse. Typically it specifies relations between kinds of things, but may also include relations with individual things. It can provide sharable, stable, and organized structure of information requirements or knowledge for the domain context.</p>
        },
    },
    {
        id: uuidv4(),
        title: "Software development process",
        isLargerTitle: false,
        path: "/software_engineering",
        url: `${wikiUrl}/Software_development_process`,
        anchor: "Software_development_process",
        text: {
            p1: <p>In software engineering, a software development process is a process of dividing software development work into smaller, parallel, or sequential steps or sub-processes to improve design and/or product management. It is also known as a software development life cycle (SDLC). The methodology may include the pre-definition of specific deliverables and artifacts that are created and completed by a project team to develop or maintain an application.</p>
        },
    },
    {
        id: uuidv4(),
        title: "Software maintenance",
        isLargerTitle: false,
        path: "/software_engineering",
        url: `${wikiUrl}/Software_maintenance`,
        anchor: "Software_maintenance",
        text: {
            p1: <p>Software maintenance in software engineering is the modification of a software product after delivery to correct faults, to improve performance or other attributes.</p>
        },
    },
    {
        id: uuidv4(),
        title: "SOLID",
        isLargerTitle: false,
        path: "/software_engineering",
        url: `${wikiUrl}/SOLID`,
        anchor: "SOLID",
        text: {
            p1: <p>In software engineering, SOLID is a mnemonic acronym for five design principles intended to make object-oriented designs more understandable, flexible, and maintainable. The principles are a subset of many principles promoted by American software engineer and instructor Robert C. Martin, first introduced in his 2000 paper Design Principles and Design Patterns.</p>
        },
    },
    {
        id: uuidv4(),
        title: "Event-driven architecture",
        isLargerTitle: false,
        path: "/software_engineering",
        url: `${wikiUrl}/Event-driven_architecture`,
        anchor: "Event-driven_architecture",
        text: {
            p1: <p>Event-driven architecture (EDA) is a software architecture paradigm promoting the production, detection, consumption of, and reaction to events.</p>
        },
    },
    {
        id: uuidv4(),
        title: "Coupling (computer programming)",
        isLargerTitle: false,
        path: "/software_engineering",
        url: `${wikiUrl}/Coupling_(computer_programming)`,
        anchor: "Coupling_(computer_programming)",
        text: {
            p1: <p>In software engineering, coupling is the degree of interdependence between software modules; a measure of how closely connected two routines or modules are; the strength of the relationships between modules.</p>
        },
    },
    {
        id: uuidv4(),
        title: "Software",
        isLargerTitle: false,
        path: "/software_engineering",
        url: `${wikiUrl}/Software`,
        anchor: "Software",
        text: {
            p1: <p>Software is a collection of instructions that tell a computer how to work. This is in contrast to hardware, from which the system is built and actually performs the work.</p>
        },
    },
    {
        id: uuidv4(),
        title: "Software design pattern",
        isLargerTitle: false,
        path: "/software_engineering",
        url: `${wikiUrl}/Software_engineering`,
        anchor: "Software_engineering",
        text: {
            p1: <p>In software engineering, a software design pattern is a general, reusable solution to a commonly occurring problem within a given context in software design. It is not a finished design that can be transformed directly into source or machine code. Rather, it is a description or template for how to solve a problem that can be used in many different situations. Design patterns are formalized best practices that the programmer can use to solve common problems when designing an application or system.</p>
        },
    },
    {
        id: uuidv4(),
        title: "Requirement",
        isLargerTitle: false,
        path: "/software_engineering",
        url: `${wikiUrl}/Requirement`,
        anchor: "Requirement",
        text: {
            p1: <p>In product development and process optimization, a requirement is a singular documented physical or functional need that a particular design, product or process aims to satisfy. It is commonly used in a formal sense in engineering design, including for example in systems engineering, software engineering, or enterprise engineering. It is a broad concept that could speak to any necessary (or sometimes desired) function, attribute, capability, characteristic, or quality of a system for it to have value and utility to a customer, organization, internal user, or other stakeholder. Requirements can come with different levels of specificity; for example, a requirement specification or requirement "spec" (often imprecisely referred to as "the" spec/specs, but there are actually different sorts of specifications) refers to an explicit, highly objective/clear (and often quantitative) requirement (or sometimes, set of requirements) to be satisfied by a material, design, product, or service.</p>
        },
    },
    {
        id: uuidv4(),
        title: "Structured analysis",
        isLargerTitle: false,
        path: "/software_engineering",
        url: `${wikiUrl}/Structured_analysis`,
        anchor: "Structured_analysis",
        text: {
            p1: <p>In software engineering, structured analysis (SA) and structured design (SD) are methods for analyzing business requirements and developing specifications for converting practices into computer programs, hardware configurations, and related manual procedures.</p>
        },
    },
]

export const contentsLength = softwareEnginContents.length;

let subpathContents = [];

export const softwareEnginContentsAddedSubpath = addSubpath(
    subpathContents,
    contentsLength,
    softwareEnginContents 
);