import { v4 as uuidv4 } from "uuid";
import addSubpath from "../../../utils/addSubpath";

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
    title: "English prepositions",
    isLargerTitle: false,
    path: "/english",
    url: `${wikiUrl}/English_prepositions`,
    anchor: "English_prepositions",
    text: {
      p1: (
        <p>English prepositions are words – such as of, in, on, at, from, etc. – that function as the head of a prepositional phrase, and most characteristically license a noun phrase object (e.g., in the water). Semantically, they most typically denote relations in space and time. Morphologically, they are usually simple and do not inflect. They form a closed lexical category.</p>
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
  {
    id: uuidv4(),
    title: "Word",
    isLargerTitle: false,
    path: "/english",
    url: `${wikiUrl}/Word`,
    anchor: "Word",
    text: {
      p1: (
        <p>
          A word can be generally defined as a basic element of language that
          carries an objective or practical meaning, can be used on its own, and
          is uninterruptible. Despite the fact that language speakers often have
          an intuitive grasp of what a word is, there is no consensus among
          linguists on its definition and numerous attempts to find specific
          criteria of the concept remain controversial. Different standards have
          been proposed, depending on the theoretical background and descriptive
          context; these do not converge on a single definition. Some specific
          definitions of the term "word" are employed to convey its different
          meanings at different levels of description, for example based on
          phonological, grammatical or orthographic basis. Others suggest that
          the concept is simply a convention used in everyday situations.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Phrase",
    isLargerTitle: false,
    path: "/english",
    url: `${wikiUrl}/Phrase`,
    anchor: "Phrase",
    text: {
      p1: (
        <p>
          In syntax and grammar, a phrase is a group of words or singular word
          acting as a grammatical unit. For instance, the English expression
          "the very happy squirrel" is a noun phrase which contains the
          adjective phrase "very happy". Phrases can consist of a single word or
          a complete sentence. In theoretical linguistics, phrases are often
          analyzed as units of syntactic structure such as a constituent.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Clause",
    isLargerTitle: false,
    path: "/english",
    url: `${wikiUrl}/Clause`,
    anchor: "Clause",
    text: {
      p1: (
        <p>
          In language, a clause is a constituent that comprises a semantic
          predicand (expressed or not) and a semantic predicate. A typical
          clause consists of a subject and a syntactic predicate, the latter
          typically a verb phrase composed of a verb with any objects and other
          modifiers. However, the subject is sometimes unvoiced if it is
          retrievable from context, especially in null-subject language but also
          in other languages, including English instances of the imperative
          mood.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "English nouns",
    isLargerTitle: false,
    path: "/english",
    url: `${wikiUrl}/English_nouns`,
    anchor: "English_nouns",
    text: {
      p1: (
        <p>
          English nouns form the largest category of words in English, both in
          terms of the number of different words and in terms of how often they
          are used in typical texts. The three main categories of English nouns
          are common nouns, proper nouns, and pronouns. A defining feature of
          English nouns is their ability to inflect for number, as through the
          plural -s morpheme. English nouns primarily function as the heads of
          noun phrases, which prototypically function at the clause level as
          subjects, objects, and predicative complements. These phrases are the
          only English phrases whose structure includes determinatives and
          predeterminatives, which add abstract specifying meaning such as
          definiteness and proximity. Like nouns in general, English nouns
          typically denote physical objects, but they also denote actions (e.g.,
          get up and have a stretch), characteristics (e.g., this red is
          lovely), relations in space (e.g., closeness), and just about anything
          at all. Taken all together, these features separate English nouns from
          the language's other lexical categories, such as adjectives and verbs.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "English verbs",
    isLargerTitle: false,
    path: "/english",
    url: `${wikiUrl}/English_verbs`,
    anchor: "English_verbs",
    text: {
      p1: (
        <p>
          Verbs constitute one of the main parts of speech (word classes) in the
          English language. Like other types of words in the language, English
          verbs are not heavily inflected. Most combinations of tense, aspect,
          mood and voice are expressed periphrastically, using constructions
          with auxiliary verbs.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Present tense",
    isLargerTitle: false,
    path: "/english",
    url: `${wikiUrl}/Present_tense`,
    anchor: "Present_tense",
    text: {
      p1: (
        <p>
          The present tense (abbreviated PRES or PRS) is a grammatical tense
          whose principal function is to locate a situation or event in the
          present time. The present tense is used for actions which are
          happening now. In order to explain and understand present tense, it is
          useful to imagine time as a line on which the past tense, the present
          and the future tense are positioned. The term present tense is usually
          used in descriptions of specific languages to refer to a particular
          grammatical form or set of forms; these may have a variety of uses,
          not all of which will necessarily refer to present time. For example,
          in the English sentence "My train leaves tomorrow morning", the verb
          form leaves is said to be in the present tense, even though in this
          particular context it refers to an event in future time. Similarly, in
          the historical present, the present tense is used to narrate events
          that occurred in the past.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Grammatical tense",
    isLargerTitle: false,
    path: "/english",
    url: `${wikiUrl}/Grammatical_tense`,
    anchor: "Grammatical_tense",
    text: {
      p1: (
        <p>
          In grammar, tense is a category that expresses time reference. Tenses
          are usually manifested by the use of specific forms of verbs,
          particularly in their conjugation patterns.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "English adjectives",
    isLargerTitle: false,
    path: "/english",
    url: `${wikiUrl}/English_adjectives`,
    anchor: "English_adjectives",
    text: {
      p1: (
        <p>
          English adjectives form a large open category of words in English
          which, semantically, tend to denote properties such as size, colour,
          mood, quality, age, etc. with such members as other, big, new, good,
          different, Cuban, sure, important, and right. Adjectives head
          adjective phrases, and the most typical members function as modifiers
          in noun phrases. Most adjectives either inflect for grade (e.g., big,
          bigger, biggest) or combine with more and most to form comparatives
          (e.g., more interesting) and superlatives (e.g., most interesting).
          They are characteristically modifiable by very (e.g., very small). A
          large number of the most typical members combine with the suffix -ly
          to form adverbs (e.g., final + ly: finally). Most adjectives function
          as complements in verb phrases (e.g., It looks good), and some license
          complements of their own (e.g., happy that you're here).
        </p>
      ),
    },
  },
];

export const contentsLength = enContents.length;

let subpathContents = [];

export const enContentsAddedSubpath = addSubpath(
    subpathContents,
    contentsLength,
    enContents 
);
