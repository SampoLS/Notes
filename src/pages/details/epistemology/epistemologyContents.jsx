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
]

export const contentsLength = epistemologyContents.length;

let subpathContents = [];

export const epistemologyContentsAddedSubpath = addSubpath(
    subpathContents,
    contentsLength,
    epistemologyContents 
);
