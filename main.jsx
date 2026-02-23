import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home.jsx'
import WakingMindOfGod from './WakingMindOfGod.jsx'
import HowToBuildWebApp from './HowToBuildWebApp.jsx'
import EpistemicTraps from './EpistemicTraps.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/waking-the-mind-of-god" element={<WakingMindOfGod />} />
        <Route path="/how-to-build-a-web-app" element={<HowToBuildWebApp />} />
        <Route path="/epistemic-traps" element={<EpistemicTraps />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
