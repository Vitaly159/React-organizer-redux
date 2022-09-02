import './notesHeader.css';

function NotesHeader({onAddNote, searching, chosenDate}) {

  return(
    <div>

      <div className="notes-header">
        <h1>Записи</h1>
        <button className="add-note" onClick={onAddNote}>Новая запись</button>
      </div>

      <h4>{'Выбранная дата: '+chosenDate}</h4>

      <div>
        <input className="searching" onChange={searching} placeholder="Поиск по записям"/>
      </div>

    </div>
  );
}

export default NotesHeader;