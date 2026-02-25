import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home.jsx'
import WakingMindOfGod from './WakingMindOfGod.jsx'
import HowToBuildWebApp from './HowToBuildWebApp.jsx'
import EpistemicTraps from './EpistemicTraps.jsx'
import APEMO from './APEMO.jsx'
import WorkflowPerturb from './WorkflowPerturb.jsx'
import StandardizedEval from './StandardizedEval.jsx'
import Logitext from './Logitext.jsx'
import Propensities from './Propensities.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/waking-the-mind-of-god" element={<WakingMindOfGod />} />
        <Route path="/how-to-build-a-web-app" element={<HowToBuildWebApp />} />
        <Route path="/epistemic-traps" element={<EpistemicTraps />} />
        <Route path="/apemo" element={<APEMO />} />
        <Route path="/workflowperturb" element={<WorkflowPerturb />} />
        <Route path="/standardized-eval" element={<StandardizedEval />} />
        <Route path="/logitext" element={<Logitext />} />
        <Route path="/propensities" element={<Propensities />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
