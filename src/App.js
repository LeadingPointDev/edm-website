import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Navbar from "./Components/Navbar";
import Introduction from "./Components/Introduction";
import Roadmap from "./Components/Roadmap";
import Edm from "./Components/Edm";
import Architecture from "./Components/Architecture";
import Standards from "./Components/Standards";
import QuickLinks from "./Components/QuickLinks";

function App() {
  return (
    <BrowserRouter basename="/edm-website/">
      <div className="container">
        <Navbar />
        <Routes>
          <Route path="/" element={<div className="container"><Introduction /><QuickLinks /></div>} />
          <Route path="/roadmap" element={<div className="container"><Roadmap /><QuickLinks /></div>} />
          <Route path="/edm" element={<div className="container"><Edm /><QuickLinks /></div>} />
          <Route path="/architecture" element={<div className="container"><Architecture /><QuickLinks /></div>} />
          <Route path="/standards" element={<div className="container"><Standards /><QuickLinks /></div>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;