import { useState } from "react";
import {useSelector} from 'react-redux'
import uuid from "react-uuid";

import Notes from "./Notes/Notes";
import WritingArea from "./Editor/Editor";

import "./BlockForCreateNotes.css";

function BlockForCreateNotes({
  setNotes,
  convertDate,
}) {
  const notes = useSelector((state) => state.notes.notes);
  const activeCell = useSelector((state) => state.notes.activeCell);

  const [activeNote, setActiveNote] = useState(false);
  const [valueTitle, setValueTitle] = useState("");
  const [valueBody, setValueBody] = useState("");

  const onAddNote = () => {
    const newNote = {
      id: uuid(),
      sub: activeCell,
      title: "Имя задачи",
      body: "",
      lastChanged: Date.now(),
    };

    setNotes([newNote, ...notes]);
  };

  const onUpdateNote = (updateNote) => {
    const updatedNotesArray = notes.map((note) => {
      if (note.id === activeNote) {
        return updateNote;
      }

      return note;
    });

    setNotes(updatedNotesArray);
  };

  const onDeleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  const getActiveNote = () => {
    return notes.find((note) => note.id === activeNote);
  };

  if (!activeCell) {
    return <div className="chooseDate">Выберете дату</div>;
  }

  return (
    <div className="BlockForCreateNotes">
      <Notes
        notes={notes}
        onAddNote={onAddNote}
        onDeleteNote={onDeleteNote}
        activeNote={activeNote}
        setActiveNote={setActiveNote}
        setValueTitle={setValueTitle}
        setValueBody={setValueBody}
        activeCell={activeCell}
        convertDate={convertDate}
      />

      <WritingArea
        activeNote={getActiveNote()}
        onUpdateNote={onUpdateNote}
        valueTitle={valueTitle}
        setValueTitle={setValueTitle}
        valueBody={valueBody}
        setValueBody={setValueBody}
      />
    </div>
  );
}

export default BlockForCreateNotes;
