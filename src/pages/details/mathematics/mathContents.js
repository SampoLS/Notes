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
    title: "Boolean algebra",
    isLargerTitle: false,
    path: "/math",
    url: `${wikiUrl}/Boolean_algebra`,
    anchor: "Boolean_algebra",
    text: {
      p1: (
        <p>
          In mathematics and mathematical logic, Boolean algebra is the branch
          of algebra in which the values of the variables are the truth values
          true and false, usually denoted 1 and 0, respectively. Instead of
          elementary algebra, where the values of the variables are numbers and
          the prime operations are addition and multiplication, the main
          operations of Boolean algebra are the conjunction (and) denoted as ∧,
          the disjunction (or) denoted as v, and the negation (not) denoted as
          ¬. It is thus a formalism for describing logical operations, in the
          same way that elementary algebra describes numerical operations.
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
    title: "Calculus",
    isLargerTitle: false,
    path: "/math",
    url: `${wikiUrl}/Calculus`,
    anchor: "Calculus",
    text: {
      p1: (
        <p>
          Calculus, originally called infinitesimal calculus or "the calculus of
          infinitesimals", is the mathematical study of continuous change, in
          the same way that geometry is the study of shape, and algebra is the
          study of generalizations of arithmetic operations.
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
    title: "Algebra",
    isLargerTitle: false,
    path: "/math",
    url: `${wikiUrl}/Algebra`,
    anchor: "Algebra",
    text: {
      p1: (
        <p>
          Algebra is one of the broad areas of mathematics. Roughly speaking,
          algebra is the study of mathematical symbols and the rules for
          manipulating these symbols in formulas; it is a unifying thread of
          almost all of mathematics.
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
];

export const contentsLength = mathContents.length;

let subpathContents = [];

export const mathContentsAddedSubpath = addSubpath(
  subpathContents,
  contentsLength,
  mathContents
);
