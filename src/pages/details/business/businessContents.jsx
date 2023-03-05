import { v4 as uuidv4 } from "uuid";
import addSubpath from "../../../utils/addSubpath";

const wikiUrl = "https://en.wikipedia.org/wiki";

export const businessContents = [
    {
        id: uuidv4(),
        title: "Business",
        isLargerTitle: true,
        path: "/Business",
        url: `${wikiUrl}/Business`,
        anchor: "Business",
        text: {
          p1: <p>Business is the practice of making one's living or making money by producing or buying and selling products (such as goods and services). It is also "any activity or enterprise entered into for profit."</p>
        },
    },
    {
        id: uuidv4(),
        title: "Business rule",
        isLargerTitle: false,
        path: "/Business",
        url: `${wikiUrl}/Business_rule`,
        anchor: "Business_rule",
        text: {
          p1: <p>A business rule defines or constrains some aspect of business. It may be expressed to specify an action to be taken when certain conditions are true or may be phrased so it can only resolve to either true or false. Business rules are intended to assert business structure or to control or influence the behavior of the business. Business rules describe the operations, definitions and constraints that apply to an organization. Business rules can apply to people, processes, corporate behavior and computing systems in an organization, and are put in place to help the organization achieve its goals. For example, a business rule might state that no credit check is to be performed on return customers. Other examples of business rules include requiring a rental agent to disallow a rental tenant if their credit rating is too low, or requiring company agents to use a list of preferred suppliers and supply schedules. While a business rule may be informal or even unwritten, documenting the rules clearly and making sure that they don't conflict is a valuable activity. When carefully managed, rules can be used to help the organization to better achieve goals, remove obstacles to market growth, reduce costly mistakes, improve communication, comply with legal requirements, and increase customer loyalty.</p>
        },
    },
    {
        id: uuidv4(),
        title: "Business logic",
        isLargerTitle: false,
        path: "/Business",
        url: `${wikiUrl}/Business_logic`,
        anchor: "Business_logic",
        text: {
          p1: <p>In computer software, business logic or domain logic is the part of the program that encodes the real-world business rules that determine how data can be created, stored, and changed. It is contrasted with the remainder of the software that might be concerned with lower-level details of managing a database or displaying the user interface, system infrastructure, or generally connecting various parts of the program.</p>
        },
    },
]

export const contentsLength = businessContents.length;

let subpathContents = [];
export const businessContentsAddedSubpath = addSubpath(
    subpathContents,
    contentsLength,
   businessContents 
);
