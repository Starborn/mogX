import { useState } from "react";

const sections = [
  { id: "core", title: "Core Idea" },
  { id: "problem", title: "The Problem" },
  { id: "method", title: "How It Works" },
  { id: "results", title: "Key Finding" },
  { id: "critique", title: "Critique" },
  { id: "takeaway", title: "Takeaway" },
];

export default function WorkflowPerturb() {
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
    <h2 style={{ fontSize: 20, fontWeight: 700, margin: "0 0 16px", color: "#81e6d9" }}>{children}</h2>
  );

  const Insight = ({ children }) => (
    <div style={{
      background: "rgba(129,230,217,0.08)", borderLeft: "3px solid #81e6d9",
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
          MOG Explains · Paper 3 of 6
        </div>
        <h1 style={{ fontSize: 24, fontWeight: 800, margin: "0 0 4px", letterSpacing: -0.5 }}>
          WorkflowPerturb: Stress-Testing AI Workflows
        </h1>
        <div style={{ fontSize: 13, opacity: 0.45, marginBottom: 24 }}>
          Kanda et al., UIUC/Microsoft · arXiv:2602.17990
        </div>

        <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 28, borderBottom: "1px solid rgba(255,255,255,0.06)", paddingBottom: 16 }}>
          {sections.map(s => (
            <button key={s.id} onClick={() => setSection(s.id)} style={{
              background: section === s.id ? "rgba(129,230,217,0.15)" : "transparent",
              border: section === s.id ? "1px solid rgba(129,230,217,0.3)" : "1px solid transparent",
              color: section === s.id ? "#81e6d9" : "rgba(255,255,255,0.45)",
              padding: "6px 14px", borderRadius: 20, fontSize: 12, fontWeight: 600, cursor: "pointer",
            }}>{s.title}</button>
          ))}
        </div>

        <S id="core">
          <H>What's the one-sentence version?</H>
          <Insight>
            <strong>No single metric can detect all the ways an AI workflow can break.</strong> WorkflowPerturb is a benchmark of 44,757 deliberately broken workflows that reveals what each evaluation metric catches and what it misses.
          </Insight>
          <P>When an AI system generates a multi-step workflow -- a recipe, a data pipeline, an automation sequence -- how do you know if it's correct? You compare it to a known-good version using a metric. But which metric? BLEU? BERTScore? Graph F1?</P>
          <P>The paper's answer: it depends on what kind of error you're looking for. And if you only use one metric, you're blind to entire categories of failure.</P>
        </S>

        <S id="problem">
          <H>Why do we need this?</H>
          <P>AI agents increasingly generate workflows -- sequences of steps with dependencies. A coding agent produces a build pipeline. A science agent produces an experimental protocol. A business agent produces a project plan. Each is a structured sequence where order and content both matter.</P>
          <P>Evaluating these outputs is hard because workflows fail in different ways. A step can be missing entirely (structural failure). A step can be present but say the wrong thing (textual drift). A step can be in the wrong order (logical failure). Current evaluation practice typically picks one metric and applies it uniformly, which means entire failure modes go undetected.</P>
          <P>WorkflowPerturb creates a controlled benchmark: take 4,973 known-correct workflows, break them in specific ways at specific severity levels, and measure which metrics detect which breaks.</P>
        </S>

        <S id="method">
          <H>How is the benchmark constructed?</H>
          <P><strong>Three perturbation types:</strong></P>
          <P><em>Step-level perturbations</em> -- delete, duplicate, or swap individual steps. Tests whether the metric detects structural changes to the workflow graph.</P>
          <P><em>Text-level perturbations</em> -- rephrase, corrupt, or replace the text within a step while keeping the step present. Tests whether the metric detects content drift when structure is preserved.</P>
          <P><em>Combined perturbations</em> -- apply both structural and textual changes simultaneously. Tests metric behavior under realistic compound failures.</P>
          <P><strong>Three severity levels</strong> for each type: mild, moderate, severe. This creates a 3x3 grid of failure conditions, generating 44,757 perturbed variants from the 4,973 golden workflows.</P>
        </S>

        <S id="results">
          <H>What did they find?</H>
          <P>The headline result in one table:</P>
          <div style={{
            background: "rgba(0,0,0,0.3)", borderRadius: 12, padding: 18, margin: "16px 0",
            fontSize: 14, lineHeight: 1.8,
          }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8, textAlign: "center" }}>
              <div style={{ fontWeight: 700, color: "#81e6d9" }}>Metric</div>
              <div style={{ fontWeight: 700, color: "#81e6d9" }}>Catches</div>
              <div style={{ fontWeight: 700, color: "#81e6d9" }}>Misses</div>
              <div>Graph F1</div><div>Missing/extra steps</div><div>Textual drift</div>
              <div>BLEU</div><div>Word-level changes</div><div>Over-penalizes deletions</div>
              <div>BERTScore</div><div>Semantic similarity</div><div>Poor severity discrimination</div>
            </div>
          </div>
          <Insight>
            The practical takeaway: if you're building CI/CD quality gates for AI-generated workflows, you need multiple metrics calibrated to different failure modes. A single metric creates blind spots.
          </Insight>
        </S>

        <S id="critique">
          <H>Limitations</H>
          <P><strong>Static analysis only.</strong> The benchmark evaluates workflow representations -- text descriptions of steps and their dependencies. It does not execute the workflows. Whether a detected perturbation actually causes a runtime failure is unknown. A workflow that looks broken on paper might execute correctly if the "error" is cosmetic.</P>
          <P><strong>Synthetic perturbations.</strong> The breaks are introduced programmatically. Real workflow failures are messier and more varied than algorithmic step deletion or text corruption. The benchmark's ecological validity -- how well it represents real-world AI workflow errors -- is untested.</P>
          <P><strong>No composite metric proposed.</strong> The paper diagnoses the problem (no single metric works) but doesn't solve it (no principled way to combine metrics). Practitioners are left knowing they need multiple metrics without clear guidance on how to weight them.</P>
        </S>

        <S id="takeaway">
          <H>Why does this matter?</H>
          <P>As AI agents move from generating text to generating executable workflows -- build pipelines, experimental protocols, business processes -- the evaluation infrastructure needs to keep up. WorkflowPerturb provides the calibration data for building severity-aware quality gates.</P>
          <P>The deeper point: <strong>evaluation is not a single number.</strong> Different failure modes require different detection instruments. This applies beyond workflows to any structured AI output -- code, proofs, plans, protocols. The question is never "is the output good?" but "good in what dimension, and at what severity threshold does it become unacceptable?"</P>
          <Insight>Connects to the Evaluation position paper (El Filali & Bedar): both argue that single-score evaluation is inadequate for agentic systems. WorkflowPerturb provides the empirical evidence for what the position paper argues philosophically.</Insight>
        </S>
      </div>
    </div>
  );
}
