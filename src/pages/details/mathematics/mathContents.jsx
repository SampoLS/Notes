import { v4 as uuidv4 } from "uuid";
import addSubpath from "../../../utils/addSubpath";
const wikiUrl = "https://en.wikipedia.org/wiki";

export const mathContents = [
  {
    id: uuidv4(),
    title: "Mathematics",
    isLargerTitle: true,
    path: "/math",
    url: `${wikiUrl}/Mathematics`,
    anchor: "Mathematics",
    text: {
      p1: (
        <p>
          Mathematics is an area of knowledge that includes such topics as
          numbers (arithmetic and number theory), formulas and related
          structures (algebra), shapes and the spaces in which they are
          contained (geometry), and quantities and their changes (calculus and
          analysis). Most mathematical activity involves the use of pure reason
          to discover or prove the properties of abstract objects, which consist
          of either abstractions from nature or—in modern mathematics—entities
          that are stipulated with certain properties, called axioms. A
          mathematical proof consists of a succession of applications of some
          deductive rules to already known results, including previously proved
          theorems, axioms and (in case of abstraction from nature) some basic
          properties that are considered as true starting points of the theory
          under consideration.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Portal:Mathematics",
    isLargerTitle: true,
    path: "/math",
    url: `${wikiUrl}/Portal:Mathematics`,
    anchor: "Portal:Mathematics",
    text: {
      p1: (
        <p>
          Mathematics is the study of representing and reasoning about abstract
          objects (such as numbers, points, spaces, sets, structures, and
          games).
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Matrix (mathematics)",
    isLargerTitle: false,
    path: "/math",
    url: `${wikiUrl}/Matrix_(mathematics)`,
    anchor: "Matrix_(mathematics)",
    text: {
      p1: (
        <p>In mathematics, a matrix (plural matrices) is a rectangular array or table of numbers, symbols, or expressions, arranged in rows and columns, which is used to represent a mathematical object or a property of such an object.</p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Dynamical system",
    isLargerTitle: false,
    path: "/math",
    url: `${wikiUrl}/Dynamical_system`,
    anchor: "Dynamical_system",
    text: {
      p1: (
        <p>In mathematics, a dynamical system is a system in which a function describes the time dependence of a point in an ambient space, such as in a parametric curve. Examples include the mathematical models that describe the swinging of a clock pendulum, the flow of water in a pipe, the random motion of particles in the air, and the number of fish each springtime in a lake. The most general definition unifies several concepts in mathematics such as ordinary differential equations and ergodic theory by allowing different choices of the space and how time is measured. Time can be measured by integers, by real or complex numbers or can be a more general algebraic object, losing the memory of its physical origin, and the space may be a manifold or simply a set, without the need of a smooth space-time structure defined on it.</p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Vertex (graph theory)",
    isLargerTitle: false,
    path: "/math",
    url: `${wikiUrl}/Vertex_(graph_theory)`,
    anchor: "Vertex_(graph_theory)",
    text: {
      p1: (
        <p>In discrete mathematics, and more specifically in graph theory, a vertex (plural vertices) or node is the fundamental unit of which graphs are formed: an undirected graph consists of a set of vertices and a set of edges (unordered pairs of vertices), while a directed graph consists of a set of vertices and a set of arcs (ordered pairs of vertices). In a diagram of a graph, a vertex is usually represented by a circle with a label, and an edge is represented by a line or arrow extending from one vertex to another.</p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Mathematical model",
    isLargerTitle: false,
    path: "/math",
    url: `${wikiUrl}/Mathematical_model`,
    anchor: "Mathematical_model",
    text: {
      p1: (
        <p>A mathematical model is an abstract description of a concrete system using mathematical concepts and language. The process of developing a mathematical model is termed mathematical modeling. Mathematical models are used in applied mathematics and in the natural sciences (such as physics, biology, earth science, chemistry) and engineering disciplines (such as computer science, electrical engineering), as well as in non-physical systems such as the social sciences (such as economics, psychology, sociology, political science). It can also be taught as a subject in its own right.</p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Category (mathematics)",
    isLargerTitle: false,
    path: "/math",
    url: `${wikiUrl}/Category_(mathematics)`,
    anchor: "Category_(mathematics)",
    text: {
      p1: (
        <p>In mathematics, a category (sometimes called an abstract category to distinguish it from a concrete category) is a collection of "objects" that are linked by "arrows". A category has two basic properties: the ability to compose the arrows associatively and the existence of an identity arrow for each object. A simple example is the category of sets, whose objects are sets and whose arrows are functions.</p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Ratio",
    isLargerTitle: false,
    path: "/math",
    url: `${wikiUrl}/Ratio`,
    anchor: "Ratio",
    text: {
      p1: (
        <p>In mathematics, a ratio shows how many times one number contains another. For example, if there are eight oranges and six lemons in a bowl of fruit, then the ratio of oranges to lemons is eight to six (that is, 8:6, which is equivalent to the ratio 4:3). Similarly, the ratio of lemons to oranges is 6:8 (or 3:4) and the ratio of oranges to the total amount of fruit is 8:14 (or 4:7).</p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Rate (mathematics)",
    isLargerTitle: false,
    path: "/math",
    url: `${wikiUrl}/Rate_(mathematics)`,
    anchor: "Rate_(mathematics)",
    text: {
      p1: (
        <p>In mathematics, a rate is the ratio between two related quantities in different units. If the denominator of the ratio is expressed as a single unit of one of these quantities, and if it is assumed that this quantity can be changed systematically (i.e., is an independent variable), then the numerator of the ratio expresses the corresponding rate of change in the other (dependent) variable.</p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Real number",
    isLargerTitle: false,
    path: "/math",
    url: `${wikiUrl}/Real_number`,
    anchor: "Real_number",
    text: {
      p1: (
        <p>In mathematics, a real number is a number that can be used to measure a continuous one-dimensional quantity such as a distance, duration or temperature. Here, continuous means that values can have arbitrarily small variations.[a] Every real number can be almost uniquely represented by an infinite decimal expansion.</p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Infinitesimal",
    isLargerTitle: false,
    path: "/math",
    url: `${wikiUrl}/Infinitesimal`,
    anchor: "Infinitesimal",
    text: {
      p1: (
        <p>In mathematics, an infinitesimal number is a quantity that is closer to zero than any standard real number, but that is not zero. The word infinitesimal comes from a 17th-century Modern Latin coinage infinitesimus, which originally referred to the "infinity-th" item in a sequence.</p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Element (mathematics)",
    isLargerTitle: false,
    path: "/math",
    url: `${wikiUrl}/Element_(mathematics)`,
    anchor: "Element_(mathematics)",
    text: {
      p1: (
        <p>
          In mathematics, an element (or member) of a set is any one of the
          distinct objects that belong to that set.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Set (mathematics)",
    isLargerTitle: false,
    path: "/math",
    url: `${wikiUrl}/Set_(mathematics)`,
    anchor: "Set_(mathematics)",
    text: {
      p1: (
        <p>
          A set is the mathematical model for a collection of different things;
          a set contains elements or members, which can be mathematical objects
          of any kind: numbers, symbols, points in space, lines, other
          geometrical shapes, variables, or even other sets. The set with no
          element is the empty set; a set with a single element is a singleton.
          A set may have a finite number of elements or be an infinite set. Two
          sets are equal if they have precisely the same elements.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Probability",
    isLargerTitle: false,
    path: "/math",
    url: `${wikiUrl}/Probability`,
    anchor: "Probability",
    text: {
      p1: (
        <p>
          Probability is the branch of mathematics concerning numerical
          descriptions of how likely an event is to occur, or how likely it is
          that a proposition is true. The probability of an event is a number
          between 0 and 1, where, roughly speaking, 0 indicates impossibility of
          the event and 1 indicates certainty. The higher the probability of an
          event, the more likely it is that the event will occur. A simple
          example is the tossing of a fair (unbiased) coin. Since the coin is
          fair, the two outcomes ("heads" and "tails") are both equally
          probable; the probability of "heads" equals the probability of
          "tails"; and since no other outcomes are possible, the probability of
          either "heads" or "tails" is 1/2 (which could also be written as 0.5
          or 50%).
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Sequence",
    isLargerTitle: false,
    path: "/math",
    url: `${wikiUrl}/Sequence`,
    anchor: "Sequence",
    text: {
      p1: (
        <p>
          In mathematics, a sequence is an enumerated collection of objects in
          which repetitions are allowed and order matters. Like a set, it
          contains members (also called elements, or terms). The number of
          elements (possibly infinite) is called the length of the sequence.
          Unlike a set, the same elements can appear multiple times at different
          positions in a sequence, and unlike a set, the order does matter.
          Formally, a sequence can be defined as a function from natural numbers
          (the positions of elements in the sequence) to the elements at each
          position. The notion of a sequence can be generalized to an indexed
          family, defined as a function from an index set that may not be
          numbers to another set of elements.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Truth value",
    isLargerTitle: false,
    path: "/math",
    url: `${wikiUrl}/Truth_value`,
    anchor: "Truth_value",
    text: {
      p1: (
        <p>
          In logic and mathematics, a truth value, sometimes called a logical
          value, is a value indicating the relation of a proposition to truth.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Natural number",
    isLargerTitle: false,
    path: "/math",
    url: `${wikiUrl}/Natural_number`,
    anchor: "Natural_number",
    text: {
      p1: (
        <p>
          In mathematics, the natural numbers are those numbers used for
          counting (as in "there are six coins on the table") and ordering (as
          in "this is the third largest city in the country").
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Arithmetic",
    isLargerTitle: false,
    path: "/math",
    url: `${wikiUrl}/Arithmetic`,
    anchor: "Arithmetic",
    text: {
      p1: (
        <p>
          Arithmetic (from Ancient Greek ἀριθμός (arithmós) 'number', and τική
          [τέχνη] (tikḗ [tékhnē]) 'art, craft') is an elementary part of
          mathematics that consists of the study of the properties of the
          traditional operations on numbers—addition, subtraction,
          multiplication, division, exponentiation, and extraction of roots. In
          the 19th century, Italian mathematician Giuseppe Peano formalized
          arithmetic with his Peano axioms, which are highly important to the
          field of mathematical logic today.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Real number",
    isLargerTitle: false,
    path: "/math",
    url: `${wikiUrl}/Real_number`,
    anchor: "Real_number",
    text: {
      p1: (
        <p>
          In mathematics, a real number is a value of a continuous quantity that
          can represent a distance along a line (or alternatively, a quantity
          that can be represented as an infinite decimal expansion). The
          adjective real in this context was introduced in the 17th century by
          René Descartes, who distinguished between real and imaginary roots of
          polynomials. The real numbers include all the rational numbers, such
          as the integer -5 and the fraction 4/3, and all the irrational
          numbers, such as 2 (1.41421356..., the square root of 2, an irrational
          algebraic number). Included within the irrationals are the real
          transcendental numbers, such as π (3.14159265...). Real numbers can be
          used to measure (approximately) physical observables such as time,
          mass, energy; and in one dimension, distance, velocity, acceleration,
          force, momentum, etc. The set of real numbers is denoted using the
          symbol R or R \mathbb and is sometimes called "the reals".
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Mathematical notation",
    isLargerTitle: false,
    path: "/math",
    url: `${wikiUrl}/Mathematical_notation`,
    anchor: "Mathematical_notation",
    text: {
      p1: (
        <p>
          Mathematical notation consists of using symbols for representing
          operations, unspecified numbers, relations and any other mathematical
          objects, and assembling them into expressions and formulas.
          Mathematical notation is widely used in mathematics, science, and
          engineering for representing complex concepts and properties in a
          concise, unambiguous and accurate way.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Number",
    isLargerTitle: false,
    path: "/math",
    url: `${wikiUrl}/Number`,
    anchor: "Number",
    text: {
      p1: (
        <p>
          A number is a mathematical object used to count, measure, and label.
          The original examples are the natural numbers 1, 2, 3, 4, and so
          forth. Numbers can be represented in language with number words. More
          universally, individual numbers can be represented by symbols, called
          numerals; for example, "5" is a numeral that represents the number
          five. As only a relatively small number of symbols can be memorized,
          basic numerals are commonly organized in a numeral system, which is an
          organized way to represent any number. The most common numeral system
          is the Hindu-Arabic numeral system, which allows for the
          representation of any number using a combination of ten fundamental
          numeric symbols, called digits. In addition to their use in counting
          and measuring, numerals are often used for labels (as with telephone
          numbers), for ordering (as with serial numbers), and for codes (as
          with ISBNs). In common usage, a numeral is not clearly distinguished
          from the number that it represents.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Operation (mathematics)",
    isLargerTitle: false,
    path: "/math",
    url: `${wikiUrl}/Operation_(mathematics)`,
    anchor: "Operation_(mathematics)",
    text: {
      p1: (
        <p>
          In mathematics, an operation is a function which takes zero or more
          input values (called operands) to a well-defined output value. The
          number of operands (also known as arguments) is the arity of the
          operation.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Arity",
    isLargerTitle: false,
    path: "/math",
    url: `${wikiUrl}/Arity`,
    anchor: "Arity",
    text: {
      p1: (
        <p>
          Arity is the number of arguments or operands taken by a function,
          operation or relation in logic, mathematics, and computer science. In
          mathematics, arity may also be named rank, but this word can have many
          other meanings in mathematics. In logic and philosophy, it is also
          called adicity and degree. In linguistics, it is usually named
          valency.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Argument of a function",
    isLargerTitle: false,
    path: "/math",
    url: `${wikiUrl}/Argument_of_a_function`,
    anchor: "Argument_of_a_function",
    text: {
      p1: (
        <p>
          In mathematics, an argument of a function is a value provided to
          obtain the function's result. It is also called an independent
          variable.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Operand",
    isLargerTitle: false,
    path: "/math",
    url: `${wikiUrl}/Operand`,
    anchor: "Operand",
    text: {
      p1: (
        <p>
          In mathematics, an operand is the object of a mathematical operation,
          i.e., it is the object or quantity that is operated on.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Binary operation",
    isLargerTitle: false,
    path: "/math",
    url: `${wikiUrl}/Binary_operation`,
    anchor: "Binary_operation",
    text: {
      p1: (
        <p>
          In mathematics, a binary operation or dyadic operation is a rule for
          combining two elements (called operands) to produce another element.
          More formally, a binary operation is an operation of arity two.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Relation (mathematics)",
    isLargerTitle: false,
    path: "/math",
    url: `${wikiUrl}/Relation_(mathematics)`,
    anchor: "Relation_(mathematics)",
    text: {
      p1: (
        <p>
          In mathematics, a binary relation is a general concept that defines
          some relation between the elements of two sets. It is a generalization
          of the more commonly understood idea of a mathematical function, but
          with fewer restrictions. A binary relation over sets X and Y is a set
          of ordered pairs (x, y) consisting of elements x in X and y in Y. It
          encodes the common concept of relation: an element x is related to an
          element y, if and only if the pair (x, y) belongs to the set of
          ordered pairs that defines the binary relation. A binary relation is
          the most studied special case n = 2 of an n-ary relation over sets X1,
          ..., Xn, which is a subset of the Cartesian product X1 × ... × Xn.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Formalism (philosophy of mathematics)",
    isLargerTitle: false,
    path: "/math",
    url: `${wikiUrl}/Formalism_(philosophy_of_mathematics)`,
    anchor: "Formalism_(philosophy_of_mathematics)",
    text: {
      p1: (
        <p>
          In the philosophy of mathematics, formalism is the view that holds
          that statements of mathematics and logic can be considered to be
          statements about the consequences of the manipulation of strings
          (alphanumeric sequences of symbols, usually as equations) using
          established manipulation rules. A central idea of formalism "is that
          mathematics is not a body of propositions representing an abstract
          sector of reality, but is much more akin to a game, bringing with it
          no more commitment to an ontology of objects or properties than ludo
          or chess." According to formalism, the truths expressed in logic and
          mathematics are not about numbers, sets, or triangles or any other
          coextensive subject matter — in fact, they aren't "about" anything at
          all. Rather, mathematical statements are syntactic forms whose shapes
          and locations have no meaning unless they are given an interpretation
          (or semantics). In contrast to mathematical realism, logicism, or
          intuitionism, formalism's contours are less defined due to broad
          approaches that can be categorized as formalist.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Philosophy of mathematics",
    islargertitle: false,
    path: "/math",
    url: `${wikiUrl}/Philosophy_of_mathematics`,
    anchor: "Philosophy_of_mathematics",
    text: {
      p1: (
        <p>
          The philosophy of mathematics is the branch of philosophy that studies
          the assumptions, foundations, and implications of mathematics. It aims
          to understand the nature and methods of mathematics, and find out the
          place of mathematics in people's lives. The logical and structural
          nature of mathematics itself makes this study both broad and unique
          among its philosophical counterparts.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Expression (mathematics)",
    isLargerTitle: false,
    path: "/math",
    url: `${wikiUrl}/Expression_(mathematics)`,
    anchor: "Expression_(mathematics)",
    text: {
      p1: (
        <p>
          In mathematics, an expression or mathematical expression is a finite
          combination of symbols that is well-formed according to rules that
          depend on the context. Mathematical symbols can designate numbers
          (constants), variables, operations, functions, brackets, punctuation,
          and grouping to help determine order of operations and other aspects
          of logical syntax.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Discrete mathematics",
    isLargerTitle: false,
    path: "/math",
    url: `${wikiUrl}/Discrete_mathematics`,
    anchor: "Discrete_mathematics",
    text: {
      p1: (
        <p>
          Discrete mathematics is the study of mathematical structures that can
          be considered "discrete" (in a way analogous to discrete variables,
          having a bijection with the set of natural numbers) rather than
          "continuous" (analogously to continuous functions). Objects studied in
          discrete mathematics include integers, graphs, and statements in
          logic. By contrast, discrete mathematics excludes topics in
          "continuous mathematics" such as real numbers, calculus or Euclidean
          geometry. Discrete objects can often be enumerated by integers; more
          formally, discrete mathematics has been characterized as the branch of
          mathematics dealing with countable sets (finite sets or sets with the
          same cardinality as the natural numbers). However, there is no exact
          definition of the term "discrete mathematics".
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Mathematical structure",
    isLargerTitle: false,
    path: "/math",
    url: `${wikiUrl}/Mathematical_structure`,
    anchor: "Mathematical_structure",
    text: {
      p1: (
        <p>
          In mathematics, a structure is a set endowed with some additional
          features on the set (e.g. an operation, relation, metric, or
          topology). Often, the additional features are attached or related to
          the set, so as to provide it with some additional meaning or
          significance.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Bijection",
    isLargerTitle: false,
    path: "/math",
    url: `${wikiUrl}/Bijection`,
    anchor: "Bijection",
    text: {
      p1: (
        <p>
          In mathematics, a bijection, also known as a bijective function,
          one-to-one correspondence, or invertible function, is a function
          between the elements of two sets, where each element of one set is
          paired with exactly one element of the other set, and each element of
          the other set is paired with exactly one element of the first set.
          There are no unpaired elements. In mathematical terms, a bijective
          function f: X → Y is a one-to-one (injective) and onto (surjective)
          mapping of a set X to a set Y. The term one-to-one correspondence must
          not be confused with one-to-one function (an injective function; see
          figures).
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Function (mathematics)",
    isLargerTitle: false,
    path: "/math",
    url: `${wikiUrl}/Function_(mathematics)`,
    anchor: "Function_(mathematics)",
    text: {
      p1: (
        <p>
          In mathematics, a function from a set X to a set Y assigns to each
          element of X exactly one element of Y. The set X is called the domain
          of the function and the set Y is called the codomain of the function.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Disjoint sets",
    isLargerTitle: false,
    path: "/math",
    url: `${wikiUrl}/Disjoint_sets`,
    anchor: "Disjoint_sets",
    text: {
      p1: (
        <p>
          In mathematics, two sets are said to be disjoint sets if they have no
          element in common. Equivalently, two disjoint sets are sets whose
          intersection is the empty set. For example, (1, 2, 3) and (4, 5, 6)
          are disjoint sets, while (1, 2, 3) and (3, 4, 5) are not disjoint. A
          collection of two or more sets is called disjoint if any two distinct
          sets of the collection are disjoint.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Measure (mathematics)",
    isLargerTitle: false,
    path: "/math",
    url: `${wikiUrl}/Measure_(mathematics)`,
    anchor: "Measure_(mathematics)",
    text: {
      p1: (
        <p>
          In mathematics, the concept of a measure is a generalization and
          formalization of geometrical measures (length, area, volume) and other
          common notions, such as mass and probability of events. These
          seemingly distinct concepts have many similarities and can often be
          treated together in a single mathematical context. Measures are
          foundational in probability theory, integration theory, and can be
          generalized to assume negative values, as with electrical charge.
          Far-reaching generalizations (such as spectral measures and
          projection-valued measures) of measure are widely used in quantum
          physics and physics in general.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Glossary of mathematical symbols",
    isLargerTitle: false,
    path: "/math",
    url: `${wikiUrl}/Glossary_of_mathematical_symbols`,
    anchor: "Glossary_of_mathematical_symbols",
    text: {
      p1: (
        <p>
          A mathematical symbol is a figure or a combination of figures that is
          used to represent a mathematical object, an action on mathematical
          objects, a relation between mathematical objects, or for structuring
          the other symbols that occur in a formula. As formulas are entirely
          constituted with symbols of various types, many symbols are needed for
          expressing all mathematics.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Mathematical object",
    isLargerTitle: false,
    path: "/math",
    url: `${wikiUrl}/Mathematical_object`,
    anchor: "Mathematical_object",
    text: {
      p1: (
        <p>
          A mathematical object is an abstract concept arising in mathematics.
          In the usual language of mathematics, an object is anything that has
          been (or could be) formally defined, and with which one may do
          deductive reasoning and mathematical proofs. Typically, a mathematical
          object can be a value that can be assigned to a variable, and
          therefore can be involved in formulas. Commonly encountered
          mathematical objects include numbers, sets, functions, expressions,
          geometric objects, transformations of other mathematical objects, and
          spaces. Mathematical objects can be very complex; for example,
          theorems, proofs, and even theories are considered as mathematical
          objects in proof theory.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Variable (mathematics)",
    isLargerTitle: false,
    path: "/math",
    url: `${wikiUrl}/Variable_(mathematics)`,
    anchor: "Variable_(mathematics)",
    text: {
      p1: (
        <p>
          In mathematics, a variable (from Latin variabilis, "changeable") is a
          symbol and placeholder for any mathematical object. In particular, a
          variable may represent a number, a vector, a matrix, a function, the
          argument of a function, a set, or an element of a set.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Mathematical proof",
    isLargerTitle: false,
    path: "/math",
    url: `${wikiUrl}/Mathematical_proof`,
    anchor: "Mathematical_proof",
    text: {
      p1: (
        <p>
          A mathematical proof is an inferential argument for a mathematical
          statement, showing that the stated assumptions logically guarantee the
          conclusion. The argument may use other previously established
          statements, such as theorems; but every proof can, in principle, be
          constructed using only certain basic or original assumptions known as
          axioms, along with the accepted rules of inference. Proofs are
          examples of exhaustive deductive reasoning which establish logical
          certainty, to be distinguished from empirical arguments or
          non-exhaustive inductive reasoning which establish "reasonable
          expectation". Presenting many cases in which the statement holds is
          not enough for a proof, which must demonstrate that the statement is
          true in all possible cases. A proposition that has not been proved but
          is believed to be true is known as a conjecture, or a hypothesis if
          frequently used as an assumption for further mathematical work.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Invariant (mathematics)",
    isLargerTitle: false,
    path: "/math",
    url: `${wikiUrl}/Invariant_(mathematics)`,
    anchor: "Invariant_(mathematics)",
    text: {
      p1: (
        <p>
          In mathematics, an invariant is a property of a mathematical object
          (or a class of mathematical objects) which remains unchanged after
          operations or transformations of a certain type are applied to the
          objects. The particular class of objects and type of transformations
          are usually indicated by the context in which the term is used. For
          example, the area of a triangle is an invariant with respect to
          isometries of the Euclidean plane. The phrases "invariant under" and
          "invariant to" a transformation are both used. More generally, an
          invariant with respect to an equivalence relation is a property that
          is constant on each equivalence class.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Judgment (mathematical logic)",
    isLargerTitle: false,
    path: "/math",
    url: `${wikiUrl}/Judgment_(mathematical_logic)`,
    anchor: "Judgment_(mathematical_logic)",
    text: {
      p1: (
        <p>
          In mathematical logic, a judgment (or judgement) or assertion is a
          statement or enunciation in a metalanguage. For example, typical
          judgments in first-order logic would be that a string is a well-formed
          formula, or that a proposition is true. Similarly, a judgment may
          assert the occurrence of a free variable in an expression of the
          object language, or the provability of a proposition. In general, a
          judgment may be any inductively definable assertion in the metatheory.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Graph (discrete mathematics)",
    isLargerTitle: false,
    path: "/math",
    url: `${wikiUrl}/Graph_(discrete_mathematics)`,
    anchor: "Graph_(discrete_mathematics)",
    text: {
      p1: (
        <p>
          In mathematics, and more specifically in graph theory, a graph is a
          structure amounting to a set of objects in which some pairs of the
          objects are in some sense "related". The objects correspond to
          mathematical abstractions called vertices (also called nodes or
          points) and each of the related pairs of vertices is called an edge
          (also called link or line). Typically, a graph is depicted in
          diagrammatic form as a set of dots or circles for the vertices, joined
          by lines or curves for the edges. Graphs are one of the objects of
          study in discrete mathematics.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Graph theory",
    isLargerTitle: false,
    path: "/math",
    url: `${wikiUrl}/Graph_theory`,
    anchor: "Graph_theory",
    text: {
      p1: (
        <p>
          In mathematics, graph theory is the study of graphs, which are
          mathematical structures used to model pairwise relations between
          objects. A graph in this context is made up of vertices (also called
          nodes or points) which are connected by edges (also called links or
          lines). A distinction is made between undirected graphs, where edges
          link two vertices symmetrically, and directed graphs, where edges link
          two vertices asymmetrically. Graphs are one of the principal objects
          of study in discrete mathematics.
        </p>
      ),
    },
  },
  
  {
    id: uuidv4(),
    title: "Dimension",
    isLargerTitle: false,
    path: "/math",
    url: `${wikiUrl}/Dimension`,
    anchor: "Dimension",
    text: {
      p1: (
        <p>
          In physics and mathematics, the dimension of a mathematical space (or
          object) is informally defined as the minimum number of coordinates
          needed to specify any point within it. Thus, a line has a dimension of
          one (1D) because only one coordinate is needed to specify a point on
          it - for example, the point at 5 on a number line. A surface, such as
          the boundary of a cylinder or sphere, has a dimension of two (2D)
          because two coordinates are needed to specify a point on it - for
          example, both a latitude and longitude are required to locate a point
          on the surface of a sphere. A two-dimensional Euclidean space is a
          two-dimensional space on the plane. The inside of a cube, a cylinder
          or a sphere is three-dimensional (3D) because three coordinates are
          needed to locate a point within these spaces.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Primitive notion",
    isLargerTitle: false,
    path: "/math",
    url: `${wikiUrl}/Primitive_notion`,
    anchor: "Primitive_notion",
    text: {
      p1: (
        <p>
          In mathematics, logic, philosophy, and formal systems, a primitive
          notion is a concept that is not defined in terms of previously-defined
          concepts. It is often motivated informally, usually by an appeal to
          intuition and everyday experience. In an axiomatic theory, relations
          between primitive notions are restricted by axioms. Some authors refer
          to the latter as "defining" primitive notions by one or more axioms,
          but this can be misleading. Formal theories cannot dispense with
          primitive notions, under pain of infinite regress (per the regress
          problem).
        </p>
      ),
    },
  },
  
  {
    id: uuidv4(),
    title: "Axiom",
    isLargerTitle: false,
    path: "/math",
    url: `${wikiUrl}/Axiom`,
    anchor: "Axiom",
    text: {
      p1: (
        <p>
          An axiom, postulate, or assumption is a statement that is taken to be
          true, to serve as a premise or starting point for further reasoning
          and arguments. The word comes from the Ancient Greek word ἀξίωμα
          (axíōma), meaning 'that which is thought worthy or fit' or 'that which
          commends itself as evident'.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Space (mathematics)",
    isLargerTitle: false,
    path: "/math",
    url: `${wikiUrl}/Space_(mathematics)`,
    anchor: "Space_(mathematics)",
    text: {
      p1: (
        <p>
          In mathematics, a space is a set (sometimes called a universe) with
          some added structure.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Euclidean vector",
    isLargerTitle: false,
    path: "/math",
    url: `${wikiUrl}/Euclidean_vector`,
    anchor: "Euclidean_vector",
    text: {
      p1: (
        <p>
          In mathematics, physics, and engineering, a Euclidean vector or simply
          a vector (sometimes called a geometric vector or spatial vector) is a
          geometric object that has magnitude (or length) and direction. Vectors
          can be added to other vectors according to vector algebra.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Magnitude (mathematics)",
    isLargerTitle: false,
    path: "/math",
    url: `${wikiUrl}/Magnitude_(mathematics)`,
    anchor: "Magnitude_(mathematics)",
    text: {
      p1: (
        <p>
          In mathematics, the magnitude or size of a mathematical object is a
          property which determines whether the object is larger or smaller than
          other objects of the same kind. More formally, an object's magnitude
          is the displayed result of an ordering (or ranking)—of the class of
          objects to which it belongs.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Order theory",
    isLargerTitle: false,
    path: "/math",
    url: `${wikiUrl}/Order_theory`,
    anchor: "Order_theory",
    text: {
      p1: (
        <p>
          Order theory is a branch of mathematics that investigates the
          intuitive notion of order using binary relations. It provides a formal
          framework for describing statements such as "this is less than that"
          or "this precedes that". This article introduces the field and
          provides basic definitions. A list of order-theoretic terms can be
          found in the order theory glossary.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Control point (mathematics)",
    isLargerTitle: false,
    path: "/math",
    url: `${wikiUrl}/Control_point_(mathematics)`,
    anchor: "Control_point_(mathematics)",
    text: {
      p1: (
        <p>
          In computer-aided geometric design a control point is a member of a
          set of points used to determine the shape of a spline curve or, more
          generally, a surface or higher-dimensional object.
        </p>
      ),
    },
  },
];

export const contentsLength = mathContents.length;

let subpathContents = [];

export const mathContentsAddedSubpath = addSubpath(
  subpathContents,
  contentsLength,
  mathContents
);
