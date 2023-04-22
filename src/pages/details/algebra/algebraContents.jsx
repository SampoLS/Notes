import { v4 as uuidv4 } from "uuid";
import addSubpath from "../../../utils/addSubpath";

const wikiUrl = "https://en.wikipedia.org/wiki";

export const algebraContents = [
    {
        id: uuidv4(),
        title: "Algebra",
        isLargerTitle: true,
        path: "/algebra",
        url: `${wikiUrl}/Algebra`,
        anchor: "Algebra",
        text: {
          p1: <p>Algebra is the study of variables and the rules for manipulating these variables in formulas; it is a unifying thread of almost all of mathematics.</p>
        },
    },
    {
        id: uuidv4(),
        title: "Elementary algebra",
        isLargerTitle: false,
        path: "/algebra",
        url: `${wikiUrl}/Elementary_algebra`,
        anchor: "Elementary_algebra",
        text: {
          p1: <p>Elementary algebra encompasses the basic concepts of algebra. It is often contrasted with arithmetic: arithmetic deals with specified numbers, whilst algebra introduces variables (quantities without fixed values).</p>
        },
    },
    {
        id: uuidv4(),
        title: "Boolean algebra",
        isLargerTitle: false,
        path: "/algebra",
        url: `${wikiUrl}/Boolean_algebra`,
        anchor: "Boolean_algebra",
        text: {
          p1: <p> In mathematics and mathematical logic, Boolean algebra is a branch of algebra. It differs from elementary algebra in two ways. First, the values of the variables are the truth values true and false, usually denoted 1 and 0, whereas in elementary algebra the values of the variables are numbers. Second, Boolean algebra uses logical operators such as conjunction (and) denoted as ∧, disjunction (or) denoted as ∨, and the negation (not) denoted as ¬. Elementary algebra, on the other hand, uses arithmetic operators such as addition, multiplication, subtraction and division. Boolean algebra is therefore a formal way of describing logical operations, in the same way that elementary algebra describes numerical operations.</p>
        },
    },
]

export const contentsLength = algebraContents.length;

let subpathContents = [];

export const algebraContentsAddedSubpath = addSubpath(
    subpathContents,
    contentsLength,
    algebraContents
);
