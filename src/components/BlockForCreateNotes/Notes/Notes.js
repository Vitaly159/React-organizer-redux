import AddNotes from "./Add-notes/AddNotes";
import NotesHeader from "./Notes-header/NotesHeader";

import "./notes.css";

function Notes({ convertDate }) {
  return (
    <div className="notes-wrapper">
      <NotesHeader />
      <AddNotes convertDate={convertDate} />
    </div>
  );
}

export default Notes;
