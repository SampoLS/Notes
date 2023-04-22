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
      p1: <p>Linguistics is the scientific study of human language. It is called a scientific study because it entails a comprehensive, systematic, objective, and precise analysis of all aspects of language, particularly its nature and structure. Linguistics is concerned with the cognitive as well as the social aspects of language. It is considered an applied scientific field as well as an academic discipline within the humanities and social sciences; it has been classified as a social science, natural science, cognitive science, or part of the humanities.</p>,
    },
  },
  {
    id: uuidv4(),
    title: "Definition",
    isLargerTitle: false,
    path: "/linguistics",
    url: `${wikiUrl}/Definition`,
    anchor: "Definition",
    text: {
      p1: (
        <p>A definition is a statement of the meaning of a term (a word, phrase, or other set of symbols). Definitions can be classified into two large categories: intensional definitions (which try to give the sense of a term), and extensional definitions (which try to list the objects that a term describes). Another important category of definitions is the class of ostensive definitions, which convey the meaning of a term by pointing out examples. A term may have many different senses and multiple meanings, and thus require multiple definitions.</p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Lexical semantics",
    isLargerTitle: false,
    path: "/linguistics",
    url: `${wikiUrl}/Lexical_semantics`,
    anchor: "Lexical_semantics",
    text: {
      p1: (
        <p>
          Lexical semantics (also known as lexicosemantics), as a subfield of
          linguistic semantics, is the study of word meanings. It includes the
          study of how words structure their meaning, how they act in grammar
          and compositionality, and the relationships between the distinct
          senses and uses of a word.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Parse tree",
    isLargerTitle: false,
    path: "/linguistics",
    url: `${wikiUrl}/Parse_tree`,
    anchor: "Parse_tree",
    text: {
      p1: (
        <p>A parse tree or parsing tree or derivation tree or concrete syntax tree is an ordered, rooted tree that represents the syntactic structure of a string according to some context-free grammar. The term parse tree itself is used primarily in computational linguistics; in theoretical syntax, the term syntax tree is more common.</p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Comparative",
    isLargerTitle: false,
    path: "/linguistics",
    url: `${wikiUrl}/Comparative`,
    anchor: "Comparative",
    text: {
      p1: (
        <p>In general linguistics, the comparative is a syntactic construction that serves to express a comparison between two (or more) entities or groups of entities in quality or degree - see also comparison (grammar) for an overview of comparison, as well as positive and superlative degrees of comparison.</p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Grammatical relation",
    isLargerTitle: false,
    path: "/linguistics",
    url: `${wikiUrl}/Grammatical_relation`,
    anchor: "Grammatical_relation",
    text: {
      p1: (
        <p>In linguistics, grammatical relations (also called grammatical functions, grammatical roles, or syntactic functions) are functional relationships between constituents in a clause. The standard examples of grammatical functions from traditional grammar are subject, direct object, and indirect object. In recent times, the syntactic functions (more generally referred to as grammatical relations), typified by the traditional categories of subject and object, have assumed an important role in linguistic theorizing, within a variety of approaches ranging from generative grammar to functional and cognitive theories.[1] Many modern theories of grammar are likely to acknowledge numerous further types of grammatical relations (e.g. complement, specifier, predicative, etc.). The role of grammatical relations in theories of grammar is greatest in dependency grammars, which tend to posit dozens of distinct grammatical relations. Every head-dependent dependency bears a grammatical function.</p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Word order",
    isLargerTitle: false,
    path: "/linguistics",
    url: `${wikiUrl}/Word_order`,
    anchor: "Word_order",
    text: {
      p1: (
        <p>In linguistics, word order (also known as linear order) is the order of the syntactic constituents of a language. Word order typology studies it from a cross-linguistic perspective, and examines how different languages employ different orders. Correlations between orders found in different syntactic sub-domains are also of interest. The primary word orders that are of interest are</p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Coordination (linguistics)",
    isLargerTitle: false,
    path: "/linguistics",
    url: `${wikiUrl}/Coordination_(linguistics)`,
    anchor: "Coordination_(linguistics)",
    text: {
      p1: (
        <p>In linguistics, coordination is a complex syntactic structure that links together two or more elements; these elements are called conjuncts or conjoins. The presence of coordination is often signaled by the appearance of a coordinator (coordinating conjunction), e.g. and, or, but (in English). The totality of coordinator(s) and conjuncts forming an instance of coordination is called a coordinate structure. The unique properties of coordinate structures have motivated theoretical syntax to draw a broad distinction between coordination and subordination. It is also one of the many constituency tests in linguistics. Coordination is one of the most studied fields in theoretical syntax, but despite decades of intensive examination, theoretical accounts differ significantly and there is no consensus on the best analysis.</p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Conjunct",
    isLargerTitle: false,
    path: "/linguistics",
    url: `${wikiUrl}/Conjunct`,
    anchor: "Conjunct",
    text: {
      p1: (
        <p>In linguistics, the term conjunct has three distinct uses: </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Connotation",
    isLargerTitle: false,
    path: "/linguistics",
    url: `${wikiUrl}/Connotation`,
    anchor: "Connotation",
    text: {
      p1: (
        <p>A connotation is a commonly understood cultural or emotional association that any given word or phrase carries, in addition to its explicit or literal meaning, which is its denotation.</p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Denotation",
    isLargerTitle: false,
    path: "/linguistics",
    url: `${wikiUrl}/Denotation`,
    anchor: "Denotation",
    text: {
      p1: (
        <p>In linguistics and philosophy, the denotation of an expression is its literal meaning. For instance, the English word "warm" denotes the property of being warm. Denotation is contrasted with other aspects of meaning including connotation. For instance, the word "warm" may evoke calmness or cosiness, but these associations are not part of the word's denotation. Similarly, an expression's denotation is separate from pragmatic inferences it may trigger. For instance, describing something as "warm" often implicates that it is not hot, but this is once again not part of the word's denotation.</p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Adverbial phrase",
    isLargerTitle: false,
    path: "/linguistics",
    url: `${wikiUrl}/Adverbial_phrase`,
    anchor: "Adverbial_phrase",
    text: {
      p1: (
        <p>In linguistics, an adverbial phrase ("AdvP") is a multi-word expression operating adverbially: its syntactic function is to modify other expressions, including verbs, adjectives, adverbs, adverbials, and sentences. Adverbial phrases can be divided into two types: complement adverbs and modifier adverbs.[1] For example, in the sentence She sang very well, the expression very well is an adverbial phrase, as it modifies the verb to sing. More specifically, the adverbial phrase very well contains two adverbs, very and well: while well modifies the verb to convey information about the manner of singing (for example, She sang well versus She sang badly), very is a degree modifier that conveys information about the degree to which the action of singing well was accomplished (for example, Not only did she sing well, she sang very well).</p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Grammatical aspect",
    isLargerTitle: false,
    path: "/linguistics",
    url: `${wikiUrl}/Grammatical_aspect`,
    anchor: "Grammatical_aspect",
    text: {
      p1: (
        <p>In linguistics, aspect is a grammatical category that expresses how an action, event, or state, as denoted by a verb, extends over time. Perfective aspect is used in referring to an event conceived as bounded and unitary, without reference to any flow of time during ("I helped him"). Imperfective aspect is used for situations conceived as existing continuously or repetitively as time flows ("I was helping him"; "I used to help people").</p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Content word",
    isLargerTitle: false,
    path: "/linguistics",
    url: `${wikiUrl}/Content_word`,
    anchor: "Content_word",
    text: {
      p1: (
        <p>Content words, in linguistics, are words that possess semantic content and contribute to the meaning of the sentence in which they occur. In a traditional approach, nouns were said to name objects and other entities, lexical verbs to indicate actions, adjectives to refer to attributes of entities, and adverbs to attributes of actions. They contrast with function words, which have very little substantive meaning and primarily denote grammatical relationships between content words, such as prepositions (in, out, under etc.), pronouns (I, you, he, who etc.) and conjunctions (and, but, till, as etc.).</p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Function word",
    isLargerTitle: false,
    path: "/linguistics",
    url: `${wikiUrl}/Function_word`,
    anchor: "Function_word",
    text: {
      p1: (
        <p>In linguistics, function words (also called functors) are words that have little lexical meaning or have ambiguous meaning and express grammatical relationships among other words within a sentence, or specify the attitude or mood of the speaker. They signal the structural relationships that words have to one another and are the glue that holds sentences together. Thus they form important elements in the structures of sentences.</p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Complement (linguistics)",
    isLargerTitle: false,
    path: "/linguistics",
    url: `${wikiUrl}/Complement_(linguistics)`,
    anchor: "Complement_(linguistics)",
    text: {
      p1: (
        <p>In grammar, a complement is a word, phrase, or clause that is necessary to complete the meaning of a given expression. Complements are often also arguments (expressions that help complete the meaning of a predicate).</p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Sentence clause structure",
    isLargerTitle: false,
    path: "/linguistics",
    url: `${wikiUrl}/Sentence_clause_structure`,
    anchor: "Sentence_clause_structure",
    text: {
      p1: (
        <p>In grammar, sentence and clause structure, commonly known as sentence composition, is the classification of sentences based on the number and kind of clauses in their syntactic structure. Such division is an element of traditional grammar.</p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Predicate",
    isLargerTitle: false,
    path: "/linguistics",
    url: `${wikiUrl}/Predicate`,
    anchor: "Predicate",
    text: {
      p1: (
        <p>The term predicate is used in one of two ways in linguistics and its subfields. The first defines a predicate as everything in a standard declarative sentence except the subject, and the other views it as just the main content verb or associated predicative expression of a clause. Thus, by the first definition the predicate of the sentence Frank likes cake is likes cake. By the second definition, the predicate of the same sentence is just the content verb likes, whereby Frank and cake are the arguments of this predicate. Differences between these two definitions can lead to confusion.</p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Pragmatics",
    isLargerTitle: false,
    path: "/linguistics",
    url: `${wikiUrl}/Pragmatics`,
    anchor: "Pragmatics",
    text: {
      p1: (
        <p>In linguistics and related fields, pragmatics is the study of how context contributes to meaning. The field of study evaluates how human language is utilized in social interactions, as well as the relationship between the interpreter and the interpreted.[1] Linguists who specialize in pragmatics are called pragmaticians. The field has been represented since 1986 by the International Pragmatics Association (IPrA).</p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Adjunct (grammar)",
    isLargerTitle: false,
    path: "/linguistics",
    url: `${wikiUrl}/Adjunct_(grammar)`,
    anchor: "Adjunct_(grammar)",
    text: {
      p1: (
        <p>In linguistics, an adjunct is an optional, or structurally dispensable, part of a sentence, clause, or phrase that, if removed or discarded, will not structurally affect the remainder of the sentence. Example: In the sentence John helped Bill in Central Park, the phrase in Central Park is an adjunct.</p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Noun adjunct",
    isLargerTitle: false,
    path: "/linguistics",
    url: `${wikiUrl}/Noun_adjunct`,
    anchor: "Noun_adjunct",
    text: {
      p1: (
        <p>In grammar, a noun adjunct, attributive noun, qualifying noun, noun (pre)modifier, or apposite noun is an optional noun that modifies another noun; functioning similarly to an adjective, it is, more specifically, a noun functioning as a pre-modifier in a noun phrase. For example, in the phrase "chicken soup" the noun adjunct "chicken" modifies the noun "soup". It is irrelevant whether the resulting compound noun is spelled in one or two parts. "Field" is a noun adjunct in both "field player" and "fieldhouse".</p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Grammatical modifier",
    isLargerTitle: false,
    path: "/linguistics",
    url: `${wikiUrl}/Grammatical_modifier`,
    anchor: "Grammatical_modifier",
    text: {
      p1: (
        <p>In linguistics, a modifier is an optional element in phrase structure or clause structure which modifies the meaning of another element in the structure. For instance, the adjective "red" acts as a modifier in the noun phrase "red ball", providing extra details about which particular ball is being referred to. Similarly, the adverb "quickly" acts as a modifier in the verb phrase "run quickly". Modification can be considered a high-level domain of the functions of language, on par with predication and reference.</p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Head (linguistics)",
    isLargerTitle: false,
    path: "/linguistics",
    url: `${wikiUrl}/Head_(linguistics)`,
    anchor: "Head_(linguistics)",
    text: {
      p1: (
        <p>In linguistics, the head or nucleus of a phrase is the word that determines the syntactic category of that phrase. For example, the head of the noun phrase boiling hot water is the noun (head noun) water. Analogously, the head of a compound is the stem that determines the semantic category of that compound. For example, the head of the compound noun handbag is bag, since a handbag is a bag, not a hand. The other elements of the phrase or compound modify the head, and are therefore the head's dependents. Headed phrases and compounds are called endocentric, whereas exocentric ("headless") phrases and compounds (if they exist) lack a clear head. Heads are crucial to establishing the direction of branching. Head-initial phrases are right-branching, head-final phrases are left-branching, and head-medial phrases combine left- and right-branching.</p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Morphology (linguistics)",
    isLargerTitle: false,
    path: "/linguistics",
    url: `${wikiUrl}/Morphology_(linguistics)`,
    anchor: "Morphology_(linguistics)",
    text: {
      p1: (
        <p>In linguistics, morphology (/mɔːrˈfɒlədʒi/) is the study of words, how they are formed, and their relationship to other words in the same language. It analyzes the structure of words and parts of words such as stems, root words, prefixes, and suffixes. Morphology also looks at parts of speech, intonation and stress, and the ways context can change a word's pronunciation and meaning. Morphology differs from morphological typology, which is the classification of languages based on their use of words, and lexicology, which is the study of words and how they make up a language's vocabulary.</p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Inflection",
    isLargerTitle: false,
    path: "/linguistics",
    url: `${wikiUrl}/Inflection`,
    anchor: "Inflection",
    text: {
      p1: (
        <p>In linguistic morphology, inflection (or inflexion) is a process of word formation in which a word is modified to express different grammatical categories such as tense, case, voice, aspect, person, number, gender, mood, animacy, and definiteness. The inflection of verbs is called conjugation, and one can refer to the inflection of nouns, adjectives, adverbs, pronouns, determiners, participles, prepositions and postpositions, numerals, articles, etc., as declension.</p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Conditional sentence",
    isLargerTitle: false,
    path: "/linguistics",
    url: `${wikiUrl}/Conditional_sentence`,
    anchor: "Conditional_sentence",
    text: {
      p1: (
        <p>Conditional sentences are natural language sentences that express that one thing is contingent on something else, e.g. "If it rains, the picnic will be cancelled." They are so called because the impact of the main clause of the sentence is conditional on the dependent clause. A full conditional thus contains two clauses: a dependent clause called the antecedent (or protasis or if-clause), which expresses the condition, and a main clause called the consequent (or apodosis or then-clause) expressing the result.</p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Modality (linguistics)",
    isLargerTitle: false,
    path: "/linguistics",
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
  {
    id: uuidv4(),
    title: "Constituent (linguistics)",
    isLargerTitle: false,
    path: "/linguistics",
    url: `${wikiUrl}/Constituent_(linguistics)`,
    anchor: "Constituent_(linguistics)",
    text: {
      p1: (
        <p>
          In syntactic analysis, a constituent is a word or a group of words
          that function as a single unit within a hierarchical structure. The
          constituent structure of sentences is identified using tests for
          constituents. These tests apply to a portion of a sentence, and the
          results provide evidence about the constituent structure of the
          sentence. Many constituents are phrases. A phrase is a sequence of one
          or more words (in some theories two or more) built around a head
          lexical item and working as a unit within a sentence. A word sequence
          is shown to be a phrase/constituent if it exhibits one or more of the
          behaviors discussed below. The analysis of constituent structure is
          associated mainly with phrase structure grammars, although dependency
          grammars also allow sentence structure to be broken down into
          constituent parts.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Part of speech",
    isLargerTitle: false,
    path: "/linguistics",
    url: `${wikiUrl}/Part_of_speech`,
    anchor: "Part_of_speech",
    text: {
      p1: (
        <p>
          In grammar, a part of speech or part-of-speech (abbreviated as POS or
          PoS, also known as word class or grammatical category) is a category
          of words (or, more generally, of lexical items) that have similar
          grammatical properties. Words that are assigned to the same part of
          speech generally display similar syntactic behavior (they play similar
          roles within the grammatical structure of sentences), sometimes
          similar morphological behavior in that they undergo inflection for
          similar properties and even similar semantic behavior.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Grammar",
    isLargerTitle: false,
    path: "/linguistics",
    url: `${wikiUrl}/Grammar`,
    anchor: "Grammar",
    text: {
      p1: (
        <p>
          In linguistics, the grammar of a natural language is its set of
          structural constraints on speakers' or writers' composition of
          clauses, phrases, and words. The term can also refer to the study of
          such constraints, a field that includes domains such as phonology,
          morphology, and syntax, often complemented by phonetics, semantics,
          and pragmatics. There are currently two different approaches to the
          study of grammar: traditional grammar and theoretical grammar.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Syntax",
    isLargerTitle: false,
    path: "/linguistics",
    url: `${wikiUrl}/Syntax`,
    anchor: "Syntax",
    text: {
      p1: (
        <p>
          In linguistics, syntax (/ˈsɪntæks/) is the study of how words and
          morphemes combine to form larger units such as phrases and sentences.
          Central concerns of syntax include word order, grammatical relations,
          hierarchical sentence structure (constituency), agreement, the nature
          of crosslinguistic variation, and the relationship between form and
          meaning (semantics). There are numerous approaches to syntax that
          differ in their central assumptions and goals.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Noun",
    isLargerTitle: false,
    path: "/linguistics",
    url: `${wikiUrl}/Noun`,
    anchor: "Noun",
    text: {
      p1: (
        <p>
          A noun (from Latin nōmen 'name') is a word that generally functions as
          the name of a specific object or set of objects, such as living
          creatures, places, actions, qualities, states of existence, or ideas.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Verb",
    isLargerTitle: false,
    path: "/linguistics",
    url: `${wikiUrl}/Verb`,
    anchor: "Verb",
    text: {
      p1: (
        <p>
          A verb (from Latin verbum 'word') is a word (part of speech) that in
          syntax generally conveys an action (bring, read, walk, run, learn), an
          occurrence (happen, become), or a state of being (be, exist, stand).
          In the usual description of English, the basic form, with or without
          the particle to, is the infinitive. In many languages, verbs are
          inflected (modified in form) to encode tense, aspect, mood, and voice.
          A verb may also agree with the person, gender or number of some of its
          arguments, such as its subject, or object. Verbs have tenses: present,
          to indicate that an action is being carried out; past, to indicate
          that an action has been done; future, to indicate that an action will
          be done.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Grammatical conjugation",
    isLargerTitle: false,
    path: "/linguistics",
    url: `${wikiUrl}/Grammatical_conjugation`,
    anchor: "Grammatical_conjugation",
    text: {
      p1: (
        <p>
          In linguistics, conjugation is the creation of derived forms of a verb
          from its principal parts by inflection (alteration of form according
          to rules of grammar). For instance, the verb break can be conjugated
          to form the words break, breaks, broke, broken and breaking. While
          English has a relatively simple conjugation, other languages such as
          French and Arabic are more complex, with each verb having dozens of
          conjugated forms. Some languages such as Georgian and Basque have
          highly complex conjugation systems with hundreds of possible
          conjugations for every verb.
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
