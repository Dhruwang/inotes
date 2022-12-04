import React,{useState} from "react";
import NoteContext from "./noteContext";

const NoteState = (props)=>{
    const state={
        "name":"Dhruwng",
        "worth":"Billions"
    }
    return(
        <NoteContext.Provider value={state}>
            {props.children}
        </NoteContext.Provider>
    )
}
export default NoteState;