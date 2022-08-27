import { v4 as uuidv4 } from "uuid";
import addSubpath from "../../../utils/addSubpath";

const wikiUrl = "https://en.wikipedia.org/wiki";

export const logicContents = [
  {
    id: uuidv4(),
    title: "Logic",
    isLargerTitle: true,
    path: "/logic",
    url: `${wikiUrl}/Logic`,
    anchor: "Logic",
    text: {
      p1: (
        <p>
          Logic is the study of correct reasoning or good arguments. It is often
          defined in a more narrow sense as the science of deductively valid
          inferences or of logical truths. In this sense, it is equivalent to
          formal logic and constitutes a formal science investigating how
          conclusions follow from premises in a topic-neutral way or which
          propositions are true only in virtue of the logical vocabulary they
          contain. When used as a countable noun, the term "a logic" refers to a
          logical formal system. Formal logic contrasts with informal logic,
          which is also part of logic when understood in the widest sense. There
          is no general agreement on how the two are to be distinguished. One
          prominent approach associates their difference with the study of
          arguments expressed in formal or informal languages. Another
          characterizes informal logic as the study of ampliative inferences, in
          contrast to the deductive inferences studied by formal logic. But it
          is also common to link their difference to the distinction between
          formal and informal fallacies.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Reason",
    isLargerTitle: false,
    path: "/logic",
    url: `${wikiUrl}/Reason`,
    anchor: "Reason",
    text: {
      p1: (
        <p>
          Reason is the capacity of consciously applying logic by drawing
          conclusions from new or existing information, with the aim of seeking
          the truth. It is closely associated with such characteristically human
          activities as philosophy, science, language, mathematics, and art, and
          is normally considered to be a distinguishing ability possessed by
          humans. Reason is sometimes referred to as rationality.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Property (philosophy)",
    isLargerTitle: false,
    path: "/logic",
    url: `${wikiUrl}/Property_(philosophy)`,
    anchor: "Property_(philosophy)",
    text: {
      p1: (
        <p>
          In logic and philosophy (especially metaphysics), a property is a
          characteristic of an object; a red object is said to have the property
          of redness. The property may be considered a form of object in its own
          right, able to possess other properties. A property, however, differs
          from individual objects in that it may be instantiated, and often in
          more than one thing. It differs from the logical/mathematical concept
          of class by not having any concept of extensionality, and from the
          philosophical concept of class in that a property is considered to be
          distinct from the objects which possess it. Understanding how
          different individual entities (or particulars) can in some sense have
          some of the same properties is the basis of the problem of universals.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "False (logic)",
    isLargerTitle: false,
    path: "/logic",
    url: `${wikiUrl}/False_(logic)`,
    anchor: "False_(logic)",
    text: {
      p1: (
        <p>
          In logic, false or untrue is the state of possessing negative truth
          value or a nullary logical connective.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Logical consequence",
    isLargerTitle: false,
    path: "/logic",
    url: `${wikiUrl}/Logical_consequence`,
    anchor: "Logical_consequence",
    text: {
      p1: (
        <p>
          Logical consequence (also entailment) is a fundamental concept in
          logic, which describes the relationship between statements that hold
          true when one statement logically follows from one or more statements.
          A valid logical argument is one in which the conclusion is entailed by
          the premises, because the conclusion is the consequence of the
          premises. The philosophical analysis of logical consequence involves
          the questions: In what sense does a conclusion follow from its
          premises? and What does it mean for a conclusion to be a consequence
          of premises? All of philosophical logic is meant to provide accounts
          of the nature of logical consequence and the nature of logical truth.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Statement (logic)",
    isLargerTitle: false,
    path: "/logic",
    url: `${wikiUrl}/Statement_(logic)`,
    anchor: "Statement_(logic)",
    text: {
      p1: (
        <p>
          In logic, the term statement is variously understood to mean either
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Logical truth",
    isLargerTitle: false,
    path: "/logic",
    url: `${wikiUrl}/Logical_truth`,
    anchor: "Logical_truth",
    text: {
      p1: (
        <p>
          Logical truth is one of the most fundamental concepts in logic.
          Broadly speaking, a logical truth is a statement which is true
          regardless of the truth or falsity of its constituent propositions. In
          other words, a logical truth is a statement which is not only true,
          but one which is true under all interpretations of its logical
          components (other than its logical constants). Thus, logical truths
          such as "if p, then p" can be considered tautologies. Logical truths
          are thought to be the simplest case of statements which are
          analytically true (or in other words, true by definition). All of
          philosophical logic can be thought of as providing accounts of the
          nature of logical truth, as well as logical consequence.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Argument",
    isLargerTitle: false,
    path: "/logic",
    url: `${wikiUrl}/Argument`,
    anchor: "Argument",
    text: {
      p1: (
        <p>
          An argument is a statement or group of statements called premises
          intended to determine the degree of truth or acceptability of another
          statement called conclusion. Arguments can be studied from three main
          perspectives: the logical, the dialectical and the rhetorical
          perspective.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Premise",
    isLargerTitle: false,
    path: "/logic",
    url: `${wikiUrl}/Premise`,
    anchor: "Premise",
    text: {
      p1: (
        <p>
          A premise or premiss is a true or false statement that helps form the
          body of an argument, which logically leads to a true or false
          conclusion. A premise makes a declarative statement about its subject
          matter which enables a reader to either agree or disagree with the
          premise in question, and in doing so understand the logical
          assumptions of the argument. If a premise is logically false, then the
          conclusion, which follows from all of the premises of the argument,
          must also be false—unless the conclusion is supported by a logically
          valid argument which the reader agrees with. Therefore, if the reader
          disagrees with any one of the argument's premises, they have a logical
          basis to reject the conclusion of the argument.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Informal logic",
    isLargerTitle: false,
    path: "/other_terms",
    url: `${wikiUrl}/Informal_logic`,
    anchor: "Informal_logic",
    text: {
      p1: (
        <p>
          Informal logic encompasses the principles of logic and logical thought
          outside of a formal setting (characterized by the usage of particular
          statements).
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Rule of inference",
    isLargerTitle: false,
    path: "/logic",
    url: `${wikiUrl}/Rule_of_inference`,
    anchor: "Rule_of_inference",
    text: {
      p1: (
        <p>
          In the philosophy of logic, a rule of inference, inference rule or
          transformation rule is a logical form consisting of a function which
          takes premises, analyzes their syntax, and returns a conclusion (or
          conclusions). For example, the rule of inference called modus ponens
          takes two premises, one in the form "If p then q" and another in the
          form "p", and returns the conclusion "q". The rule is valid with
          respect to the semantics of classical logic (as well as the semantics
          of many other non-classical logics), in the sense that if the premises
          are true (under an interpretation), then so is the conclusion.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Logical connective",
    islargertitle: false,
    path: "/logic",
    url: `${wikiUrl}/Logical_connective`,
    anchor: "Logical_connective",
    text: {
      p1: (
        <p>
          In logic, a logical connective (also called a logical operator,
          sentential connective, or sentential operator) is a logical constant.
          They can be used to connect logical formulas.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Semantics of logic",
    islargertitle: false,
    path: "/logic",
    url: `${wikiUrl}/Semantics_of_logic`,
    anchor: "Semantics_of_logic",
    text: {
      p1: (
        <p>
          In logic, the semantics of logic or formal semantics is the study of
          the semantics, or interpretations, of formal and (idealizations of)
          natural languages usually trying to capture the pre-theoretic notion
          of entailment.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Inference",
    isLargerTitle: false,
    path: "/logic",
    url: `${wikiUrl}/Inference`,
    anchor: "Inference",
    text: {
      p1: (
        <p>
          Inferences are steps in reasoning, moving from premises to logical
          consequences; etymologically, the word infer means to "carry forward".
          Inference is theoretically traditionally divided into deduction and
          induction, a distinction that in Europe dates at least to Aristotle
          (300s BCE). Deduction is inference deriving logical conclusions from
          premises known or assumed to be true, with the laws of valid inference
          being studied in logic. Induction is inference from particular
          evidence to a universal conclusion. A third type of inference is
          sometimes distinguished, notably by Charles Sanders Peirce,
          contradistinguishing abduction from induction.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Deductive reasoning",
    isLargerTitle: false,
    path: "/logic",
    url: `${wikiUrl}/Deductive_reasoning`,
    anchor: "Deductive_reasoning",
    text: {
      p1: (
        <p>
          Deductive reasoning is the mental process of drawing deductive
          inferences. An inference is deductively valid if its conclusion
          follows logically from its premises, i.e. if it is impossible for the
          premises to be true and the conclusion to be false. For example, the
          inference from the premises "all men are mortal" and "Socrates is a
          man" to the conclusion "Socrates is mortal" is deductively valid. An
          argument is sound if it is valid and all its premises are true. Some
          theorists define deduction in terms of the intentions of the author:
          they have to intend for the premises to offer deductive support to the
          conclusion. With the help of this modification, it is possible to
          distinguish valid from invalid deductive reasoning: it is invalid if
          the author's belief about the deductive support is false, but even
          invalid deductive reasoning is a form of deductive reasoning.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Inductive reasoning",
    isLargerTitle: false,
    path: "/logic",
    url: `${wikiUrl}/Inductive_reasoning`,
    anchor: "Inductive_reasoning",
    text: {
      p1: (
        <p>
          Inductive reasoning is a method of reasoning in which a body of
          observations is considered to derive a general principle. It consists
          of making broad generalizations based on specific observations.
          Inductive reasoning is distinct from deductive reasoning. If the
          premises are correct, the conclusion of a deductive argument is
          certain; in contrast, the truth of the conclusion of an inductive
          argument is probable, based upon the evidence given.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Imperative logic",
    isLargerTitle: false,
    path: "/logic",
    url: `${wikiUrl}/Imperative_logic`,
    anchor: "Imperative_logic",
    text: {
      p1: (
        <p>
          Imperative logic is the field of logic concerned with imperatives. In
          contrast to declaratives, it is not clear whether imperatives denote
          propositions or more generally what role truth and falsity play in
          their semantics. Thus, there is almost no consensus on any aspect of
          imperative logic.
        </p>
      ),
    },
  },
];

export const contentsLength = logicContents.length;

let subpathContents = [];
export const logicContentsAddedSubpath = addSubpath(
  subpathContents,
  contentsLength,
  logicContents
);
