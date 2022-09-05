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
];

export const contentsLength = mathContents.length;

let subpathContents = [];

export const mathContentsAddedSubpath = addSubpath(
  subpathContents,
  contentsLength,
  mathContents
);
