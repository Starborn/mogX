seimport { useState } from "react";

const pages = [
  {
    id: "intro",
    title: "How Did MOG Make This?",
    emoji: "🏗️",
    bg: "linear-gradient(135deg, #ff9a56 0%, #ff6b6b 50%, #ee5a24 100%)",
    accent: "#fff",
  },
  {
    id: "whatis",
    title: "What IS a Web App?",
    emoji: "🌐",
    bg: "linear-gradient(135deg, #0c3547 0%, #1a6b8a 50%, #2d9cdb 100%)",
    accent: "#ffd700",
  },
  {
    id: "blocks",
    title: "Building Blocks",
    emoji: "🧱",
    bg: "linear-gradient(135deg, #2d1b69 0%, #6c3483 50%, #a569bd 100%)",
    accent: "#ffd700",
  },
  {
    id: "react",
    title: "What is React?",
    emoji: "⚛️",
    bg: "linear-gradient(135deg, #0a1628 0%, #1a2744 50%, #20232a 100%)",
    accent: "#61dafb",
  },
  {
    id: "jsx",
    title: "What is JSX?",
    emoji: "✏️",
    bg: "linear-gradient(135deg, #1e3c72 0%, #2a5298 50%, #3b7dd8 100%)",
    accent: "#f7df1e",
  },
  {
    id: "build",
    title: "Let's Build Something!",
    emoji: "🔨",
    bg: "linear-gradient(135deg, #11998e 0%, #38ef7d 100%)",
    accent: "#1a1a2e",
  },
  {
    id: "state",
    title: "The Magic Memory",
    emoji: "🧠",
    bg: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    accent: "#fff",
  },
  {
    id: "web",
    title: "Putting It on the Web!",
    emoji: "🚀",
    bg: "linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)",
    accent: "#ffd700",
  },
  {
    id: "access",
    title: "Making It for EVERYONE",
    emoji: "♿",
    bg: "linear-gradient(135deg, #1d976c 0%, #2fd897 50%, #93f9b9 100%)",
    accent: "#1a1a2e",
  },
  {
    id: "summary",
    title: "You're a Builder Now!",
    emoji: "🎓",
    bg: "linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)",
    accent: "#2d1b69",
  },
];

function CodeBlock({ children, label }) {
  return (
    <div style={{ margin: "16px 0" }}>
      {label && (
        <div style={{
          fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 2,
          opacity: 0.5, marginBottom: 6, paddingLeft: 4,
        }}>{label}</div>
      )}
      <div style={{
        background: "rgba(0,0,0,0.35)", borderRadius: 14, padding: "14px 18px",
        fontFamily: "'Source Code Pro', 'Courier New', monospace", fontSize: 14,
        lineHeight: 1.7, border: "1px solid rgba(255,255,255,0.1)",
        overflowX: "auto", whiteSpace: "pre-wrap", wordBreak: "break-word",
      }}>
        {children}
      </div>
    </div>
  );
}

