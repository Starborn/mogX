import { useState } from "react";

const sections = [
  { id: "js-basics", title: "JS Basics" },
  { id: "functions", title: "Functions" },
  { id: "arrays-objects", title: "Arrays & Objects" },
  { id: "dom", title: "DOM & HTML" },
  { id: "async", title: "Async" },
  { id: "node", title: "Node.js" },
  { id: "npm", title: "npm" },
  { id: "server", title: "Build a Server" },
  { id: "deploy", title: "Deploy" },
  { id: "recipes", title: "Recipes" },
];

const Code = ({ children }) => (
  <pre style={{
    background: "rgba(0,0,0,0.4)", borderRadius: 10, padding: "14px 18px",
    margin: "12px 0", fontSize: 13, lineHeight: 1.7, overflowX: "auto",
    fontFamily: "'JetBrains Mono', 'Fira Code', monospace", color: "#e2e8f0",
    border: "1px solid rgba(255,255,255,0.06)",
  }}>{children}</pre>
);

const P = ({ children }) => (
  <p style={{ fontSize: 15, lineHeight: 1.85, margin: "0 0 14px", opacity: 0.92 }}>{children}</p>
);

const H = ({ children }) => (
  <h2 style={{ fontSize: 20, fontWeight: 700, margin: "0 0 14px", color: "#f7df1e" }}>{children}</h2>
);

const H3 = ({ children }) => (
  <h3 style={{ fontSize: 16, fontWeight: 700, margin: "18px 0 8px", color: "#81e6d9" }}>{children}</h3>
);

const Tip = ({ children }) => (
  <div style={{
    background: "rgba(247,223,30,0.06)", borderLeft: "3px solid #f7df1e",
    borderRadius: "0 10px 10px 0", padding: "12px 16px", margin: "14px 0",
    fontSize: 14, lineHeight: 1.8,
  }}>{children}</div>
);

const Warning = ({ children }) => (
  <div style={{
    background: "rgba(252,129,129,0.06)", borderLeft: "3px solid #fc8181",
    borderRadius: "0 10px 10px 0", padding: "12px 16px", margin: "14px 0",
    fontSize: 14, lineHeight: 1.8,
  }}>{children}</div>
);

