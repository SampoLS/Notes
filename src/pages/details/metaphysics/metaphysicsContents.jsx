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
        title: "Grounding (metaphysics)",
        isLargerTitle: false,
        path: "/metaphysics",
        url: `${wikiUrl}/Grounding_(metaphysics)`,
        anchor: "Grounding_(metaphysics)",
        text: {
          p1: <p>Grounding is a topic in metaphysics. Consider an ordinary physical object, such as a table, and the atoms it is made of. Without the atoms, the table would not exist. The table's existence depends on the existence of the atoms. This kind of dependence is called "grounding" to distinguish it from other kinds of dependence, such as the dependence of an effect on its cause. It is sometimes called metaphysical or ontological dependence.</p>
        },
    },
    {
        id: uuidv4(),
        title: "Abstract and concrete",
        isLargerTitle: false,
        path: "/metaphysics",
        url: `${wikiUrl}/Abstract_and_concrete`,
        anchor: "Abstract_and_concrete",
        text: {
          p1: <p>In metaphysics, the distinction between abstract and concrete refers to a divide between two types of entities. Many philosophers hold that this difference has fundamental metaphysical significance. Examples of concrete objects include plants, human beings and planets while things like numbers, sets and propositions are abstract objects. There is no general consensus as to what the characteristic marks of concreteness and abstractness are. Popular suggestions include defining the distinction in terms of the difference between (1) existence inside or outside space-time, (2) having causes and effects or not, (3) having contingent or necessary existence, (4) being particular or universal and (5) belonging to either the physical or the mental realm or to neither. Despite this diversity of views, there is broad agreement concerning most objects as to whether they are abstract or concrete. So under most interpretations, all these views would agree that, for example, plants are concrete objects while numbers are abstract objects.</p>
        },
    },
    {
        id: uuidv4(),
        title: "Problem of universals",
        isLargerTitle: false,
        path: "/metaphysics",
        url: `${wikiUrl}/Problem_of_universals`,
        anchor: "Problem_of_universals",
        text: {
          p1: <p>The problem of universals is an ancient question from metaphysics that has inspired a range of philosophical topics and disputes: Should the properties an object has in common with other objects, such as color and shape, be considered to exist beyond those objects? And if a property exists separately from objects, what is the nature of that existence?</p>
        },
    },
    {
        id: uuidv4(),
        title: "Universal (metaphysics)",
        isLargerTitle: false,
        path: "/metaphysics",
        url: `${wikiUrl}/Universal_(metaphysics)`,
        anchor: "Universal_(metaphysics)",
        text: {
          p1: <p>In metaphysics, a universal is what particular things have in common, namely characteristics or qualities. In other words, universals are repeatable or recurrent entities that can be instantiated or exemplified by many particular things. For example, suppose there are two chairs in a room, each of which is green. These two chairs both share the quality of "chairness", as well as greenness or the quality of being green; in other words, they share a "universal". There are three major kinds of qualities or characteristics: types or kinds (e.g. mammal), properties (e.g. short, strong), and relations (e.g. father of, next to). These are all different types of universals.</p>
        },
    },
    {
        id: uuidv4(),
        title: "Particular",
        isLargerTitle: false,
        path: "/metaphysics",
        url: `${wikiUrl}/Particular`,
        anchor: "Particular",
        text: {
          p1: <p>In metaphysics, particulars or individuals are usually contrasted with universals. Universals concern features that can be exemplified by various different particulars. Particulars are often seen as concrete, spatiotemporal entities as opposed to abstract entities, such as properties or numbers. There are, however, theories of abstract particulars or tropes. For example, Socrates is a particular (there's only one Socrates-the-teacher-of-Plato and one cannot make copies of him, e.g., by cloning him, without introducing new, distinct particulars). Redness, by contrast, is not a particular, because it is abstract and multiply instantiated (for example a bicycle, an apple, and a given woman's hair can all be red). In nominalist view everything is particular. Universals in each moment of time from point of view of an observer is the collection of particulars that participates it (even a void collection).</p>
        },
    },
    {
        id: uuidv4(),
        title: "State of affairs (philosophy)",
        isLargerTitle: false,
        path: "/metaphysics",
        url: `${wikiUrl}/State_of_affairs_(philosophy)`,
        anchor: "State_of_affairs_(philosophy)",
        text: {
          p1: <p>In philosophy, a state of affairs (German: Sachverhalt), also known as a situation, is a way the actual world must be in order to make some given proposition about the actual world's truth; in other words, a state of affairs is a truth-maker, whereas a proposition is a truth-bearer. Whereas states of affairs either obtain or fail-to-obtain, propositions are either true or false. Some philosophers understand the term "states of affairs" in a more restricted sense as a synonym for "fact". In this sense, there are no states of affairs that do not obtain.</p>
        },
    },
    {
        id: uuidv4(),
        title: "Ontology",
        isLargerTitle: false,
        path: "/metaphysics",
        url: `${wikiUrl}/Ontology`,
        anchor: "Ontology",
        text: {
          p1: <p>In metaphysics, ontology is the philosophical study of being, as well as related concepts such as existence, becoming, and reality.</p>
        },
    },
    {
        id: uuidv4(),
        title: "Relations (philosophy)",
        isLargerTitle: false,
        path: "/metaphysics",
        url: `${wikiUrl}/Relations_(philosophy)`,
        anchor: "Relations_(philosophy)",
        text: {
          p1: <p>Relations are ways in which things, the relata, stand to each other. Relations are in many ways similar to properties in that both characterize the things they apply to. Properties are sometimes treated as a special case of relations involving only one relatum. In philosophy (especially metaphysics), theories of relations are typically introduced to account for repetitions of how several things stand to each other.</p>
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
