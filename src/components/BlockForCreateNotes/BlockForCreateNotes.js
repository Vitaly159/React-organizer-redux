import {useSelector} from 'react-redux'

import Notes from "./Notes/Notes";
import Editor from "./Editor/Editor";

import "./BlockForCreateNotes.css";

function BlockForCreateNotes({
  convertDate,
}) {
  const notes = useSelector((state) => state.notes.notes);
  const activeCell = useSelector((state) => state.notes.activeCell);

  if (!activeCell) {
    return <div className="chooseDate">Выберете дату</div>;
  }

  return (
    <div className="BlockForCreateNotes">
      <Notes
        convertDate={convertDate}
      />
      <Editor
        notes={notes}
      />
    </div>
  );
}

export default BlockForCreateNotes;