export default function JSNodeGuide() {
  const [section, setSection] = useState("js-basics");

  const S = ({ id, children }) => (
    <div style={{ display: section === id ? "block" : "none", animation: "fadeIn 0.3s ease" }}>
      {children}
    </div>
  );

  return (
    <div style={{
      minHeight: "100vh", fontFamily: "'Inter', system-ui, sans-serif",
      background: "linear-gradient(180deg, #0d0d1a 0%, #1a1a2e 100%)", color: "#e2e8f0",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap');
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
      `}</style>

      <div style={{ maxWidth: 700, margin: "0 auto", padding: "40px 24px 80px" }}>
        <div style={{ fontSize: 11, letterSpacing: 3, textTransform: "uppercase", opacity: 0.4, fontWeight: 600, marginBottom: 8 }}>
          MOG Explains · Survival Guide
        </div>
        <h1 style={{ fontSize: 24, fontWeight: 800, margin: "0 0 4px", letterSpacing: -0.5 }}>
          JavaScript & Node.js: From Zero to Deployed
        </h1>
        <div style={{ fontSize: 13, opacity: 0.45, marginBottom: 24 }}>
          Everything you need in one place. Bookmark this.
        </div>

        <div style={{
          display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 28,
          borderBottom: "1px solid rgba(255,255,255,0.06)", paddingBottom: 16,
        }}>
          {sections.map(s => (
            <button key={s.id} onClick={() => setSection(s.id)} style={{
              background: section === s.id ? "rgba(247,223,30,0.15)" : "transparent",
              border: section === s.id ? "1px solid rgba(247,223,30,0.3)" : "1px solid transparent",
              color: section === s.id ? "#f7df1e" : "rgba(255,255,255,0.45)",
              padding: "6px 12px", borderRadius: 20, fontSize: 11, fontWeight: 600, cursor: "pointer",
            }}>{s.title}</button>
          ))}
        </div>

        {/* ======== JS BASICS ======== */}
        <S id="js-basics">
          <H>JavaScript Basics</H>
          <P>JavaScript is the only programming language that runs natively in web browsers. It also runs on servers via Node.js. Learn it once, use it everywhere.</P>

          <H3>Variables</H3>
          <Code>{`// Three ways to declare variables
const name = "Paola";     // Cannot be reassigned. Use this by default.
let age = 42;              // Can be reassigned. Use when value changes.
var old = "avoid this";    // Old style. Don't use it.

// const doesn't mean immutable -- objects/arrays can still be modified
const colors = ["red", "blue"];
colors.push("green");      // This works! The array itself isn't reassigned.`}</Code>

          <H3>Types</H3>
          <Code>{`// JavaScript has 7 primitive types
"hello"          // string
42               // number (integers and decimals are the same type)
true             // boolean
null             // intentionally empty
undefined        // not yet assigned
Symbol("id")     // unique identifier (rare)
42n              // BigInt (very large numbers)

// Plus objects (everything else)
{ name: "Paola" }   // object
[1, 2, 3]           // array (which is secretly an object)
function() {}        // function (also secretly an object)

// Check types with typeof
typeof "hello"       // "string"
typeof 42            // "number"
typeof true          // "boolean"
typeof undefined     // "undefined"
typeof null          // "object"  <-- famous JavaScript bug, never fixed`}</Code>

          <H3>Comparisons</H3>
          <Code>{`// Use === (strict equality), never ==
"5" === 5      // false (different types)
"5" == 5       // true  (type coercion -- confusing, avoid)

// Other comparisons
5 > 3          // true
5 >= 5         // true
5 !== 3        // true (strict not-equal)

// Logical operators
true && false   // false (AND -- both must be true)
true || false   // true  (OR -- at least one true)
!true           // false (NOT -- flips the value)`}</Code>

          <H3>Strings</H3>
          <Code>{`// Template literals (backticks) -- the modern way
const name = "MOG";
const greeting = \`Hello, \${name}!\`;  // "Hello, MOG!"

// Useful string methods
"hello".toUpperCase()          // "HELLO"
"Hello World".split(" ")       // ["Hello", "World"]
"  trim me  ".trim()           // "trim me"
"hello".includes("ell")        // true
"hello".slice(1, 3)            // "el" (index 1 up to but not including 3)
"ha".repeat(3)                 // "hahaha"
"hello world".replace("world", "MOG")  // "hello MOG"`}</Code>

          <H3>If / Else</H3>
          <Code>{`const score = 85;

if (score >= 90) {
  console.log("A");
} else if (score >= 80) {
  console.log("B");       // This runs
} else {
  console.log("Try again");
}

// Ternary (shorthand for simple if/else)
const grade = score >= 90 ? "A" : "B";

// Nullish coalescing (use default if null/undefined)
const name = null;
const display = name ?? "Anonymous";  // "Anonymous"`}</Code>

          <H3>Loops</H3>
          <Code>{`// for...of -- iterate over arrays (use this most of the time)
const fruits = ["apple", "banana", "cherry"];
for (const fruit of fruits) {
  console.log(fruit);
}

// for loop -- when you need the index
for (let i = 0; i < fruits.length; i++) {
  console.log(i, fruits[i]);
}

// while -- when you don't know how many iterations
let count = 0;
while (count < 5) {
  console.log(count);
  count++;
}`}</Code>

          <Tip>
            <strong>console.log() is your best friend.</strong> When confused about what a value is, log it. When code doesn't work, log everything. Professional developers do this constantly.
          </Tip>
        </S>

        {/* ======== FUNCTIONS ======== */}
        <S id="functions">
          <H>Functions</H>
          <P>Functions are reusable blocks of code. They're the fundamental building block of JavaScript programs.</P>

          <H3>Three ways to write functions</H3>
          <Code>{`// 1. Function declaration (hoisted -- can be called before it's defined)
function greet(name) {
  return \`Hello, \${name}!\`;
}

// 2. Function expression (not hoisted)
const greet = function(name) {
  return \`Hello, \${name}!\`;
};

// 3. Arrow function (modern, shorter, most common in React)
const greet = (name) => {
  return \`Hello, \${name}!\`;
};

// Arrow shorthand -- if the body is a single expression, skip {} and return
const greet = (name) => \`Hello, \${name}!\`;

// If only one parameter, parentheses are optional
const double = n => n * 2;`}</Code>

          <H3>Default parameters</H3>
          <Code>{`const greet = (name = "World") => \`Hello, \${name}!\`;

greet("Paola")   // "Hello, Paola!"
greet()           // "Hello, World!"`}</Code>

          <H3>Destructuring parameters</H3>
          <Code>{`// Instead of accessing object properties one by one:
const printUser = (user) => {
  console.log(user.name, user.age);
};

// Destructure in the parameter list:
const printUser = ({ name, age }) => {
  console.log(name, age);
};

// This is why React components look like this:
const Card = ({ title, subtitle }) => (
  <div>
    <h2>{title}</h2>
    <p>{subtitle}</p>
  </div>
);`}</Code>

          <H3>Rest and spread</H3>
          <Code>{`// Rest (...) -- collect remaining arguments into an array
const sum = (...numbers) => numbers.reduce((a, b) => a + b, 0);
sum(1, 2, 3, 4)   // 10

// Spread (...) -- expand an array or object
const a = [1, 2, 3];
const b = [...a, 4, 5];    // [1, 2, 3, 4, 5]

const defaults = { color: "blue", size: "medium" };
const custom = { ...defaults, color: "red" };  // { color: "red", size: "medium" }`}</Code>

          <H3>Closures (the concept that unlocks React)</H3>
          <Code>{`// A closure is a function that remembers its creation environment
const makeCounter = () => {
  let count = 0;                  // This variable is "enclosed"
  return () => {
    count++;                      // The inner function still has access
    return count;
  };
};

const counter = makeCounter();
counter()   // 1
counter()   // 2
counter()   // 3

// React's useState works exactly like this:
// const [count, setCount] = useState(0);
// setCount is a closure that remembers which state variable to update`}</Code>

          <Tip>
            <strong>Arrow functions in React:</strong> When you see <code>{`onClick={() => setPage(3)}`}</code>, that's an arrow function created inline. It doesn't run immediately -- it runs when clicked.
          </Tip>
        </S>

        {/* ======== ARRAYS & OBJECTS ======== */}
        <S id="arrays-objects">
          <H>Arrays & Objects</H>
          <P>Arrays and objects are how JavaScript organizes data. React is essentially arrays of objects rendered as UI.</P>

          <H3>Array methods (the essential six)</H3>
          <Code>{`const numbers = [1, 2, 3, 4, 5];

// map -- transform every element (returns new array)
numbers.map(n => n * 2)           // [2, 4, 6, 8, 10]

// filter -- keep elements that pass a test
numbers.filter(n => n > 3)        // [4, 5]

// find -- get first element that passes a test
numbers.find(n => n > 3)          // 4

// reduce -- combine all elements into one value
numbers.reduce((sum, n) => sum + n, 0)   // 15

// forEach -- do something with each element (no return value)
numbers.forEach(n => console.log(n));

// includes -- check if element exists
numbers.includes(3)               // true`}</Code>

          <H3>Chaining array methods</H3>
          <Code>{`// This is how real code looks in React:
const tutorials = [
  { title: "APEMO", level: "undergrad", published: true },
  { title: "Logitext", level: "undergrad", published: true },
  { title: "Draft", level: "undergrad", published: false },
];

// Get published tutorial titles, uppercased
const titles = tutorials
  .filter(t => t.published)
  .map(t => t.title.toUpperCase());
// ["APEMO", "LOGITEXT"]`}</Code>

          <H3>Objects</H3>
          <Code>{`// Creating objects
const paper = {
  title: "Epistemic Traps",
  authors: ["Xu", "Chen"],
  year: 2025,
  tags: ["alignment", "safety"],
};

// Accessing properties
paper.title              // "Epistemic Traps"
paper["title"]           // Same thing (bracket notation)

// Destructuring -- extract properties into variables
const { title, year } = paper;
console.log(title)       // "Epistemic Traps"

// Adding/modifying properties
paper.journal = "arXiv";
paper.year = 2026;

// Spread to copy and modify
const updated = { ...paper, year: 2026 };

// Object methods
Object.keys(paper)       // ["title", "authors", "year", "tags"]
Object.values(paper)     // ["Epistemic Traps", [...], 2025, [...]]
Object.entries(paper)    // [["title", "Epistemic Traps"], ...]`}</Code>

          <H3>JSON (JavaScript Object Notation)</H3>
          <Code>{`// JSON is how data travels between systems
// It looks like JavaScript objects but with stricter rules:
// - Keys must be double-quoted strings
// - No trailing commas
// - No functions

const data = { name: "MOG", version: 1 };

// Convert to JSON string (for sending/saving)
const json = JSON.stringify(data);     // '{"name":"MOG","version":1}'

// Parse JSON string back to object
const parsed = JSON.parse(json);       // { name: "MOG", version: 1 }

// Pretty-print JSON
JSON.stringify(data, null, 2);
// {
//   "name": "MOG",
//   "version": 1
// }`}</Code>

          <Tip>
            <strong>React is mostly map().</strong> If you understand <code>{`array.map(item => <Component data={item} />)`}</code>, you understand 80% of React rendering.
          </Tip>
        </S>

        {/* ======== DOM & HTML ======== */}
        <S id="dom">
          <H>DOM & Embedding in HTML</H>
          <P>The DOM (Document Object Model) is how JavaScript talks to web pages. When you write React, you rarely touch the DOM directly -- React does it for you. But understanding the DOM helps you understand what React is doing underneath.</P>

          <H3>Embedding JavaScript in HTML</H3>
          <Code>{`<!-- Method 1: Inline script -->
<html>
<body>
  <h1 id="title">Hello</h1>
  <script>
    document.getElementById("title").textContent = "Hello from JS!";
  </script>
</body>
</html>

<!-- Method 2: External script file -->
<html>
<body>
  <h1 id="title">Hello</h1>
  <script src="app.js"></script>
</body>
</html>

<!-- Method 3: ES Module (modern) -->
<html>
<body>
  <div id="root"></div>
  <script type="module" src="main.js"></script>
</body>
</html>`}</Code>

          <H3>DOM manipulation (vanilla JS)</H3>
          <Code>{`// Select elements
const el = document.getElementById("myId");
const el = document.querySelector(".myClass");     // CSS selector
const els = document.querySelectorAll("p");         // All <p> tags

// Change content
el.textContent = "New text";           // Plain text
el.innerHTML = "<strong>Bold</strong>"; // HTML (careful -- security risk)

// Change styles
el.style.color = "red";
el.style.display = "none";

// Add/remove CSS classes
el.classList.add("active");
el.classList.remove("active");
el.classList.toggle("active");

// Create elements
const div = document.createElement("div");
div.textContent = "I'm new!";
document.body.appendChild(div);

// Event listeners
el.addEventListener("click", () => {
  console.log("Clicked!");
});`}</Code>

          <H3>How React replaces all of this</H3>
          <Code>{`// Vanilla JS (imperative -- you tell it HOW)
const button = document.createElement("button");
button.textContent = "Count: 0";
let count = 0;
button.addEventListener("click", () => {
  count++;
  button.textContent = \`Count: \${count}\`;
});
document.body.appendChild(button);

// React (declarative -- you tell it WHAT)
const [count, setCount] = useState(0);
return (
  <button onClick={() => setCount(count + 1)}>
    Count: {count}
  </button>
);
// React handles the DOM updates for you.`}</Code>

          <H3>Standalone HTML app (no build tools)</H3>
          <Code>{`<!-- This runs React without npm, Vite, or Node -->
<!DOCTYPE html>
<html>
<head>
  <script src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
  <script src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
  <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
</head>
<body>
  <div id="root"></div>
  <script type="text/babel">
    function App() {
      const [count, setCount] = React.useState(0);
      return (
        <div>
          <h1>Count: {count}</h1>
          <button onClick={() => setCount(count + 1)}>Add</button>
        </div>
      );
    }
    ReactDOM.createRoot(document.getElementById("root")).render(<App />);
  </script>
</body>
</html>`}</Code>

          <Tip>
            <strong>This is how the WebMCP Model Card Generator works.</strong> One HTML file, React from CDN, Babel compiles JSX in the browser. No build step. Open in any browser and it works.
          </Tip>
        </S>

        {/* ======== ASYNC ======== */}
        <S id="async">
          <H>Async JavaScript</H>
          <P>JavaScript is single-threaded but non-blocking. When it needs to wait for something (network request, file read, timer), it doesn't freeze -- it starts the task, moves on, and comes back when the result is ready.</P>

          <H3>Promises</H3>
          <Code>{`// A Promise represents a value that doesn't exist yet
// It's either: pending, fulfilled (resolved), or rejected

// fetch() returns a Promise
fetch("https://api.example.com/data")
  .then(response => response.json())    // When response arrives
  .then(data => console.log(data))      // When JSON is parsed
  .catch(error => console.error(error)); // If anything fails`}</Code>

          <H3>async/await (modern, cleaner syntax)</H3>
          <Code>{`// async/await is syntactic sugar over Promises
// Same thing as above, but reads like synchronous code:

async function fetchData() {
  try {
    const response = await fetch("https://api.example.com/data");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Arrow function version:
const fetchData = async () => {
  const response = await fetch("https://api.example.com/data");
  const data = await response.json();
  return data;
};`}</Code>

          <H3>Common async patterns</H3>
          <Code>{`// Fetch JSON from an API
const getUser = async (id) => {
  const res = await fetch(\`https://api.example.com/users/\${id}\`);
  if (!res.ok) throw new Error(\`HTTP \${res.status}\`);
  return res.json();
};

// Wait for multiple requests in parallel
const [users, posts] = await Promise.all([
  fetch("/api/users").then(r => r.json()),
  fetch("/api/posts").then(r => r.json()),
]);

// setTimeout (delay execution)
setTimeout(() => console.log("After 2 seconds"), 2000);

// setInterval (repeat execution)
const id = setInterval(() => console.log("tick"), 1000);
clearInterval(id);  // Stop it`}</Code>

          <H3>Async in React (useEffect)</H3>
          <Code>{`import { useState, useEffect } from "react";

function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // useEffect cannot be async directly, so define inner function
    const loadUser = async () => {
      try {
        const res = await fetch(\`/api/users/\${userId}\`);
        const data = await res.json();
        setUser(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    loadUser();
  }, [userId]);  // Re-run when userId changes

  if (loading) return <p>Loading...</p>;
  return <h1>{user.name}</h1>;
}`}</Code>

          <Warning>
            <strong>Never call await at the top level of a regular script.</strong> It only works inside an async function, or in an ES module (script type="module").
          </Warning>
        </S>

        {/* ======== NODE.JS ======== */}
        <S id="node">
          <H>Node.js</H>
          <P>Node.js is JavaScript that runs on your computer instead of in a browser. Same language, different environment. In the browser you have window and document. In Node you have fs (file system), http (web servers), and path (file paths).</P>

          <H3>Install Node</H3>
          <Code>{`# Mac (with Homebrew)
brew install node

# Windows -- download from nodejs.org

# Check installation
node --version    # v20.x.x or similar
npm --version     # 10.x.x or similar`}</Code>

          <H3>Run JavaScript files</H3>
          <Code>{`# Create a file called hello.js:
# console.log("Hello from Node!");

# Run it:
node hello.js
# Output: Hello from Node!

# Interactive mode (REPL):
node
> 2 + 2
4
> .exit`}</Code>

          <H3>Node built-in modules</H3>
          <Code>{`// File system -- read and write files
import fs from "fs";

// Read a file
const content = fs.readFileSync("data.txt", "utf-8");

// Write a file
fs.writeFileSync("output.txt", "Hello, file!");

// Async version (non-blocking)
import fs from "fs/promises";
const content = await fs.readFile("data.txt", "utf-8");

// Path -- handle file paths safely
import path from "path";
path.join("src", "components", "App.jsx")  // "src/components/App.jsx"
path.extname("photo.jpg")                   // ".jpg"
path.basename("/home/user/doc.pdf")          // "doc.pdf"

// Process -- info about the running program
process.cwd()              // Current working directory
process.argv               // Command line arguments
process.env.HOME           // Environment variables
process.exit(1)            // Exit with error code`}</Code>

          <H3>ES Modules vs CommonJS</H3>
          <Code>{`// Old style (CommonJS) -- you'll see this in older code
const fs = require("fs");
module.exports = myFunction;

// Modern style (ES Modules) -- use this
import fs from "fs";
export default myFunction;
export { helper1, helper2 };

// To use ES Modules in Node, either:
// 1. Name your file .mjs
// 2. Add "type": "module" in package.json (this is what we did)`}</Code>

          <Tip>
            <strong>Node vs Browser cheatsheet:</strong><br/>
            Browser has: window, document, fetch (built-in), localStorage<br/>
            Node has: process, fs, http, path, Buffer, fetch (since v18)<br/>
            Both have: console, setTimeout, JSON, Promise, Array, Object
          </Tip>
        </S>

        {/* ======== NPM ======== */}
        <S id="npm">
          <H>npm (Node Package Manager)</H>
          <P>npm is how JavaScript projects manage dependencies. It downloads code other people wrote so you don't have to write everything from scratch. React, Vite, and every library we've used comes through npm.</P>

          <H3>Essential commands</H3>
          <Code>{`# Start a new project (creates package.json)
npm init -y

# Install a dependency (adds to package.json + node_modules/)
npm install react
npm install react react-dom    # Multiple at once
npm i react                    # Shorthand

# Install a dev dependency (only needed during development)
npm install --save-dev vite
npm i -D vite                  # Shorthand

# Install all dependencies from existing package.json
npm install                    # Or just: npm i

# Clean install (from lock file, exact versions -- what Vercel does)
npm ci

# Run a script defined in package.json
npm run build
npm run dev
npm start                      # Shorthand for npm run start

# See what's installed
npm list --depth=0

# Update packages
npm update

# Remove a package
npm uninstall react-router-dom`}</Code>

          <H3>package.json explained</H3>
          <Code>{`{
  "name": "mog-explains",         // Project name
  "version": "1.0.0",             // Your version number
  "private": true,                // Don't accidentally publish to npm
  "type": "module",               // Use ES Modules (import/export)

  "scripts": {                    // Commands you can run with npm run
    "dev": "vite",                // npm run dev --> starts dev server
    "build": "vite build",        // npm run build --> production build
    "preview": "vite preview"     // npm run preview --> preview build
  },

  "dependencies": {               // Packages your app needs to run
    "react": "^18.3.1",           // ^ means "compatible with 18.x.x"
    "react-dom": "^18.3.1",
    "react-router-dom": "^6.28.0"
  },

  "devDependencies": {            // Packages only needed during development
    "@vitejs/plugin-react": "^4.3.4",
    "vite": "^5.4.11"
  }
}`}</Code>

          <H3>What goes where</H3>
          <Code>{`node_modules/     # Downloaded packages (NEVER commit to git)
package.json      # Project manifest (ALWAYS commit)
package-lock.json # Exact versions (ALWAYS commit)
.gitignore        # Should contain: node_modules/`}</Code>

          <Warning>
            <strong>Never edit node_modules/.</strong> Never commit it to git. If something breaks, delete the entire folder and run <code>npm install</code> again. It rebuilds from package.json.
          </Warning>
        </S>

        {/* ======== BUILD A SERVER ======== */}
        <S id="server">
          <H>Build a Server</H>
          <P>A server is a program that listens for requests and sends back responses. This is what makes websites dynamic -- instead of serving static files, you can generate content, talk to databases, and handle user input.</P>

          <H3>Minimal HTTP server (built-in, no dependencies)</H3>
          <Code>{`// server.js
import http from "http";

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end("<h1>Hello from Node!</h1>");
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});

// Run: node server.js
// Open browser to http://localhost:3000`}</Code>

          <H3>Express (the standard Node web framework)</H3>
          <Code>{`// npm install express
import express from "express";
const app = express();

// Parse JSON request bodies
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/api/tutorials", (req, res) => {
  res.json([
    { id: 1, title: "Epistemic Traps" },
    { id: 2, title: "APEMO" },
  ]);
});

app.post("/api/tutorials", (req, res) => {
  const { title } = req.body;
  res.status(201).json({ id: 3, title });
});

// Start server
app.listen(3000, () => console.log("Running on :3000"));`}</Code>

          <H3>Vercel serverless functions (no server to manage)</H3>
          <Code>{`// api/hello.js  (put in api/ folder at project root)
// Vercel automatically makes this available at /api/hello

export default function handler(req, res) {
  res.status(200).json({ message: "Hello from MOG API!" });
}

// That's it. No Express, no server.listen().
// Deploy to Vercel and it just works.

// Access it at: https://mog-x.vercel.app/api/hello`}</Code>

          <Tip>
            <strong>Serverless = you write functions, not servers.</strong> Vercel runs your function when someone visits the URL, then shuts it down. You pay nothing when nobody's visiting. This is how modern web apps work.
          </Tip>
        </S>

        {/* ======== DEPLOY ======== */}
        <S id="deploy">
          <H>Deploy to the Web</H>
          <P>You've already done this! Here's the reference for all the ways to get your code live.</P>

          <H3>Option 1: Vercel (what we use)</H3>
          <Code>{`# 1. Push code to GitHub
# 2. Connect repo to vercel.com
# 3. Vercel auto-detects Vite, runs npm run build
# 4. Live at your-project.vercel.app

# Every git push auto-deploys. That's the whole workflow.

# Custom domain (optional):
# Vercel dashboard > Settings > Domains > Add your domain`}</Code>

          <H3>Option 2: GitHub Pages (free, static only)</H3>
          <Code>{`# Works for single HTML files (like WebMCP generator)
# 1. Push to GitHub
# 2. Settings > Pages > Source: main branch
# 3. Live at username.github.io/repo-name/

# For Vite projects, add to vite.config.js:
export default defineConfig({
  base: "/repo-name/",   // Must match your GitHub repo name
});`}</Code>

          <H3>Option 3: Netlify (similar to Vercel)</H3>
          <Code>{`# 1. Push code to GitHub
# 2. Connect repo to netlify.com
# 3. Build command: npm run build
# 4. Publish directory: dist
# 5. Live at your-project.netlify.app`}</Code>

          <H3>Option 4: Single HTML file (anywhere)</H3>
          <Code>{`# Bundle everything into one index.html
# Load React from CDN (no build step needed)
# Host literally anywhere:
#   - Any web server
#   - Google Drive (with sharing link)
#   - Email as attachment
#   - USB stick`}</Code>

          <H3>The deployment mental model</H3>
          <Code>{`Your code (JSX, components)
    |
    v
Build step (Vite compiles JSX to plain JS + HTML + CSS)
    |
    v
dist/ folder (static files any web server can serve)
    |
    v
Hosting (Vercel/Netlify/GitHub Pages serves these files)
    |
    v
User's browser downloads and runs them`}</Code>

          <Tip>
            <strong>Key insight:</strong> After <code>npm run build</code>, your entire React app becomes a folder of static files. There's no "React server" running. The browser does all the work. That's why static hosting is free -- there's almost nothing for the server to do.
          </Tip>
        </S>

        {/* ======== RECIPES ======== */}
        <S id="recipes">
          <H>Recipes: Copy-Paste Solutions</H>
          <P>Real patterns you'll use constantly. Steal these.</P>

          <H3>Read a JSON file in Node</H3>
          <Code>{`import fs from "fs/promises";

const data = JSON.parse(
  await fs.readFile("data.json", "utf-8")
);`}</Code>

          <H3>Fetch data from an API</H3>
          <Code>{`const response = await fetch("https://api.example.com/data");
const data = await response.json();`}</Code>

          <H3>React component with state</H3>
          <Code>{`import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <button onClick={() => setCount(c => c + 1)}>
      Clicked {count} times
    </button>
  );
}`}</Code>

          <H3>React component that fetches data</H3>
          <Code>{`import { useState, useEffect } from "react";

export default function DataList() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("/api/items")
      .then(r => r.json())
      .then(setItems);
  }, []);

  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
}`}</Code>

          <H3>React tabbed navigation (the pattern we use in every tutorial)</H3>
          <Code>{`const [tab, setTab] = useState("intro");

const tabs = ["intro", "method", "results"];

return (
  <div>
    {tabs.map(t => (
      <button
        key={t}
        onClick={() => setTab(t)}
        style={{ fontWeight: tab === t ? "bold" : "normal" }}
      >
        {t}
      </button>
    ))}
    {tab === "intro" && <p>Introduction content...</p>}
    {tab === "method" && <p>Method content...</p>}
    {tab === "results" && <p>Results content...</p>}
  </div>
);`}</Code>

          <H3>Simple Vercel API endpoint</H3>
          <Code>{`// api/papers.js
const papers = [
  { id: 1, title: "Epistemic Traps", arxiv: "2602.17676" },
  { id: 2, title: "APEMO", arxiv: "2602.17910" },
];

export default function handler(req, res) {
  if (req.method === "GET") {
    return res.json(papers);
  }
  res.status(405).json({ error: "Method not allowed" });
}`}</Code>

          <H3>Error handling pattern</H3>
          <Code>{`// Wrap anything that might fail in try/catch
try {
  const data = JSON.parse(rawText);
  await saveToDatabase(data);
  console.log("Success!");
} catch (error) {
  console.error("Something went wrong:", error.message);
  // Handle gracefully instead of crashing
}`}</Code>

          <Tip>
            <strong>The secret to learning programming:</strong> don't memorize. Bookmark this page, come back when you need something, copy the pattern, adapt it. Every professional developer looks things up constantly. The skill is knowing what to search for, not remembering the syntax.
          </Tip>
        </S>

        {/* Footer */}
        <div style={{
          textAlign: "center", marginTop: 40, paddingTop: 24,
          borderTop: "1px solid rgba(255,255,255,0.06)",
        }}>
          <p style={{ fontSize: 12, opacity: 0.25 }}>
            MOG Explains · Anthropomorphic Press · Indexed in Dow Jones Factiva
          </p>
        </div>
      </div>
    </div>
  );
}
