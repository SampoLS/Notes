import { v4 as uuidv4 } from "uuid";
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
];
