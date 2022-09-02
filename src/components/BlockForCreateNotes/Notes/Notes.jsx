import { useState } from 'react'

import AddNotes from './Add-notes/AddNotes'
import NotesHeader from './Notes-header/NotesHeader'

import './notes.css';

function Notes({ onAddNote, onDeleteNote, activeNote, setActiveNote, setValueTitle, setValueBody, activeCell, 
                 chosenDate, convertDate}) {
    
  const [searchValue, setSearchValue] = useState('');

  const searching = function(event){
    setSearchValue(event.target.value);
  }
   
  return (
    <div className="notes-wrapper">
      <NotesHeader 
        onAddNote={onAddNote}
        searching={searching}
        chosenDate={chosenDate}
      />

      <AddNotes 
        searchValue={searchValue}
        activeNote={activeNote}
        setActiveNote={setActiveNote}
        onDeleteNote={onDeleteNote}
        setValueTitle={setValueTitle}
        setValueBody={setValueBody}
        activeCell={activeCell}
        convertDate={convertDate}
      /> 
    </div>
  )
}

export default Notes;     