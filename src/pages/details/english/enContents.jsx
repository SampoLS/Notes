import { v4 as uuidv4 } from "uuid";

const wikiUrl = "https://en.wikipedia.org/wiki";

export const enContents = [
  {
    id: uuidv4(),
    title: "English Language",
    isLargerTitle: true,
    path: "/english",
    url: `${wikiUrl}/English_language`,
    anchor: "English_language",
    text: {
      p1: (
        <p>
          English is a West Germanic language of the Indo-European language
          family, with its earliest forms spoken by the inhabitants of early
          medieval England. It is named after the Angles, one of the ancient
          Germanic peoples that migrated to the island of Great Britain. English
          is genealogically West Germanic, closest related to the Low Saxon and
          Frisian languages; however, its vocabulary is also distinctively
          influenced by dialects of French (about 29% of modern English words)
          and Latin (also about 29%), plus some grammar and a small amount of
          core vocabulary influenced by Old Norse (a North Germanic language).
          Speakers of English are called Anglophones.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "English grammar",
    isLargerTitle: false,
    path: "/english",
    url: `${wikiUrl}/English_grammar`,
    anchor: "English_grammar",
    text: {
      p1: (
        <p>
          English grammar is the set of structural rules of the English
          language. This includes the structure of words, phrases, clauses,
          sentences, and whole textsGrammar is the way we arrange words to make
          proper sentences. Word level grammar covers verbs and tenses, nouns,
          adverbs etc. Sentence level grammar covers phrases, clauses, reported
          speech etc..
        </p>
      ),
    },
  },
];
