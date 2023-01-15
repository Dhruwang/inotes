import React,{useContext} from 'react'
import NoteContext from '../context/notes/noteContext'

export default function Popup(props) {
  const handleDelete = ()=>{
    
  }
  
  return (
    <div className='popup'>
      {props.popup && <div class="modal fade" id="delete" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content bg-white">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalToggleLabel">{props.popup.title}</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              {props.popup.message}
            </div>
            <div class="modal-footer">
              <button class="btn btn-primary" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal" onClick={handleDelete}>Yes</button>
            </div>
          </div>
        </div>
      </div>}
    </div>
  )
}
