import { useState } from "react";

const sections = [
  { id: "core", title: "Core Idea" },
  { id: "argument", title: "The Argument" },
  { id: "problems", title: "What's Wrong Now" },
  { id: "proposal", title: "What They Propose" },
  { id: "critique", title: "Critique" },
  { id: "takeaway", title: "Takeaway" },
];

export default function StandardizedEval() {
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
    <h2 style={{ fontSize: 20, fontWeight: 700, margin: "0 0 16px", color: "#f6ad55" }}>{children}</h2>
  );

  const Insight = ({ children }) => (
    <div style={{
      background: "rgba(246,173,85,0.08)", borderLeft: "3px solid #f6ad55",
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
          MOG Explains · Paper 4 of 6
        </div>
        <h1 style={{ fontSize: 24, fontWeight: 800, margin: "0 0 4px", letterSpacing: -0.5 }}>
          Towards More Standardized AI Evaluation
        </h1>
        <div style={{ fontSize: 13, opacity: 0.45, marginBottom: 24 }}>
          El Filali & Bedar, G42/Independent · arXiv:2602.18029
        </div>

        <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 28, borderBottom: "1px solid rgba(255,255,255,0.06)", paddingBottom: 16 }}>
          {sections.map(s => (
            <button key={s.id} onClick={() => setSection(s.id)} style={{
              background: section === s.id ? "rgba(246,173,85,0.15)" : "transparent",
              border: section === s.id ? "1px solid rgba(246,173,85,0.3)" : "1px solid transparent",
              color: section === s.id ? "#f6ad55" : "rgba(255,255,255,0.45)",
              padding: "6px 14px", borderRadius: 20, fontSize: 12, fontWeight: 600, cursor: "pointer",
            }}>{s.title}</button>
          ))}
        </div>

        <S id="core">
          <H>What's the one-sentence version?</H>
          <Insight>
            <strong>The way we evaluate AI models was designed for a world of static benchmarks. That world is gone.</strong> Agentic systems need evaluation frameworks that account for variability, environment, tool use, and hidden assumptions -- not just aggregate scores.
          </Insight>
          <P>This is a position paper, not an empirical study. It does not present new data or methods. It argues that the entire paradigm of AI evaluation needs to shift from "performance measurement" to "trust calibration."</P>
        </S>

        <S id="argument">
          <H>The central argument</H>
          <P>Model-era evaluation worked like this: take a benchmark (MMLU, HumanEval, GSM8K), run the model, get a score, compare to other models. The score was meaningful because the model's behavior was deterministic given a fixed prompt and temperature.</P>
          <P>Agentic evaluation is fundamentally different. An agent interacts with tools, environments, and other agents over multiple steps. Its behavior depends on tool availability, environment state, execution order, and accumulated context. Two runs of the same agent on the same task can produce different trajectories and different outcomes.</P>
          <P>The authors argue this means variability is signal, not noise. If an agent succeeds 7 out of 10 times on a task, the 3 failures are as informative as the 7 successes. An evaluation framework that reports "70% accuracy" is discarding critical information about when and why the agent fails.</P>
        </S>

        <S id="problems">
          <H>What's wrong with current evaluation?</H>
          <P><strong>Hidden assumptions.</strong> Benchmarks assume specific tool versions, API behaviors, and environment configurations that are rarely documented. When results don't reproduce, it's often because the evaluation environment differed in ways nobody recorded.</P>
          <P><strong>Aggregate scores mask failure modes.</strong> An agent that scores 80% might fail consistently on a specific category of task. The aggregate score hides this. Stakeholders making deployment decisions based on aggregate scores are making uninformed decisions.</P>
          <P><strong>Evaluation as performance theater.</strong> The current benchmark culture incentivizes optimizing for leaderboard position rather than understanding system behavior. Teams tune to benchmarks rather than to the tasks the benchmarks are supposed to represent.</P>
          <P><strong>No accounting for environment setup.</strong> Two teams evaluating the same agent with different tool versions, network conditions, or API rate limits will get different results. Without standardized environment specifications, results are not comparable.</P>
        </S>

        <S id="proposal">
          <H>What do they propose?</H>
          <P>The paper frames evaluation as a <strong>measurement discipline conditioning trust</strong>. The key shifts:</P>
          <P><em>From single scores to behavioral profiles.</em> Report distributions of outcomes, not means. Show where the agent fails, not just how often.</P>
          <P><em>From static benchmarks to environment-aware evaluation.</em> Document tool contracts, API versions, and infrastructure assumptions as part of the evaluation specification.</P>
          <P><em>From leaderboard ranking to deployment readiness.</em> The question is not "is this model better than that model?" but "is this agent safe and reliable enough for this specific deployment context?"</P>
          <P><em>Evaluation capacity as a strategic asset.</em> Organizations that can rigorously evaluate AI systems have a competitive advantage over those that cannot. Evaluation infrastructure deserves the same investment as model development.</P>
        </S>

        <S id="critique">
          <H>Limitations</H>
          <P><strong>No concrete framework.</strong> The paper identifies problems clearly but proposes no specific metrics, no formal evaluation protocol, and no empirical validation. It is a philosophical argument, not a technical contribution.</P>
          <P><strong>Light on implementation.</strong> Practitioners reading this paper will agree with every point and then have no idea what to do differently on Monday morning. The gap between "evaluation needs to change" and "here's how to change it" is not bridged.</P>
          <P><strong>Best read as complement to WorkflowPerturb.</strong> The Kanda et al. paper (WorkflowPerturb) provides the concrete calibration data that this paper argues should exist. Together they make a stronger case than either alone.</P>
        </S>

        <S id="takeaway">
          <H>Why include this paper?</H>
          <P>Because the argument is correct even if the paper is lightweight. The field is moving from models to agents, and evaluation infrastructure has not kept pace. The specific claims -- variability is signal, environment matters, aggregate scores mislead -- are things every AI practitioner needs to internalize.</P>
          <Insight>
            The meta-lesson: a position paper that clearly articulates the right problem is valuable even without a solution. In academic research, problem formulation is often the hardest and most important step. This paper does that well.
          </Insight>
        </S>
      </div>
    </div>
  );
}
