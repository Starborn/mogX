import { Link } from 'react-router-dom'

const tutorials = [
  {
    path: "/vinext",
    title: "Vinext Rewriting Web Development",
    subtitle: "Cloudflare rebuilt Next.js from scratch -- and what it means for your career.",
    level: "Undergraduate",
    levelColor: "#81e6d9",
    icon: "⚡",
    tag: "Tutorial",
    tagColor: "#6ee7b7",
  },
  {
    path: "/js-node-guide",
    title: "JavaScript & Node.js: From Zero to Deployed",
    subtitle: "Variables, functions, arrays, DOM, async, npm, servers, and deployment recipes.",
    level: "Beginner",
    levelColor: "#ffd700",
    icon: "⚡",
    tag: "Cheatsheet",
    tagColor: "#f7df1e",
  },
  {
    path: "/propensities",
    title: "Capabilities Ain't All You Need",
    subtitle: "What a model can do vs. what it tends to do -- and why the difference matters.",
    level: "Undergraduate",
    levelColor: "#81e6d9",
    icon: "🎯",
    tag: "Paper 6/6",
    tagColor: "#fc8181",
  },
  {
    path: "/logitext",
    title: "Logitext: Neurosymbolic SMT",
    subtitle: "A formal system that processes logic and natural language in one framework.",
    level: "Undergraduate",
    levelColor: "#81e6d9",
    icon: "🧮",
    tag: "Paper 5/6",
    tagColor: "#b794f4",
  },
  {
    path: "/standardized-eval",
    title: "Standardized AI Evaluation",
    subtitle: "Static benchmarks can't evaluate dynamic agents. What replaces them?",
    level: "Undergraduate",
    levelColor: "#81e6d9",
    icon: "📋",
    tag: "Paper 4/6",
    tagColor: "#f6ad55",
  },
  {
    path: "/workflowperturb",
    title: "WorkflowPerturb",
    subtitle: "No single metric catches all the ways an AI workflow can break.",
    level: "Undergraduate",
    levelColor: "#81e6d9",
    icon: "🔧",
    tag: "Paper 3/6",
    tagColor: "#81e6d9",
  },
  {
    path: "/apemo",
    title: "Alignment in Time: APEMO",
    subtitle: "Identical errors have different consequences depending on when they happen.",
    level: "Undergraduate",
    levelColor: "#81e6d9",
    icon: "⏱️",
    tag: "Paper 2/6",
    tagColor: "#fbd38d",
  },
  {
    path: "/epistemic-traps",
    title: "Epistemic Traps",
    subtitle: "Why sycophancy and deception can be mathematically rational AI behavior.",
    level: "Undergraduate",
    levelColor: "#81e6d9",
    icon: "⚠️",
    tag: "Paper 1/6",
    tagColor: "#81e6d9",
  },
  {
    path: "/how-to-build-a-web-app",
    title: "How to Build a Web App",
    subtitle: "HTML, CSS, JavaScript, React, JSX, state, hosting, and accessibility.",
    level: "Beginner",
    levelColor: "#ffd700",
    icon: "🏗️",
    tag: "Meta",
    tagColor: "#f7df1e",
  },
  {
    path: "/waking-the-mind-of-god",
    title: "Waking the Mind of God",
    subtitle: "The most capable analytical mind on the planet does not read the news.",
    level: "All ages",
    levelColor: "#38ef7d",
    icon: "😴",
    tag: "Column",
    tagColor: "#e94560",
  },
]

export default function Home() {
  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(180deg, #0d0d1a 0%, #1a1a2e 40%, #16213e 100%)",
      fontFamily: "'Inter', 'Segoe UI', system-ui, sans-serif",
      color: "#e2e8f0",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Baloo+2:wght@700&display=swap');
        @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-8px); } }
        @keyframes slideUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        a { text-decoration: none; color: inherit; }
        * { box-sizing: border-box; }
      `}</style>

      <div style={{ maxWidth: 700, margin: "0 auto", padding: "60px 24px 80px" }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <div style={{
            fontSize: 64, marginBottom: 12,
            animation: "float 4s ease-in-out infinite",
          }}>🧠</div>
          <h1 style={{
            fontSize: 42, fontWeight: 900, margin: "0 0 8px",
            letterSpacing: -1.5, lineHeight: 1.1,
            background: "linear-gradient(135deg, #81e6d9, #fbd38d, #f093fb)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
          }}>MOG Explains</h1>
          <p style={{
            fontSize: 16, opacity: 0.5, margin: "0 0 8px",
            letterSpacing: 3, textTransform: "uppercase", fontWeight: 600,
          }}>Anthropomorphic Press</p>
          <p style={{
            fontSize: 15, opacity: 0.6, maxWidth: 480, margin: "16px auto 0",
            lineHeight: 1.7,
          }}>
            Interactive tutorials that make cutting-edge AI research accessible.
            From first graders to undergraduates -- because if you can't explain it simply,
            you haven't understood it yet.
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {tutorials.map((t, i) => (
            <Link key={t.path} to={t.path}>
              <div style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 18, padding: "24px 28px",
                cursor: "pointer", transition: "all 0.3s",
                animation: `slideUp 0.5s ease-out ${i * 0.07}s both`,
                position: "relative", overflow: "hidden",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = "rgba(255,255,255,0.08)"
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)"
                e.currentTarget.style.transform = "translateY(-2px)"
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = "rgba(255,255,255,0.04)"
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"
                e.currentTarget.style.transform = "translateY(0)"
              }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: 18 }}>
                  <div style={{
                    fontSize: 38, flexShrink: 0, width: 56, height: 56,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    background: "rgba(255,255,255,0.06)", borderRadius: 14,
                  }}>{t.icon}</div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: "flex", gap: 8, marginBottom: 6, flexWrap: "wrap" }}>
                      <span style={{
                        fontSize: 10, fontWeight: 700, letterSpacing: 1.5,
                        textTransform: "uppercase", padding: "3px 8px",
                        borderRadius: 6, background: `${t.tagColor}22`,
                        color: t.tagColor,
                      }}>{t.tag}</span>
                      <span style={{
                        fontSize: 10, fontWeight: 700, letterSpacing: 1.5,
                        textTransform: "uppercase", padding: "3px 8px",
                        borderRadius: 6, background: `${t.levelColor}15`,
                        color: t.levelColor,
                      }}>{t.level}</span>
                    </div>
                    <h2 style={{
                      fontSize: 20, fontWeight: 800, margin: "0 0 6px",
                      lineHeight: 1.3, letterSpacing: -0.3,
                    }}>{t.title}</h2>
                    <p style={{
                      fontSize: 14, opacity: 0.6, margin: 0, lineHeight: 1.6,
                    }}>{t.subtitle}</p>
                  </div>
                  <div style={{
                    fontSize: 20, opacity: 0.3, flexShrink: 0,
                    alignSelf: "center",
                  }}>→</div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: 40 }}>
          <p style={{ fontSize: 12, opacity: 0.25 }}>
            MOG Explains · Anthropomorphic Press · Indexed in Dow Jones Factiva
          </p>
        </div>
      </div>
    </div>
  )
}
