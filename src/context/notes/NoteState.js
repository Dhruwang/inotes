import React ,{useState}from "react";
import NoteContext from "./noteContext";

const NoteState = (props)=>{
    const initialNote = [
        {
          "_id": "638101f4da247c237ff941ed",
          "user": "637facb17a4813ede010e9e0",
          "title": "Dhruwang is very much rich",
          "description": "he is webdev wizard",
          "__v": 0
        },
        {
          "_id": "638102feb4f9ac7accff60de",
          "user": "637facb17a4813ede010e9e0",
          "title": "54544",
          "description": "he is webdev wizard",
          "__v": 0
        },
        {
          "_id": "638b3ad822fbbdfd2d37fd85",
          "user": "637facb17a4813ede010e9e0",
          "title": "znother",
          "description": "he is webdev wizard(updated)",
          "__v": 0
        },
        {
          "_id": "638b3df7c91a0d3a9e3e623d",
          "user": "637facb17a4813ede010e9e0",
          "title": "znother",
          "description": "he is webdev wizard(updated)",
          "__v": 0
        }
      ]
      // To add Notes 
      const AddNotes = (title,description)=>{
        console.log('adding note')
        setnotes(notes.concat(
          {
            "_id": "638b3df7c91a0d3a9e3e623d5",
          "user": "637facb17a4813ede010e9e0",
          "title": title,
          "description": description,
          "__v": 0
          }
        ))
      }
      // To delete Notes 
      const DeleteNotes = ()=>{
        
      }
      // To update Notes 
      const UpdteNotes = ()=>{
        
      }
      const [notes, setnotes] = useState(initialNote)
    return(
        <NoteContext.Provider value={{notes, setnotes, AddNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}
export default NoteState;