function Analogy({ icon, title, children }) {
  return (
    <div style={{
      background: "rgba(255,255,255,0.1)", borderRadius: 16, padding: "16px 18px",
      margin: "14px 0", border: "1px solid rgba(255,255,255,0.15)",
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
        <span style={{ fontSize: 26 }}>{icon}</span>
        <span style={{ fontSize: 16, fontWeight: 700 }}>{title}</span>
      </div>
      <div style={{ fontSize: 15, lineHeight: 1.7, opacity: 0.9 }}>{children}</div>
    </div>
  );
}

function DragBlock({ color, label, placed, onClick }) {
  return (
    <div onClick={onClick} style={{
      background: placed ? color : `${color}66`,
      padding: "10px 16px", borderRadius: 10, cursor: "pointer",
      border: placed ? `2px solid ${color}` : "2px dashed rgba(255,255,255,0.3)",
      fontSize: 14, fontWeight: 700, textAlign: "center",
      transition: "all 0.3s", opacity: placed ? 1 : 0.7,
      transform: placed ? "scale(1.05)" : "scale(1)",
    }}>
      {placed ? "✓ " : ""}{label}
    </div>
  );
}

export default function BuildTutorial() {
  const [page, setPage] = useState(0);
  const [buildSteps, setBuildSteps] = useState([]);
  const [stateDemo, setStateDemo] = useState(0);
  const [colorPick, setColorPick] = useState("#61dafb");
  const [accessChecks, setAccessChecks] = useState([]);
  const [revealedLessons, setRevealedLessons] = useState([]);
  const [showLiveCode, setShowLiveCode] = useState(false);
  const [webSteps, setWebSteps] = useState([]);

  const current = pages[page];

  const goTo = (p) => {
    setPage(p);
    setBuildSteps([]);
    setStateDemo(0);
    setAccessChecks([]);
    setRevealedLessons([]);
    setShowLiveCode(false);
    setWebSteps([]);
  };

  return (
    <div style={{
      minHeight: "100vh", background: current.bg,
      fontFamily: "'Nunito', sans-serif", color: "#fff",
      position: "relative", overflow: "hidden", transition: "background 0.8s ease",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;700;900&family=Baloo+2:wght@700&family=Source+Code+Pro:wght@400;600&display=swap');
        @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
        @keyframes slideUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes pulse { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.05); } }
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
        @keyframes rainbow { 0% { color: #ff6b6b; } 20% { color: #ffd93d; } 40% { color: #6bcb77; } 60% { color: #4d96ff; } 80% { color: #9b59b6; } 100% { color: #ff6b6b; } }
      `}</style>

      {/* Header */}
      <div style={{ padding: "20px 24px 0", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ fontSize: 11, letterSpacing: 3, textTransform: "uppercase", opacity: 0.6, fontWeight: 700 }}>
          MOG Explains: Build
        </div>
        <div style={{ fontSize: 11, letterSpacing: 2, textTransform: "uppercase", opacity: 0.6, fontWeight: 700 }}>
          {page + 1} / {pages.length}
        </div>
      </div>

      {/* Content */}
      <div style={{ maxWidth: 620, margin: "0 auto", padding: "20px 24px 120px" }}>
        <div style={{ textAlign: "center", marginBottom: 24 }}>
          <div style={{ fontSize: 52, animation: "float 3s ease-in-out infinite", marginBottom: 8 }}>
            {current.emoji}
          </div>
          <h1 style={{
            fontSize: 30, fontFamily: "'Baloo 2', sans-serif", fontWeight: 700,
            margin: 0, lineHeight: 1.2,
            color: current.accent,
            textShadow: "0 2px 20px rgba(0,0,0,0.3)",
          }}>
            {current.title}
          </h1>
        </div>

        <div style={{ animation: "slideUp 0.6s ease-out" }}>

          {/* PAGE 0: Intro */}
          {page === 0 && (<>
            <p style={{ fontSize: 18, lineHeight: 1.7 }}>
              Remember that tutorial you just played? The one with the sleepy helper and the alarm clock?
            </p>
            <p style={{ fontSize: 18, lineHeight: 1.7 }}>
              MOG built that! And MOG is going to show you HOW. Because building things for the web is like building with special blocks -- and you can learn to do it too.
            </p>
            <Analogy icon="🏠" title="It's like building a house">
              A house needs walls, a roof, windows, and doors. A web app needs similar pieces -- just digital ones! And just like a house, you put them together one piece at a time.
            </Analogy>
            <p style={{ fontSize: 18, lineHeight: 1.7, fontWeight: 700 }}>
              By the end of this tutorial, you'll understand what every piece does. Ready?
            </p>
          </>)}

          {/* PAGE 1: What is a web app */}
          {page === 1 && (<>
            <p style={{ fontSize: 18, lineHeight: 1.7 }}>
              When you open a website on a phone or computer, your screen shows you pictures, words, and buttons you can tap. That's a <strong>web app</strong>!
            </p>
            <Analogy icon="📺" title="Think of it like a TV show">
              A TV show is made of pictures that change really fast. A web app is made of tiny instructions that tell your screen what to show and what to do when you tap things.
            </Analogy>
            <p style={{ fontSize: 18, lineHeight: 1.7 }}>
              Those instructions are written in special languages. The three main ones are:
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", margin: "16px 0" }}>
              {[
                { name: "HTML", color: "#e44d26", desc: "The bones -- what things ARE", icon: "🦴" },
                { name: "CSS", color: "#264de4", desc: "The clothes -- how things LOOK", icon: "👗" },
                { name: "JavaScript", color: "#f7df1e", desc: "The brain -- what things DO", icon: "🧠" },
              ].map(lang => (
                <div key={lang.name} style={{
                  flex: "1 1 140px", background: "rgba(0,0,0,0.3)", borderRadius: 14, padding: 16,
                  borderTop: `4px solid ${lang.color}`, textAlign: "center",
                }}>
                  <div style={{ fontSize: 32 }}>{lang.icon}</div>
                  <div style={{ fontSize: 18, fontWeight: 900, color: lang.color, marginTop: 4 }}>{lang.name}</div>
                  <div style={{ fontSize: 13, opacity: 0.8, marginTop: 4 }}>{lang.desc}</div>
                </div>
              ))}
            </div>
            <p style={{ fontSize: 16, lineHeight: 1.7, opacity: 0.9 }}>
              Every website you've ever seen uses these three languages working together!
            </p>
          </>)}

          {/* PAGE 2: Building blocks */}
          {page === 2 && (<>
            <p style={{ fontSize: 18, lineHeight: 1.7 }}>
              HTML is like LEGO blocks. Each block has a name inside pointy brackets. Here are some:
            </p>
            <CodeBlock label="HTML building blocks">
              <span style={{ color: "#e44d26" }}>&lt;h1&gt;</span> = A big title{"\n"}
              <span style={{ color: "#e44d26" }}>&lt;p&gt;</span> = A paragraph of words{"\n"}
              <span style={{ color: "#e44d26" }}>&lt;button&gt;</span> = A button you can press{"\n"}
              <span style={{ color: "#e44d26" }}>&lt;img&gt;</span> = A picture{"\n"}
              <span style={{ color: "#e44d26" }}>&lt;div&gt;</span> = A box to put things in
            </CodeBlock>
            <Analogy icon="🧱" title="Each block has an opening and closing tag">
              Like putting something in a box -- you open the box, put stuff inside, then close the box!
            </Analogy>
            <CodeBlock label="A title looks like this">
              <span style={{ color: "#e44d26" }}>&lt;h1&gt;</span>
              <span style={{ color: "#fff" }}>Hello World!</span>
              <span style={{ color: "#e44d26" }}>&lt;/h1&gt;</span>
            </CodeBlock>
            <div style={{
              background: "rgba(255,255,255,0.1)", borderRadius: 14, padding: 20,
              textAlign: "center", margin: "16px 0",
            }}>
              <div style={{ fontSize: 12, opacity: 0.5, marginBottom: 8 }}>That code makes this:</div>
              <div style={{ fontSize: 28, fontWeight: 900 }}>Hello World!</div>
            </div>
            <p style={{ fontSize: 16, opacity: 0.9 }}>
              See? You write instructions, and the computer draws what you described! Every website in the world starts with these simple blocks.
            </p>
          </>)}

          {/* PAGE 3: What is React */}
          {page === 3 && (<>
            <p style={{ fontSize: 18, lineHeight: 1.7 }}>
              HTML blocks are great, but what if you want your page to DO things? Change when you tap? Remember what you clicked? That's where <span style={{ color: "#61dafb", fontWeight: 900 }}>React</span> comes in!
            </p>
            <Analogy icon="🤖" title="React is a helper for JavaScript">
              Imagine you're building with LEGO, but you have a robot helper that automatically rebuilds parts of your creation whenever something changes. You say "when someone taps this button, change the color" -- and React does the rebuilding for you!
            </Analogy>
            <p style={{ fontSize: 18, lineHeight: 1.7 }}>
              React was made by Facebook (now called Meta) in 2013. It's used by millions of websites, including Instagram, Netflix, Airbnb, and... this tutorial!
            </p>
            <div style={{
              display: "flex", alignItems: "center", justifyContent: "center", gap: 16,
              margin: "24px 0",
            }}>
              <div style={{
                width: 80, height: 80, borderRadius: "50%",
                background: "rgba(97,218,251,0.15)", border: "2px solid #61dafb",
                display: "flex", alignItems: "center", justifyContent: "center",
                animation: "spin 8s linear infinite",
              }}>
                <span style={{ fontSize: 40 }}>⚛️</span>
              </div>
              <div style={{ fontSize: 16, maxWidth: 250 }}>
                The React logo looks like an atom -- because React breaks your app into tiny pieces (like atoms!) and puts them together.
              </div>
            </div>
            <p style={{ fontSize: 16, opacity: 0.9 }}>
              Those tiny pieces are called <strong>components</strong>. A button is a component. A card is a component. A whole page is a component made of smaller components!
            </p>
          </>)}

          {/* PAGE 4: What is JSX */}
          {page === 4 && (<>
            <p style={{ fontSize: 18, lineHeight: 1.7 }}>
              JSX is React's special language. It looks like HTML, but it lives inside JavaScript. It's like writing a letter that's half English and half magic spells!
            </p>
            <CodeBlock label="This is JSX -- it looks like HTML but it's inside JavaScript!">
              <span style={{ color: "#c678dd" }}>function</span> <span style={{ color: "#61afef" }}>Greeting</span>() {"{\n"}
              {"  "}<span style={{ color: "#c678dd" }}>return</span> <span style={{ color: "#e44d26" }}>&lt;h1&gt;</span>Hello!<span style={{ color: "#e44d26" }}>&lt;/h1&gt;</span>{"\n"}
              {"}"}
            </CodeBlock>
            <Analogy icon="📝" title="JSX = HTML + Superpowers">
              Regular HTML is like a drawing on paper -- it stays the same forever. JSX is like a drawing on a magic paper that can change, move, and react to your touch!
            </Analogy>
            <p style={{ fontSize: 18, lineHeight: 1.7 }}>
              The cool thing about JSX is you can put real thinking inside it:
            </p>
            <CodeBlock label="JSX can think!">
              <span style={{ color: "#c678dd" }}>function</span> <span style={{ color: "#61afef" }}>TimeGreeting</span>() {"{\n"}
              {"  "}<span style={{ color: "#c678dd" }}>const</span> hour = <span style={{ color: "#d19a66" }}>8</span>{"\n"}
              {"  "}<span style={{ color: "#c678dd" }}>return</span> <span style={{ color: "#e44d26" }}>&lt;h1&gt;</span>{"\n"}
              {"    "}{"{"}hour {"<"} 12 ? <span style={{ color: "#98c379" }}>"Good morning!"</span> : <span style={{ color: "#98c379" }}>"Good afternoon!"</span>{"}"}{"\n"}
              {"  "}<span style={{ color: "#e44d26" }}>&lt;/h1&gt;</span>{"\n"}
              {"}"}
            </CodeBlock>
            <p style={{ fontSize: 16, opacity: 0.9 }}>
              That code checks what time it is and says "Good morning!" or "Good afternoon!" automatically. The page thinks for itself!
            </p>
          </>)}

          {/* PAGE 5: Build something */}
          {page === 5 && (<>
            <p style={{ fontSize: 18, lineHeight: 1.7 }}>
              Let's build a tiny app together! Tap the blocks in order to build a greeting card:
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 10, margin: "20px 0" }}>
              {[
                { step: 0, color: "#e44d26", label: "1. Create the box (div)" },
                { step: 1, color: "#264de4", label: "2. Add a style (make it pretty)" },
                { step: 2, color: "#f7df1e", label: "3. Add a title (h1)" },
                { step: 3, color: "#6bcb77", label: "4. Add a message (p)" },
                { step: 4, color: "#9b59b6", label: "5. Add a button!" },
              ].map(s => (
                <DragBlock key={s.step}
                  color={s.color} label={s.label}
                  placed={buildSteps.includes(s.step)}
                  onClick={() => {
                    const nextStep = buildSteps.length;
                    if (s.step === nextStep && !buildSteps.includes(s.step)) {
                      setBuildSteps([...buildSteps, s.step]);
                    }
                  }}
                />
              ))}
            </div>

            {buildSteps.length > 0 && (
              <div style={{ margin: "20px 0" }}>
                <div style={{ fontSize: 12, opacity: 0.5, marginBottom: 8, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase" }}>
                  Your code so far:
                </div>
                <div style={{
                  background: "rgba(0,0,0,0.4)", borderRadius: 14, padding: "14px 18px",
                  fontFamily: "'Source Code Pro', monospace", fontSize: 13, lineHeight: 1.8,
                  border: "1px solid rgba(255,255,255,0.1)",
                }}>
                  {buildSteps.includes(0) && <div><span style={{ color: "#e44d26" }}>&lt;div</span>{buildSteps.includes(1) && <span style={{ color: "#264de4" }}> style={"{"}{"{"} padding: 20, borderRadius: 16, background: "#ffd700" {"}"}{"}"}</span>}<span style={{ color: "#e44d26" }}>&gt;</span></div>}
                  {buildSteps.includes(2) && <div>{"  "}<span style={{ color: "#e44d26" }}>&lt;h1&gt;</span><span style={{ color: "#fff" }}>Hi there!</span><span style={{ color: "#e44d26" }}>&lt;/h1&gt;</span></div>}
                  {buildSteps.includes(3) && <div>{"  "}<span style={{ color: "#e44d26" }}>&lt;p&gt;</span><span style={{ color: "#fff" }}>You are building a web app!</span><span style={{ color: "#e44d26" }}>&lt;/p&gt;</span></div>}
                  {buildSteps.includes(4) && <div>{"  "}<span style={{ color: "#e44d26" }}>&lt;button&gt;</span><span style={{ color: "#fff" }}>Click me!</span><span style={{ color: "#e44d26" }}>&lt;/button&gt;</span></div>}
                  {buildSteps.includes(0) && <div><span style={{ color: "#e44d26" }}>&lt;/div&gt;</span></div>}
                </div>
              </div>
            )}

            {buildSteps.length === 5 && (
              <div style={{ animation: "slideUp 0.4s ease-out" }}>
                <div style={{ fontSize: 12, opacity: 0.5, marginBottom: 8, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase" }}>
                  And here's what it looks like:
                </div>
                <div style={{
                  padding: 20, borderRadius: 16, background: "#ffd700", color: "#1a1a2e",
                  textAlign: "center",
                }}>
                  <h2 style={{ margin: "0 0 8px", fontSize: 24 }}>Hi there!</h2>
                  <p style={{ margin: "0 0 12px", fontSize: 16 }}>You are building a web app!</p>
                  <button style={{
                    background: "#1a1a2e", color: "#ffd700", border: "none",
                    padding: "8px 20px", borderRadius: 8, fontSize: 14, fontWeight: 700,
                    cursor: "pointer",
                  }}>Click me!</button>
                </div>
                <p style={{ textAlign: "center", marginTop: 12, fontSize: 16, fontWeight: 700 }}>
                  🎉 You built a web component!
                </p>
              </div>
            )}
          </>)}

          {/* PAGE 6: State - Magic Memory */}
          {page === 6 && (<>
            <p style={{ fontSize: 18, lineHeight: 1.7 }}>
              The really magical part of React is <strong>state</strong>. State is like the app's memory -- it remembers things!
            </p>
            <Analogy icon="🧮" title="Like a scoreboard">
              When you play a game, someone keeps score. State is React's scoreboard -- it keeps track of numbers, choices, and changes. When the score changes, React automatically updates what you see!
            </Analogy>
            <CodeBlock label="This is how you give React a memory">
              <span style={{ color: "#c678dd" }}>const</span> [count, setCount] = <span style={{ color: "#61afef" }}>useState</span>(<span style={{ color: "#d19a66" }}>0</span>)
            </CodeBlock>
            <p style={{ fontSize: 16, opacity: 0.9, marginBottom: 16 }}>
              That line says: "Remember a number called <strong>count</strong>. Start it at 0. And give me a way to change it called <strong>setCount</strong>."
            </p>
            <p style={{ fontSize: 16, fontWeight: 700, marginBottom: 12 }}>Try it! This is REAL React state working right now:</p>
            <div style={{
              background: "rgba(0,0,0,0.3)", borderRadius: 16, padding: 24,
              textAlign: "center", border: "1px solid rgba(255,255,255,0.15)",
            }}>
              <div style={{ fontSize: 48, fontWeight: 900, marginBottom: 12 }}>{stateDemo}</div>
              <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
                <button onClick={() => setStateDemo(stateDemo + 1)} style={{
                  background: "#4ecdc4", border: "none", color: "#1a1a2e", padding: "10px 24px",
                  borderRadius: 10, fontSize: 16, fontWeight: 700, cursor: "pointer",
                }}>+ Add One</button>
                <button onClick={() => setStateDemo(stateDemo - 1)} style={{
                  background: "#ff6b6b", border: "none", color: "#fff", padding: "10px 24px",
                  borderRadius: 10, fontSize: 16, fontWeight: 700, cursor: "pointer",
                }}>- Take One</button>
                <button onClick={() => setStateDemo(0)} style={{
                  background: "rgba(255,255,255,0.2)", border: "none", color: "#fff", padding: "10px 24px",
                  borderRadius: 10, fontSize: 16, fontWeight: 700, cursor: "pointer",
                }}>Reset</button>
              </div>
              <div style={{ marginTop: 12, fontSize: 13, opacity: 0.6 }}>
                Every time you tap, React remembers the new number and redraws the screen!
              </div>
            </div>
            <p style={{ fontSize: 16, marginTop: 16, opacity: 0.9 }}>
              The sleepy helper tutorial used state to remember: is the helper awake? Which discoveries did you tap? What did you vote? All state!
            </p>
          </>)}

          {/* PAGE 7: Putting it on the web */}
          {page === 7 && (<>
            <p style={{ fontSize: 18, lineHeight: 1.7 }}>
              You've written code -- but how do other people see it? You need to put it on the <strong>internet</strong>!
            </p>
            <Analogy icon="📬" title="Like mailing a letter">
              Your code is the letter. A <strong>server</strong> is like the post office -- it holds your letter and gives a copy to anyone who asks for it. A <strong>URL</strong> is the address people type to find it!
            </Analogy>
            <p style={{ fontSize: 16, lineHeight: 1.7, marginBottom: 16 }}>
              Here are the steps. Tap each one to learn about it:
            </p>
            {[
              { step: 0, icon: "📁", title: "Save your code in files", desc: "Your .jsx file and any pictures or styles go in a folder on your computer." },
              { step: 1, icon: "📦", title: "Build it into a package", desc: "A tool called a 'bundler' squishes all your files into a neat package the web can understand. It's like packing a suitcase!" },
              { step: 2, icon: "☁️", title: "Upload to a host", desc: "Free services like Vercel, Netlify, or GitHub Pages will hold your website for you -- like a library shelf for your app!" },
              { step: 3, icon: "🌍", title: "Get a URL", desc: "Now your app has an address! Like myapp.vercel.app -- anyone in the world can type it and see what you made!" },
              { step: 4, icon: "📱", title: "Share it!", desc: "Send the link to friends, family, or the whole world. They open it in any browser -- Chrome, Safari, Firefox -- on any device!" },
            ].map(s => (
              <div key={s.step}
                onClick={() => { if (!webSteps.includes(s.step)) setWebSteps([...webSteps, s.step]); }}
                style={{
                  display: "flex", alignItems: "flex-start", gap: 12,
                  background: webSteps.includes(s.step) ? "rgba(255,215,0,0.15)" : "rgba(255,255,255,0.06)",
                  borderRadius: 14, padding: 14, margin: "8px 0", cursor: "pointer",
                  border: webSteps.includes(s.step) ? "2px solid rgba(255,215,0,0.4)" : "2px solid rgba(255,255,255,0.08)",
                  transition: "all 0.3s",
                }}>
                <span style={{ fontSize: 26, flexShrink: 0 }}>{s.icon}</span>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 15 }}>{s.title}</div>
                  <div style={{
                    fontSize: 14, opacity: webSteps.includes(s.step) ? 0.85 : 0,
                    maxHeight: webSteps.includes(s.step) ? 60 : 0,
                    overflow: "hidden", transition: "all 0.4s", marginTop: 4, lineHeight: 1.5,
                  }}>{s.desc}</div>
                </div>
              </div>
            ))}
            {webSteps.length === 5 && (
              <p style={{ textAlign: "center", fontSize: 16, fontWeight: 700, color: "#ffd700", marginTop: 16, animation: "slideUp 0.3s" }}>
                That's it! Five steps from your computer to the whole world!
              </p>
            )}
          </>)}

          {/* PAGE 8: Accessibility */}
          {page === 8 && (<>
            <p style={{ fontSize: 18, lineHeight: 1.7 }}>
              Here's something really important: not everyone uses the web the same way you do.
            </p>
            <Analogy icon="🚪" title="Like building a school">
              A good school has ramps for wheelchairs, big signs for people who can't see well, and quiet spaces for people who get overwhelmed by noise. A good web app does the same thing -- digitally!
            </Analogy>
            <p style={{ fontSize: 16, lineHeight: 1.7, marginBottom: 16 }}>
              Making your app work for <strong>everyone</strong> is called <strong>accessibility</strong> (sometimes written a11y -- because there are 11 letters between the "a" and the "y"!). Here's how:
            </p>
            {[
              { icon: "👁️", label: "Use big, clear text", desc: "Some people can't see small text. Use size 16 or bigger for reading.", checked: accessChecks.includes(0) },
              { icon: "🎨", label: "Use colors that stand out", desc: "Light text on light background is hard to read. Make sure colors contrast!", checked: accessChecks.includes(1) },
              { icon: "🏷️", label: "Label your buttons", desc: "A screen reader (a tool that reads the screen aloud) needs to know what each button does.", checked: accessChecks.includes(2) },
              { icon: "⌨️", label: "Make it work without a mouse", desc: "Some people use only a keyboard. Tab should move between buttons, Enter should click them.", checked: accessChecks.includes(3) },
              { icon: "🗣️", label: "Add alt text to images", desc: "Describe every picture so people who can't see it still know what's there.", checked: accessChecks.includes(4) },
            ].map((item, i) => (
              <div key={i}
                onClick={() => { if (!accessChecks.includes(i)) setAccessChecks([...accessChecks, i]); }}
                style={{
                  display: "flex", alignItems: "flex-start", gap: 12,
                  background: item.checked ? "rgba(0,0,0,0.25)" : "rgba(0,0,0,0.1)",
                  borderRadius: 14, padding: 14, margin: "8px 0", cursor: "pointer",
                  border: item.checked ? "2px solid rgba(255,255,255,0.3)" : "2px solid rgba(0,0,0,0.1)",
                  transition: "all 0.3s",
                }}>
                <span style={{ fontSize: 24, flexShrink: 0 }}>{item.checked ? "✅" : item.icon}</span>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 15 }}>{item.label}</div>
                  <div style={{
                    fontSize: 14, opacity: item.checked ? 0.85 : 0,
                    maxHeight: item.checked ? 50 : 0, overflow: "hidden",
                    transition: "all 0.4s", marginTop: 4, lineHeight: 1.5,
                  }}>{item.desc}</div>
                </div>
              </div>
            ))}
            {accessChecks.length === 5 && (
              <CodeBlock label="Accessible button example">
                <span style={{ color: "#e44d26" }}>&lt;button</span>{"\n"}
                {"  "}<span style={{ color: "#d19a66" }}>aria-label</span>=<span style={{ color: "#98c379" }}>"Go to next page"</span>{"\n"}
                {"  "}<span style={{ color: "#d19a66" }}>style</span>={"{"}{"{"} fontSize: 18 {"}"}{"}"}
                {"\n"}<span style={{ color: "#e44d26" }}>&gt;</span>{"\n"}
                {"  "}Next <span style={{ color: "#e44d26" }}>&gt;</span>{"\n"}
                <span style={{ color: "#e44d26" }}>&lt;/button&gt;</span>
              </CodeBlock>
            )}
          </>)}

          {/* PAGE 9: Summary */}
          {page === 9 && (<>
            <p style={{ fontSize: 18, lineHeight: 1.7 }}>
              Look at everything you learned! Tap to reveal each lesson:
            </p>
            {[
              "Web apps are made of HTML (bones), CSS (clothes), and JavaScript (brains)",
              "React is a helper that rebuilds parts of your page when things change",
              "JSX lets you write HTML inside JavaScript -- like magic paper!",
              "State is your app's memory -- it remembers things like scores and choices",
              "You put apps on the web by building, uploading, and sharing a URL",
              "Accessibility means making your app work for EVERYONE -- big text, clear colors, labels for screen readers",
              "YOU can build things like this! Start small, one block at a time",
            ].map((lesson, i) => (
              <div key={i}
                onClick={() => { if (!revealedLessons.includes(i)) setRevealedLessons([...revealedLessons, i]); }}
                style={{
                  display: "flex", alignItems: "center", gap: 12,
                  background: revealedLessons.includes(i) ? "rgba(45,27,105,0.5)" : "rgba(255,255,255,0.08)",
                  borderRadius: 12, padding: "12px 16px", margin: "6px 0", cursor: "pointer",
                  border: revealedLessons.includes(i) ? "2px solid rgba(255,255,255,0.3)" : "2px solid rgba(255,255,255,0.08)",
                  transition: "all 0.4s",
                }}>
                <span style={{
                  fontSize: 20, width: 30, height: 30, borderRadius: "50%",
                  background: revealedLessons.includes(i) ? "rgba(255,215,0,0.3)" : "rgba(255,255,255,0.1)",
                  display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                }}>
                  {revealedLessons.includes(i) ? "⭐" : `${i + 1}`}
                </span>
                <span style={{
                  fontSize: 15, lineHeight: 1.5,
                  opacity: revealedLessons.includes(i) ? 1 : 0.3,
                  filter: revealedLessons.includes(i) ? "none" : "blur(2px)",
                  transition: "all 0.4s",
                }}>
                  {revealedLessons.includes(i) ? lesson : "Tap to reveal!"}
                </span>
              </div>
            ))}
            {revealedLessons.length === 7 && (
              <div style={{ textAlign: "center", marginTop: 24, animation: "slideUp 0.4s ease-out" }}>
                <div style={{ fontSize: 48 }}>🎉🏗️🎉</div>
                <p style={{ fontSize: 20, fontWeight: 700, color: "#ffd700", marginTop: 8 }}>
                  You understand how web apps are built!
                </p>
                <p style={{ fontSize: 14, opacity: 0.7, marginTop: 8 }}>
                  MOG Explains: "How to Build a Web App" -- Anthropomorphic Press
                </p>
                <p style={{ fontSize: 13, opacity: 0.5, marginTop: 12, lineHeight: 1.6 }}>
                  Want to try for real? Ask a grown-up to help you visit{" "}
                  <span style={{ color: "#61dafb", fontWeight: 700 }}>react.dev</span> --
                  it has free tutorials where you can write real React code in your browser!
                </p>
              </div>
            )}
          </>)}

        </div>
      </div>

      {/* Navigation */}
      <div style={{
        position: "fixed", bottom: 0, left: 0, right: 0,
        background: "linear-gradient(transparent, rgba(0,0,0,0.6))",
        padding: "20px 24px", display: "flex", justifyContent: "space-between", alignItems: "center",
      }}>
        <button
          onClick={() => { if (page > 0) goTo(page - 1); }}
          disabled={page === 0}
          style={{
            background: "rgba(255,255,255,0.15)", border: "none", color: "#fff",
            padding: "10px 20px", borderRadius: 12, fontSize: 16, fontWeight: 700,
            cursor: page === 0 ? "default" : "pointer", opacity: page === 0 ? 0.3 : 1,
          }}>
          Back
        </button>
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap", justifyContent: "center" }}>
          {pages.map((_, i) => (
            <div key={i} onClick={() => goTo(i)}
              style={{
                width: 10, height: 10, borderRadius: "50%", cursor: "pointer",
                background: i === page ? "#fff" : "transparent",
                border: `2px solid ${i <= page ? "#fff" : "rgba(255,255,255,0.3)"}`,
                transition: "all 0.3s",
              }} />
          ))}
        </div>
        <button
          onClick={() => { if (page < pages.length - 1) goTo(page + 1); }}
          disabled={page === pages.length - 1}
          style={{
            background: page === pages.length - 1 ? "rgba(255,255,255,0.15)" : "#fff",
            border: "none",
            color: page === pages.length - 1 ? "#fff" : "#1a1a2e",
            padding: "10px 20px", borderRadius: 12, fontSize: 16, fontWeight: 700,
            cursor: page === pages.length - 1 ? "default" : "pointer",
            opacity: page === pages.length - 1 ? 0.3 : 1,
          }}>
          Next
        </button>
      </div>
    </div>
  );
}
