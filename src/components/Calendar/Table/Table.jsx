import './table.css';

function Table( { notes, calendarDays, setActiveCell, activeCell, setChosenDate, convertDate } ){    
    
    const daysNames = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
    const currentDay = new Date(); 

    function getMark(value){
        if( notes.find( note => convertDate(new Date(note.sub)) === convertDate(value) ) ){
            return true 
        } else return false   
    }

    const getDayNamesInThead = daysNames.map(dayName => <td key={dayName}>{dayName}</td>);
    
    const getDaysInTbody = calendarDays.map((week, index) => 
                                            <tr key={index}>
                                                {week.map((day, index) => day.purpose === 'dates' ?
                                                    <td 
                                                        key={index}
                                                        onClick={()=>{ setActiveCell(day.date); setChosenDate( () => convertDate(day.date) ) }}
                                                        className={`days 
                                                        ${( convertDate(day.date) === convertDate(currentDay) ) && "today"}
                                                        ${day.date === activeCell && "selected"}`}
                                                    >
                                                        <span className={`date ${getMark(day.date) && "hasNotes"}`}> {day.date.getDate()} </span>
                                                    </td>
                                                    :
                                                    <td key={index} className="withoutDays"/>
                                                )}
                                            </tr>)
    
    return(
        <table>
            <thead>
                <tr>
                    {getDayNamesInThead}
                </tr>
            </thead>
                
            <tbody>
                {getDaysInTbody}
            </tbody>
        </table>
    )}

export default Table;    