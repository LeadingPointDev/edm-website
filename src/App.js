import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Navbar from "./Components/Navbar";
import Landing from "./Components/Landing";
import Roadmap from "./Components/Roadmap";
import Edm from "./Components/Edm";
import Architecture from "./Components/Architecture";
import Granite from "./Components/Granite";
import Standards from "./Components/Standards";
import QuickLinks from "./Components/QuickLinks";

function App() {
  return (
    <BrowserRouter basename="/edm-website/">
      <div class="container">
        <Navbar />
        <Routes>
          <Route path="/" element={<div class="container"><Landing /><QuickLinks /></div>} />
          <Route path="/roadmap" element={<div class="container"><Roadmap /><QuickLinks /></div>} />
          <Route path="/edm" element={<div class="container"><Edm /><QuickLinks /></div>} />
          <Route path="/architecture" element={<div class="container"><Architecture /><QuickLinks /></div>} />
          <Route path="/granite" element={<div class="container"><Granite /><QuickLinks /></div>} />
          <Route path="/standards" element={<div class="container"><Standards /><QuickLinks /></div>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;