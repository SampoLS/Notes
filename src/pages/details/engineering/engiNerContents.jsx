import { v4 as uuidv4 } from "uuid";
import addSubpath from "../../../utils/addSubpath";

const wikiUrl = "https://en.wikipedia.org/wiki";

export const engiNerContents = [
    {
        id: uuidv4(),
        title: "Engineering",
        isLargerTitle: true,
        path: "/engineering",
        url: `${wikiUrl}/Engineering`,
        anchor: "Engineering",
        text: {
            p1: <p>Engineering is the use of scientific principles to design and build machines, structures, and other items, including bridges, tunnels, roads, vehicles, and buildings. The discipline of engineering encompasses a broad range of more specialized fields of engineering, each with a more specific emphasis on particular areas of applied mathematics, applied science, and types of application. See glossary of engineering.</p>
        },
    },
    {
        id: uuidv4(),
        title: "Process (engineering)",
        isLargerTitle: false,
        path: "/engineering",
        url: `${wikiUrl}/Process_(engineering)`,
        anchor: "Process_(engineering)",
        text: {
            p1: <p>In engineering, a process is a series of interrelated tasks that, together, transform inputs into a given output. These tasks may be carried out by people, nature or machines using various resources; an engineering process must be considered in the context of the agents carrying out the tasks and the resource attributes involved. Systems engineering normative documents and those related to Maturity Models are typically based on processes, for example, systems engineering processes of the EIA-632 and processes involved in the Capability Maturity Model Integration (CMMI) institutionalization and improvement approach. Constraints imposed on the tasks and resources required to implement them are essential for executing the tasks mentioned.</p>
        },
    },
]

export const contentsLength = engiNerContents.length;

let subpathContents = [];

export const engiNerContentsAddedSubpath = addSubpath(
    subpathContents,
    contentsLength,
    engiNerContents 
);
