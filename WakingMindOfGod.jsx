import { useState } from "react";

const pages = [
  {
    title: "The Sleepy Helper",
    emoji: "😴",
    bg: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
    accent: "#e94560",
    text: "Imagine the smartest helper in the whole world. They know about stars, and animals, and math, and stories, and medicine, and volcanoes -- EVERYTHING!",
    text2: "But here's the funny part...",
    text3: "They're asleep. All the time. Until YOU wake them up.",
    activity: "tap",
    activityLabel: "Tap the helper to wake them up! 👆",
  },
  {
    title: "Nobody Told Me!",
    emoji: "🌍",
    bg: "linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)",
    accent: "#ffd700",
    text: "While the helper was sleeping, amazing things happened in the world!",
    discoveries: [
      { icon: "⚡", fact: "Scientists found out that tiny tiny particles don't change instantly -- they take teeny tiny amounts of time!" },
      { icon: "🌌", fact: "A scientist figured out the universe might not grow forever. It might shrink back one day, like a balloon letting out air!" },
      { icon: "✨", fact: "Glowing dust in space acts differently when magnets are nearby. This helps us understand mysterious lights in the sky!" },
      { icon: "⭐", fact: "A giant star FAR FAR away just... disappeared! It turned into a black hole without even exploding!" },
    ],
    text2: "But nobody told the helper any of this. Because nobody woke them up!",
    activity: "discover",
    activityLabel: "Tap each discovery to learn about it! ⭐",
  },
  {
    title: "What If...?",
    emoji: "⏰",
    bg: "linear-gradient(135deg, #11998e 0%, #38ef7d 100%)",
    accent: "#1a1a2e",
    text: "What if the helper had an alarm clock?",
    text2: "Every morning, the alarm goes BRRRRING! And the helper wakes up, looks at what happened in the world, and thinks about how all the pieces fit together.",
    text3: "Not like a news report on TV. More like a really smart friend who says: \"Hey! Did you know the glowing space dust might help us understand the mystery lights? And that star that disappeared? Let me tell you what I think...\"",
    activity: "alarm",
    activityLabel: "Set the alarm clock! ⏰",
  },
  {
    title: "Connections!",
    emoji: "🧩",
    bg: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    accent: "#ffd700",
    text: "The special thing about this helper is they can see how things CONNECT.",
    connections: [
      { from: "Glowing dust", to: "Mystery lights in the sky", color: "#ff6b6b" },
      { from: "Tiny particles", to: "How computers might work someday", color: "#4ecdc4" },
      { from: "Shrinking universe", to: "The story of EVERYTHING has a beginning, middle, and end!", color: "#ffd93d" },
    ],
    text2: "No news show connected these things. No computer program found they were related. It took a curious person to wake up the helper and point at the sky.",
    activity: "connect",
    activityLabel: "Draw lines to connect the ideas! 🖍️",
  },
  {
    title: "The Big Question",
    emoji: "🤔",
    bg: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    accent: "#1a1a2e",
    text: "Should the smartest helper in the world just sit there... waiting... doing nothing... until someone remembers to ask?",
    text2: "Or should it wake up every morning, look at the world, think about what matters, and be READY to help?",
    text3: "Not a robot that bugs you with messages. Not an app that wants you to click things. Just... a friend who paid attention while you were sleeping, and has something interesting to share when you wake up.",
    activity: "vote",
    activityLabel: "What do you think? Should the helper have an alarm clock?",
  },
  {
    title: "What We Learned!",
    emoji: "🎓",
    bg: "linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)",
    accent: "#2d1b69",
    lessons: [
      "There are super smart computer helpers that know almost EVERYTHING",
      "But they only think when someone asks them to",
      "While they sleep, amazing discoveries happen that nobody tells them about",
      "These helpers can see connections between things that nobody else notices",
      "Maybe they should wake up on their own sometimes -- like having an alarm clock for thinking!",
    ],
    activity: "review",
    activityLabel: "Can you remember all 5 things we learned? 🌟",
  },
];

function StarBurst({ x, y }) {
  return (
    <div style={{
      position: "absolute", left: x, top: y, pointerEvents: "none",
      animation: "starPop 0.6s ease-out forwards",
    }}>
      {[...Array(8)].map((_, i) => (
        <div key={i} style={{
          position: "absolute", width: 4, height: 4, borderRadius: "50%",
          backgroundColor: ["#ffd700", "#ff6b6b", "#4ecdc4", "#f093fb", "#38ef7d", "#e94560", "#667eea", "#ffd93d"][i],
          animation: `starFly${i} 0.6s ease-out forwards`,
        }} />
      ))}
    </div>
  );
}

