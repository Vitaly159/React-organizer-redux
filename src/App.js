import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { addNull } from "./slice/notesSlice";
import Calendar from "./components/Calendar/Calendar";
import BlockForCreateNotes from "./components/BlockForCreateNotes/BlockForCreateNotes";

import "./App.css";

function App() {
  // const dispatch = useDispatch();

  const addNully = (value) => {
    if (value < 10) {
      value = "0" + value;
    }

    return value;
  };
  
  const convertDate = (date) => {
    return (
      addNully(date.getDate()) +
      "." +
      addNully(date.getMonth()+ 1) +
      "." +
      date.getFullYear()
    );
  };
  
  const [activeCell, setActiveCell] = useState("");
  const [chosenDate, setChosenDate] = useState();

  return (
    <div className="App">
      <Calendar
        activeCell={activeCell}
        setActiveCell={setActiveCell}
        setChosenDate={setChosenDate}
        convertDate={convertDate}
      />

      <BlockForCreateNotes
        activeCell={activeCell}
        // setNotes={setNotes}
        chosenDate={chosenDate}
        convertDate={convertDate}
      />
    </div>
  );
}

export default App;
