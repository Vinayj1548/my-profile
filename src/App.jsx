import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Router>
        <div className="max-w-screen mx-auto">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