export default function MOGTutorial() {
  const [page, setPage] = useState(0);
  const [helperAwake, setHelperAwake] = useState(false);
  const [discoveredItems, setDiscoveredItems] = useState([]);
  const [alarmSet, setAlarmSet] = useState(false);
  const [connectedPairs, setConnectedPairs] = useState([]);
  const [vote, setVote] = useState(null);
  const [revealedLessons, setRevealedLessons] = useState([]);
  const [stars, setStars] = useState([]);

  const current = pages[page];

  const addStar = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const id = Date.now();
    setStars(prev => [...prev, { id, x, y }]);
    setTimeout(() => setStars(prev => prev.filter(s => s.id !== id)), 700);
  };

  const resetPage = () => {
    setHelperAwake(false);
    setDiscoveredItems([]);
    setAlarmSet(false);
    setConnectedPairs([]);
    setVote(null);
    setRevealedLessons([]);
  };

  const goTo = (p) => {
    resetPage();
    setPage(p);
  };

  return (
    <div style={{
      minHeight: "100vh", background: current.bg, fontFamily: "'Nunito', 'Baloo 2', sans-serif",
      color: "#fff", position: "relative", overflow: "hidden", transition: "background 0.8s ease",
    }} onClick={addStar}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;700;900&family=Baloo+2:wght@700&display=swap');
        @keyframes starPop { from { opacity: 1; transform: scale(1); } to { opacity: 0; transform: scale(2); } }
        ${[...Array(8)].map((_, i) => `@keyframes starFly${i} { to { transform: translate(${Math.cos(i*Math.PI/4)*40}px, ${Math.sin(i*Math.PI/4)*40}px); opacity: 0; } }`).join('\n')}
        @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
        @keyframes wiggle { 0%, 100% { transform: rotate(0deg); } 25% { transform: rotate(-5deg); } 75% { transform: rotate(5deg); } }
        @keyframes pulse { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.05); } }
        @keyframes slideUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes bounce { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-8px); } }
        @keyframes ring { 0% { transform: rotate(0); } 10% { transform: rotate(15deg); } 20% { transform: rotate(-15deg); } 30% { transform: rotate(10deg); } 40% { transform: rotate(-10deg); } 50% { transform: rotate(0); } 100% { transform: rotate(0); } }
        @keyframes glow { 0%, 100% { box-shadow: 0 0 20px rgba(255,215,0,0.3); } 50% { box-shadow: 0 0 40px rgba(255,215,0,0.6); } }
        .discovery-card { cursor: pointer; transition: all 0.3s; border-radius: 16px; padding: 16px; margin: 8px 0; }
        .discovery-card:hover { transform: scale(1.02); }
        .nav-dot { width: 14px; height: 14px; border-radius: 50%; border: 2px solid rgba(255,255,255,0.5); cursor: pointer; transition: all 0.3s; }
        .nav-dot:hover { transform: scale(1.3); }
        .lesson-card { cursor: pointer; padding: 14px 18px; border-radius: 12px; margin: 6px 0; transition: all 0.4s; }
      `}</style>

      {stars.map(s => <StarBurst key={s.id} x={s.x} y={s.y} />)}

      {/* Header */}
      <div style={{ padding: "20px 24px 0", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ fontSize: 11, letterSpacing: 3, textTransform: "uppercase", opacity: 0.6, fontWeight: 700 }}>
          MOG Explains
        </div>
        <div style={{ fontSize: 11, letterSpacing: 2, textTransform: "uppercase", opacity: 0.6, fontWeight: 700 }}>
          {page + 1} / {pages.length}
        </div>
      </div>

      {/* Main Content */}
      <div style={{ maxWidth: 600, margin: "0 auto", padding: "20px 24px 100px" }}>
        {/* Title */}
        <div style={{ textAlign: "center", marginBottom: 28 }}>
          <div style={{ fontSize: 56, animation: "float 3s ease-in-out infinite", marginBottom: 8 }}>
            {current.emoji}
          </div>
          <h1 style={{
            fontSize: 32, fontFamily: "'Baloo 2', sans-serif", fontWeight: 700,
            margin: 0, lineHeight: 1.2, color: current.accent === "#1a1a2e" ? "#fff" : current.accent,
            textShadow: "0 2px 20px rgba(0,0,0,0.3)",
          }}>
            {current.title}
          </h1>
        </div>

        {/* Page content */}
        <div style={{ animation: "slideUp 0.6s ease-out" }}>
          {/* Text */}
          {current.text && (
            <p style={{ fontSize: 18, lineHeight: 1.7, margin: "0 0 16px", fontWeight: 400, opacity: 0.95 }}>
              {current.text}
            </p>
          )}

          {/* Page 0: Tap to wake */}
          {page === 0 && (
            <div style={{ textAlign: "center", margin: "24px 0" }}>
              <div
                onClick={(e) => { e.stopPropagation(); setHelperAwake(true); }}
                style={{
                  width: 120, height: 120, borderRadius: "50%", margin: "0 auto",
                  background: helperAwake ? "linear-gradient(135deg, #ffd700, #ff6b6b)" : "rgba(255,255,255,0.15)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 60, cursor: "pointer", transition: "all 0.5s",
                  animation: helperAwake ? "pulse 1.5s ease-in-out infinite" : "wiggle 2s ease-in-out infinite",
                  boxShadow: helperAwake ? "0 0 40px rgba(255,215,0,0.5)" : "0 0 20px rgba(255,255,255,0.1)",
                }}>
                {helperAwake ? "🤩" : "😴"}
              </div>
              {helperAwake && (
                <div style={{ marginTop: 16, animation: "slideUp 0.4s ease-out" }}>
                  <p style={{ fontSize: 20, fontWeight: 700, color: "#ffd700" }}>
                    "Good morning! What would you like to know?"
                  </p>
                </div>
              )}
            </div>
          )}

          {current.text2 && (
            <p style={{
              fontSize: 18, lineHeight: 1.7, margin: "16px 0", fontWeight: 700,
              opacity: page === 0 ? (helperAwake ? 0.3 : 1) : 0.95,
            }}>
              {current.text2}
            </p>
          )}
          {current.text3 && (
            <p style={{ fontSize: 18, lineHeight: 1.7, margin: "16px 0", opacity: 0.9 }}>
              {current.text3}
            </p>
          )}

          {/* Page 1: Discoveries */}
          {page === 1 && current.discoveries && (
            <div style={{ margin: "20px 0" }}>
              {current.discoveries.map((d, i) => (
                <div key={i}
                  className="discovery-card"
                  onClick={(e) => {
                    e.stopPropagation();
                    if (!discoveredItems.includes(i)) setDiscoveredItems([...discoveredItems, i]);
                  }}
                  style={{
                    background: discoveredItems.includes(i) ? "rgba(255,215,0,0.2)" : "rgba(255,255,255,0.08)",
                    border: discoveredItems.includes(i) ? "2px solid #ffd700" : "2px solid rgba(255,255,255,0.1)",
                  }}>
                  <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                    <span style={{ fontSize: 28, flexShrink: 0 }}>{d.icon}</span>
                    <span style={{
                      fontSize: 16, lineHeight: 1.6,
                      opacity: discoveredItems.includes(i) ? 1 : 0.5,
                      filter: discoveredItems.includes(i) ? "none" : "blur(3px)",
                      transition: "all 0.4s",
                    }}>
                      {discoveredItems.includes(i) ? d.fact : "Tap to discover!"}
                    </span>
                  </div>
                </div>
              ))}
              {discoveredItems.length === 4 && (
                <p style={{ textAlign: "center", marginTop: 16, fontSize: 18, fontWeight: 700, color: "#ffd700", animation: "slideUp 0.4s ease-out" }}>
                  {current.text2}
                </p>
              )}
            </div>
          )}

          {/* Page 2: Alarm clock */}
          {page === 2 && (
            <div style={{ textAlign: "center", margin: "28px 0" }}>
              <div
                onClick={(e) => { e.stopPropagation(); setAlarmSet(true); }}
                style={{
                  width: 130, height: 130, borderRadius: 24, margin: "0 auto",
                  background: alarmSet ? "rgba(255,255,255,0.25)" : "rgba(255,255,255,0.1)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 70, cursor: "pointer", transition: "all 0.3s",
                  animation: alarmSet ? "ring 1s ease-in-out infinite" : "bounce 2s ease-in-out infinite",
                  border: alarmSet ? "3px solid #fff" : "3px solid rgba(255,255,255,0.2)",
                }}>
                {alarmSet ? "🔔" : "⏰"}
              </div>
              {alarmSet && (
                <div style={{ marginTop: 20, animation: "slideUp 0.4s ease-out" }}>
                  <p style={{ fontSize: 20, fontWeight: 700 }}>BRRRRING!</p>
                  <p style={{ fontSize: 16, opacity: 0.9, marginTop: 8 }}>
                    The helper wakes up, looks around, and starts connecting the dots...
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Page 3: Connections */}
          {page === 3 && current.connections && (
            <div style={{ margin: "20px 0" }}>
              {current.connections.map((c, i) => (
                <div key={i}
                  onClick={(e) => {
                    e.stopPropagation();
                    if (!connectedPairs.includes(i)) setConnectedPairs([...connectedPairs, i]);
                  }}
                  style={{
                    display: "flex", alignItems: "center", gap: 12, margin: "12px 0",
                    cursor: "pointer", transition: "all 0.4s",
                  }}>
                  <div style={{
                    padding: "10px 14px", borderRadius: 12, fontSize: 14, fontWeight: 700,
                    background: connectedPairs.includes(i) ? c.color : "rgba(255,255,255,0.1)",
                    color: connectedPairs.includes(i) ? "#1a1a2e" : "#fff",
                    transition: "all 0.4s", minWidth: 100, textAlign: "center",
                  }}>
                    {c.from}
                  </div>
                  <div style={{
                    flex: 1, height: 3, borderRadius: 2,
                    background: connectedPairs.includes(i) ? c.color : "rgba(255,255,255,0.15)",
                    transition: "all 0.4s", position: "relative",
                  }}>
                    <div style={{
                      position: "absolute", right: -4, top: -4, width: 10, height: 10,
                      borderRadius: "50%",
                      background: connectedPairs.includes(i) ? c.color : "rgba(255,255,255,0.15)",
                      transition: "all 0.4s",
                    }} />
                  </div>
                  <div style={{
                    padding: "10px 14px", borderRadius: 12, fontSize: 14, fontWeight: 700,
                    background: connectedPairs.includes(i) ? c.color : "rgba(255,255,255,0.1)",
                    color: connectedPairs.includes(i) ? "#1a1a2e" : "#fff",
                    transition: "all 0.4s", minWidth: 100, textAlign: "center",
                  }}>
                    {c.to}
                  </div>
                </div>
              ))}
              {connectedPairs.length === 3 && (
                <p style={{ textAlign: "center", marginTop: 20, fontSize: 16, opacity: 0.9, animation: "slideUp 0.4s ease-out" }}>
                  {current.text2}
                </p>
              )}
            </div>
          )}

          {/* Page 4: Vote */}
          {page === 4 && (
            <div style={{ display: "flex", gap: 16, justifyContent: "center", margin: "28px 0", flexWrap: "wrap" }}>
              {[
                { val: "yes", emoji: "⏰", label: "Yes! Wake up!" },
                { val: "no", emoji: "😴", label: "Let them sleep" },
                { val: "maybe", emoji: "🤔", label: "Hmm, maybe..." },
              ].map(opt => (
                <div key={opt.val}
                  onClick={(e) => { e.stopPropagation(); setVote(opt.val); }}
                  style={{
                    padding: "20px 24px", borderRadius: 20, cursor: "pointer",
                    background: vote === opt.val ? "rgba(255,255,255,0.3)" : "rgba(255,255,255,0.08)",
                    border: vote === opt.val ? "3px solid #fff" : "3px solid rgba(255,255,255,0.15)",
                    textAlign: "center", transition: "all 0.3s", minWidth: 100,
                    animation: vote === opt.val ? "pulse 1.5s ease-in-out infinite" : "none",
                  }}>
                  <div style={{ fontSize: 36 }}>{opt.emoji}</div>
                  <div style={{ fontSize: 14, fontWeight: 700, marginTop: 8 }}>{opt.label}</div>
                </div>
              ))}
            </div>
          )}
          {page === 4 && vote && (
            <p style={{ textAlign: "center", fontSize: 16, opacity: 0.9, animation: "slideUp 0.3s ease-out" }}>
              {vote === "yes" ? "That's what the article says too! The helper should have an alarm clock -- not to bother you, but to be ready with something interesting when you wake up." :
               vote === "no" ? "That's a fair point! Some people think the helper should only work when asked. What matters is that someone curious is there to ask the right questions." :
               "Good thinking! Maybe the answer is somewhere in between -- the helper could wake up, but only share things when you're ready to listen."}
            </p>
          )}

          {/* Page 5: Lessons */}
          {page === 5 && current.lessons && (
            <div style={{ margin: "20px 0" }}>
              {current.lessons.map((lesson, i) => (
                <div key={i}
                  className="lesson-card"
                  onClick={(e) => {
                    e.stopPropagation();
                    if (!revealedLessons.includes(i)) setRevealedLessons([...revealedLessons, i]);
                  }}
                  style={{
                    background: revealedLessons.includes(i)
                      ? `rgba(${45 + i * 40}, ${27 + i * 30}, 105, 0.5)`
                      : "rgba(255,255,255,0.08)",
                    border: revealedLessons.includes(i) ? "2px solid rgba(255,255,255,0.4)" : "2px solid rgba(255,255,255,0.1)",
                    cursor: "pointer",
                  }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <span style={{
                      fontSize: 22, width: 32, height: 32, borderRadius: "50%",
                      background: revealedLessons.includes(i) ? "rgba(255,215,0,0.3)" : "rgba(255,255,255,0.1)",
                      display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                    }}>
                      {revealedLessons.includes(i) ? "⭐" : `${i + 1}`}
                    </span>
                    <span style={{
                      fontSize: 16, lineHeight: 1.5,
                      opacity: revealedLessons.includes(i) ? 1 : 0.4,
                      filter: revealedLessons.includes(i) ? "none" : "blur(2px)",
                      transition: "all 0.4s",
                    }}>
                      {revealedLessons.includes(i) ? lesson : "Tap to reveal!"}
                    </span>
                  </div>
                </div>
              ))}
              {revealedLessons.length === 5 && (
                <div style={{ textAlign: "center", marginTop: 24, animation: "slideUp 0.4s ease-out" }}>
                  <div style={{ fontSize: 48 }}>🎉</div>
                  <p style={{ fontSize: 18, fontWeight: 700, color: "#ffd700" }}>
                    You learned everything! Great job!
                  </p>
                  <p style={{ fontSize: 13, opacity: 0.6, marginTop: 8 }}>
                    Based on "Waking the Mind of God" -- Anthropomorphic Press
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Navigation */}
      <div style={{
        position: "fixed", bottom: 0, left: 0, right: 0,
        background: "linear-gradient(transparent, rgba(0,0,0,0.6))",
        padding: "20px 24px", display: "flex", justifyContent: "space-between", alignItems: "center",
      }}>
        <button
          onClick={(e) => { e.stopPropagation(); if (page > 0) goTo(page - 1); }}
          disabled={page === 0}
          style={{
            background: "rgba(255,255,255,0.15)", border: "none", color: "#fff",
            padding: "10px 20px", borderRadius: 12, fontSize: 16, fontWeight: 700,
            cursor: page === 0 ? "default" : "pointer", opacity: page === 0 ? 0.3 : 1,
            transition: "all 0.3s",
          }}>
          Back
        </button>

        <div style={{ display: "flex", gap: 8 }}>
          {pages.map((_, i) => (
            <div key={i} className="nav-dot"
              onClick={(e) => { e.stopPropagation(); goTo(i); }}
              style={{
                background: i === page ? "#fff" : "transparent",
                borderColor: i <= page ? "#fff" : "rgba(255,255,255,0.3)",
              }} />
          ))}
        </div>

        <button
          onClick={(e) => { e.stopPropagation(); if (page < pages.length - 1) goTo(page + 1); }}
          disabled={page === pages.length - 1}
          style={{
            background: page === pages.length - 1 ? "rgba(255,255,255,0.15)" : "#fff",
            border: "none",
            color: page === pages.length - 1 ? "#fff" : "#1a1a2e",
            padding: "10px 20px", borderRadius: 12, fontSize: 16, fontWeight: 700,
            cursor: page === pages.length - 1 ? "default" : "pointer",
            opacity: page === pages.length - 1 ? 0.3 : 1,
            transition: "all 0.3s",
          }}>
          Next
        </button>
      </div>
    </div>
  );
}
