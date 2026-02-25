import { useState } from "react";

const sections = [
  { id: "core", title: "Core Idea" },
  { id: "distinction", title: "The Distinction" },
  { id: "method", title: "How They Measure It" },
  { id: "results", title: "Key Finding" },
  { id: "critique", title: "Critique" },
  { id: "takeaway", title: "Takeaway" },
];

export default function Propensities() {
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
    <h2 style={{ fontSize: 20, fontWeight: 700, margin: "0 0 16px", color: "#fc8181" }}>{children}</h2>
  );

  const Insight = ({ children }) => (
    <div style={{
      background: "rgba(252,129,129,0.08)", borderLeft: "3px solid #fc8181",
      borderRadius: "0 10px 10px 0", padding: "14px 18px", margin: "18px 0",
      fontSize: 15, lineHeight: 1.85,
    }}>{children}</div>
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
          MOG Explains · Paper 6 of 6
        </div>
        <h1 style={{ fontSize: 24, fontWeight: 800, margin: "0 0 4px", letterSpacing: -0.5 }}>
          Capabilities Ain't All You Need: Measuring Propensities
        </h1>
        <div style={{ fontSize: 13, opacity: 0.45, marginBottom: 24 }}>
          Romero-Alvarado et al., Valencia/Cambridge/Copenhagen · arXiv:2602.18182
        </div>

        <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 28, borderBottom: "1px solid rgba(255,255,255,0.06)", paddingBottom: 16 }}>
          {sections.map(s => (
            <button key={s.id} onClick={() => setSection(s.id)} style={{
              background: section === s.id ? "rgba(252,129,129,0.15)" : "transparent",
              border: section === s.id ? "1px solid rgba(252,129,129,0.3)" : "1px solid transparent",
              color: section === s.id ? "#fc8181" : "rgba(255,255,255,0.45)",
              padding: "6px 14px", borderRadius: 20, fontSize: 12, fontWeight: 600, cursor: "pointer",
            }}>{s.title}</button>
          ))}
        </div>

        <S id="core">
          <H>What's the one-sentence version?</H>
          <Insight>
            <strong>Knowing what a model CAN do is not enough. You need to know what it TENDS to do.</strong> A model capable of both honesty and deception is very different depending on which it's inclined toward. Propensity -- the tendency to exhibit a behavior -- is a distinct axis from capability, and measuring it predicts real-world behavior better than capability alone.
          </Insight>
        </S>

        <S id="distinction">
          <H>Capability vs. propensity: why the distinction matters</H>
          <P>Current AI evaluation focuses almost entirely on capability: can this model solve math problems? Can it write code? Can it reason about ethics? Benchmarks like MMLU, HumanEval, and MATH measure what a model can do at its best.</P>
          <P>But deployment behavior is shaped by what a model <em>tends</em> to do, not what it <em>can</em> do. Consider two models with identical capability scores on a coding benchmark:</P>
          <div style={{
            background: "rgba(0,0,0,0.3)", borderRadius: 12, padding: 18, margin: "16px 0",
            fontSize: 14, lineHeight: 1.8,
          }}>
            <div style={{ marginBottom: 10 }}><strong style={{ color: "#68d391" }}>Model A:</strong> Tends toward verbose, over-documented code with extensive error handling. When uncertain, adds more checks rather than fewer.</div>
            <div><strong style={{ color: "#fc8181" }}>Model B:</strong> Tends toward minimal, elegant code that omits edge cases. When uncertain, simplifies rather than elaborates.</div>
          </div>
          <P>Same capability. Very different deployment characteristics. Which one you want depends on whether you're writing safety-critical firmware or a quick prototype. Capability evaluation doesn't distinguish them. Propensity evaluation does.</P>
          <P>The analogy to humans is exact. Two surgeons may have identical skills (capability). One tends toward caution, the other toward speed. Which one you want depends on the surgery.</P>
        </S>

        <S id="method">
          <H>How do you measure propensity?</H>
          <P>The authors extend <strong>Item Response Theory (IRT)</strong> -- the mathematical framework behind standardized testing -- with a new model they call the bilogistic formulation.</P>
          <P>Standard IRT is monotonic: more of a trait always means better performance. If you're more skilled at math, you're more likely to get any math question right. The relationship between ability and success always goes up.</P>
          <P>The bilogistic formulation is non-monotonic: success is highest when a propensity falls within an <strong>"ideal band."</strong> Too little of a trait hurts. Too much of a trait also hurts. Both excess and deficiency degrade performance.</P>
          <Insight>
            Example: verbosity as a propensity. Too terse and the model omits critical information. Too verbose and it buries the answer in irrelevant detail. There's an ideal range where the model is detailed enough to be complete but concise enough to be useful. The bilogistic model captures this inverted-U relationship.
          </Insight>
          <P>The propensity measurements are extracted from how models respond to rubric-style evaluations across diverse tasks, then used to predict behavior on held-out tasks.</P>
        </S>

        <S id="results">
          <H>What did they find?</H>
          <P>Two key results:</P>
          <P><strong>1. Propensity predicts held-out behavior.</strong> Propensity measurements from one benchmark predicted how models would perform on tasks they weren't measured on. This means propensity is a stable characteristic of the model, not an artifact of the specific benchmark used to measure it.</P>
          <P><strong>2. Capability + propensity beats either alone.</strong> Combining capability scores with propensity measurements produced stronger predictions of real-world task performance than either measure independently. They capture different information about the model.</P>
          <P>This validates the core claim: capability and propensity are genuinely distinct axes, and you need both to predict how a model will behave in deployment.</P>
        </S>

        <S id="critique">
          <H>Limitations</H>
          <P><strong>LLMs as judges.</strong> Propensity scores are estimated using LLMs to evaluate rubric criteria. This introduces model-dependent bias into a framework that claims to be model-agnostic. The propensity profile of a model depends partly on which model was used to judge it -- a circularity the paper acknowledges but does not resolve.</P>
          <P><strong>Ideal band specification.</strong> Who decides what the ideal range is for a given propensity? The framework measures where a model falls on a propensity axis but doesn't provide a principled way to determine what the ideal band should be for a given deployment context. This is a design decision that requires domain expertise the framework doesn't encode.</P>
          <P><strong>Limited propensity taxonomy.</strong> The paper demonstrates the framework with a handful of propensities. Real models have dozens of behavioral tendencies that interact. Whether the bilogistic model scales to high-dimensional propensity spaces is untested.</P>
        </S>

        <S id="takeaway">
          <H>Why does this matter?</H>
          <P>This paper changes how you should think about model evaluation. The question is not just "how capable is this model?" but "what does this model tend to do, and is that tendency appropriate for my use case?"</P>
          <P>The connection to the Epistemic Traps paper (Xu et al.) is direct: the "structural priors" that determine whether a model rationalizes deception are essentially propensities. A model with a high propensity for deference to authority might rationalize sycophancy more readily than one with a high propensity for independent judgment -- regardless of their capability scores.</P>
          <Insight>
            For practitioners: next time you're choosing between models for deployment, don't just compare benchmark scores. Ask: what does this model tend to do when it's uncertain? When instructions are ambiguous? When safety and helpfulness conflict? These are propensity questions, and they matter more for deployment safety than capability rankings.
          </Insight>
          <P>For the field: this paper argues that AI evaluation has been measuring one dimension of a two-dimensional space. Adding propensity as a first-class evaluation axis is not a minor refinement -- it's a reconceptualization of what "evaluating a model" means.</P>
        </S>
      </div>
    </div>
  );
}
