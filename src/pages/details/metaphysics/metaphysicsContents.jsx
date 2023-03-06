import { v4 as uuidv4 } from "uuid";
import addSubpath from "../../../utils/addSubpath";

const wikiUrl = "https://en.wikipedia.org/wiki";

export const metaphysicsContents = [
    {
        id: uuidv4(),
        title: "Metaphysics",
        isLargerTitle: true,
        path: "/metaphysics",
        url: `${wikiUrl}/Metaphysics`,
        anchor: "Metaphysics",
        text: {
          p1: <p>Metaphysics is the branch of philosophy that studies the fundamental nature of reality; the first principles of being, identity and change, space and time, cause and effect, necessity and possibility.</p>
        },
    },
    {
        id: uuidv4(),
        title: "Identity (philosophy)",
        isLargerTitle: false,
        path: "/metaphysics",
        url: `${wikiUrl}/Identity_(philosophy)`,
        anchor: "Identity_(philosophy)",
        text: {
          p1: <p>In philosophy, identity (from Latin: identitas, "sameness") is the relation each thing bears only to itself. The notion of identity gives rise to many philosophical problems, including the identity of indiscernibles (if x and y share all their properties, are they one and the same thing?), and questions about change and personal identity over time (what has to be the case for a person x at one time and a person y at a later time to be one and the same person?). It is important to distinguish between qualitative identity and numerical identity. For example, consider two children with identical bicycles engaged in a race while their mother is watching. The two children have the same bicycle in one sense (qualitative identity) and the same mother in another sense (numerical identity).[3] This article is mainly concerned with numerical identity, which is the stricter notion.</p>
        },
    },
]

export const contentsLength = metaphysicsContents.length;

let subpathContents = [];

export const metaphysicsContentsAddedSubpath = addSubpath(
    subpathContents,
    contentsLength,
    metaphysicsContents 
);
