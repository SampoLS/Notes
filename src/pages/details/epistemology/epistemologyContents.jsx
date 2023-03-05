import { v4 as uuidv4 } from "uuid";
import addSubpath from "../../../utils/addSubpath";

const wikiUrl = "https://en.wikipedia.org/wiki";

export const epistemologyContents = [
    {
        id: uuidv4(),
        title: "Epistemology",
        isLargerTitle: true,
        path: "/epistemology",
        url: `${wikiUrl}/Epistemology`,
        anchor: "Epistemology",
        text: {
          p1: <p>Epistemology from Ancient Greek ἐπιστήμη (epistḗmē) 'knowledge', and -logy), or the theory of knowledge, is the branch of philosophy concerned with knowledge. Epistemology is considered a major subfield of philosophy, along with other major subfields such as ethics, logic, and metaphysics.</p>
        },
    },
    {
        id: uuidv4(),
        title: "Understanding",
        isLargerTitle: false,
        path: "/epistemology",
        url: `${wikiUrl}/Understanding`,
        anchor: "Understanding",
        text: {
          p1: <p>Understanding is a psychological process related to an abstract or physical object, such as a person, situation, or message whereby one is able to use concepts to model that object. Understanding is a relation between the knower and an object of understanding. Understanding implies abilities and dispositions with respect to an object of knowledge that are sufficient to support intelligent behavior.</p>
        },
    },
    {
        id: uuidv4(),
        title: "Knowledge",
        isLargerTitle: false,
        path: "/epistemology",
        url: `${wikiUrl}/Knowledge`,
        anchor: "Knowledge",
        text: {
          p1: <p>Knowledge is a form of awareness or familiarity. It is often understood as awareness of facts or as practical skills, and may also mean familiarity with objects or situations. Knowledge of facts, also called propositional knowledge, is often defined as true belief that is distinct from opinion or guesswork by virtue of justification. While there is wide agreement among philosophers that propositional knowledge is a form of true belief, many controversies in philosophy focus on justification: whether it is needed at all, how to understand it, and whether something else besides it is needed. These controversies intensified due to a series of thought experiments by Edmund Gettier and have provoked various alternative definitions. Some of them deny that justification is necessary and suggest alternative criteria while others accept that justification is an essential aspect and formulate additional requirements.</p>
        },
    },
]

export const contentsLength = epistemologyContents.length;

let subpathContents = [];

export const epistemologyContentsAddedSubpath = addSubpath(
    subpathContents,
    contentsLength,
    epistemologyContents 
);
