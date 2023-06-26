import React from "react";
import useNoteStore from "./NoteStore";
import Note from "./Note";
import AddNote from './AddNote'
function NoteList({search}) {
  let notes = useNoteStore((state) => state.notes);
  // filter the notes
  notes = notes.filter((note)=> note.text.toLowerCase().includes(search));
  return (
    <div className="notes-list">
      {notes.map((note,idx) => {
       return <Note key = {idx} text={note.text} date={note.date} id={note.id}/>;
      })}
      <AddNote />
    </div>
  );
}

export default NoteList;
