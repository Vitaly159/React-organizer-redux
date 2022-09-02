import React from 'react';
import './DatesSelectors.css';

function DatesSelectors({month, year, setYear, setMonth, setCalendarDays, getMonthDate}) {
  const monthNames = ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь',
                      'Декабрь'];
  
  const createYearSelect = (firstYear, lastYear) => {
    const years =[];

    for (let i = firstYear; i <= lastYear; i++) {
      years.push(i);
    }
    
    return years;
  }    

  const getYearsInSelect = createYearSelect(2018, 2030);
  
  const upDateCalendar = (month, year) => {
    setMonth(month);
    setYear(year);
    setCalendarDays(getMonthDate(year, month));
  }
    
  const handlePrevMonthBtn = () => {            
    if (month > 0) {
      upDateCalendar(--month, year)
      return;
    }

    return upDateCalendar(11, --year);
  }
    
  const handleNextMonthBtn = () => {
    if (month < 11) {
      upDateCalendar(++month, year)
      return;
    }
    
    return upDateCalendar(0, ++year);
  }

  return(
    <div className="wrapper-selectors">

      <div className="selectors">

        <select value={month} onChange={(e) => upDateCalendar(Number(e.target.value), year)}>
          {monthNames.map((month, index) =>
            <option key={index} value={index}>{month}</option>
          )}  
        </select>

        <select value={year} onChange={(e) => upDateCalendar(month, Number(e.target.value))}>
          {getYearsInSelect.map(year =>
            <option key={year} value={year}>{year}</option>
          )}
        </select>

      </div>

      <div>
        <button className="arrows" onClick={() => handlePrevMonthBtn()}>{'<'}</button>
        <button className="arrows" onClick={() => handleNextMonthBtn()}>{'>'}</button>
      </div>

    </div>
  )
}

export default DatesSelectors;