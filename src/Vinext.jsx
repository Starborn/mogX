import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const quizData = [
  {
    q: "What is vinext?",  
    options: [
      "A wrapper around Next.js that optimizes its output for Cloudflare",
      "A reimplementation of the Next.js API surface built on Vite",
      "A new JavaScript framework unrelated to Next.js",
      "A Cloudflare-specific fork of the Next.js codebase"
    ],
    correct: 1,
    explain: "Vinext is a ground-up reimplementation of the Next.js developer-facing API, built on Vite. It shares no code with Next.js."
  },
  {
    q: "What build tool does vinext use instead of Turbopack?",
    options: ["Webpack", "esbuild", "Vite (with Rollup/Rolldown)", "Parcel"],
    correct: 2,
    explain: "Vite uses Rollup for production builds (Vite 7) and Rolldown, a Rust-based bundler, in Vite 8."
  },
  {
    q: "What does Traffic-Aware Pre-Rendering (TPR) do?",
    options: [
      "Pre-renders all pages at build time, like traditional static generation",
      "Queries traffic analytics to pre-render only the most-visited pages",
      "Renders pages only when a user requests them, with no caching",
      "Uses machine learning to predict which pages will be popular"
    ],
    correct: 1,
    explain: "TPR uses real traffic data from Cloudflare's analytics to pre-render only the pages that actually receive visits -- typically 50-200 pages cover 90% of traffic."
  },
  {
    q: "Why did this specific project work well with AI-assisted development?",
    options: [
      "The code was simple enough that AI could write it without supervision",
      "Cloudflare has proprietary AI models trained specifically for this task",
      "The engineer had no technical background, proving AI can replace expertise",
      "Well-documented target API + comprehensive tests + solid foundation + capable models"
    ],
    correct: 3,
    explain: "All four conditions had to be present: well-documented API, comprehensive test suite, solid foundation (Vite), and capable AI models. The human still provided critical architectural direction."
  },
  {
    q: "What is the key lesson about software abstraction layers?",
    options: [
      "All abstraction layers are unnecessary and should be removed",
      "AI can't work without abstraction layers to simplify problems",
      "Some abstractions exist for human cognitive limits, and AI may not need them",
      "Frameworks will always be necessary regardless of AI capabilities"
    ],
    correct: 2,
    explain: "The argument isn't that all layers are unnecessary or always necessary -- it's that some abstractions exist for human cognitive limits, and AI shifts which ones are still needed."
  }
]

