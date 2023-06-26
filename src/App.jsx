import { useState } from 'react'
import './App.css'
import NoteList from './Components/NoteList'
import SearchBar from './Components/SearchBar';
function App() {
  const [searchText , SetSearchText] = useState("");
  return (
    <div className='container'>  
    <h1>Your Notes</h1>
    <SearchBar handleSearch = {SetSearchText}/>
    <NoteList  search={searchText}/>  
    </div>
  )
}

export default App
