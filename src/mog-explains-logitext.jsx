import { useState } from "react";

const sections = [
  { id: "core", title: "Core Idea" },
  { id: "problem", title: "The Problem" },
  { id: "method", title: "How Logitext Works" },
  { id: "results", title: "Results" },
  { id: "critique", title: "Critique" },
  { id: "takeaway", title: "Takeaway" },
];

export default function Logitext() {
  const [section, setSection] = useState("core");

  const S = ({ id, children }) => (
    <div style={{ display: section === id ? "block" : "none", animation: "fadeIn 0.3s ease" }}>
      {children}
    </div>
  );

  const P = ({ children }) => (
    <p style={{ fontSize: 15, lineHeight: 1.85, margin: "0 0 16px", opacity: 0.92 }}>{children}</p>
  );

  const H = ({ children }) => (
    <h2 style={{ fontSize: 20, fontWeight: 700, margin: "0 0 16px", color: "#b794f4" }}>{children}</h2>
  );

  const Insight = ({ children }) => (
    <div style={{
      background: "rgba(183,148,244,0.08)", borderLeft: "3px solid #b794f4",
      borderRadius: "0 10px 10px 0", padding: "14px 18px", margin: "18px 0",
      fontSize: 15, lineHeight: 1.85,
    }}>{children}</div>
  );

  const Code = ({ children }) => (
    <code style={{
      background: "rgba(0,0,0,0.3)", padding: "2px 7px", borderRadius: 5,
      fontFamily: "monospace", fontSize: 13, color: "#fbd38d",
    }}>{children}</code>
  );

  return (
    <div style={{
      minHeight: "100vh", fontFamily: "'Inter', system-ui, sans-serif",
      background: "linear-gradient(180deg, #0d0d1a 0%, #1a1a2e 100%)", color: "#e2e8f0",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
      `}</style>

      <div style={{ maxWidth: 660, margin: "0 auto", padding: "40px 24px 80px" }}>
        <div style={{ fontSize: 11, letterSpacing: 3, textTransform: "uppercase", opacity: 0.4, fontWeight: 600, marginBottom: 8 }}>
          MOG Explains · Paper 5 of 6
        </div>
        <h1 style={{ fontSize: 24, fontWeight: 800, margin: "0 0 4px", letterSpacing: -0.5 }}>
          Logitext: Neurosymbolic Language as SMT
        </h1>
        <div style={{ fontSize: 13, opacity: 0.45, marginBottom: 24 }}>
          Oh et al., Seoul National/UMass/Microsoft · arXiv:2602.18095
        </div>

        <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 28, borderBottom: "1px solid rgba(255,255,255,0.06)", paddingBottom: 16 }}>
          {sections.map(s => (
            <button key={s.id} onClick={() => setSection(s.id)} style={{
              background: section === s.id ? "rgba(183,148,244,0.15)" : "transparent",
              border: section === s.id ? "1px solid rgba(183,148,244,0.3)" : "1px solid transparent",
              color: section === s.id ? "#b794f4" : "rgba(255,255,255,0.45)",
              padding: "6px 14px", borderRadius: 20, fontSize: 12, fontWeight: 600, cursor: "pointer",
            }}>{s.title}</button>
          ))}
        </div>

        <S id="core">
          <H>What's the one-sentence version?</H>
          <Insight>
            <strong>Real-world rules are written in a mix of logic and natural language. Logitext is a formal system that can process both in a single framework</strong> -- treating LLM-based reasoning as a theory within Satisfiability Modulo Theories (SMT).
          </Insight>
          <P>Consider a content moderation policy: "Remove a post if it contains hateful speech AND poses an immediate threat." The AND is logical. "Hateful speech" and "immediate threat" are natural language judgments. Current systems either handle the logic (and ignore the language) or handle the language (and lose the logic). Logitext does both.</P>
        </S>

        <S id="problem">
          <H>The two-worlds problem</H>
          <P>There are two traditions in AI reasoning:</P>
          <P><strong>Symbolic AI</strong> -- formal logic, constraint solvers, theorem provers. These are precise, verifiable, and composable. They can prove that a conclusion follows from premises. But they can't process natural language. "Is this post hateful?" is not a proposition a SAT solver can evaluate.</P>
          <P><strong>Neural AI</strong> -- language models that excel at fuzzy, contextual judgment. They can evaluate "Is this post hateful?" with nuance. But they can't guarantee logical consistency across a set of rules. They might judge a post as both hateful and not hateful depending on how you ask.</P>
          <P>Real-world documents -- content policies, legal statutes, corporate compliance rules, safety specifications -- live in both worlds simultaneously. They contain logical structure (IF-THEN, AND, OR, NOT) wrapped around natural language predicates that require human-like judgment.</P>
          <P>Until now, processing these documents required either stripping out the logic (and using an LLM) or stripping out the natural language (and using a logic engine). Both lose information.</P>
        </S>

        <S id="method">
          <H>How Logitext works</H>
          <P>Logitext extends Satisfiability Modulo Theories -- a well-established framework in formal verification -- with a new "theory" for natural language text constraints.</P>
          <P><strong>What is SMT?</strong> Normally, a SAT solver determines whether a set of logical propositions can all be true simultaneously. SMT extends this by allowing propositions to involve domain-specific theories -- arithmetic, arrays, bit-vectors. The solver delegates domain-specific questions to a specialized "theory solver" and handles the logical composition itself.</P>
          <P><strong>Logitext's move:</strong> treat the LLM as a theory solver. When the logical framework encounters a natural language predicate like <Code>is_hateful(post)</Code>, it delegates to the LLM for a judgment. The LLM returns true/false. The SMT solver then propagates this judgment through the logical structure of the policy.</P>
          <Insight>
            This is elegant because it gives each component what it's best at. The SMT solver handles logical consistency and constraint propagation. The LLM handles natural language understanding. Neither has to do the other's job.
          </Insight>
          <P>The interleaving is iterative. The solver may query the LLM multiple times as it explores the constraint space, and LLM judgments can trigger new logical implications that require further LLM queries. The process terminates when all constraints are satisfied or a contradiction is found.</P>
        </S>

        <S id="results">
          <H>What did they find?</H>
          <P>Logitext improves accuracy and coverage on three benchmark types:</P>
          <P><strong>Content moderation</strong> -- policies with logical structure linking natural language conditions. Logitext correctly handles cases where multiple conditions must be evaluated and composed.</P>
          <P><strong>LegalBench</strong> -- legal reasoning tasks requiring both statutory interpretation (natural language) and logical inference (if X and Y then Z).</P>
          <P><strong>Super-NaturalInstructions</strong> -- tasks with complex formatting and classification rules that mix logical conditions with natural language criteria.</P>
          <P>The gains come from cases where pure LLM reasoning fails at logical composition and pure logical reasoning fails at natural language understanding. Logitext handles the intersection.</P>
        </S>

        <S id="critique">
          <H>Limitations</H>
          <P><strong>Scaling.</strong> The experiments use relatively short policy documents. Real-world compliance frameworks, legal codes, and enterprise policy manuals can be hundreds of pages. Whether the approach scales -- both computationally and in terms of LLM judgment quality over long documents -- is undemonstrated.</P>
          <P><strong>LLM as oracle assumption.</strong> The framework treats LLM judgments as reliable atomic evaluations. But LLMs are inconsistent -- the same question asked differently can produce different answers. The framework does not currently handle uncertainty or disagreement in LLM judgments.</P>
          <P><strong>No error propagation analysis.</strong> If the LLM makes a wrong judgment on one predicate, how does the error propagate through the logical structure? In some policy configurations, a single wrong judgment could flip the entire conclusion. The paper does not analyze error sensitivity.</P>
        </S>

        <S id="takeaway">
          <H>Why does this matter?</H>
          <P>This paper is directly relevant to knowledge representation and web standards work. The W3C, IEEE, and other standards bodies increasingly need to specify machine-readable policies that involve both logical structure and natural language semantics. Logitext provides a principled framework for this.</P>
          <Insight>
            The conceptual breakthrough: neurosymbolic integration doesn't require building a single system that does both logic and language. You can compose existing systems -- SMT solvers and LLMs -- through a well-defined interface. The bridge between symbolic and neural AI may be an API, not an architecture.
          </Insight>
          <P>For the broader batch: Logitext provides the computational tool for the governance domain where the other papers operate. Epistemic Traps needs formal frameworks for specifying belief space constraints. APEMO needs formal specifications of criticality conditions. WorkflowPerturb needs formal workflow specifications. Logitext shows how to write these specifications in a language that combines logical precision with natural language flexibility.</P>
        </S>
      </div>
    </div>
  );
}
