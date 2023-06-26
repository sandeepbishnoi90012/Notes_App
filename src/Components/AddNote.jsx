import React, { useState } from "react";
import useNoteStore from "./NoteStore.js";
import { v4 as uuid } from "uuid";

function AddNote() {
  const addNote = useNoteStore((state) => state.addNote);
  const [text, setText] = useState("");

  const today = new Date().toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  const handleAddNote = () => {
    if(text){
      addNote({ text: text, id: uuid(), date: today });
    }
    setText("");
  };

  return (
    <div className="note new">
      <span className="note-txt">
        <textarea
          rows={8}
          cols={10}
          placeholder="Type to add a note..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="border"
        ></textarea>
      </span>
      <span className="note-footer"> 
        <small>{today}</small>
        <button onClick={() => handleAddNote()} className="save">save</button>
      </span>
    </div>
  );
}

export default AddNote;
