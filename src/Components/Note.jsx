import React from "react";
import { AiFillDelete } from "react-icons/ai";
import useNoteStore from "./NoteStore";
function Note(props) {
  const deleteNote = useNoteStore((state) => state.deleteNote);
  const handleDeleteNote = ()=>{
    deleteNote(props.id);
  }
  return (
    <div className="note">
      <span className="note-txt">{props.text}</span>
      <span className="note-footer">
        <small>{props.date}</small>
        <button onClick={() => handleDeleteNote()} className="btn">
          <AiFillDelete className="delete-icon" size='1.3rem'/>
        </button> 
      </span>
    </div>
  );
}

export default Note;
