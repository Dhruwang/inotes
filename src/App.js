
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import { useState } from "react";
import Navbar from './components/Navbar';
import About from './components/About';
import Home from './components/Home';
import NoteState from "./context/notes/NoteState";
import Alert from "./components/Alert";
import Login from "./components/Login";
import Signup from "./components/Signup";

function App() {
  const [alert, setAlert] = useState(null)
  const showAlert = (type,message)=>{
    setAlert({
      message : message,
      type : type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
    
  }
  return (
    <NoteState>
      <BrowserRouter>
        <Navbar />
        <Alert alert={alert} />
        <div className="container">
        <Routes>
        <Route exact path="/" element={<Home showAlert={showAlert}/>} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/login" element={<Login showAlert={showAlert}/>} />
        <Route exact path="/signup" element={<Signup showAlert={showAlert}/>} />
        </Routes>
        </div>
      </BrowserRouter>
    </NoteState>
  );
}

export default App;
