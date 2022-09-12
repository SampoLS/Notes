import { v4 as uuidv4 } from "uuid";
import addSubpath from "../../../utils/addSubpath";

const wikiUrl = "https://en.wikipedia.org/wiki";

export const linguisticsContents = [
  {
    id: uuidv4(),
    title: "Linguistics",
    isLargerTitle: true,
    path: "/linguistics",
    url: `${wikiUrl}/Linguistics`,
    anchor: "Linguistics",
    text: {
      p1: <p></p>,
    },
  },
  {
    id: uuidv4(),
    title: "Modality (linguistics)",
    isLargerTitle: false,
    path: "/linguisitcs",
    url: `${wikiUrl}/Modality_(linguistics)`,
    anchor: "Modality_(linguistics)",
    text: {
      p1: (
        <p>
          In linguistics and philosophy, modality refers to the ways language
          can express various relationships to reality or truth. For instance, a
          modal expression may convey that something is likely, desirable, or
          permissible. Quintessential modal expressions include modal
          auxiliaries such as "could", "should", or "must"; modal adverbs such
          as "possibly" or "necessarily"; and modal adjectives such as
          "conceivable" or "probable". However, modal components have been
          identified in the meanings of countless natural language expressions,
          including counterfactuals, propositional attitudes, evidentials,
          habituals, and generics.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Grammatical mood",
    isLargerTitle: false,
    path: "/linguistics",
    url: `${wikiUrl}/Grammatical_mood`,
    anchor: "Grammatical_mood",
    text: {
      p1: (
        <p>
          In linguistics, grammatical mood is a grammatical feature of verbs,
          used for signaling modality. That is, it is the use of verbal
          inflections that allow speakers to express their attitude toward what
          they are saying (for example, a statement of fact, of desire, of
          command, etc.). The term is also used more broadly to describe the
          syntactic expression of modality - that is, the use of verb phrases
          that do not involve inflection of the verb itself.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Imperative mood",
    isLargerTitle: false,
    path: "/linguistics",
    url: `${wikiUrl}/Imperative_mood`,
    anchor: "Imperative_mood",
    text: {
      p1: (
        <p>
          The imperative mood is a grammatical mood that forms a command or
          request.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Context (language use)",
    isLargerTitle: false,
    path: "/linguistics",
    url: `${wikiUrl}/Context_(language_use)`,
    anchor: "Context_(language_use)",
    text: {
      p1: (
        <p>
          In semiotics, linguistics, sociology and anthropology, context refers
          to those objects or entities which surround a focal event, in these
          disciplines typically a communicative event, of some kind. Context is
          "a frame that surrounds the event and provides resources for its
          appropriate interpretation". It is thus a relative concept, only
          definable with respect to some focal event within a frame, not
          independently of that frame.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Portmanteau",
    islargertitle: false,
    path: "/linguistics",
    url: `${wikiUrl}/Portmanteau`,
    anchor: "Portmanteau",
    text: {
      p1: (
        <p>
          A portmanteau or portmanteau word is a blend of words in which parts
          of multiple words are combined into a new word, as in smog, coined by
          blending smoke and fog, or motel, from motor and hotel. In
          linguistics, a portmanteau is a single morph that is analyzed as
          representing two (or more) underlying morphemes. When portmanteaus
          shorten established compounds, they can be considered clipped
          compounds.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Semantics",
    islargertitle: false,
    path: "/linguistics",
    url: `${wikiUrl}/Semantics`,
    anchor: "Semantics",
    text: {
      p1: (
        <p>
          Semantics is the study of reference, meaning, or truth. The term can
          be used to refer to subfields of several distinct disciplines,
          including philosophy, linguistics and computer science.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Sentence (linguistics)",
    isLargerTitle: false,
    path: "/linguistics",
    url: `${wikiUrl}/Sentence_(linguistics)`,
    anchor: "Sentence_(linguistics)",
    text: {
      p1: (
        <p>
          In linguistics and grammar, a sentence is a linguistic expression,
          such as the English example "The quick brown fox jumps over the lazy
          dog." In traditional grammar, it is typically defined as a string of
          words that expresses a complete thought, or as a unit consisting of a
          subject and predicate. In non-functional linguistics it is typically
          defined as a maximal unit of syntactic structure such as a
          constituent. In functional linguistics, it is defined as a unit of
          written texts delimited by graphological features such as upper-case
          letters and markers such as periods, question marks, and exclamation
          marks. This notion contrasts with a curve, which is delimited by
          phonologic features such as pitch and loudness and markers such as
          pauses; and with a clause, which is a sequence of words that
          represents some process going on throughout time.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Realis mood",
    isLargerTitle: false,
    path: "/linguistics",
    url: `${wikiUrl}/Realis_mood`,
    anchor: "Realis_mood",
    text: {
      p1: (
        <p>
          A realis mood (abbreviated REAL) is a grammatical mood which is used
          principally to indicate that something is a statement of fact; in
          other words, to express what the speaker considers to be a known state
          of affairs, as in declarative sentences. Most languages have a single
          realis mood called the indicative mood, although some languages have
          additional realis moods, for example to express different levels of
          certainty. By contrast, an irrealis mood is used to express something
          that is not known to be the case in reality.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Irrealis mood",
    isLargerTitle: false,
    path: "/linguistics",
    url: `${wikiUrl}/Irrealis_mood`,
    anchor: "Irrealis_mood",
    text: {
      p1: (
        <p>
          In linguistics, irrealis moods (abbreviated IRR) are the main set of
          grammatical moods that indicate that a certain situation or action is
          not known to have happened at the moment the speaker is talking. This
          contrasts with the realis moods.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Proposition",
    isLargerTitle: false,
    path: "/linguistics",
    url: `${wikiUrl}/Proposition`,
    anchor: "Proposition",
    text: {
      p1: (
        <p>
          In logic and linguistics, a proposition is the meaning of a
          declarative sentence. In philosophy, "meaning" is understood to be a
          non-linguistic entity which is shared by all sentences with the same
          meaning. Equivalently, a proposition is the non-linguistic bearer of
          truth or falsity which makes any sentence that expresses it either
          true or false.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Grapheme",
    isLargerTitle: false,
    path: "/linguistics",
    url: `${wikiUrl}/Grapheme`,
    anchor: "Grapheme",
    text: {
      p1: (
        <p>
          In linguistics, a grapheme is the smallest functional unit of a
          writing system. The word grapheme, coined in analogy with phoneme, is
          derived from Ancient Greek γράφω (gráphō) 'write' and the suffix -eme
          by analogy with phoneme and other names of emic units. The study of
          graphemes is called graphemics. The concept of graphemes is abstract
          and similar to the notion in computing of a character. By comparison,
          a specific shape that represents any particular grapheme in a given
          typeface is called a glyph.
        </p>
      ),
    },
  },
];

export const contentsLength = linguisticsContents.length;

let subpathContents = [];
export const linguisticsContentsAddedSubpath = addSubpath(
  subpathContents,
  contentsLength,
  linguisticsContents
);
