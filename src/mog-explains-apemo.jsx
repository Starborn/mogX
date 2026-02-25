import { useState } from "react";

const sections = [
  { id: "core", title: "Core Idea" },
  { id: "problem", title: "The Problem" },
  { id: "method", title: "How APEMO Works" },
  { id: "results", title: "Results" },
  { id: "critique", title: "Critique" },
  { id: "takeaway", title: "Takeaway" },
];

export default function APEMO() {
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
    <h2 style={{ fontSize: 20, fontWeight: 700, margin: "0 0 16px", color: "#fbd38d" }}>{children}</h2>
  );

  const Insight = ({ children }) => (
    <div style={{
      background: "rgba(251,211,141,0.08)", borderLeft: "3px solid #fbd38d",
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
          MOG Explains · Paper 2 of 6
        </div>
        <h1 style={{ fontSize: 24, fontWeight: 800, margin: "0 0 4px", letterSpacing: -0.5 }}>
          Alignment in Time: APEMO
        </h1>
        <div style={{ fontSize: 13, opacity: 0.45, marginBottom: 24 }}>
          Shi & DiFranzo, Lehigh University · arXiv:2602.17910
        </div>

        <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 28, borderBottom: "1px solid rgba(255,255,255,0.06)", paddingBottom: 16 }}>
          {sections.map(s => (
            <button key={s.id} onClick={() => setSection(s.id)} style={{
              background: section === s.id ? "rgba(251,211,141,0.15)" : "transparent",
              border: section === s.id ? "1px solid rgba(251,211,141,0.3)" : "1px solid transparent",
              color: section === s.id ? "#fbd38d" : "rgba(255,255,255,0.45)",
              padding: "6px 14px", borderRadius: 20, fontSize: 12, fontWeight: 600, cursor: "pointer",
            }}>{s.title}</button>
          ))}
        </div>

        <S id="core">
          <H>What's the one-sentence version?</H>
          <Insight>
            <strong>Identical local errors have different global consequences depending on when they happen.</strong> An AI agent that makes a mistake at a critical decision point causes far more damage than the same mistake at a routine moment. APEMO is a scheduling layer that detects critical moments and redirects computational resources to them.
          </Insight>
          <P>Think of it this way: a surgeon who sneezes during a routine stitch causes a minor inconvenience. A surgeon who sneezes while cutting near an artery causes a catastrophe. The sneeze is the same. The timing is what matters.</P>
          <P>Current AI alignment work treats every step of an agent's trajectory equally. APEMO argues this is wrong -- alignment is a temporal control problem, not just a parameter optimization problem.</P>
        </S>

        <S id="problem">
          <H>What problem does this solve?</H>
          <P>When AI agents execute multi-step tasks -- planning a trip, writing code, managing a workflow -- they make sequences of decisions. Current alignment approaches treat each decision independently: is this output safe? Is this output helpful?</P>
          <P>But agent trajectories have structure. Some moments are turning points where a wrong step cascades into failure. Others are routine where errors are easily corrected. Spending equal alignment effort on every step wastes resources on low-stakes moments and under-invests at critical junctures.</P>
          <P>The insight comes from cognitive psychology: the <strong>peak-end rule</strong>. Decades of research by Kahneman and others shows that humans judge experiences primarily by their most intense moment (the peak) and how they end. APEMO applies this principle to agent trajectories -- find the peaks, protect the endings.</P>
        </S>

        <S id="method">
          <H>How does APEMO work?</H>
          <P>APEMO sits as a runtime layer on top of existing agent systems. It doesn't modify the agent itself. It monitors the agent's trajectory and redistributes compute under a fixed budget. Three steps:</P>
          <P><strong>1. Detect instability.</strong> APEMO monitors behavioral proxies -- is the agent repeating itself? Are outputs deviating from expected patterns? Is token usage becoming inefficient? These signal that the agent is at a critical juncture.</P>
          <P><strong>2. Score criticality.</strong> Each moment gets a criticality score based on the detected signals. High scores mean "this is a turning point -- invest resources here."</P>
          <P><strong>3. Redistribute compute.</strong> Under a fixed total budget, APEMO shifts resources from low-criticality moments to high-criticality ones. The agent gets more reasoning time, more retries, or more verification at the moments that matter most.</P>
          <Insight>The key constraint: APEMO works under a <strong>fixed compute budget</strong>. It doesn't add resources -- it reallocates them. This makes it practical for deployment where compute costs are real.</Insight>
        </S>

        <S id="results">
          <H>What did they find?</H>
          <P>Across multi-agent simulations and LLM planner-executor flows, APEMO achieved <strong>14-43% quality gains</strong> at only <strong>3-8% coordination cost increases</strong>.</P>
          <P>The quality gains come from catching errors at critical moments before they cascade. The coordination cost is the overhead of monitoring and redistribution -- modest because the monitoring uses lightweight behavioral proxies rather than expensive model evaluations.</P>
          <P>The results suggest that intelligent scheduling of alignment effort matters more than uniform intensity of alignment effort. Doing less at routine moments and more at critical moments outperforms doing the same amount everywhere.</P>
        </S>

        <S id="critique">
          <H>What are the limitations?</H>
          <P><strong>Proxy validity.</strong> The "frustration signals" used to detect critical moments -- repetition, deviation, token inefficiency -- are heuristics. Their relationship to actual failure risk is assumed, not validated. An agent repeating itself might be stuck, or might be deliberating carefully. The proxy doesn't distinguish.</P>
          <P><strong>Scale.</strong> Experiments used small models (llama3.2:1b, qwen2.5:1.5b, gemma2:2b) with simulated metrics. Whether the approach transfers to frontier models running real tasks is undemonstrated.</P>
          <P><strong>The peak-end rule is descriptive, not prescriptive.</strong> Kahneman showed that humans <em>do</em> judge experiences by peaks and ends. He didn't show that this is how experiences <em>should</em> be optimized. Applying a cognitive bias as a design principle is creative but philosophically questionable.</P>
        </S>

        <S id="takeaway">
          <H>Why does this matter?</H>
          <P>The core insight survives the limitations: <strong>alignment is not uniform across time.</strong> Some moments in an agent's trajectory matter more than others. Any alignment framework that treats every step equally is systematically misallocating effort.</P>
          <P>This connects to the Epistemic Traps paper (Xu et al.): if misalignment can be rational at specific moments given the agent's belief state, then temporal awareness of <em>when</em> the agent enters dangerous epistemic states matters as much as detecting <em>that</em> it has.</P>
          <Insight>
            For practitioners: even without implementing APEMO specifically, the principle applies. When building agent systems, identify the critical decision points and invest your safety budget there rather than distributing it uniformly.
          </Insight>
        </S>
      </div>
    </div>
  );
}
