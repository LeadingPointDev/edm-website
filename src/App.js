import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Navbar from "./Components/Navbar";
import Landing from "./Components/Landing";
import Roadmap from "./Components/Roadmap";
import Edm from "./Components/Edm";
import Architecture from "./Components/Architecture";
import Granite from "./Components/Granite";
import Standards from "./Components/Standards";

function App() {
  return (
    <BrowserRouter basename="/edm-website/">
      <div class="container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/roadmap" element={<Roadmap />} />
          <Route path="/edm" element={<Edm />} />
          <Route path="/architecture" element={<Architecture />} />
          <Route path="/granite" element={<Granite />} />
          <Route path="/standards" element={<Standards />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;