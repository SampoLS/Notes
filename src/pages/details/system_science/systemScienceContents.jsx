import { v4 as uuidv4 } from "uuid";
import addSubpath from "../../../utils/addSubpath";

const wikiUrl = "https://en.wikipedia.org/wiki";

export const systemScienceContents = [
    {
        id: uuidv4(),
        title: "Systems science",
        isLargerTitle: true,
        path: "/systems_science",
        url: `${wikiUrl}/Systems_science`,
        anchor: "Systems_science",
        text: {
          p1: <p>Systems science, also referred to as systems research, or, simply, systems, is an interdisciplinary field concerned with understanding systems—from simple to complex—in nature, society, cognition, engineering, technology and science itself. The field is diverse, spanning the formal, natural, social, and applied sciences.</p>
        },
    },
    {
        id: uuidv4(),
        title: "Systems thinking",
        isLargerTitle: false,
        path: "/systems_science",
        url: `${wikiUrl}/Systems_thinking`,
        anchor: "Systems_thinking",
        text: {
          p1: <p>Systems thinking is a way of making sense of the complexity of the world by looking at it in terms of wholes and relationships rather than by splitting it down into its parts. It has been used as a way of exploring and developing effective action in complex contexts, enabling systems change. Systems thinking draws on and contributes to systems theory and the system sciences.</p>
        },
    },
    {
        id: uuidv4(),
        title: "Complexity",
        isLargerTitle: false,
        path: "/systems_science",
        url: `${wikiUrl}/Complexity`,
        anchor: "Complexity",
        text: {
          p1: <p>Complexity characterises the behaviour of a system or model whose components interact in multiple ways and follow local rules, leading to nonlinearity, randomness, collective dynamics, hierarchy, and emergence.</p>
        },
    },
    {
        id: uuidv4(),
        title: "Complex system",
        isLargerTitle: false,
        path: "/systems_science",
        url: `${wikiUrl}/Complex_system`,
        anchor: "Complex_system",
        text: {
          p1: <p>A complex system is a system composed of many components which may interact with each other. Examples of complex systems are Earth's global climate, organisms, the human brain, infrastructure such as power grid, transportation or communication systems, complex software and electronic systems, social and economic organizations (like cities), an ecosystem, a living cell, and ultimately the entire universe.</p>
        },
    },
    {
        id: uuidv4(),
        title: "Structure",
        isLargerTitle: false,
        path: "/systems_science",
        url: `${wikiUrl}/Structure`,
        anchor: "Structure",
        text: {
          p1: <p>A structure is an arrangement and organization of interrelated elements in a material object or system, or the object or system so organized. Material structures include man-made objects such as buildings and machines and natural objects such as biological organisms, minerals and chemicals. Abstract structures include data structures in computer science and musical form. Types of structure include a hierarchy (a cascade of one-to-many relationships), a network featuring many-to-many links, or a lattice featuring connections between components that are neighbors in space.</p>
        },
    },
    {
        id: uuidv4(),
        title: "System",
        isLargerTitle: false,
        path: "/systems_science",
        url: `${wikiUrl}/System`,
        anchor: "System",
        text: {
          p1: <p>A system is a group of interacting or interrelated elements that act according to a set of rules to form a unified whole. A system, surrounded and influenced by its environment, is described by its boundaries, structure and purpose and is expressed in its functioning. Systems are the subjects of study of systems theory and other systems sciences.</p>
        },
    },
    {
        id: uuidv4(),
        title: "Systems theory",
        isLargerTitle: false,
        path: "/systems_science",
        url: `${wikiUrl}/Systems_theory`,
        anchor: "Systems_theory",
        text: {
          p1: <p>Systems theory is the interdisciplinary study of systems, i.e. cohesive groups of interrelated, interdependent components that can be natural or human-made. Every system has causal boundaries, is influenced by its context, defined by its structure, function and role, and expressed through its relations with other systems. A system is "more than the sum of its parts" by expressing synergy or emergent behavior.</p>
        },
    },
]

export const contentsLength = systemScienceContents.length;

let subpathContents = [];

export const systemScienceContentsAddedSubpath = addSubpath(
    subpathContents,
    contentsLength,
    systemScienceContents 
);
