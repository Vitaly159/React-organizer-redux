import { useState, useEffect } from "react"

import Calendar from './components/Calendar/Calendar'
import BlockForCreateNotes from './components/BlockForCreateNotes/BlockForCreateNotes'

import './App.css';

function App() {

  const date = new Date();
  const [month, setMonth] = useState( date.getMonth() );
  const [year, setYear] = useState( date.getFullYear() );

  const addNull = (value) => {
    if(value < 10){ 
        value = '0'+value 
    }
      return value
  }

  const convertDate = (date) => { return addNull(date.getDate())+'.'+addNull( (date.getMonth()) + 1 )+'.'+date.getFullYear() }

  const [activeCell, setActiveCell] = useState('');
  const [chosenDate, setChosenDate] = useState();

  const [notes, setNotes] = useState( localStorage.notes ? JSON.parse(localStorage.notes) : [] );
  
  useEffect(() => { localStorage.setItem("notes", JSON.stringify(notes)) }, [notes]);

  return (
    <div className="App">
      <Calendar 
        activeCell={activeCell}
        setActiveCell={setActiveCell}
        notes={notes}
        setChosenDate={setChosenDate}
        year={year}
        setYear={setYear}
        month={month}
        setMonth={setMonth}
        convertDate={convertDate}
      />
      
      <BlockForCreateNotes
        activeCell={activeCell}
        notes={notes}
        setNotes={setNotes}
        chosenDate={chosenDate}
        convertDate={convertDate}
      />
    </div>
  );
}

export default App;