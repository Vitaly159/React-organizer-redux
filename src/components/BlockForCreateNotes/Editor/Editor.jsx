import { useSelector, useDispatch } from "react-redux";
import {
  onUpdateNote,
  setValueBody,
  setValueTitle,
} from "../../../slice/notesSlice";
import "./editor.css";

function Editor({ notes }) {
  const dispatch = useDispatch();
  const activeNote = useSelector((state) => state.notes.activeNote);
  const valueBody = useSelector((state) => state.notes.valueBody);
  const valueTitle = useSelector((state) => state.notes.valueTitle);

  const getActiveNote = () => {
    return notes.find((note) => note.id === activeNote);
  };

  const onEditField = (title, valueTitle, body, valueBody) => {
    dispatch(
      onUpdateNote({
        ...getActiveNote(),
        [title]: valueTitle,
        [body]: valueBody,
        lastChanged: Date.now(),
      })
    );
  };

  if (!getActiveNote()) {
    return (
      <div className="wrapper">
        <div className="center">Создайте новую запись и нажмите на нее</div>
      </div>
    );
  }

  return (
    <div className="main-wrapper">
      <div className="main-note-edit">
        <button
          className="saveBtn"
          onClick={() => onEditField("title", valueTitle, "body", valueBody)}
        >
          Сохранить задачу
        </button>

        <input
          type="text"
          className="title"
          value={valueTitle}
          placeholder="Введите имя задачи"
          onChange={(e) => dispatch(setValueTitle(e.target.value))}
          autoFocus
        />

        <textarea
          className="body"
          placeholder="Введите содержание..."
          value={valueBody}
          onChange={(e) => dispatch(setValueBody(e.target.value))}
        />
      </div>

      <div className="main-note-preview">
        <h1 className="preview-title">{activeNote.title}</h1>
        <div className="note-preview">{activeNote.body}</div>
      </div>
    </div>
  );
}

export default Editor;
