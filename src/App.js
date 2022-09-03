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
  
  return (
    <div className="App">
      <Calendar
        convertDate={convertDate}
      />

      <BlockForCreateNotes
        // setNotes={setNotes}
        convertDate={convertDate}
      />
    </div>
  );
}

export default App;
