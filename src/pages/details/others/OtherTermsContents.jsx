import { v4 as uuidv4 } from "uuid";
import addSubpath from "../../../utils/addSubpath";

const wikiUrl = "https://en.wikipedia.org/wiki";

export const termsContents = [
  {
    id: uuidv4(),
    title: "Other Terms",
    isLargerTitle: true,
    path: "/other_terms",
    url: "",
    anchor: "other_terms",
    text: {
      p1: (
        <p>
          These pages describe the concept maybe good for promoting programming
          skills, maybe including life.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Hierarchy",
    isLargerTitle: false,
    path: "/other_terms",
    url: `${wikiUrl}/Hierarchy`,
    anchor: "Hierarchy",
    text: {
      p1: (
        <p>
          A hierarchy is an arrangement of items (objects, names, values,
          categories, etc.) that are represented as being "above", "below", or
          "at the same level as" one another. Hierarchy is an important concept
          in a wide variety of fields, such as philosophy, architecture, design,
          mathematics, computer science, organizational theory, systems theory,
          systematic biology, and the social sciences (especially political
          philosophy).
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Design pattern",
    isLargerTitle: false,
    path: "/other_terms",
    url: `${wikiUrl}/Design_pattern`,
    anchor: "Design_pattern",
    text: {
      p1: (
        <p>
          A design pattern is the re-usable form of a solution to a design
          problem. The idea was introduced by the architect Christopher
          Alexander and has been adapted for various other disciplines, notably
          software engineering.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Interaction",
    isLargerTitle: false,
    path: "/other_terms",
    url: `${wikiUrl}/Interaction`,
    anchor: "Interaction",
    text: {
      p1: (
        <p>
          Interaction is a kind of action that occurs as two or more objects
          have an effect upon one another. The idea of a two-way effect is
          essential in the concept of interaction, as opposed to a one-way
          causal effect. Closely related terms are interactivity and
          interconnectivity, of which the latter deals with the interactions of
          interactions within systems: combinations of many simple interactions
          can lead to surprising emergent phenomena. Interaction has different
          tailored meanings in various sciences.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Flowchart",
    isLargerTitle: false,
    path: "/other_terms",
    url: `${wikiUrl}/Flowchart`,
    anchor: "Flowchart",
    text: {
      p1: (
        <p>
          A flowchart is a type of diagram that represents a workflow or
          process. A flowchart can also be defined as a diagrammatic
          representation of an algorithm, a step-by-step approach to solving a
          task.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Data",
    isLargerTitle: false,
    path: "/other_terms",
    url: `${wikiUrl}/Data`,
    anchor: "Data",
    text: {
      p1: (
        <p>
          Data are individual facts, statistics, or items of information, often
          numeric. In a more technical sense, data are a set of values of
          qualitative or quantitative variables about one or more persons or
          objects, while a datum (singular of data) is a single value of a
          single variable.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Information",
    isLargerTitle: false,
    path: "/other_terms",
    url: `${wikiUrl}/Information`,
    anchor: "Information",
    text: {
      p1: (
        <p>
          Information is processed, organized and structured data. It provides
          context for data and enables decision making processes. For example, a
          single customer's sale at a restaurant is data - this becomes
          information when the business is able to identify the most popular or
          least popular dish.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Engineering",
    isLargerTitle: false,
    path: "/other_terms",
    url: `${wikiUrl}/Engineering`,
    anchor: "Engineering",
    text: {
      p1: (
        <p>
          Engineering is the use of scientific principles to design and build
          machines, structures, and other items, including bridges, tunnels,
          roads, vehicles, and buildings. The discipline of engineering
          encompasses a broad range of more specialized fields of engineering,
          each with a more specific emphasis on particular areas of applied
          mathematics, applied science, and types of application. See glossary
          of engineering.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Rule of thumb",
    isLargerTitle: false,
    path: "/other_terms",
    url: `${wikiUrl}/Rule_of_thumb`,
    anchor: "Rule_of_thumb",
    text: {
      p1: (
        <p>
          Rule of thumb is an approximate method for doing something, based on
          practical experience rather than theory.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Computing",
    isLargerTitle: false,
    path: "/other_terms",
    url: `${wikiUrl}/Computing`,
    anchor: "Computing",
    text: {
      p1: (
        <p>
          Computing is any goal-oriented activity requiring, benefiting from, or
          creating computing machinery. It includes the study and
          experimentation of algorithmic processes and development of both
          hardware and software. It has scientific, engineering, mathematical,
          technological and social aspects. Major computing disciplines include
          computer engineering, computer science, cybersecurity, data science,
          information systems, information technology and software engineering.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Tree structure",
    isLargerTitle: false,
    path: "/other_terms",
    url: `${wikiUrl}/Tree_structure`,
    anchor: "Tree_structure",
    text: {
      p1: (
        <p>
          A tree structure, tree diagram, or tree model is a way of representing
          the hierarchical nature of a structure in a graphical form. It is
          named a "tree structure" because the classic representation resembles
          a tree, although the chart is generally upside down compared to a
          biological tree, with the "stem" at the top and the "leaves" at the
          bottom.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Race condition",
    isLargerTitle: false,
    path: "/other_terms",
    url: `${wikiUrl}/Race_condition`,
    anchor: "Race_condition",
    text: {
      p1: (
        <p>
          A race condition or race hazard is the condition of an electronics,
          software, or other system where the system's substantive behavior is
          dependent on the sequence or timing of other uncontrollable events. It
          becomes a bug when one or more of the possible behaviors is
          undesirable.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Matery learning",
    isLargerTitle: false,
    path: "/other_terms",
    url: `${wikiUrl}/Matery_learning`,
    anchor: "Matery_learning",
    text: {
      p1: (
        <p>
          Mastery learning (or, as it was initially called, "learning for
          mastery"; also known as "mastery-based learning") is an instructional
          strategy and educational philosophy, first formally proposed by
          Benjamin Bloom in 1968. Mastery learning maintains that students must
          achieve a level of mastery (e.g., 90% on a knowledge test) in
          prerequisite knowledge before moving forward to learn subsequent
          information. If a student does not achieve mastery on the test, they
          are given additional support in learning and reviewing the information
          and then tested again. This cycle continues until the learner
          accomplishes mastery, and they may then move on to the next stage.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Time",
    isLargerTitle: false,
    path: "/other_terms",
    url: `${wikiUrl}/Time`,
    anchor: "Time",
    text: {
      p1: (
        <p>
          Time is the continued sequence of existence and events that occurs in
          an apparently irreversible succession from the past, through the
          present, into the future. It is a component quantity of various
          measurements used to sequence events, to compare the duration of
          events or the intervals between them, and to quantify rates of change
          of quantities in material reality or in the conscious experience. Time
          is often referred to as a fourth dimension, along with three spatial
          dimensions.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Computational thinking",
    isLargerTitle: false,
    path: "/other_terms",
    url: `${wikiUrl}/Computational_thinking`,
    anchor: "Computational_thinking",
    text: {
      p1: (
        <p>
          In education, computational thinking (CT) is a set of problem-solving
          methods that involve expressing problems and their solutions in ways
          that a computer could also execute. It involves automation of
          processes, but also using computing to explore, analyze, and
          understand processes (natural and artificial).
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Problem solving",
    isLargerTitle: false,
    path: "/other_terms",
    url: `${wikiUrl}/Problem_solving`,
    anchor: "Problem_solving",
    text: {
      p1: (
        <p>
          Problem solving consists of using generic or ad hoc methods in an
          orderly manner to find solutions to difficulties.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Concept",
    isLargerTitle: false,
    path: "/other_terms",
    url: `${wikiUrl}/Concept`,
    anchor: "Concept",
    text: {
      p1: (
        <p>
          Concepts are defined as abstract ideas. They are understood to be the
          fundamental building blocks of the concept behind principles, thoughts
          and beliefs. They play an important role in all aspects of cognition.
          As such, concepts are studied by several disciplines, such as
          linguistics, psychology, and philosophy, and these disciplines are
          interested in the logical and psychological structure of concepts, and
          how they are put together to form thoughts and sentences. The study of
          concepts has served as an important flagship of an emerging
          interdisciplinary approach called cognitive science.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Abstraction",
    isLargerTitle: false,
    path: "/other_terms",
    url: `${wikiUrl}/Abstraction`,
    anchor: "Abstraction",
    text: {
      p1: (
        <p>
          Abstraction in its main sense is a conceptual process where general
          rules and concepts are derived from the usage and classification of
          specific examples, literal ("real" or "concrete") signifiers, first
          principles, or other methods.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Idea",
    isLargerTitle: false,
    path: "/other_terms",
    url: `${wikiUrl}/Idea`,
    anchor: "Idea",
    text: {
      p1: (
        <p>
          In common usage and in philosophy, ideas are the results of thought.
          Also in philosophy, ideas can also be mental representational images
          of some object. Many philosophers have considered ideas to be a
          fundamental ontological category of being. The capacity to create and
          understand the meaning of ideas is considered to be an essential and
          defining feature of human beings. In a popular sense, an idea arises
          in a reflexive, spontaneous manner, even without thinking or serious
          reflection, for example, when we talk about the idea of a person or a
          place. A new or an original idea can often lead to innovation.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Implementation",
    isLargerTitle: false,
    path: "/other_terms",
    url: `${wikiUrl}/Implementation`,
    anchor: "Implementation",
    text: {
      p1: (
        <p>
          Implementation is the realization of an application, or execution of a
          plan, idea, model, design, specification, standard, algorithm, or
          policy.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Computation",
    isLargerTitle: false,
    path: "/other_terms",
    url: `${wikiUrl}/Computation`,
    anchor: "Computation",
    text: {
      p1: (
        <p>
          Computation is any type of calculation that includes both arithmetical
          and non-arithmetical steps and which follows a well-defined model
          (e.g. an algorithm).
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Calculation",
    isLargerTitle: false,
    path: "/other_terms",
    url: `${wikiUrl}/Calculation`,
    anchor: "Calculation",
    text: {
      p1: (
        <p>
          A calculation is a deliberate process that transforms one or more
          inputs into one or more results. The term is used in a variety of
          senses, from the very definite arithmetical calculation of using an
          algorithm, to the vague heuristics of calculating a strategy in a
          competition, or calculating the chance of a successful relationship
          between two people.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "File system",
    isLargerTitle: false,
    path: "/other_terms",
    url: `${wikiUrl}/File_system`,
    anchor: "File_system",
    text: {
      p1: (
        <p>
          In computing, file system or filesystem (often abbreviated to fs) is a
          method and data structure that the operating system uses to control
          how data is stored and retrieved. Without a file system, data placed
          in a storage medium would be one large body of data with no way to
          tell where one piece of data stopped and the next began, or where any
          piece of data was located when it was time to retrieve it. By
          separating the data into pieces and giving each piece a name, the data
          is easily isolated and identified. Taking its name from the way a
          paper-based data management system is named, each group of data is
          called a "file." The structure and logic rules used to manage the
          groups of data and their names is called a "file system."
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Memory",
    isLargerTitle: false,
    path: "/other_terms",
    url: `${wikiUrl}/Memory`,
    anchor: "Memory",
    text: {
      p1: (
        <p>
          Memory is the faculty of the mind by which data or information is
          encoded, stored, and retrieved when needed. It is the retention of
          information over time for the purpose of influencing future action. If
          past events could not be remembered, it would be impossible for
          language, relationships, or personal identity to develop. Memory loss
          is usually described as forgetfulness or amnesia.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Address",
    isLargerTitle: false,
    path: "/other_terms",
    url: `${wikiUrl}/Address`,
    anchor: "Address",
    text: {
      p1: (
        <p>
          An address is a collection of information, presented in a mostly fixed
          format, used to give the location of a building, apartment, or other
          structure or a plot of land, generally using political boundaries and
          street names as references, along with other identifiers such as house
          or apartment numbers and organization name. Some addresses also
          contain special codes, such as a postal code, to make identification
          easier and aid in the routing of mail.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Pattern",
    isLargerTitle: false,
    path: "/other_terms",
    url: `${wikiUrl}/Pattern`,
    anchor: "Pattern",
    text: {
      p1: (
        <p>
          A pattern is a regularity in the world, in human-made design, or in
          abstract ideas. As such, the elements of a pattern repeat in a
          predictable manner. A geometric pattern is a kind of pattern formed of
          geometric shapes and typically repeated like a wallpaper design.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Design",
    isLargerTitle: false,
    path: "/other_terms",
    url: `${wikiUrl}/Design`,
    anchor: "Design",
    text: {
      p1: (
        <p>
          A design is a plan or specification for the construction of an object
          or system or for the implementation of an activity or process or the
          result of that plan or specification in the form of a prototype,
          product, or process.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Intelligence",
    isLargerTitle: false,
    path: "/other_terms",
    url: `${wikiUrl}/Intelligence`,
    anchor: "Intelligence",
    text: {
      p1: (
        <p>
          Intelligence has been defined in many ways: the capacity for
          abstraction, logic, understanding, self-awareness, learning, emotional
          knowledge, reasoning, planning, creativity, critical thinking, and
          problem-solving. More generally, it can be described as the ability to
          perceive or infer information, and to retain it as knowledge to be
          applied towards adaptive behaviors within an environment or context.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Critical thinking",
    isLargerTitle: false,
    path: "/other_terms",
    url: `${wikiUrl}/Critical_thinking`,
    anchor: "Critical_thinking",
    text: {
      p1: (
        <p>
          Critical thinking is the analysis of available facts, evidence,
          observations, and arguments to form a judgement. The subject is
          complex; several different definitions exist, which generally include
          the rational, skeptical, and unbiased analysis or evaluation of
          factual evidence. Critical thinking is self-directed,
          self-disciplined, self-monitored, and self-corrective thinking. It
          presupposes assent to rigorous standards of excellence and mindful
          command of their use. It entails effective communication and
          problem-solving abilities as well as a commitment to overcome native
          egocentrism and sociocentrism.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Communication protocol",
    isLargerTitle: false,
    path: "/other_terms",
    url: `${wikiUrl}/Communication_protocol`,
    anchor: "Communication_protocol",
    text: {
      p1: (
        <p>
          A communication protocol is a system of rules that allows two or more
          entities of a communications system to transmit information via any
          kind of variation of a physical quantity. The protocol defines the
          rules, syntax, semantics and synchronization of communication and
          possible error recovery methods. Protocols may be implemented by
          hardware, software, or a combination of both.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Schedule",
    isLargerTitle: false,
    path: "/other_terms",
    url: `${wikiUrl}/Schedule`,
    anchor: "Schedule",
    text: {
      p1: (
        <p>
          A schedule or a timetable, as a basic time-management tool, consists
          of a list of times at which possible tasks, events, or actions are
          intended to take place, or of a sequence of events in the
          chronological order in which such things are intended to take place.
          The process of creating a schedule — deciding how to order these tasks
          and how to commit resources between the variety of possible tasks — is
          called scheduling, and a person responsible for making a particular
          schedule may be called a scheduler. Making and following schedules is
          an ancient human activity.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Science",
    isLargerTitle: false,
    path: "/other_terms",
    url: `${wikiUrl}/Science`,
    anchor: "Science",
    text: {
      p1: (
        <p>
          Science is a systematic enterprise that builds and organizes knowledge
          in the form of testable explanations and predictions about the
          universe.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Analysis",
    isLargerTitle: false,
    path: "/other_terms",
    url: `${wikiUrl}/Analysis`,
    anchor: "Analysis",
    text: {
      p1: (
        <p>
          Analysis is the process of breaking a complex topic or substance into
          smaller parts in order to gain a better understanding of it. The
          technique has been applied in the study of mathematics and logic since
          before Aristotle (384-322 B.C.), though analysis as a formal concept
          is a relatively recent development.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Complexity",
    isLargerTitle: false,
    path: "/other_terms",
    url: `${wikiUrl}/Complexity`,
    anchor: "Complexity",
    text: {
      p1: (
        <p>
          Complexity characterises the behaviour of a system or model whose
          components interact in multiple ways and follow local rules, leading
          to nonlinearity, randomness, collective dynamics, hierarchy, and
          emergence.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Parsing",
    isLargerTitle: false,
    path: "/other_terms",
    url: `${wikiUrl}/Parsing`,
    anchor: "Parsing",
    text: {
      p1: (
        <p>
          Parsing, syntax analysis, or syntactic analysis is the process of
          analyzing a string of symbols, either in natural language, computer
          languages or data structures, conforming to the rules of a formal
          grammar. The term parsing comes from Latin pars (orationis), meaning
          part (of speech).
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Structure",
    isLargerTitle: false,
    path: "/other_terms",
    url: `${wikiUrl}/Structure`,
    anchor: "Structure",
    text: {
      p1: (
        <p>
          A structure is an arrangement and organization of interrelated
          elements in a material object or system, or the object or system so
          organized. Material structures include man-made objects such as
          buildings and machines and natural objects such as biological
          organisms, minerals and chemicals. Abstract structures include data
          structures in computer science and musical form. Types of structure
          include a hierarchy (a cascade of one-to-many relationships), a
          network featuring many-to-many links, or a lattice featuring
          connections between components that are neighbors in space.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "System",
    isLargerTitle: false,
    path: "/other_terms",
    url: `${wikiUrl}/System`,
    anchor: "System",
    text: {
      p1: (
        <p>
          A system is a group of interacting or interrelated elements that act
          according to a set of rules to form a unified whole. A system,
          surrounded and influenced by its environment, is described by its
          boundaries, structure and purpose and expressed in its functioning.
          Systems are the subjects of study of systems theory and other systems
          sciences.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Complex system",
    isLargerTitle: false,
    path: "/other_terms",
    url: `${wikiUrl}/Complex_system`,
    anchor: "Complex_system",
    text: {
      p1: (
        <p>
          A complex system is a system composed of many components which may
          interact with each other. Examples of complex systems are Earth's
          global climate, organisms, the human brain, infrastructure such as
          power grid, transportation or communication systems, complex software
          and electronic systems, social and economic organizations (like
          cities), an ecosystem, a living cell, and ultimately the entire
          universe.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Lexical semantics",
    isLargerTitle: false,
    path: "/other_terms",
    url: `${wikiUrl}/Lexical_semantics`,
    anchor: "Lexical_semantics",
    text: {
      p1: (
        <p>
          Lexical semantics (also known as lexicosemantics), as a subfield of
          linguistic semantics, is the study of word meanings. It includes the
          study of how words structure their meaning, how they act in grammar
          and compositionality, and the relationships between the distinct
          senses and uses of a word.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Identifier",
    isLargerTitle: false,
    path: "/other_terms",
    url: `${wikiUrl}/Identifier`,
    anchor: "Identifier",
    text: {
      p1: (
        <p>
          An identifier is a name that identifies (that is, labels the identity
          of) either a unique object or a unique class of objects, where the
          "object" or class may be an idea, physical countable object (or class
          thereof), or physical noncountable substance (or class thereof). The
          abbreviation ID often refers to identity, identification (the process
          of identifying), or an identifier (that is, an instance of
          identification). An identifier may be a word, number, letter, symbol,
          or any combination of those.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Structured program theorem",
    isLargerTitle: false,
    path: "/other_terms",
    url: `${wikiUrl}/Structured_program_theorem`,
    anchor: "Structured_ program_theorem",
    text: {
      p1: (
        <p>
          The structured program theorem, also called the Böhm–Jacopini theorem,
          is a result in programming language theory. It states that a class of
          control-flow graphs (historically called flowcharts in this context)
          can compute any computable function if it combines subprograms in only
          three specific ways (control structures).
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Recursion",
    isLargerTitle: false,
    path: "/other_terms",
    url: `${wikiUrl}/Recursion`,
    anchor: "Recursion",
    text: {
      p1: (
        <p>
          Recursion (adjective: recursive) occurs when a thing is defined in
          terms of itself or of its type. Recursion is used in a variety of
          disciplines ranging from linguistics to logic. The most common
          application of recursion is in mathematics and computer science, where
          a function being defined is applied within its own definition. While
          this apparently defines an infinite number of instances (function
          values), it is often done in such a way that no infinite loop or
          infinite chain of references ("crock recursion") can occur.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Systems theory",
    isLargerTitle: false,
    path: "/other_terms",
    url: `${wikiUrl}/Systems_theory`,
    anchor: "Systems_theory",
    text: {
      p1: (
        <p>
          Systems theory is the interdisciplinary study of systems, i.e.
          cohesive groups of interrelated, interdependent components that can be
          natural or human-made. Every system has causal boundaries, is
          influenced by its context, defined by its structure, function and
          role, and expressed through its relations with other systems. A system
          is "more than the sum of its parts" by expressing synergy or emergent
          behavior.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Interdisciplinarity",
    isLargerTitle: false,
    path: "/other_terms",
    url: `${wikiUrl}/Interdisciplinarity`,
    anchor: "Interdisciplinarity",
    text: {
      p1: (
        <p>
          Interdisciplinarity or interdisciplinary studies involves the
          combination of two or more academic disciplines into one activity
          (e.g., a research project). It draws knowledge from several other
          fields like sociology, anthropology, psychology, economics etc. It is
          about creating something by thinking across boundaries. It is related
          to an interdiscipline or an interdisciplinary field, which is an
          organizational unit that crosses traditional boundaries between
          academic disciplines or schools of thought, as new needs and
          professions emerge. Large engineering teams are usually
          interdisciplinary, as a power station or mobile phone or other project
          requires the melding of several specialties. However, the term
          "interdisciplinary" is sometimes confined to academic settings.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Computational linguistics",
    isLargerTitle: false,
    path: "/other_terms",
    url: `${wikiUrl}/Computational_linguistics`,
    anchor: "Computational_linguistics",
    text: {
      p1: (
        <p>
          Computational linguistics is an interdisciplinary field concerned with
          the computational modelling of natural language, as well as the study
          of appropriate computational approaches to linguistic questions. In
          general, computational linguistics draws upon linguistics, computer
          science, artificial intelligence, mathematics, logic, philosophy,
          cognitive science, cognitive psychology, psycholinguistics,
          anthropology and neuroscience, among others.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Granularity",
    isLargerTitle: false,
    path: "/other_terms",
    url: `${wikiUrl}/Granularity`,
    anchor: "Granularity",
    text: {
      p1: (
        <p>
          Granularity (also called graininess), the condition of existing in
          granules or grains, refers to the extent to which a material or system
          is composed of distinguishable pieces. It can either refer to the
          extent to which a larger entity is subdivided, or the extent to which
          groups of smaller indistinguishable entities have joined together to
          become larger distinguishable entities.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Readability",
    isLargerTitle: false,
    path: "/other_terms",
    url: `${wikiUrl}/Readability`,
    anchor: "Readability",
    text: {
      p1: (
        <p>
          Readability is the ease with which a reader can understand a written
          text. In natural language, the readability of text depends on its
          content (the complexity of its vocabulary and syntax) and its
          presentation (such as typographic aspects that affect legibility, like
          font size, line height, character spacing, and line length).
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Creativity",
    isLargerTitle: false,
    path: "/other_terms",
    url: `${wikiUrl}/Creativity`,
    anchor: "Creativity",
    text: {
      p1: (
        <p>
          Creativity is a phenomenon whereby something new and valuable is
          formed. The created item may be intangible (such as an idea, a
          scientific theory, a musical composition, or a joke) or a physical
          object (such as an invention, a printed literary work, or a painting).
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Truth",
    isLargerTitle: false,
    path: "/other_terms",
    url: `${wikiUrl}/Truth`,
    anchor: "Truth",
    text: {
      p1: (
        <p>
          Truth is the property of being in accord with fact or reality. In
          everyday language, truth is typically ascribed to things that aim to
          represent reality or otherwise correspond to it, such as beliefs,
          propositions, and declarative sentences.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Fact",
    isLargerTitle: false,
    path: "/other_terms",
    url: `${wikiUrl}/Fact`,
    anchor: "Fact",
    text: {
      p1: (
        <p>
          A fact is something that is true. The usual test for a statement of
          fact is verifiability, that is whether it can be demonstrated to
          correspond to experience. Standard reference works are often used to
          check facts. Scientific facts are verified by repeatable careful
          observation or measurement by experiments or other means.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Reality",
    isLargerTitle: false,
    path: "/other_terms",
    url: `${wikiUrl}/Reality`,
    anchor: "Reality",
    text: {
      p1: (
        <p>
          Reality is the sum or aggregate of all that is real or existent within
          a system, as opposed to that which is only imaginary. The term is also
          used to refer to the ontological status of things, indicating their
          existence.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Object of the mind",
    isLargerTitle: false,
    path: "/other_terms",
    url: `${wikiUrl}/Object_of_the_mind`,
    anchor: "Object_of_the_mind",
    text: {
      p1: (
        <p>
          An object of the mind is an object that exists in the imagination, but
          which, in the real world, can only be represented or modeled. Some
          such objects are abstractions, literary concepts, or fictional
          scenarios.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Knowledge",
    isLargerTitle: false,
    path: "/other_terms",
    url: `${wikiUrl}/Knowledge`,
    anchor: "Knowledge",
    text: {
      p1: (
        <p>
          Knowledge is a familiarity or awareness, of someone or something, such
          as facts (descriptive knowledge), skills (procedural knowledge), or
          objects (acquaintance knowledge), often contributing to understanding.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Understanding",
    isLargerTitle: false,
    path: "/other_terms",
    url: `${wikiUrl}/Understanding`,
    anchor: "Understanding",
    text: {
      p1: (
        <p>
          Understanding is a psychological process related to an abstract or
          physical object, such as a person, situation, or message whereby one
          is able to use concepts to model that object. Understanding is a
          relation between the knower and an object of understanding.
          Understanding implies abilities and dispositions with respect to an
          object of knowledge that are sufficient to support intelligent
          behavior.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "I/O scheduling",
    isLargerTitle: false,
    path: "/other_terms",
    url: `${wikiUrl}/I/O_scheduling`,
    anchor: "I/O_scheduling",
    text: {
      p1: (
        <p>
          Input/output (I/O) scheduling is the method that computer operating
          systems use to decide in which order I/O operations will be submitted
          to storage volumes. I/O scheduling is sometimes called disk
          scheduling.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Signal",
    isLargerTitle: false,
    path: "/other_terms",
    url: `${wikiUrl}/Signal`,
    anchor: "Signal",
    text: {
      p1: (
        <p>
          In signal processing, a signal is a function that conveys information
          about a phenomenon. Any quantity that can vary over space or time can
          be used as a signal to share messages between observers.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Message",
    isLargerTitle: false,
    path: "/other_terms",
    url: `${wikiUrl}/Message`,
    anchor: "Message",
    text: {
      p1: (
        <p>
          A message is a discrete unit of communication intended by the source
          for consumption by some recipient or group of recipients. A message
          may be delivered by various means, including courier, telegraphy,
          carrier pigeon and electronic bus. A message can be the content of a
          broadcast. An interactive exchange of messages forms a conversation.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Simulation hypothesis",
    isLargerTitle: false,
    path: "/other_terms",
    url: `${wikiUrl}/Simulation_hypothesis`,
    anchor: "Simulation_hypothesis",
    text: {
      p1: (
        <p>
          The simulation hypothesis proposes that all of our existence is a
          simulated reality, such as a computer simulation which convinces its
          inhabitants that the simulation is "real".
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Model",
    isLargerTitle: false,
    path: "/other_terms",
    url: `${wikiUrl}/Model`,
    anchor: "Model",
    text: {
      p1: (
        <p>
          A model is an informative representation of an object, person or
          system. The term originally denoted the plans of a building in late
          16th-century English, and derived via French and Italian ultimately
          from Latin modulus, a measure.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Decision-making",
    isLargerTitle: false,
    path: "/other_terms",
    url: `${wikiUrl}/Decision-making`,
    anchor: "Decision-making",
    text: {
      p1: (
        <p>
          In psychology, decision-making (also spelled decision making and
          decisionmaking) is regarded as the cognitive process resulting in the
          selection of a belief or a course of action among several possible
          alternative options. It could be either rational or irrational. The
          decision-making process is a reasoning process based on assumptions of
          values, preferences and beliefs of the decision-maker. Every
          decision-making process produces a final choice, which may or may not
          prompt action.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Choice",
    isLargerTitle: false,
    path: "/other_terms",
    url: `${wikiUrl}/Choice`,
    anchor: "Choice",
    text: {
      p1: (
        <p>
          A choice is the range of different things from which a being can
          choose.The arrival at a choice may incorporate motivators and models.
          For example, a traveler might choose a route for a journey based on
          the preference of arriving at a given destination at a specified time.
          The preferred (and therefore chosen) route can then account for
          information such as the length of each of the possible routes, the
          amount of fuel in the vehicle, traffic conditions, etc.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Choice architecture",
    isLargerTitle: false,
    path: "/other_terms",
    url: `${wikiUrl}/Choice_architecture`,
    anchor: "Choice_architecture",
    text: {
      p1: (
        <p>
          Choice architecture is the design of different ways in which choices
          can be presented to decision makers, and the impact of that
          presentation on decision-making.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Symbol",
    isLargerTitle: false,
    path: "/other_terms",
    url: `${wikiUrl}/Symbol`,
    anchor: "Symbol",
    text: {
      p1: (
        <p>
          A symbol is a mark, sign, or word that indicates, signifies, or is
          understood as representing an idea, object, or relationship. Symbols
          allow people to go beyond what is known or seen by creating linkages
          between otherwise very different concepts and experiences. All
          communication (and data processing) is achieved through the use of
          symbols. Symbols take the form of words, sounds, gestures, ideas, or
          visual images and are used to convey other ideas and beliefs.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Meditation",
    isLargerTitle: false,
    path: "/other_terms",
    url: `${wikiUrl}/Meditation`,
    anchor: "Meditation",
    text: {
      p1: (
        <p>
          Meditation is a practice in which an individual uses a technique -
          such as mindfulness, or focusing the mind on a particular object,
          thought, or activity - to train attention and awareness, and achieve a
          mentally clear and emotionally calm and stable state.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Construction",
    isLargerTitle: false,
    path: "/other_terms",
    url: `${wikiUrl}/Construction`,
    anchor: "Construction",
    text: {
      p1: (
        <p>
          Construction is a general term meaning the art and science to form
          objects, systems, or organizations, and comes from Latin constructio
          (from com- "together" and struere "to pile up") and Old French
          construction. To construct is the verb: the act of building, and the
          noun is construction: how something is built, the nature of its
          structure.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Building material",
    isLargerTitle: false,
    path: "/other_terms",
    url: `${wikiUrl}/Building_material`,
    anchor: "Building_material",
    text: {
      p1: (
        <p>
          Building material is material used for construction. Many naturally
          occurring substances, such as clay, rocks, sand, wood, and even twigs
          and leaves, have been used to construct buildings. Apart from
          naturally occurring materials, many man-made products are in use, some
          more and some less synthetic. The manufacturing of building materials
          is an established industry in many countries and the use of these
          materials is typically segmented into specific specialty trades, such
          as carpentry, insulation, plumbing, and roofing work. They provide the
          make-up of habitats and structures including homes.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Motivation",
    isLargerTitle: false,
    path: "/other_terms",
    url: `${wikiUrl}/Motivation`,
    anchor: "Motivation",
    text: {
      p1: (
        <p>
          Motivation is the reason for which humans and other animals initiate,
          continue, or terminate a behavior at a given time. Motivational states
          are commonly understood as forces acting within the agent that create
          a disposition to engage in goal-directed behavior. It is often held
          that different mental states compete with each other and that only the
          strongest state determines behavior. This means that we can be
          motivated to do something without actually doing it. The paradigmatic
          mental state providing motivation is desire. But various other states,
          such as beliefs about what one ought to do or intentions, may also
          provide motivation. Motivation is derived from the word 'motive,'
          which denotes a person's needs, desires, wants, or urges. It is the
          process of motivating individuals to take action in order to achieve a
          goal. The psychological elements fueling people's behavior in the
          context of job goals might include a desire for money.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Analysis paralysis",
    isLargerTitle: false,
    path: "/other_terms",
    url: `${wikiUrl}/Analysis_paralysis`,
    anchor: "Analysis_paralysis",
    text: {
      p1: (
        <p>
          Analysis paralysis (or paralysis by analysis) describes an individual
          or group process where overanalyzing or overthinking a situation can
          cause forward motion or decision-making to become "paralyzed", meaning
          that no solution or course of action is decided upon within a natural
          time frame. A situation may be deemed too complicated and a decision
          is never made, or made much too late, due to anxiety that a
          potentially larger problem may arise. A person may desire a perfect
          solution, but may fear making a decision that could result in error,
          while on the way to a better solution. Equally, a person may hold that
          a superior solution is a short step away, and stall in its endless
          pursuit, with no concept of diminishing returns. On the opposite end
          of the time spectrum is the phrase extinct by instinct, which is
          making a fatal decision based on hasty judgment or a gut reaction.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Cognition",
    isLargerTitle: false,
    path: "/other_terms",
    url: `${wikiUrl}/Cognition`,
    anchor: "Cognition",
    text: {
      p1: (
        <p>
          Cognition refers to "the mental action or process of acquiring
          knowledge and understanding through thought, experience, and the
          senses". It encompasses all aspects of intellectual functions and
          processes such as: perception, attention, thought, intelligence, the
          formation of knowledge, memory and working memory, judgment and
          evaluation, reasoning and computation, problem solving and decision
          making, comprehension and production of language. Imagination is also
          a cognitive process, it is considered as such because it involves
          thinking about possibilities. Cognitive processes use existing
          knowledge and discover new knowledge.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Analytical skill",
    islargertitle: false,
    path: "/other_terms",
    url: `${wikiUrl}/Analytical_skill`,
    anchor: "Analytical_skill",
    text: {
      p1: (
        <p>
          analytical skill is the ability to deconstruct information into
          smaller categories in order to draw conclusions. analytical skill
          consists of categories that include logical reasoning, critical
          thinking, communication, research, data analysis and creativity.
          analytical skill is taught in contemporary education with the
          intention of fostering the appropriate practises for future
          professions. the professions that adopt analytical skill include
          educational institutions, public institutions, community organisations
          and industry
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Abstract and concrete",
    islargertitle: false,
    path: "/other_terms",
    url: `${wikiUrl}/Abstract_and_concrete`,
    anchor: "Abstract_and_concrete",
    text: {
      p1: (
        <p>
          In metaphysics, the distinction between abstract and concrete refers
          to a divide between two types of entities. Many philosophers hold that
          this difference has fundamental metaphysical significance. Examples of
          concrete objects include plants, human beings and planets while things
          like numbers, sets and propositions are abstract objects.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Abstract structure",
    islargertitle: false,
    path: "/other_terms",
    url: `${wikiUrl}/Abstract_structure`,
    anchor: "Abstract_structure",
    text: {
      p1: (
        <p>
          An abstract structure is a hypostatic abstraction that is defined by a
          set of laws, properties and relationships in a way that is logically
          if not always historically independent of the structure of contingent
          experiences, for example, those involving physical objects. Abstract
          structures are studied not only in logic and mathematics but in the
          fields that apply them, as computer science, and in the studies that
          reflect on them, such as philosophy (especially the philosophy of
          mathematics). Indeed, modern mathematics has been defined in a very
          general sense as the study of abstract structures (by the Bourbaki
          group: see discussion there, at algebraic structure and also
          structure).
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Hypostatic abstraction",
    islargertitle: false,
    path: "/other_terms",
    url: `${wikiUrl}/Hypostatic_abstraction`,
    anchor: "Hypostatic_abstraction",
    text: {
      p1: (
        <p>
          Hypostatic abstraction in mathematical logic, also known as hypostasis
          or subjectal abstraction, is a formal operation that transforms a
          predicate into a relation; for example "Honey is sweet" is transformed
          into "Honey has sweetness". The relation is created between the
          original subject and a new term that represents the property expressed
          by the original predicate.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Methodology",
    islargertitle: false,
    path: "/other_terms",
    url: `${wikiUrl}/Methodology`,
    anchor: "Methodology",
    text: {
      p1: (
        <p>
          In its most common sense, methodology is the study of research
          methods. However, the term can also refer to the methods themselves or
          to the philosophical discussion of associated background assumptions.
          A method is a structured procedure for bringing about a certain goal.
          In the context of research, this goal is usually to discover new
          knowledge or to verify pre-existing knowledge claims. This normally
          involves various steps, like choosing a sample, collecting data from
          this sample, and interpreting this data. The study of methods involves
          a detailed description and analysis of these processes. It includes
          evaluative aspects by comparing different methods to assess their
          advantages and disadvantages relative to different research goals and
          situations. This way, a methodology can help make the research process
          efficient and reliable by guiding researchers on which method to
          employ at each step. These descriptions and evaluations of methods
          often depend on philosophical background assumptions. The assumptions
          are about issues like how the studied phenomena are to be
          conceptualized, what constitutes evidence for or against them, and
          what the general goal of research is. When understood in the widest
          sense, methodology also includes the discussion of these more abstract
          issues.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Data collection",
    islargertitle: false,
    path: "/other_terms",
    url: `${wikiUrl}/Data_collection`,
    anchor: "Data_collection",
    text: {
      p1: (
        <p>
          Data collection is the process of gathering and measuring information
          on targeted variables in an established system, which then enables one
          to answer relevant questions and evaluate outcomes. Data collection is
          a research component in all study fields, including physical and
          social sciences, humanities, and business. While methods vary by
          discipline, the emphasis on ensuring accurate and honest collection
          remains the same. The goal for all data collection is to capture
          quality evidence that allows analysis to lead to the formulation of
          convincing and credible answers to the questions that have been posed.
          Data collection and validation consists of four steps when it involves
          taking a census and seven steps when it involves sampling.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Data model",
    islargertitle: false,
    path: "/other_terms",
    url: `${wikiUrl}/Data_model`,
    anchor: "Data_model",
    text: {
      p1: (
        <p>
          A data model is an abstract model that organizes elements of data and
          standardizes how they relate to one another and to the properties of
          real-world entities. For instance, a data model may specify that the
          data element representing a car be composed of a number of other
          elements which, in turn, represent the color and size of the car and
          define its owner.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Information system",
    islargertitle: false,
    path: "/other_terms",
    url: `${wikiUrl}/Information_system`,
    anchor: "Information_system",
    text: {
      p1: (
        <p>
          An information system (IS) is a formal, sociotechnical, organizational
          system designed to collect, process, store, and distribute
          information. From a sociotechnical perspective, information systems
          are composed by four components: task, people, structure (or roles),
          and technology. Information systems can be defined as an integration
          of components for collection, storage and processing of data of which
          the data is used to provide information, contribute to knowledge as
          well as digital products that facilitate decision making.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Data processing",
    islargertitle: false,
    path: "/other_terms",
    url: `${wikiUrl}/Data_processing`,
    anchor: "Data_processing",
    text: {
      p1: (
        <p>
          Data processing is the collection and manipulation of data to produce
          meaningful information. Data processing is a form of information
          processing, which is the modification (processing) of information in
          any manner detectable by an observer.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Information processing",
    islargertitle: false,
    path: "/other_terms",
    url: `${wikiUrl}/Information_processing`,
    anchor: "Information_processing",
    text: {
      p1: (
        <p>
          Information processing is the change (processing) of information in
          any manner detectable by an observer. As such, it is a process that
          describes everything that happens (changes) in the universe, from the
          falling of a rock (a change in position) to the printing of a text
          file from a digital computer system. In the latter case, an
          information processor (the printer) is changing the form of
          presentation of that text file (from bytes to glyphs). The computers
          up to this period function on the basis of programs saved in the
          memory, having no intelligence of their own.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Data processing system",
    islargertitle: false,
    path: "/other_terms",
    url: `${wikiUrl}/Data_processing_system`,
    anchor: "Data_processing_system",
    text: {
      p1: (
        <p>
          A data processing system is a combination of machines, people, and
          processes that for a set of inputs produces a defined set of outputs.
          The inputs and outputs are interpreted as data, facts, information
          etc. depending on the interpreter's relation to the system.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Information processor",
    islargertitle: false,
    path: "/other_terms",
    url: `${wikiUrl}/Information_processor`,
    anchor: "Information_processor",
    text: {
      p1: (
        <p>
          An information processor or information processing system, as its name
          suggests, is a private content (be it electrical, mechanical or
          biological) which takes information (a sequence of enumerated symbols
          or states) in one form and processes (transforms) it into another
          form, e.g. to statistics, by an algorithmic process.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Communication",
    islargertitle: false,
    path: "/other_terms",
    url: `${wikiUrl}/Communication`,
    anchor: "Communication",
    text: {
      p1: (
        <p>
          Communication (from Latin: communicare, meaning "to share" or "to be
          in relation with") is "an apparent answer to the painful divisions
          between self and other, private and public, and inner thought and
          outer world." As this definition indicates, communication is difficult
          to define in a consistent manner, because in common use it refers to a
          very wide range of different behaviours involved in the propagation of
          information. John Peters argues the difficulty of defining
          communication emerges from the fact that communication is both a
          universal phenomenon (because everyone communicates) and a specific
          discipline of institutional academic study.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Units of information",
    islargertitle: false,
    path: "/other_terms",
    url: `${wikiUrl}/Units_of_information`,
    anchor: "Units_of_information",
    text: {
      p1: (
        <p>
          In computing and telecommunications, a unit of information is the
          capacity of some standard data storage system or communication
          channel, used to measure the capacities of other systems and channels.
          In information theory, units of information are also used to measure
          information contained in messages and the entropy of random variables.{" "}
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Reference",
    islargertitle: false,
    path: "/other_terms",
    url: `${wikiUrl}/Reference`,
    anchor: "Reference",
    text: {
      p1: (
        <p>
          Reference is a relationship between objects in which one object
          designates, or acts as a means by which to connect to or link to,
          another object. The first object in this relation is said to refer to
          the second object. It is called a name for the second object. The
          second object, the one to which the first object refers, is called the
          referent of the first object. A name is usually a phrase or
          expression, or some other symbolic representation. Its referent may be
          anything - a material object, a person, an event, an activity, or an
          abstract concept.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Name",
    islargertitle: false,
    path: "/other_terms",
    url: `${wikiUrl}/Name`,
    anchor: "Name",
    text: {
      p1: (
        <p>
          A name is a term used for identification by an external observer. They
          can identify a class or category of things, or a single thing, either
          uniquely, or within a given context. The entity identified by a name
          is called its referent. A personal name identifies, not necessarily
          uniquely, a specific individual human. The name of a specific entity
          is sometimes called a proper name (although that term has a
          philosophical meaning as well) and is, when consisting of only one
          word, a proper noun. Other nouns are sometimes called "common names"
          or (obsolete) "general names". A name can be given to a person, place,
          or thing; for example, parents can give their child a name or a
          scientist can give an element a name.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Referent",
    islargertitle: false,
    path: "/other_terms",
    url: `${wikiUrl}/Referent`,
    anchor: "Referent",
    text: {
      p1: (
        <p>
          A referent is a person or thing to which a name - a linguistic
          expression or other symbol - refers. For example, in the sentence Mary
          saw me, the referent of the word Mary is the particular person called
          Mary who is being spoken of, while the referent of the word me is the
          person uttering the sentence.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Collation",
    islargertitle: false,
    path: "/other_terms",
    url: `${wikiUrl}/Collation`,
    anchor: "Collation",
    text: {
      p1: (
        <p>
          Collation is the assembly of written information into a standard
          order. Many systems of collation are based on numerical order or
          alphabetical order, or extensions and combinations thereof. Collation
          is a fundamental element of most office filing systems, library
          catalogs, and reference books.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Categorization",
    islargertitle: false,
    path: "/other_terms",
    url: `${wikiUrl}/Categorization`,
    anchor: "Categorization",
    text: {
      p1: (
        <p>
          Categorization is the ability and activity of recognizing shared
          features or similarities between the elements of the experience of the
          world (such as objects, events, or ideas), organizing and classifying
          experience by associating them to a more abstract group (that is, a
          category, class, or type), on the basis of their traits, features,
          similarities or other criteria that are universal to the group.
          Categorization is considered one of the most fundamental cognitive
          abilities, and as such it is studied particularly by psychology and
          cognitive linguistics.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Experience",
    islargertitle: false,
    path: "/other_terms",
    url: `${wikiUrl}/Experience`,
    anchor: "Experience",
    text: {
      p1: (
        <p>
          Experience refers to conscious events in general, more specifically to
          perceptions, or to the practical knowledge and familiarity that is
          produced by these conscious processes. Understood as a conscious event
          in the widest sense, experience involves a subject to which various
          items are presented. In this sense, seeing a yellow bird on a branch
          presents the subject with the objects "bird" and "branch", the
          relation between them and the property "yellow". Unreal items may be
          included as well, which happens when experiencing hallucinations or
          dreams. When understood in a more restricted sense, only sensory
          consciousness counts as experience. In this sense, experience is
          usually identified with perception and contrasted with other types of
          conscious events, like thinking or imagining. In a slightly different
          sense, experience refers not to the conscious events themselves but to
          the practical knowledge and familiarity they produce. In this sense,
          it is important that direct perceptual contact with the external world
          is the source of knowledge. So an experienced hiker is someone who
          actually lived through many hikes, not someone who merely read many
          books about hiking. This is associated both with recurrent past
          acquaintance and the abilities learned through them.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Sorting",
    isLargerTitle: false,
    path: "/other_terms",
    url: `${wikiUrl}/Sorting`,
    anchor: "Sorting",
    text: {
      p1: (
        <p>
          Sorting is any process of arranging items systematically, and has two
          common, yet distinct meanings: 1. ordering: arranging items in a
          sequence ordered by some criterion; 2. categorizing: grouping items
          with similar properties.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Knowledge representation and reasoning",
    isLargerTitle: false,
    path: "/other_terms",
    url: `${wikiUrl}/Knowledge_representation_and_reasoning`,
    anchor: "Knowledge_representation_and_reasoning",
    text: {
      p1: (
        <p>
          Knowledge representation and reasoning is the field of artificial
          intelligence (AI) dedicated to representing information about the
          world in a form that a computer system can use to solve complex tasks
          such as diagnosing a medical condition or having a dialog in a natural
          language. Knowledge representation incorporates findings from
          psychology about how humans solve problems and represent knowledge in
          order to design formalisms that will make complex systems easier to
          design and build. Knowledge representation and reasoning also
          incorporates findings from logic to automate various kinds of
          reasoning, such as the application of rules or the relations of sets
          and subsets.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Data integration",
    isLargerTitle: false,
    path: "/other_terms",
    url: `${wikiUrl}/Data_integration`,
    anchor: "Data_integration",
    text: {
      p1: (
        <p>
          Data integration involves combining data residing in different sources
          and providing users with a unified view of them. This process becomes
          significant in a variety of situations, which include both commercial
          (such as when two similar companies need to merge their databases) and
          scientific (combining research results from different bioinformatics
          repositories, for example) domains. Data integration appears with
          increasing frequency as the volume (that is, big data) and the need to
          share existing data explodes. It has become the focus of extensive
          theoretical work, and numerous open problems remain unsolved. Data
          integration encourages collaboration between internal as well as
          external users. The data being integrated must be received from a
          heterogeneous database system and transformed to a single coherent
          data store that provides synchronous data across a network of files
          for clients. A common use of data integration is in data mining when
          analyzing and extracting information from existing databases that can
          be useful for Business information.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Irreversible process",
    isLargerTitle: false,
    path: "/other_terms",
    url: `${wikiUrl}/Irreversible_process`,
    anchor: "Irreversible_process",
    text: {
      p1: (
        <p>
          In science, a process that is not reversible is called irreversible.
          This concept arises frequently in thermodynamics. All complex natural
          processes are irreversible, although a phase transition at the
          coexistence temperature (e.g. melting of ice cubes in water) is well
          approximated as reversible.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Reversible process (thermodynamics)",
    isLargerTitle: false,
    path: "/other_terms",
    url: `${wikiUrl}/Reversible_process_(thermodynamics)`,
    anchor: "Reversible_process_(thermodynamics)",
    text: {
      p1: (
        <p>
          In thermodynamics, a reversible process is a process, involving a
          system and its surroundings, whose direction can be reversed by
          infinitesimal changes in some properties of the surroundings, such as
          pressure or temperature.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Causality",
    isLargerTitle: false,
    path: "/other_terms",
    url: `${wikiUrl}/Causality`,
    anchor: "Causality",
    text: {
      p1: (
        <p>
          Causality (also referred to as causation, or cause and effect) is
          influence by which one event, process, state, or object (a cause)
          contributes to the production of another event, process, state, or
          object (an effect) where the cause is partly responsible for the
          effect, and the effect is partly dependent on the cause. In general, a
          process has many causes, which are also said to be causal factors for
          it, and all lie in its past. An effect can in turn be a cause of, or
          causal factor for, many other effects, which all lie in its future.
          Some writers have held that causality is metaphysically prior to
          notions of time and space.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Progress",
    isLargerTitle: false,
    path: "/other_terms",
    url: `${wikiUrl}/Progress`,
    anchor: "Progress",
    text: {
      p1: (
        <p>
          Progress is the movement towards a refined, improved, or otherwise
          desired state. In the context of progressivism, it refers to the
          proposition that advancements in technology, science, and social
          organization have resulted, and by extension will continue to result,
          in an improved human condition; the latter may happen as a result of
          direct human action, as in social enterprise or through activism, or
          as a natural part of sociocultural evolution.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Atom",
    isLargerTitle: false,
    path: "/other_terms",
    url: `${wikiUrl}/Atom`,
    anchor: "Atom",
    text: {
      p1: (
        <p>
          An atom is the smallest unit of ordinary matter that forms a chemical
          element. Every solid, liquid, gas, and plasma is composed of neutral
          or ionized atoms. Atoms are extremely small, typically around 100
          picometers across. They are so small that accurately predicting their
          behavior using classical physics, as if they were tennis balls for
          example, is not possible due to quantum effects.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Result",
    isLargerTitle: false,
    path: "/other_terms",
    url: `${wikiUrl}/Result`,
    anchor: "Result",
    text: {
      p1: (
        <p>
          A result (also called upshot) is the final consequence of a sequence
          of actions or events expressed qualitatively or quantitatively.
          Possible results include advantage, disadvantage, gain, injury, loss,
          value and victory. There may be a range of possible outcomes
          associated with an event depending on the point of view, historical
          distance or relevance. Reaching no result can mean that actions are
          inefficient, ineffective, meaningless or flawed.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Process (engineering)",
    isLargerTitle: false,
    path: "/other_terms",
    url: `${wikiUrl}/Process_(engineering)`,
    anchor: "Process_(engineering)",
    text: {
      p1: (
        <p>
          In engineering, a process is a series of interrelated tasks that,
          together, transform inputs into a given output. These tasks may be
          carried out by people, nature or machines using various resources; an
          engineering process must be considered in the context of the agents
          carrying out the tasks and the resource attributes involved. Systems
          engineering normative documents and those related to Maturity Models
          are typically based on processes, for example, systems engineering
          processes of the EIA-632 and processes involved in the Capability
          Maturity Model Integration (CMMI) institutionalization and improvement
          approach. Constraints imposed on the tasks and resources required to
          implement them are essential for executing the tasks mentioned.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Chronology",
    isLargerTitle: false,
    path: "/other_terms",
    url: `${wikiUrl}/Chronology`,
    anchor: "Chronology",
    text: {
      p1: (
        <p>
          Chronology is the science of arranging events in their order of
          occurrence in time. Consider, for example, the use of a timeline or
          sequence of events. It is also "the determination of the actual
          temporal sequence of past events".
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "State-space representation",
    isLargerTitle: false,
    path: "/other_terms",
    url: `${wikiUrl}/State-space_representation`,
    anchor: "State-space_representation",
    text: {
      p1: (
        <p>
          In control engineering, a state-space representation is a mathematical
          model of a physical system as a set of input, output and state
          variables related by first-order differential equations or difference
          equations. State variables are variables whose values evolve over time
          in a way that depends on the values they have at any given time and on
          the externally imposed values of input variables. Output variables'
          values depend on the values of the state variables.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Black box",
    isLargerTitle: false,
    path: "/other_terms",
    url: `${wikiUrl}/Black_box`,
    anchor: "Black_box",
    text: {
      p1: (
        <p>
          In science, computing, and engineering, a black box is a system which
          can be viewed in terms of its inputs and outputs (or transfer
          characteristics), without any knowledge of its internal workings. Its
          implementation is "opaque" (black). The term can be used to refer to
          many inner workings, such as the ones of a transistor, an engine, an
          algorithm, the human brain, or an institution or government.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Principle of compositionality",
    islargertitle: false,
    path: "/other_terms",
    url: `${wikiUrl}/Principle_of_compositionality`,
    anchor: "Principle_of_compositionality",
    text: {
      p1: (
        <p>
          In semantics, mathematical logic and related disciplines, the
          principle of compositionality is the principle that the meaning of a
          complex expression is determined by the meanings of its constituent
          expressions and the rules used to combine them. This principle is also
          called Frege's principle, because Gottlob Frege is widely credited for
          the first modern formulation of it. The principle was never explicitly
          stated by Frege, and it was arguably already assumed by George Boole
          decades before Frege's work.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Trade-off",
    islargertitle: false,
    path: "/other_terms",
    url: `${wikiUrl}/Trade-off`,
    anchor: "Trade-off",
    text: {
      p1: (
        <p>
          In semantics, mathematical logic and related disciplines, the
          principle of compositionality is the principle that the meaning of a
          complex expression is determined by the meanings of its constituent
          expressions and the rules used to combine them. This principle is also
          called Frege's principle, because Gottlob Frege is widely credited for
          the first modern formulation of it. The principle was never explicitly
          stated by Frege, and it was arguably already assumed by George Boole
          decades before Frege's work.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Binary number",
    islargertitle: false,
    path: "/other_terms",
    url: `${wikiUrl}/Binary_number`,
    anchor: "Binary_number",
    text: {
      p1: (
        <p>
          A binary number is a number expressed in the base-2 numeral system or
          binary numeral system, a method of mathematical expression which uses
          only two symbols: typically "0" (zero) and "1" (one).
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Data storage",
    islargertitle: false,
    path: "/other_terms",
    url: `${wikiUrl}/Data_storage`,
    anchor: "Data_storage",
    text: {
      p1: (
        <p>
          Data storage is the recording (storing) of information (data) in a
          storage medium. Handwriting, phonographic recording, magnetic tape,
          and optical discs are all examples of storage media. Some authors even
          propose that DNA is a natural data storage mechanism. Recording may be
          accomplished with virtually any form of energy. Electronic data
          storage requires electrical power to store and retrieve data.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Numeral system",
    islargertitle: false,
    path: "/other_terms",
    url: `${wikiUrl}/Numeral_system`,
    anchor: "Numeral_system",
    text: {
      p1: (
        <p>
          A numeral system (or system of numeration) is a writing system for
          expressing numbers; that is, a mathematical notation for representing
          numbers of a given set, using digits or other symbols in a consistent
          manner.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Formula",
    islargertitle: false,
    path: "/other_terms",
    url: `${wikiUrl}/Formula`,
    anchor: "Formula",
    text: {
      p1: (
        <p>
          In science, a formula is a concise way of expressing information
          symbolically, as in a mathematical formula or a chemical formula. The
          informal use of the term formula in science refers to the general
          construct of a relationship between given quantities.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Computer data storage",
    islargertitle: false,
    path: "/other_terms",
    url: `${wikiUrl}/Computer_data_storage`,
    anchor: "Computer_data_storage",
    text: {
      p1: (
        <p>
          Computer data storage is a technology consisting of computer
          components and recording media that are used to retain digital data.
          It is a core function and fundamental component of computers.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Information science",
    islargertitle: false,
    path: "/other_terms",
    url: `${wikiUrl}/Information_science`,
    anchor: "Information_science",
    text: {
      p1: (
        <p>
          Information science (also known as information studies) is an academic
          field which is primarily concerned with analysis, collection,
          classification, manipulation, storage, retrieval, movement,
          dissemination, and protection of information.[1] Practitioners within
          and outside the field study the application and the usage of knowledge
          in organizations in addition to the interaction between people,
          organizations, and any existing information systems with the aim of
          creating, replacing, improving, or understanding the information
          systems.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Sequential logic",
    islargertitle: false,
    path: "/other_terms",
    url: `${wikiUrl}/Sequential_logic`,
    anchor: "Sequential_logic",
    text: {
      p1: (
        <p>
          In automata theory, sequential logic is a type of logic circuit whose
          output depends on the present value of its input signals and on the
          sequence of past inputs, the input history. This is in contrast to
          combinational logic, whose output is a function of only the present
          input. That is, sequential logic has state (memory) while
          combinational logic does not.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Self",
    islargertitle: false,
    path: "/other_terms",
    url: `${wikiUrl}/Self`,
    anchor: "Self",
    text: {
      p1: (
        <p>
          The self is an individual as the object of its own reflective
          consciousness. Since the self is a reference by a subject to the same
          subject, this reference is necessarily subjective. The sense of having
          a self—or selfhood—should, however, not be confused with subjectivity
          itself. Ostensibly, this sense is directed outward from the subject to
          refer inward, back to its "self" (or itself). Examples of psychiatric
          conditions where such "sameness" may become broken include
          depersonalization, which sometimes occurs in schizophrenia: the self
          appears different from the subject.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Curiosity",
    islargertitle: false,
    path: "/other_terms",
    url: `${wikiUrl}/Curiosity`,
    anchor: "Curiosity",
    text: {
      p1: (
        <p>
          Curiosity is a quality related to inquisitive thinking such as
          exploration, investigation, and learning, evident by observation in
          humans and other animals. Curiosity is heavily associated with all
          aspects of human development, in which derives the process of learning
          and desire to acquire knowledge and skill.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Mental model",
    islargertitle: false,
    path: "/other_terms",
    url: `${wikiUrl}/Mental_model`,
    anchor: "Mental_model",
    text: {
      p1: (
        <p>
          A mental model is an explanation of someone's thought process about
          how something works in the real world. It is a representation of the
          surrounding world, the relationships between its various parts and a
          person's intuitive perception about their own acts and their
          consequences. Mental models can help shape behaviour and set an
          approach to solving problems (similar to a personal algorithm) and
          doing tasks. A mental model is a kind of internal symbol or
          representation of external reality, hypothesized to play a major role
          in cognition, reasoning and decision-making. Kenneth Craik suggested
          in 1943 that the mind constructs "small-scale models" of reality that
          it uses to anticipate events.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Behavior",
    islargertitle: false,
    path: "/other_terms",
    url: `${wikiUrl}/Behavior`,
    anchor: "Behavior",
    text: {
      p1: (
        <p>
          Behavior (American English) or behaviour (British English) is the
          range of actions and mannerisms made by individuals, organisms,
          systems or artificial entities in some environment. These systems can
          include other systems or organisms as well as the inanimate physical
          environment. It is the computed response of the system or organism to
          various stimuli or inputs, whether internal or external, conscious or
          subconscious, overt or covert, and voluntary or involuntary.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Intention",
    islargertitle: false,
    path: "/other_terms",
    url: `${wikiUrl}/Intention`,
    anchor: "Intention",
    text: {
      p1: (
        <p>
          Intentions are mental states in which the agent commits themselves to
          a course of action. Having the plan to visit the zoo tomorrow is an
          example of an intention. The action plan is the content of the
          intention while the commitment is the attitude towards this content.
          Other mental states can have action plans as their content, as when
          one admires a plan, but differ from intentions since they do not
          involve a practical commitment to realizing this plan. Successful
          intentions bring about the intended course of action while
          unsuccessful intentions fail to do so. Intentions, like many other
          mental states, have intentionality: they represent possible states of
          affairs.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Concept map",
    islargertitle: false,
    path: "/other_terms",
    url: `${wikiUrl}/Concept_map`,
    anchor: "Concept_map",
    text: {
      p1: (
        <p>
          A concept map or conceptual diagram is a diagram that depicts
          suggested relationships between concepts. Concept maps may be used by
          instructional designers, engineers, technical writers, and others to
          organize and structure knowledge.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Measurement",
    islargertitle: false,
    path: "/other_terms",
    url: `${wikiUrl}/Measurement`,
    anchor: "Measurement",
    text: {
      p1: (
        <p>
          Measurement is the quantification of attributes of an object or event,
          which can be used to compare with other objects or events. In other
          words, measurement is a process of determining how large or small a
          physical quantity is as compared to a basic reference quantity of the
          same kind. The scope and application of measurement are dependent on
          the context and discipline. In natural sciences and engineering,
          measurements do not apply to nominal properties of objects or events,
          which is consistent with the guidelines of the International
          vocabulary of metrology published by the International Bureau of
          Weights and Measures. However, in other fields such as statistics as
          well as the social and behavioural sciences, measurements can have
          multiple levels, which would include nominal, ordinal, interval and
          ratio scales.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Class (knowledge representation)",
    islargertitle: false,
    path: "/other_terms",
    url: `${wikiUrl}/Class_(knowledge_representation)`,
    anchor: "Class_(knowledge_representation)",
    text: {
      p1: (
        <p>
          In knowledge representation, a class is a collection of individuals or
          objects. A class can be defined either by extension (specifying
          members), or by intension (specifying conditions), using what is
          called in some ontology languages like OWL. According to the
          Type-token distinction, the ontology is divided into individuals, who
          are real worlds objects, or events, and types, or classes, who are
          sets of real world objects. Class expressions or definitions gives the
          properties that the individuals must fulfill to be members of the
          class. Individuals that fulfill the property are called Instances.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Concept learning",
    islargertitle: false,
    path: "/other_terms",
    url: `${wikiUrl}/Concept_learning`,
    anchor: "Concept_learning",
    text: {
      p1: (
        <p>
          Concept learning, also known as category learning, concept attainment,
          and concept formation, is defined by Bruner, Goodnow, & Austin (1967)
          as "the search for and listing of attributes that can be used to
          distinguish exemplars from non exemplars of various categories".[quote
          citation needed] More simply put, concepts are the mental categories
          that help us classify objects, events, or ideas, building on the
          understanding that each object, event, or idea has a set of common
          relevant features. Thus, concept learning is a strategy which requires
          a learner to compare and contrast groups or categories that contain
          concept-relevant features with groups or categories that do not
          contain concept-relevant features.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Formal concept analysis",
    islargertitle: false,
    path: "/other_terms",
    url: `${wikiUrl}/Formal_concept_analysis`,
    anchor: "Formal_concept_analysis",
    text: {
      p1: (
        <p>
          In information science, formal concept analysis (FCA) is a principled
          way of deriving a concept hierarchy or formal ontology from a
          collection of objects and their properties. Each concept in the
          hierarchy represents the objects sharing some set of properties; and
          each sub-concept in the hierarchy represents a subset of the objects
          (as well as a superset of the properties) in the concepts above it.
          The term was introduced by Rudolf Wille in 1981, and builds on the
          mathematical theory of lattices and ordered sets that was developed by
          Garrett Birkhoff and others in the 1930s.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Formal language",
    islargertitle: false,
    path: "/other_terms",
    url: `${wikiUrl}/Formal_language`,
    anchor: "Formal_language",
    text: {
      p1: (
        <p>
          In logic, mathematics, computer science, and linguistics, a formal
          language consists of words whose letters are taken from an alphabet
          and are well-formed according to a specific set of rules.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Symbol (formal)",
    islargertitle: false,
    path: "/other_terms",
    url: `${wikiUrl}/Symbol_(formal)`,
    anchor: "Symbol_(formal)",
    text: {
      p1: (
        <p>
          A logical symbol is a fundamental concept in logic, tokens of which
          may be marks or a configuration of marks which form a particular
          pattern.[citation needed] Although the term "symbol" in common use
          refers at some times to the idea being symbolized, and at other times
          to the marks on a piece of paper or chalkboard which are being used to
          express that idea; in the formal languages studied in mathematics and
          logic, the term "symbol" refers to the idea, and the marks are
          considered to be a token instance of the symbol.[dubious - discuss] In
          logic, symbols build literal utility to illustrate ideas.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Communication source",
    islargertitle: false,
    path: "/other_terms",
    url: `${wikiUrl}/Communication_source`,
    anchor: "Communication_source",
    text: {
      p1: (
        <p>
          A source or sender is one of the basic concepts of communication and
          information processing. Sources are objects which encode message data
          and transmit the information, via a channel, to one or more observers
          (or receivers).
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Code",
    islargertitle: false,
    path: "/other_terms",
    url: `${wikiUrl}/Code`,
    anchor: "Code",
    text: {
      p1: (
        <p>
          In communications and information processing, code is a system of
          rules to convert information—such as a letter, word, sound, image, or
          gesture—into another form, sometimes shortened or secret, for
          communication through a communication channel or storage in a storage
          medium. An early example is an invention of language, which enabled a
          person, through speech, to communicate what they thought, saw, heard,
          or felt to others. But speech limits the range of communication to the
          distance a voice can carry and limits the audience to those present
          when the speech is uttered. The invention of writing, which converted
          spoken language into visual symbols, extended the range of
          communication across space and time.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "File format",
    islargertitle: false,
    path: "/other_terms",
    url: `${wikiUrl}/File_format`,
    anchor: "File_format",
    text: {
      p1: (
        <p>
          A file format is a standard way that information is encoded for
          storage in a computer file. It specifies how bits are used to encode
          information in a digital storage medium. File formats may be either
          proprietary or free.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Electronic data interchange",
    islargertitle: false,
    path: "/other_terms",
    url: `${wikiUrl}/Electronic_data_interchange`,
    anchor: "Electronic_data_interchange",
    text: {
      p1: (
        <p>
          Electronic data interchange (EDI) is the concept of businesses
          electronically communicating information that was traditionally
          communicated on paper, such as purchase orders and invoices. Technical
          standards for EDI exist to facilitate parties transacting such
          instruments without having to make special arrangements.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Structured analysis",
    isLargerTitle: false,
    path: "/other_terms",
    url: `${wikiUrl}/Structured_analysis`,
    anchor: "Structured_analysis",
    text: {
      p1: (
        <p>
          In software engineering, structured analysis (SA) and structured
          design (SD) are methods for analyzing business requirements and
          developing specifications for converting practices into computer
          programs, hardware configurations, and related manual procedures.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Systems analysis",
    isLargerTitle: false,
    path: "/other_terms",
    url: `${wikiUrl}/Systems_analysis`,
    anchor: "Systems_analysis",
    text: {
      p1: (
        <p>
          Systems analysis is "the process of studying a procedure or business
          to identify its goal and purposes and create systems and procedures
          that will efficiently achieve them". Another view sees system analysis
          as a problem-solving technique that breaks down a system into its
          component pieces, and how well those parts work and interact to
          accomplish their purpose.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Concurrent computing",
    isLargerTitle: false,
    path: "/other_terms",
    url: `${wikiUrl}/Concurrent_computing`,
    anchor: "Concurrent_computing",
    text: {
      p1: (
        <p>
          Concurrent computing is a form of computing in which several
          computations are executed concurrently—during overlapping time
          periods—instead of sequentially—with one completing before the next
          starts.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Modular design",
    isLargerTitle: false,
    path: "/other_terms",
    url: `${wikiUrl}/Modular_design`,
    anchor: "Modular_design",
    text: {
      p1: (
        <p>
          Modular design, or modularity in design, is a design principle that
          subdivides a system into smaller parts called modules (such as modular
          process skids), which can be independently created, modified,
          replaced, or exchanged with other modules or between different
          systems.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Data structure diagram",
    isLargerTitle: false,
    path: "/other_terms",
    url: `${wikiUrl}/Data_structure_diagram`,
    anchor: "Data_structure_diagram",
    text: {
      p1: (
        <p>
          Data structure diagram (DSD) is a diagram of the conceptual data model
          which documents the entities and their relationships, as well as the
          constraints that connect to them.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Entity–relationship model",
    isLargerTitle: false,
    path: "/other_terms",
    url: `${wikiUrl}/Entity–relationship_model`,
    anchor: "Entity–relationship_model",
    text: {
      p1: (
        <p>
          An entity–relationship model (or ER model) describes interrelated
          things of interest in a specific domain of knowledge. A basic ER model
          is composed of entity types (which classify the things of interest)
          and specifies relationships that can exist between entities (instances
          of those entity types).
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Phenomenon",
    isLargerTitle: false,
    path: "/other_terms",
    url: `${wikiUrl}/Phenomenon`,
    anchor: "Phenomenon",
    text: {
      p1: (
        <p>
          A phenomenon is an observable event. The term came into its modern
          philosophical usage through Immanuel Kant, who contrasted it with the
          noumenon, which cannot be directly observed. Kant was heavily
          influenced by Gottfried Wilhelm Leibniz in this part of his
          philosophy, in which phenomenon and noumenon serve as interrelated
          technical terms. Far predating this, the ancient Greek Pyrrhonist
          philosopher Sextus Empiricus also used phenomenon and noumenon as
          interrelated technical terms.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Document-oriented database",
    isLargerTitle: false,
    path: "/other_terms",
    url: `${wikiUrl}/Document-oriented_database`,
    anchor: "Document-oriented_database",
    text: {
      p1: (
        <p>
          A document-oriented database, or document store, is a computer program
          and data storage system designed for storing, retrieving and managing
          document-oriented information, also known as semi-structured data.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Metadata",
    isLargerTitle: false,
    path: "/other_terms",
    url: `${wikiUrl}/Metadata`,
    anchor: "Metadata",
    text: {
      p1: (
        <p>
          Metadata is "data that provides information about other data", but not
          the content of the data, such as the text of a message or the image
          itself. There are many distinct types of metadata, including:
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Web resource",
    isLargerTitle: false,
    path: "/other_terms",
    url: `${wikiUrl}/Web_resource`,
    anchor: "Web_resource",
    text: {
      p1: (
        <p>
          A web resource is any identifiable resource (digital, physical, or
          abstract) present on or connected to the World Wide Web. Resources are
          identified using Uniform Resource Identifiers (URI). In the Semantic
          Web, web resources and their semantic properties are described using
          the Resource Description Framework (RDF).
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Nomenclature",
    isLargerTitle: false,
    path: "/other_terms",
    url: `${wikiUrl}/Nomenclature`,
    anchor: "Nomenclature",
    text: {
      p1: (
        <p>
          Nomenclature (UK: /nəˈmɛŋkləˌtʃər/, US: /ˈnoʊmənˌkleɪtʃər/) is a
          system of names or terms, or the rules for forming these terms in a
          particular field of arts or sciences. The principles of naming vary
          from the relatively informal conventions of everyday speech to the
          internationally agreed principles, rules and recommendations that
          govern the formation and use of the specialist terms used in
          scientific and any other disciplines.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Organizational theory",
    isLargerTitle: false,
    path: "/other_terms",
    url: `${wikiUrl}/Organizational_theory`,
    anchor: "Organizational_theory",
    text: {
      p1: (
        <p>
          A theory involves concepts or constructs that are related in such a
          way as to explain why certain phenomena occur. An organizational
          theory involves a set of concepts/constructs that are related to each
          other and explain how individuals behave in social units we call
          organizations. Organizational theory also attempts to explain how
          interrelated units of organization do or do not connect with each
          other. Organizational theory also concerns understanding how groups of
          individuals behave, which may differ from the behavior of an
          individual. The behavior organizational theory often focuses on is
          goal-directed. Organizational theory can cover intra-organizational as
          well as inter-organizational fields of study.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Organizational structure",
    isLargerTitle: false,
    path: "/other_terms",
    url: `${wikiUrl}/Organizational_structure`,
    anchor: "Organizational_structure",
    text: {
      p1: (
        <p>
          An organizational structure defines how activities such as task
          allocation, coordination, and supervision are directed toward the
          achievement of organizational aims.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Management science",
    isLargerTitle: false,
    path: "/other_terms",
    url: `${wikiUrl}/Management_science`,
    anchor: "Management_science",
    text: {
      p1: (
        <p>
          Management science or Managerial Science (MS) is a wide and
          interdisciplinary study of solving complex problems and making
          strategic decisions as it pertains to institutions, corporations,
          governments and other types of organizational entities. It is closely
          related to management, economics, business, engineering, management
          consulting, and other fields. It uses various scientific
          research-based principles, strategies, and analytical methods
          including mathematical modeling, statistics and numerical algorithms
          and aims to improve an organization's ability to enact rational and
          accurate management decisions by arriving at optimal or near optimal
          solutions to complex decision problems.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Theory",
    isLargerTitle: false,
    path: "/other_terms",
    url: `${wikiUrl}/Theory`,
    anchor: "Theory",
    text: {
      p1: (
        <p>
          A theory is a rational type of abstract thinking about a phenomenon,
          or the results of such thinking. The process of contemplative and
          rational thinking is often associated with such processes as
          observational study or research. Theories may be scientific, belong to
          a non-scientific discipline, or no discipline at all. Depending on the
          context, a theory's assertions might, for example, include generalized
          explanations of how nature works. The word has its roots in ancient
          Greek, but in modern use it has taken on several related meanings.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Diagram",
    isLargerTitle: false,
    path: "/other_terms",
    url: `${wikiUrl}/Diagram`,
    anchor: "Diagram",
    text: {
      p1: (
        <p>
          A diagram is a symbolic representation of information using
          visualization techniques. Diagrams have been used since prehistoric
          times on walls of caves, but became more prevalent during the
          Enlightenment. Sometimes, the technique uses a three-dimensional
          visualization which is then projected onto a two-dimensional surface.
          The word graph is sometimes used as a synonym for diagram.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Random access",
    isLargerTitle: false,
    path: "/other_terms",
    url: `${wikiUrl}/Random_access`,
    anchor: "Random_access",
    text: {
      p1: (
        <p>
          Random access (more precisely and more generally called direct access)
          is the ability to access an arbitrary element of a sequence in equal
          time or any datum from a population of addressable elements roughly as
          easily and efficiently as any other, no matter how many elements may
          be in the set. In computer science it is typically contrasted to
          sequential access which requires data to be retrieved in the order it
          was stored.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Sequential access",
    isLargerTitle: false,
    path: "/other_terms",
    url: `${wikiUrl}/Sequential_access`,
    anchor: "Sequential_access",
    text: {
      p1: (
        <p>
          Sequential access is a term describing a group of elements (such as
          data in a memory array or a disk file or on magnetic tape data
          storage) being accessed in a predetermined, ordered sequence. It is
          the opposite of random access, the ability to access an arbitrary
          element of a sequence as easily and efficiently as any other at any
          time.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Instruction cycle",
    isLargerTitle: false,
    path: "/other_terms",
    url: `${wikiUrl}/Instruction_cycle`,
    anchor: "Instruction_cycle",
    text: {
      p1: (
        <p>
          The instruction cycle (also known as the fetch–decode–execute cycle,
          or simply the fetch-execute cycle) is the cycle that the central
          processing unit (CPU) follows from boot-up until the computer has shut
          down in order to process instructions. It is composed of three main
          stages: the fetch stage, the decode stage, and the execute stage.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Computer hardware",
    isLargerTitle: false,
    path: "/other_terms",
    url: `${wikiUrl}/Computer_hardware`,
    anchor: "Computer_hardware",
    text: {
      p1: (
        <p>
          Computer hardware includes the physical parts of a computer, such as
          the case, central processing unit (CPU), random access memory (RAM),
          monitor, mouse, keyboard, computer data storage, graphics card, sound
          card, speakers and motherboard.
        </p>
      ),
    },
  },
];

export const contentsLength = termsContents.length;

let subpathContents = [];

export const termsContentsAddedSubpath = addSubpath(
  subpathContents,
  contentsLength,
  termsContents
);
