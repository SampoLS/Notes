import { v4 as uuidv4 } from "uuid";
import addSubpath from "../../../utils/addSubpath";

const wikiUrl = "https://en.wikipedia.org/wiki";

export const psychologyContents = [
    {
        id: uuidv4(),
        title: "Psychology",
        isLargerTitle: true,
        path: "/psychology",
        url: `${wikiUrl}/Psychology`,
        anchor: "Psychology",
        text: {
            p1: <p>Psychology is the scientific study of mind and behavior. Psychology includes the study of conscious and unconscious phenomena, including feelings and thoughts. It is an academic discipline of immense scope, crossing the boundaries between the natural and social sciences. Psychologists seek an understanding of the emergent properties of brains, linking the discipline to neuroscience. As social scientists, psychologists aim to understand the behavior of individuals and groups. Ψ (psi), the first letter of the Greek word psyche from which the term psychology is derived (see below), is commonly associated with the science.</p>
        },
    },
    {
        id: uuidv4(),
        title: "Symbol grounding problem",
        isLargerTitle: false,
        path: "/psychology",
        url: `${wikiUrl}/Symbol_grounding_problem`,
        anchor: "Symbol_grounding_problem",
        text: {
            p1: <p>In cognitive science and semantics, the symbol grounding problem concerns how it is that words (symbols in general) get their meanings, and hence is closely related to the problem of what meaning itself really is. The problem of meaning is in turn related to the problem of how it is that mental states are meaningful, hence to the problem of consciousness: what is the connection between certain physical systems and the contents of subjective experiences.</p>
        },
    },
    {
        id: uuidv4(),
        title: "Meaning (psychology)",
        isLargerTitle: false,
        path: "/psychology",
        url: `${wikiUrl}/Meaning_(psychology)`,
        anchor: "Meaning_(psychology)",
        text: {
            p1: <p>Meaning is an epistemological concept used in multiple disciplines, such as psychology, philosophy, linguistics, semiotics, and sociology, with its definition depending upon the field of study by which it is being used.</p>
        },
    },
]

export const contentsLength = psychologyContents.length;

let subpathContents = [];
export const psychologyContentsAddedSubpath = addSubpath(
    subpathContents,
    contentsLength,
    psychologyContents 
);
