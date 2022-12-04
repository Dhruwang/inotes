import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Home from './components/Home';

function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
          <Route exact path="/about" element={ <About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