export default function Vinext() {
  const [answers, setAnswers] = useState({})
  const [scrollPct, setScrollPct] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const h = document.documentElement
      const pct = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100
      setScrollPct(pct)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleAnswer = (qIdx, optIdx) => {
    if (answers[qIdx] !== undefined) return
    setAnswers(prev => ({ ...prev, [qIdx]: optIdx }))
  }

  const styles = {
    progressBar: {
      position: 'fixed', top: 0, left: 0, height: '3px',
      background: '#6ee7b7', zIndex: 100,
      width: `${scrollPct}%`, transition: 'width 0.1s linear'
    },
    page: {
      minHeight: '100vh',
      background: '#0f1117',
      color: '#e4e6ef',
      fontFamily: "'Segoe UI', system-ui, -apple-system, sans-serif",
      lineHeight: 1.7,
      fontSize: '17px'
    },
    hero: {
      minHeight: '55vh',
      display: 'flex', flexDirection: 'column', justifyContent: 'center',
      padding: '4rem 2rem',
      background: 'radial-gradient(ellipse at 30% 50%, rgba(110,231,183,0.06) 0%, transparent 60%), radial-gradient(ellipse at 80% 30%, rgba(59,130,246,0.04) 0%, transparent 50%)'
    },
    heroInner: { maxWidth: '820px', margin: '0 auto', width: '100%' },
    badge: {
      display: 'inline-block', fontSize: '0.75rem', letterSpacing: '0.1em',
      textTransform: 'uppercase', color: '#6ee7b7',
      background: 'rgba(110,231,183,0.12)', padding: '0.4rem 1rem',
      borderRadius: '100px', marginBottom: '1.5rem',
      border: '1px solid rgba(110,231,183,0.2)', fontFamily: 'monospace'
    },
    h1: {
      fontSize: 'clamp(2rem, 5vw, 3.2rem)', fontWeight: 700,
      lineHeight: 1.15, marginBottom: '1.5rem', color: '#fff'
    },
    accent: { color: '#6ee7b7', fontStyle: 'italic' },
    heroSub: { fontSize: '1.1rem', color: '#8b90a5', maxWidth: '600px', marginBottom: '2rem' },
    meta: {
      display: 'flex', flexWrap: 'wrap', gap: '1.5rem',
      fontSize: '0.85rem', color: '#8b90a5', fontFamily: 'monospace'
    },
    container: { maxWidth: '820px', margin: '0 auto', padding: '0 2rem 6rem' },
    sectionNum: {
      fontFamily: 'monospace', fontSize: '0.75rem', color: '#6ee7b7',
      letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.75rem'
    },
    h2: { fontSize: '1.7rem', fontWeight: 700, color: '#fff', marginBottom: '1rem' },
    h3: { fontSize: '1.1rem', fontWeight: 600, color: '#fff', marginTop: '2rem', marginBottom: '0.75rem' },
    p: { marginBottom: '1rem', color: '#e4e6ef' },
    dim: { color: '#8b90a5' },
    card: {
      background: '#181b25', border: '1px solid #2a2e3e',
      borderRadius: '12px', padding: '1.5rem 1.75rem', margin: '1.5rem 0'
    },
    cardHighlight: {
      background: 'linear-gradient(135deg, #181b25 0%, rgba(110,231,183,0.04) 100%)',
      border: '1px solid rgba(110,231,183,0.3)',
      borderRadius: '12px', padding: '1.5rem 1.75rem', margin: '1.5rem 0'
    },
    cardWarn: {
      background: 'linear-gradient(135deg, #181b25 0%, rgba(251,191,36,0.04) 100%)',
      border: '1px solid rgba(251,191,36,0.3)',
      borderRadius: '12px', padding: '1.5rem 1.75rem', margin: '1.5rem 0'
    },
    cardLabel: {
      fontFamily: 'monospace', fontSize: '0.7rem', letterSpacing: '0.12em',
      textTransform: 'uppercase', color: '#6ee7b7', marginBottom: '0.5rem'
    },
    warnLabel: {
      fontFamily: 'monospace', fontSize: '0.7rem', letterSpacing: '0.12em',
      textTransform: 'uppercase', color: '#fbbf24', marginBottom: '0.5rem'
    },
    pre: {
      background: '#13151d', border: '1px solid #2a2e3e', borderRadius: '10px',
      padding: '1.25rem 1.5rem', overflowX: 'auto', margin: '1.25rem 0',
      fontFamily: 'monospace', fontSize: '0.88rem', lineHeight: 1.6, color: '#e4e6ef'
    },
    code: {
      fontFamily: 'monospace', fontSize: '0.88em', background: '#1e2230',
      padding: '0.15em 0.45em', borderRadius: '4px', color: '#6ee7b7'
    },
    table: { width: '100%', borderCollapse: 'collapse', fontSize: '0.92rem', margin: '1.25rem 0' },
    th: {
      fontFamily: 'monospace', fontSize: '0.75rem', letterSpacing: '0.08em',
      textTransform: 'uppercase', color: '#8b90a5', textAlign: 'left',
      padding: '0.75rem 1rem', borderBottom: '1px solid #2a2e3e'
    },
    td: { padding: '0.75rem 1rem', borderBottom: '1px solid rgba(42,46,62,0.5)' },
    faster: { color: '#6ee7b7', fontWeight: 600 },
    exercise: {
      background: '#181b25', borderLeft: '3px solid #3b82f6',
      borderRadius: '0 12px 12px 0', padding: '1.5rem 1.75rem', margin: '1.5rem 0'
    },
    exerciseLabel: {
      fontFamily: 'monospace', fontSize: '0.7rem', letterSpacing: '0.12em',
      textTransform: 'uppercase', color: '#3b82f6', marginBottom: '0.5rem'
    },
    diagram: {
      background: '#181b25', border: '1px solid #2a2e3e', borderRadius: '12px',
      padding: '2rem', margin: '1.5rem 0', textAlign: 'center'
    },
    diagFlow: {
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      flexWrap: 'wrap', gap: '0.5rem', fontFamily: 'monospace', fontSize: '0.85rem'
    },
    diagBox: {
      background: '#1e2230', border: '1px solid #2a2e3e',
      padding: '0.6rem 1rem', borderRadius: '8px'
    },
    diagBoxActive: {
      background: 'rgba(110,231,183,0.12)', border: '1px solid #6ee7b7',
      padding: '0.6rem 1rem', borderRadius: '8px', color: '#6ee7b7'
    },
    diagArrow: { color: '#8b90a5', fontSize: '1.2rem' },
    quizWrap: {
      background: '#181b25', border: '1px solid #2a2e3e',
      borderRadius: '12px', padding: '1.75rem', margin: '2rem 0'
    },
    quizQ: { margin: '1.25rem 0 0.75rem', fontWeight: 500 },
    quizOption: (qIdx, optIdx) => {
      const answered = answers[qIdx] !== undefined
      const isSelected = answers[qIdx] === optIdx
      const isCorrect = quizData[qIdx].correct === optIdx
      let bg = '#1e2230'
      let border = '1px solid #2a2e3e'
      let color = '#e4e6ef'
      if (answered && isSelected && isCorrect) {
        bg = 'rgba(110,231,183,0.15)'; border = '1px solid #6ee7b7'; color = '#6ee7b7'
      } else if (answered && isSelected && !isCorrect) {
        bg = 'rgba(239,68,68,0.1)'; border = '1px solid #ef4444'; color = '#fca5a5'
      } else if (answered && isCorrect) {
        bg = 'rgba(110,231,183,0.15)'; border = '1px solid #6ee7b7'; color = '#6ee7b7'
      }
      return {
        display: 'block', background: bg, border, borderRadius: '8px',
        padding: '0.65rem 1rem', cursor: answered ? 'default' : 'pointer',
        fontSize: '0.92rem', color, marginBottom: '0.5rem',
        transition: 'all 0.2s'
      }
    },
    feedback: (qIdx) => {
      if (answers[qIdx] === undefined) return { display: 'none' }
      const correct = answers[qIdx] === quizData[qIdx].correct
      return {
        marginTop: '0.75rem', padding: '0.75rem 1rem', borderRadius: '8px',
        fontSize: '0.9rem',
        background: correct ? 'rgba(110,231,183,0.1)' : 'rgba(239,68,68,0.08)',
        color: correct ? '#6ee7b7' : '#fca5a5',
        border: correct ? '1px solid rgba(110,231,183,0.2)' : '1px solid rgba(239,68,68,0.2)'
      }
    },
    link: { color: '#34d399', textDecoration: 'underline', textUnderlineOffset: '3px' },
    backLink: {
      display: 'inline-block', color: '#6ee7b7', textDecoration: 'none',
      fontSize: '0.9rem', marginBottom: '2rem', fontFamily: 'monospace'
    },
    footer: {
      borderTop: '1px solid #2a2e3e', padding: '3rem 2rem',
      textAlign: 'center', color: '#8b90a5', fontSize: '0.85rem',
      maxWidth: '820px', margin: '0 auto'
    },
    section: { marginTop: '4rem' },
    quote: {
      fontStyle: 'italic', fontSize: '1.05rem', lineHeight: 1.6,
      color: '#e4e6ef', margin: 0
    }
  }

  return (
    <div style={styles.page}>
      <div style={styles.progressBar} />

      {/* HERO */}
      <header style={styles.hero}>
        <div style={styles.heroInner}>
          <div style={styles.badge}>MOGx Tutorial</div>
          <h1 style={styles.h1}>
            Vinext: The Week That <span style={styles.accent}>Rewrote</span> Web Development
          </h1>
          <p style={styles.heroSub}>
            One engineer, one AI, seven days. How Cloudflare rebuilt the most popular
            web framework from scratch -- and what it means for your career.
          </p>
          <div style={styles.meta}>
            <span>Duration: ~45 min</span>
            <span>Level: Undergrad</span>
            <span>Feb 2026</span>
          </div>
        </div>
      </header>

      {/* CONTENT */}
      <main style={styles.container}>
        <Link to="/" style={styles.backLink}>&larr; Back to MOGx Home</Link>

        {/* SECTION 1 */}
        <section style={styles.section}>
          <div style={styles.sectionNum}>01 -- Motivation</div>
          <h2 style={styles.h2}>Why Should You Care?</h2>
          <p style={styles.p}>
            On February 13, 2026, a single Cloudflare engineer sat down and started
            directing an AI model to rebuild Next.js -- the most widely used React
            framework on the web. By February 20, they had a working, tested, deployable
            replacement. Total cost: about $1,100 in AI tokens.
          </p>
          <p style={styles.p}>
            This is not a toy demo. It has 1,700+ unit tests, 380 end-to-end tests,
            94% API coverage of Next.js 16, and is already running on US government
            websites in production.
          </p>
          <div style={styles.cardHighlight}>
            <div style={styles.cardLabel}>Why this matters for you</div>
            <p style={{ margin: 0, color: '#e4e6ef' }}>
              If you're studying computer science, web development, or software engineering,
              this event reshapes the landscape you're entering. It's not about "AI replacing
              developers." It's about the economics, architecture, and practice of building
              software changing fundamentally.
            </p>
          </div>
        </section>

        {/* SECTION 2 */}
        <section style={styles.section}>
          <div style={styles.sectionNum}>02 -- Background</div>
          <h2 style={styles.h2}>The Web Framework Stack</h2>
          <p style={styles.p}>
            Before understanding vinext, you need to understand the layers of modern web
            development. If you already know React and Next.js, skip ahead.
          </p>

          <h3 style={styles.h3}>React: The UI Library</h3>
          <p style={styles.p}>
            <strong>React</strong> (by Meta) is a JavaScript library for building user
            interfaces. You describe what the UI should look like as components, and React
            figures out how to update the page efficiently.
          </p>

          <h3 style={styles.h3}>Next.js: The Framework</h3>
          <p style={styles.p}>
            <strong>Next.js</strong> (by Vercel) wraps React and handles everything else:
            routing, server-side rendering, data fetching, caching, deployment. It's the
            most popular React framework -- millions of developers use it.
          </p>

          <h3 style={styles.h3}>Build Tools: Turbopack vs Vite</h3>
          <p style={styles.p}>
            Your source files need to be <em>bundled</em> into optimized files the browser
            can load. Next.js uses <strong>Turbopack</strong>. Most of the rest of the
            ecosystem uses <strong>Vite</strong> (powering Astro, SvelteKit, Nuxt, Remix).
          </p>

          <h3 style={styles.h3}>Deployment: Where Code Runs</h3>
          <p style={styles.p}>
            <strong>Cloudflare Workers</strong> is a serverless platform that runs code at
            the edge (close to users, worldwide). The problem: Next.js wasn't designed for
            Workers, so deploying there required painful adaptation layers.
          </p>

          <div style={styles.diagram}>
            <div style={styles.diagFlow}>
              <div style={styles.diagBox}>Your Code</div>
              <span style={styles.diagArrow}>&rarr;</span>
              <div style={styles.diagBox}>React</div>
              <span style={styles.diagArrow}>&rarr;</span>
              <div style={styles.diagBox}>Next.js</div>
              <span style={styles.diagArrow}>&rarr;</span>
              <div style={styles.diagBox}>Turbopack</div>
              <span style={styles.diagArrow}>&rarr;</span>
              <div style={styles.diagBox}>Vercel</div>
            </div>
            <p style={{ ...styles.dim, marginTop: '1rem', fontSize: '0.85rem' }}>
              The standard Next.js pipeline -- tightly coupled end to end
            </p>
          </div>
        </section>

        {/* SECTION 3 */}
        <section style={styles.section}>
          <div style={styles.sectionNum}>03 -- The Project</div>
          <h2 style={styles.h2}>What Is Vinext?</h2>
          <p style={styles.p}>
            <strong>Vinext</strong> (pronounced "vee-next") is a drop-in replacement for
            Next.js, built on Vite instead of Turbopack, that deploys natively to
            Cloudflare Workers.
          </p>
          <p style={styles.p}>
            "Drop-in replacement" means you can take an existing Next.js project,
            swap <span style={styles.code}>next</span> for{' '}
            <span style={styles.code}>vinext</span> in your package.json, and
            everything should work. Same file structure, same APIs -- different engine.
          </p>

          <div style={styles.diagram}>
            <div style={styles.diagFlow}>
              <div style={styles.diagBox}>Your Code</div>
              <span style={styles.diagArrow}>&rarr;</span>
              <div style={styles.diagBox}>React</div>
              <span style={styles.diagArrow}>&rarr;</span>
              <div style={styles.diagBoxActive}>Vinext (Next API on Vite)</div>
              <span style={styles.diagArrow}>&rarr;</span>
              <div style={styles.diagBoxActive}>Workers</div>
            </div>
            <p style={{ ...styles.dim, marginTop: '1rem', fontSize: '0.85rem' }}>
              Vinext replaces framework + build layer, deploys natively to Workers
            </p>
          </div>

          <p style={styles.p}>
            It reimplements: App Router, Pages Router, React Server Components,
            server actions, streaming SSR, middleware, caching (ISR), file-system
            routing, and the <span style={styles.code}>next/*</span> module shims.
            94% coverage of the Next.js 16 API.
          </p>

          <pre style={styles.pre}>{`# Migration is three commands
npm install vinext

# Replace "next" with "vinext" in package.json, then:
vinext dev          # Development server with HMR
vinext build        # Production build
vinext deploy       # Build + deploy to Cloudflare Workers`}</pre>
        </section>

        {/* SECTION 4 */}
        <section style={styles.section}>
          <div style={styles.sectionNum}>04 -- The AI Story</div>
          <h2 style={styles.h2}>How One Person Built This in a Week</h2>
          <p style={styles.p}>
            Steve Faulkner (engineering manager at Cloudflare) used Claude through
            OpenCode. The process:
          </p>

          <div style={styles.card}>
            <div style={styles.cardLabel}>The workflow</div>
            <p style={styles.p}><strong>1.</strong> Plan the architecture with the AI -- what to build, in what order.</p>
            <p style={styles.p}><strong>2.</strong> Define a task ("implement the next/navigation shim").</p>
            <p style={styles.p}><strong>3.</strong> Let the AI write the implementation and tests.</p>
            <p style={styles.p}><strong>4.</strong> Run the test suite.</p>
            <p style={styles.p}><strong>5.</strong> If tests pass, merge. If not, give the AI the error output and iterate.</p>
            <p style={{ margin: 0 }}><strong>6.</strong> Repeat. Over 800 sessions. ~$1,100 in API costs.</p>
          </div>

          <h3 style={styles.h3}>What the human did</h3>
          <p style={styles.p}>
            Architecture decisions. Prioritization. Knowing when the AI was heading
            down a dead end. Quality gates: TypeScript checking, linting, CI on every PR.
          </p>

          <h3 style={styles.h3}>What the AI did</h3>
          <p style={styles.p}>
            Almost every line of code. Including tests. Including code review.
            At times, the AI went into Next.js, Vite, and React internals to debug
            problems autonomously.
          </p>

          <h3 style={styles.h3}>Why this worked</h3>
          <div style={styles.card}>
            <p style={styles.p}><strong>Well-specified target.</strong> Next.js has extensive docs and millions of Stack Overflow answers in the AI's training data.</p>
            <p style={styles.p}><strong>Comprehensive test suite.</strong> Next.js's E2E tests were ported directly and used as mechanical verification.</p>
            <p style={styles.p}><strong>Solid foundation.</strong> Vite handles the hard parts. The AI taught Vite to speak Next.js.</p>
            <p style={{ margin: 0 }}><strong>Model capability.</strong> Current AI models can hold entire codebases in context and produce correct code consistently.</p>
          </div>

          <div style={styles.cardWarn}>
            <div style={styles.warnLabel}>Critical nuance</div>
            <p style={{ margin: 0, color: '#e4e6ef' }}>
              Take away any one factor -- poor docs, no test suite, no build tool foundation,
              or weaker models -- and this doesn't work. The lesson isn't "AI can build
              anything." It's: <em>when the spec is clear, verification is automated,
              and the foundation exists, AI can execute at extraordinary speed.</em>
            </p>
          </div>
        </section>

        {/* SECTION 5 */}
        <section style={styles.section}>
          <div style={styles.sectionNum}>05 -- Technical Concepts</div>
          <h2 style={styles.h2}>What You Should Understand</h2>

          <h3 style={styles.h3}>React Server Components (RSC)</h3>
          <p style={styles.p}>
            RSC lets components run on the server and stream HTML to the client.
            The client only downloads JavaScript for interactive components (marked
            with <span style={styles.code}>'use client'</span>). Smaller bundles,
            faster page loads.
          </p>

          <h3 style={styles.h3}>Traffic-Aware Pre-Rendering (TPR)</h3>
          <p style={styles.p}>
            Vinext's novel contribution. Instead of pre-rendering all 10,000 product
            pages at build time (causing 30-minute builds), vinext queries Cloudflare's
            traffic analytics and pre-renders only the pages that actually get visited.
            The power law means 90% of traffic usually goes to 50-200 pages.
          </p>

          <pre style={styles.pre}>{`vinext deploy --experimental-tpr

  Building...
  Build complete (4.2s)

  TPR: Analyzing traffic for my-store.com (last 24h)
  TPR: 12,847 unique paths -- 184 pages cover 90% of traffic
  TPR: Pre-rendering 184 pages...
  TPR: Pre-rendered 184 pages in 8.3s -> KV cache`}</pre>

          <h3 style={styles.h3}>The Vite Ecosystem</h3>
          <p style={styles.p}>
            Vite is the build tool behind most non-Next.js frameworks. It uses native
            ES modules during development (fast HMR) and Rollup/Rolldown for production.
            Vite 8 introduces Rolldown -- a Rust-based bundler that's dramatically faster.
          </p>

          <h3 style={styles.h3}>Edge Computing / Cloudflare Workers</h3>
          <p style={styles.p}>
            Workers run your code on 300+ locations worldwide. Vinext's entire pipeline
            runs in the Workers runtime, so you can use Cloudflare APIs (Durable Objects,
            KV, AI bindings) directly -- no workarounds needed.
          </p>
        </section>

        {/* SECTION 6 */}
        <section style={styles.section}>
          <div style={styles.sectionNum}>06 -- Performance</div>
          <h2 style={styles.h2}>The Numbers</h2>
          <p style={styles.p}>
            Benchmarked against Next.js 16 using a 33-route App Router application.
          </p>

          <h3 style={styles.h3}>Production Build Time</h3>
          <div style={{ overflowX: 'auto' }}>
            <table style={styles.table}>
              <thead>
                <tr>
                  <th style={styles.th}>Framework</th>
                  <th style={styles.th}>Mean</th>
                  <th style={styles.th}>vs Next.js</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ ...styles.td, fontWeight: 500 }}>Next.js 16.1.6 (Turbopack)</td>
                  <td style={styles.td}>7.38s</td>
                  <td style={{ ...styles.td, ...styles.dim }}>baseline</td>
                </tr>
                <tr>
                  <td style={{ ...styles.td, fontWeight: 500 }}>Vinext (Vite 7 / Rollup)</td>
                  <td style={styles.td}>4.64s</td>
                  <td style={{ ...styles.td, ...styles.faster }}>1.6x faster</td>
                </tr>
                <tr>
                  <td style={{ ...styles.td, fontWeight: 500 }}>Vinext (Vite 8 / Rolldown)</td>
                  <td style={styles.td}>1.67s</td>
                  <td style={{ ...styles.td, ...styles.faster }}>4.4x faster</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 style={styles.h3}>Client Bundle Size (gzipped)</h3>
          <div style={{ overflowX: 'auto' }}>
            <table style={styles.table}>
              <thead>
                <tr>
                  <th style={styles.th}>Framework</th>
                  <th style={styles.th}>Gzipped</th>
                  <th style={styles.th}>vs Next.js</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ ...styles.td, fontWeight: 500 }}>Next.js 16.1.6</td>
                  <td style={styles.td}>168.9 KB</td>
                  <td style={{ ...styles.td, ...styles.dim }}>baseline</td>
                </tr>
                <tr>
                  <td style={{ ...styles.td, fontWeight: 500 }}>Vinext (Rollup)</td>
                  <td style={styles.td}>74.0 KB</td>
                  <td style={{ ...styles.td, ...styles.faster }}>56% smaller</td>
                </tr>
                <tr>
                  <td style={{ ...styles.td, fontWeight: 500 }}>Vinext (Rolldown)</td>
                  <td style={styles.td}>72.9 KB</td>
                  <td style={{ ...styles.td, ...styles.faster }}>57% smaller</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div style={styles.cardWarn}>
            <div style={styles.warnLabel}>Read critically</div>
            <p style={{ margin: 0, color: '#e4e6ef' }}>
              One 33-route app on CI. Measures build/bundle performance, not runtime
              serving speed. Less than two weeks old. Directional, not definitive.
            </p>
          </div>
        </section>

        {/* SECTION 7 */}
        <section style={styles.section}>
          <div style={styles.sectionNum}>07 -- Big Picture</div>
          <h2 style={styles.h2}>What This Means for Software</h2>

          <div style={styles.cardHighlight}>
            <p style={styles.quote}>
              "Most abstractions in software exist because humans need help. We couldn't
              hold the whole system in our heads, so we built layers to manage the
              complexity for us. AI doesn't have the same limitation."
            </p>
            <p style={{ ...styles.dim, fontSize: '0.85rem', marginTop: '0.75rem', marginBottom: 0 }}>
              -- Cloudflare engineering blog
            </p>
          </div>

          <h3 style={styles.h3}>For your studies</h3>
          <p style={styles.p}>
            This doesn't mean "don't learn fundamentals." The opposite. The engineer
            directing the AI needed deep understanding of architecture, module boundaries,
            runtime behavior, testing strategy, and debugging. What changes is the ratio:
            less time typing, more time thinking about systems.
          </p>

          <h3 style={styles.h3}>For the industry</h3>
          <p style={styles.p}>
            If one person can rebuild a major framework in a week, smaller teams can
            compete with larger ones. Vendor lock-in becomes harder to maintain when
            switching costs collapse.
          </p>

          <div style={styles.exercise}>
            <div style={styles.exerciseLabel}>Think about it</div>
            <p style={{ margin: 0, color: '#e4e6ef' }}>
              Vinext cost $1,100 in AI tokens. A team of 5 engineers at $200K/year costs
              ~$1M annually. If AI compresses months of team work into one directed week,
              what does that mean for hiring? For startups? For open-source maintenance?
            </p>
          </div>
        </section>

        {/* SECTION 8 */}
        <section style={styles.section}>
          <div style={styles.sectionNum}>08 -- Hands-On</div>
          <h2 style={styles.h2}>Try It Yourself</h2>

          <h3 style={styles.h3}>Explore the live demos (no install needed)</h3>
          <p style={styles.p}>
            <a href="https://app-router-playground.vinext.workers.dev" target="_blank" rel="noopener" style={styles.link}>App Router Playground</a>{' -- '}
            <a href="https://hackernews.vinext.workers.dev" target="_blank" rel="noopener" style={styles.link}>Hacker News Clone</a>{' -- '}
            <a href="https://app-router-cloudflare.vinext.workers.dev" target="_blank" rel="noopener" style={styles.link}>App Router Minimal</a>
          </p>

          <h3 style={styles.h3}>Create a new project (Node.js 18+)</h3>
          <pre style={styles.pre}>{`npx create-next-app@latest my-app
cd my-app
npm install vinext

# Replace "next dev" with "vinext dev" in package.json
npx vinext dev`}</pre>

          <h3 style={styles.h3}>AI migration skill</h3>
          <pre style={styles.pre}>{`npx skills add cloudflare/vinext
# Then tell the AI: "migrate this project to vinext"`}</pre>

          <div style={styles.exercise}>
            <div style={styles.exerciseLabel}>Exercises</div>
            <p style={styles.p}>
              <strong>1.</strong> Visit the App Router Playground. Open DevTools (F12),
              Network tab. Note the total transfer size.
            </p>
            <p style={styles.p}>
              <strong>2.</strong> Browse the source at{' '}
              <a href="https://github.com/cloudflare/vinext" target="_blank" rel="noopener" style={styles.link}>
                github.com/cloudflare/vinext
              </a>. Read the "What's not supported" section.
            </p>
            <p style={{ margin: 0, color: '#e4e6ef' }}>
              <strong>3.</strong> Read the git commit history. The first commit was Feb 13.
              Trace the feature progression day by day. What was the development order?
            </p>
          </div>
        </section>

        {/* SECTION 9: QUIZ */}
        <section style={styles.section}>
          <div style={styles.sectionNum}>09 -- Assessment</div>
          <h2 style={styles.h2}>Knowledge Check</h2>

          <div style={styles.quizWrap}>
            {quizData.map((item, qIdx) => (
              <div key={qIdx}>
                <p style={styles.quizQ}><strong>Q{qIdx + 1}.</strong> {item.q}</p>
                {item.options.map((opt, optIdx) => (
                  <div
                    key={optIdx}
                    style={styles.quizOption(qIdx, optIdx)}
                    onClick={() => handleAnswer(qIdx, optIdx)}
                    onMouseEnter={(e) => {
                      if (answers[qIdx] === undefined) {
                        e.target.style.borderColor = '#6ee7b7'
                        e.target.style.background = 'rgba(110,231,183,0.12)'
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (answers[qIdx] === undefined) {
                        e.target.style.borderColor = '#2a2e3e'
                        e.target.style.background = '#1e2230'
                      }
                    }}
                  >
                    {opt}
                  </div>
                ))}
                <div style={styles.feedback(qIdx)}>
                  {answers[qIdx] !== undefined && (
                    answers[qIdx] === item.correct
                      ? `Correct! ${item.explain}`
                      : `Not quite. ${item.explain}`
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 10 */}
        <section style={styles.section}>
          <div style={styles.sectionNum}>10 -- Further Reading</div>
          <h2 style={styles.h2}>Going Further</h2>
          <p style={styles.p}>
            <a href="https://blog.cloudflare.com/vinext/" target="_blank" rel="noopener" style={styles.link}>Original Cloudflare blog post</a> (10 min, start here)
          </p>
          <p style={styles.p}>
            <a href="https://github.com/cloudflare/vinext" target="_blank" rel="noopener" style={styles.link}>Vinext GitHub repository</a> (README, issues, commits)
          </p>
          <p style={styles.p}>
            <a href="https://vite.dev/" target="_blank" rel="noopener" style={styles.link}>Vite documentation</a> (understand the ecosystem)
          </p>
          <p style={styles.p}>
            <a href="https://benchmarks.vinext.workers.dev" target="_blank" rel="noopener" style={styles.link}>Public benchmarks dashboard</a>
          </p>

          <div style={styles.cardHighlight}>
            <div style={styles.cardLabel}>MOGx Learning Path</div>
            <p style={{ margin: 0, color: '#e4e6ef' }}>
              This tutorial is part of MOG Explains -- Anthropomorphic Press. For more
              tutorials on web development, AI, and emerging tech, return to the{' '}
              <Link to="/" style={styles.link}>MOGx home page</Link>.
            </p>
          </div>
        </section>

        <div style={styles.footer}>
          <p>MOG Explains -- Anthropomorphic Press</p>
          <p>
            Source:{' '}
            <a href="https://blog.cloudflare.com/vinext/" target="_blank" rel="noopener" style={styles.link}>
              blog.cloudflare.com/vinext
            </a>
          </p>
        </div>
      </main>
    </div>
  )
}
