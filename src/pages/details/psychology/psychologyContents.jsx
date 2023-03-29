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
        title: "Mind",
        isLargerTitle: false,
        path: "/psychology",
        url: `${wikiUrl}/Mind`,
        anchor: "Mind",
        text: {
            p1: <p>The mind is the set of faculties responsible for all mental phenomena. Often the term is also identified with the phenomena themselves.[2][3][4] These faculties include thought, imagination, memory, will, and sensation. They are responsible for various mental phenomena, like perception, pain experience, belief, desire, intention, and emotion. Various overlapping classifications of mental phenomena have been proposed. Important distinctions group them according to whether they are sensory, propositional, intentional, conscious, or occurrent. Minds were traditionally understood as substances but it is more common in the contemporary perspective to conceive them as properties or capacities possessed by humans and higher animals. Various competing definitions of the exact nature of the mind or mentality have been proposed. Epistemic definitions focus on the privileged epistemic access the subject has to these states. Consciousness-based approaches give primacy to the conscious mind and allow unconscious mental phenomena as part of the mind only to the extent that they stand in the right relation to the conscious mind. According to intentionality-based approaches, the power to refer to objects and to represent the world is the mark of the mental. For behaviorism, whether an entity has a mind only depends on how it behaves in response to external stimuli while functionalism defines mental states in terms of the causal roles they play. Central questions for the study of mind, like whether other entities besides humans have minds or how the relation between body and mind is to be conceived, are strongly influenced by the choice of one's definition.</p>
        },
    },
    {
        id: uuidv4(),
        title: "Mental state",
        isLargerTitle: false,
        path: "/psychology",
        url: `${wikiUrl}/Mental_state`,
        anchor: "Mental_state",
        text: {
            p1: <p>A mental state, or a mental property, is a state of mind of a person. Mental states comprise a diverse class, including perception, pain experience, belief, desire, intention, emotion, and memory. There is controversy concerning the exact definition of the term. According to epistemic approaches, the essential mark of mental states is that their subject has privileged epistemic access while others can only infer their existence from outward signs. Consciousness-based approaches hold that all mental states are either conscious themselves or stand in the right relation to conscious states. Intentionality-based approaches, on the other hand, see the power of minds to refer to objects and represent the world as the mark of the mental. According to functionalist approaches, mental states are defined in terms of their role in the causal network independent of their intrinsic properties. Some philosophers deny all the aforementioned approaches by holding that the term "mental" refers to a cluster of loosely related ideas without an underlying unifying feature shared by all. Various overlapping classifications of mental states have been proposed. Important distinctions group mental phenomena together according to whether they are sensory, propositional, intentional, conscious or occurrent. Sensory states involve sense impressions like visual perceptions or bodily pains. Propositional attitudes, like beliefs and desires, are relations a subject has to a proposition. The characteristic of intentional states is that they refer to or are about objects or states of affairs. Conscious states are part of the phenomenal experience while occurrent states are causally efficacious within the owner's mind, with or without consciousness. An influential classification of mental states is due to Franz Brentano, who argues that there are only three basic kinds: presentations, judgments, and phenomena of love and hate.</p>
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
