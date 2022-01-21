import { v4 as uuidv4 } from "uuid";

const wikiUrl = "https://en.wikipedia.org/wiki";

export const termsContents = [
  {
    id: uuidv4(),
    title: "Other Terms",
    isLargerTitle: true,
    path: "/other_terms",
    url: "",
    anchor: "other_terms",
    text: {
      p1: (
        <p>
          These pages describe the concept maybe good for promoting programming
          skills, maybe including life.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Hierarchy",
    isLargerTitle: false,
    path: "/other_terms",
    url: `${wikiUrl}/Hierarchy`,
    anchor: "Hierarchy",
    text: {
      p1: (
        <p>
          A hierarchy is an arrangement of items (objects, names, values,
          categories, etc.) that are represented as being "above", "below", or
          "at the same level as" one another. Hierarchy is an important concept
          in a wide variety of fields, such as philosophy, architecture, design,
          mathematics, computer science, organizational theory, systems theory,
          systematic biology, and the social sciences (especially political
          philosophy).
        </p>
      ),
    },
  },
];
