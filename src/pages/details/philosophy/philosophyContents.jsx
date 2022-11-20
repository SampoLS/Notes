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
  {
    id: uuidv4(),
    title: "Upper ontology",
    isLargerTitle: false,
    path: "/philosophy",
    url: `${wikiUrl}/Upper_ontology`,
    anchor: "Upper_ontology",
    text: {
      p1: (
        <p>
          In information science, an upper ontology (also known as a top-level
          ontology, upper model, or foundation ontology) is an ontology (in the
          sense used in information science) which consists of very general
          terms (such as "object", "property", "relation") that are common
          across all domains. An important function of an upper ontology is to
          support broad semantic interoperability among a large number of
          domain-specific ontologies by providing a common starting point for
          the formulation of definitions. Terms in the domain ontology are
          ranked under the terms in the upper ontology, e.g., the upper ontology
          classes are superclasses or supersets of all the classes in the domain
          ontologies.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Object (philosophy)",
    isLargerTitle: false,
    path: "/philosophy",
    url: `${wikiUrl}/Object_(philosophy)`,
    anchor: "Object_(philosophy)",
    text: {
      p1: (
        <p>
          An object is a philosophical term often used in contrast to the term
          subject. A subject is an observer and an object is a thing observed.
          For modern philosophers like Descartes, consciousness is a state of
          cognition that includes the subject—which can never be doubted as only
          it can be the one who doubts—and some object(s) that may be considered
          as not having real or full existence or value independent of the
          subject who observes it. Metaphysical frameworks also differ in
          whether they consider objects existing independently of their
          properties and, if so, in what way.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Metaphysics",
    isLargerTitle: false,
    path: "/philosophy",
    url: `${wikiUrl}/Metaphysics`,
    anchor: "Metaphysics",
    text: {
      p1: (
        <p>
          Metaphysics is the branch of philosophy that studies the fundamental
          nature of reality, the first principles of being, identity and change,
          space and time, causality, necessity, and possibility. It includes
          questions about the nature of consciousness and the relationship
          between mind and matter, between substance and attribute, and between
          potentiality and actuality. The word "metaphysics" comes from two
          Greek words that, together, literally mean "after or behind or among
          [the study of] the natural". It has been suggested that the term might
          have been coined by a first century CE editor who assembled various
          small selections of Aristotle's works into the treatise we now know by
          the name Metaphysics (μετὰ τὰ φυσικά, meta ta physika, lit. 'after the
          Physics', another of Aristotle's works).
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Ontology components",
    isLargerTitle: false,
    path: "/philosophy",
    url: `${wikiUrl}/Ontology_components`,
    anchor: "Ontology_components",
    text: {
      p1: (
        <p>
          Contemporary ontologies share many structural similarities, regardless
          of the ontology language in which they are expressed. Most ontologies
          describe individuals (instances), classes (concepts), attributes, and
          relations.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Becoming (philosophy)",
    isLargerTitle: false,
    path: "/philosophy",
    url: `${wikiUrl}/Becoming_(philosophy)`,
    anchor: "Becoming_(philosophy)",
    text: {
      p1: (
        <p>
          In philosophy, becoming is a concept referring to constant change
          opposed to being. It is the focus of process philosophy as a whole, or
          with the related study of process theology.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Being",
    isLargerTitle: false,
    path: "/philosophy",
    url: `${wikiUrl}/Being`,
    anchor: "Being",
    text: {
      p1: (
        <p>
          In philosophy, being is the material or immaterial existence of a
          thing. Being is a concept encompassing objective and subjective
          features of existence. Ontology is the branch of philosophy that
          studies being. The concept of being has been investigated by
          philosophers such as Aristotle, Thomas Aquinas, and Martin Heidegger.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Objectivity (philosophy)",
    isLargerTitle: false,
    path: "/philosophy",
    url: `${wikiUrl}/Objectivity_(philosophy)`,
    anchor: "Objectivity_(philosophy)",
    text: {
      p1: (
        <p>
          In philosophy, objectivity is the concept of truth independent from
          individual subjectivity (bias caused by one's perception, emotions, or
          imagination). A proposition is considered to have objective truth when
          its truth conditions are met without bias caused by the mind of a
          sentient being. Scientific objectivity refers to the ability to judge
          without partiality or external influence. Objectivity in the moral
          framework calls for moral codes to be assessed based on the well-being
          of the people in the society that follow it. Moral objectivity also
          calls for moral codes to be compared to one another through a set of
          universal facts and not through subjectivity.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Subjectivity",
    isLargerTitle: false,
    path: "/philosophy",
    url: `${wikiUrl}/Subjectivity`,
    anchor: "Subjectivity",
    text: {
      p1: (
        <ol className="list">
          <p>
            Subjectivity in a philosophical context has to do with a lack of
            objective reality.[citation needed] Subjectivity has been given
            various and ambiguous definitions by differing sources as it is not
            often the focal point of philosophical discourse. However, it is
            related to ideas of consciousness, agency, personhood, philosophy of
            mind, reality, and truth. Three common definitions include that
            subjectivity is the quality or condition of:
          </p>
          <li>
            Something being a subject, narrowly meaning an individual who
            possesses conscious experiences, such as perspectives, feelings,
            beliefs, and desires.
          </li>
          <li>
            Something being a subject, broadly meaning an entity that has
            agency, meaning that it acts upon or wields power over some other
            entity (an object).
          </li>
          <li>
            Some information, idea, situation, or physical thing considered true
            only from the perspective of a subject or subjects.
          </li>
        </ol>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Mereology",
    isLargerTitle: false,
    path: "/philosophy",
    url: `${wikiUrl}/Mereology`,
    anchor: "Mereology",
    text: {
      p1: (
        <p>
          In logic, philosophy and related fields, mereology (from Greek μέρος
          'part' (root: μερε-, mere-, 'part') and the suffix -logy, 'study,
          discussion, science') is the study of parts and the wholes they form.
          Whereas set theory is founded on the membership relation between a set
          and its elements, mereology emphasizes the meronomic relation between
          entities, which—from a set-theoretic perspective—is closer to the
          concept of inclusion between sets.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Commensurability (philosophy of science)",
    isLargerTitle: false,
    path: "/philosophy",
    url: `${wikiUrl}/Commensurability_(philosophy_of_science)`,
    anchor: "Commensurability_(philosophy_of_science)",
    text: {
      p1: (
        <p>
          Commensurability is a concept in the philosophy of science whereby
          scientific theories are said to be "commensurable" if scientists can
          discuss the theories using a shared nomenclature that allows direct
          comparison of them to determine which one is more valid or useful. On
          the other hand, theories are incommensurable if they are embedded in
          starkly contrasting conceptual frameworks whose languages do not
          overlap sufficiently to permit scientists to directly compare the
          theories or to cite empirical evidence favoring one theory over the
          other. Discussed by Ludwik Fleck in the 1930s, and popularized by
          Thomas Kuhn in the 1960s, the problem of incommensurability results in
          scientists talking past each other, as it were, while comparison of
          theories is muddled by confusions about terms, contexts and
          consequences.
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
