import { v4 as uuidv4 } from "uuid";
import addSubpath from "../../../utils/addSubpath";

const wikiUrl = "https://en.wikipedia.org/wiki";

export const philosophyContents = [
  {
    id: uuidv4(),
    title: "Philosophy",
    isLargerTitle: true,
    path: "/philosophy",
    url: `${wikiUrl}/Philosophy`,
    anchor: "Philosophy",
    text: {
      p1: (
        <p>
          Philosophy (from Greek: φιλοσοφία, philosophia, 'love of wisdom') is
          the systematized study of general and fundamental questions, such as
          those about existence, reason, knowledge, values, mind, and language.
          Such questions are often posed as problems to be studied or resolved.
          Some sources claim the term was coined by Pythagoras (c. 570 - c. 495
          BCE); others dispute this story, arguing that Pythagoreans merely
          claimed use of a preexisting term. Philosophical methods include
          questioning, critical discussion, rational argument, and systematic
          presentation.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Relations (philosophy)",
    isLargerTitle: false,
    path: "/philosophy",
    url: `${wikiUrl}/Relations_(philosophy)`,
    anchor: "Relations_(philosophy)",
    text: {
      p1: (
        <p>
          Relations are ways in which things, the relata, stand to each other.
          Relations are in many ways similar to properties in that both
          characterize the things they apply to. Properties are sometimes
          treated as a special case of relations involving only one relatum. In
          philosophy (especially metaphysics), theories of relations are
          typically introduced to account for repetitions of how several things
          stand to each other.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Ontology",
    isLargerTitle: false,
    path: "/philosophy",
    url: `${wikiUrl}/Ontology`,
    anchor: "Ontology",
    text: {
      p1: (
        <p>
          Ontology is the branch of philosophy that studies concepts such as
          existence, being, becoming, and reality. It includes the questions of
          how entities are grouped into basic categories and which of these
          entities exist on the most fundamental level. Ontology is sometimes
          referred to as the science of being and belongs to the major branch of
          philosophy known as metaphysics.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Distinction (philosophy)",
    isLargerTitle: false,
    path: "/philosophy",
    url: `${wikiUrl}/Distinction_(philosophy)`,
    anchor: "Distinction_(philosophy)",
    text: {
      p1: (
        <p>
          Distinction, the fundamental philosophical abstraction, involves the
          recognition of difference.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Meaning (philosophy)",
    isLargerTitle: false,
    path: "/philosophy",
    url: `${wikiUrl}/Meaning_(philosophy)`,
    anchor: "Meaning_(philosophy)",
    text: {
      p1: (
        <p>
          In semantics, semiotics, philosophy of language, metaphysics, and
          metasemantics, meaning "is a relationship between two sorts of things:
          signs and the kinds of things they intend, express, or signify".
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Existence",
    isLargerTitle: false,
    path: "/philosophy",
    url: `${wikiUrl}/Existence`,
    anchor: "Existence",
    text: {
      p1: (
        <p>
          Existence is the ability of an entity to interact with reality. In
          philosophy, it refers to the ontological property of being.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Ontology alignment",
    isLargerTitle: false,
    path: "/philosophy",
    url: `${wikiUrl}/Ontology_alignment`,
    anchor: "Ontology_alignment",
    text: {
      p1: (
        <p>
          Ontology alignment, or ontology matching, is the process of
          determining correspondences between concepts in ontologies. A set of
          correspondences is also called an alignment. The phrase takes on a
          slightly different meaning, in computer science, cognitive science or
          philosophy.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Event (philosophy)",
    isLargerTitle: false,
    path: "/philosophy",
    url: `${wikiUrl}/Event_(philosophy)`,
    anchor: "Event_(philosophy)",
    text: {
      p1: (
        <p>
          In philosophy, events are objects in time or instantiations of
          properties in objects. On some views, only changes in the form of
          acquiring or losing a property can constitute events, like the lawn's
          becoming dry. According to others, there are also events that involve
          nothing but the retaining of a property, e.g. the lawn's staying wet.
          Events are usually defined as particulars that, unlike universals,
          cannot repeat at different times. Processes are complex events
          constituted by a sequence of events. But even simple events can be
          conceived as complex entities involving an object, a time and the
          property exemplified by the object at this time. Traditionally,
          metaphysicians tended to emphasize static being over dynamic events.
          This tendency has been opposed by so-called process philosophy or
          process ontology, which ascribes ontological primacy to events and
          processes.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Action (philosophy)",
    isLargerTitle: false,
    path: "/philosophy",
    url: `${wikiUrl}/Action_(philosophy)`,
    anchor: "Action_(philosophy)",
    text: {
      p1: (
        <p>
          An action is an event that an agent performs for a purpose, that is
          guided by the person's intention. The first question in the philosophy
          of action is to determine how actions differ from other forms of
          behavior, like involuntary reflexes. According to Ludwig Wittgenstein,
          it involves discovering "[w]hat is left over if I subtract the fact
          that my arm goes up from the fact that I raise my arm". There is broad
          agreement that the answer to this question has to do with the agent's
          intentions. So driving a car is an action since the agent intends to
          do so, but sneezing is a mere behavior since it happens independent of
          the agent's intention. The dominant theory of the relation between the
          intention and the behavior is causalism: driving the car is an action
          because it is caused by the agent's intention to do so. On this view,
          actions are distinguished from other events by their causal history.
          Causalist theories include Donald Davidson's account, who defines
          actions as bodily movements caused by intentions in the right way, and
          volitionalist theories, according to which volitions or tryings form a
          core aspect of actions. Non-causalist theories, on the other hand,
          often see intentions not as the action's cause but as a constituent of
          it.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Process philosophy",
    isLargerTitle: false,
    path: "/philosophy",
    url: `${wikiUrl}/Process_philosophy`,
    anchor: "Process_philosophy",
    text: {
      p1: (
        <p>
          Process philosophy, also ontology of becoming, or processism, is an
          approach to philosophy that identifies processes, changes, or shifting
          relationships as the only true elements of the ordinary, everyday real
          world. It treats other real elements (examples: enduring physical
          objects, thoughts) as abstractions from, or ontological dependents on,
          processes. In opposition to the classical view of change as illusory
          (as argued by Parmenides) or accidental (as argued by Aristotle),
          process philosophy posits transient occasions of change or becoming as
          the only fundamental things of the ordinary everyday real world.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Process ontology",
    isLargerTitle: false,
    path: "/philosophy",
    url: `${wikiUrl}/Process_ontology`,
    anchor: "Process_ontology",
    text: {
      p1: (
        <p>
          In philosophy, a process ontology refers to a universal model of the
          structure of the world as an ordered wholeness. Such ontologies are
          fundamental ontologies, in contrast to the so-called applied
          ontologies. Fundamental ontologies do not claim to be accessible to
          any empirical proof in itself, but to be a structural design pattern,
          out of which empirical phenomena can be explained and put together
          consistently. Throughout Western history, the dominating fundamental
          ontology is the so-called substance theory. However, fundamental
          process ontologies are becoming more important in recent times,
          because the progress in the discovery of the foundations of physics
          spurred the development of a basic concept able to integrate such
          boundary notions as "energy," "object", and those of the physical
          dimensions of space and time.
        </p>
      ),
    },
  },
];
export const contentsLength = philosophyContents.length;

let subpathContents = [];

export const philosophyContentsAddedSubpath = addSubpath(
  subpathContents,
  contentsLength,
  philosophyContents
);
