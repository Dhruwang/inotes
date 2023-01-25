
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import { useState,useContext } from "react";
import Navbar from './components/Navbar';
import About from './components/About';
import Main from './components/Main';
import Home from './components/Home';
import NoteState from "./context/notes/NoteState";
import Alert from "./components/Alert";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Notepop from "./components/Notepop";
import Popup from "./components/Popup";
import AddNotes from "./components/AddNotes";
import Timer from "./components/Timer";
import Todo from "./components/Todo";


function App(props) {
  const [alert, setAlert] = useState(null)
  const [popup,setpopup] = useState(null)


  const showAlert = (type,message)=>{
    setAlert({
      message : message,
      type : type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  const showPopup = (title,message)=>{
    console.log("running")
    setpopup({
      title : title,
      message : message
    })
    console.log(popup)
  }

  return (
    <NoteState>
      <BrowserRouter>
        <Navbar />
        <Popup popup={popup} />
        <Alert alert={alert} /> 
        <Routes>
        
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/main" element={<Main />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/login" element={<Login showAlert={showAlert}/>} />
        <Route exact path="/signup" element={<Signup showAlert={showAlert}/>} />
        <Route exact path="main/note/:id" note={props.note}  element={<Notepop showPopup={showPopup}/>} />
        <Route exact path="/createNote"   element={<AddNotes/>} />
        <Route exact path="/timer"   element={<Timer/>} />
        <Route exact path="/todo"   element={<Todo/>} />
        
        </Routes>
      </BrowserRouter>
    </NoteState>
  );
}

export default App;
