import { create } from "zustand";
const useNoteStore = create((set)=>({
    notes:[],
    addNote : (note) =>{
        set((state) => ({notes : [...state.notes , note]}))
    },
    deleteNote : (Id) => {
        set((state) => ({notes : state.notes.filter((note) => note.id !== Id)}))
    }
}))
export default useNoteStore;