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
  {
    id: uuidv4(),
    title: "Design pattern",
    isLargerTitle: false,
    path: "/other_terms",
    url: `${wikiUrl}/Design_pattern`,
    anchor: "Design_pattern",
    text: {
      p1: (
        <p>
          A design pattern is the re-usable form of a solution to a design
          problem. The idea was introduced by the architect Christopher
          Alexander and has been adapted for various other disciplines, notably
          software engineering.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Interaction",
    isLargerTitle: false,
    path: "/other_terms",
    url: `${wikiUrl}/Interaction`,
    anchor: "Interaction",
    text: {
      p1: (
        <p>
          Interaction is a kind of action that occurs as two or more objects
          have an effect upon one another. The idea of a two-way effect is
          essential in the concept of interaction, as opposed to a one-way
          causal effect. Closely related terms are interactivity and
          interconnectivity, of which the latter deals with the interactions of
          interactions within systems: combinations of many simple interactions
          can lead to surprising emergent phenomena. Interaction has different
          tailored meanings in various sciences.
        </p>
      ),
    },
  },
];
