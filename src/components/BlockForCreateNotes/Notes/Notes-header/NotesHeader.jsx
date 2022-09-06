import { useSelector, useDispatch } from "react-redux";
import { onAddNote, setSearchValue } from "../../../../slice/notesSlice";
import "./notesHeader.css";

function NotesHeader() {
  const dispatch = useDispatch();
  const chosenDate = useSelector((state) => state.notes.chosenDate);

  return (
    <div>
      <div className="notes-header">
        <h1>Записи</h1>
        <button className="add-note" onClick={() => dispatch(onAddNote())}>
          Новая запись
        </button>
      </div>

      <h4>{"Выбранная дата: " + chosenDate}</h4>

      <div>
        <input
          className="searching"
          onChange={(e) => dispatch(setSearchValue(e.target.value))}
          placeholder="Поиск по записям"
        />
      </div>
    </div>
  );
}

export default NotesHeader;
