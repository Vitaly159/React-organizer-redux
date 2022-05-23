import React, { useState } from "react";

import DatesSelectors from './DatesSelectors/DatesSelectors'
import Table from "./Table/Table";

import './calendar.css';

function Calendar( { notes, activeCell, setActiveCell, setChosenDate, year, month, setYear, setMonth, convertDate } ){

  const amountDaysInMonth = (date) => { return date.getDate() };

  const getDayOfWeek = (date) => {
      const weekDaysArray = [6, 0, 1, 2, 3, 4, 5];
      const weeksDay = date.getDay();

      return weekDaysArray[weeksDay];
  }

  const getMonthDate = (year, month) => {
      const result = [];
      const date = new Date(year, month+1, 0);
      const date2 = new Date(year, month);
      const monthesDays = amountDaysInMonth(date);
      const monthStartsOn = getDayOfWeek(date2);

      let day = 1;

      for (let i = 0; i < (monthesDays + monthStartsOn) / 7; i++) {
          result[i] = [];
          
          for (let j = 0; j < 7; j++) {
              if ((i === 0 && j < monthStartsOn) || day > monthesDays) {
                  
                  const cell = {
                      purpose: 'emptiness'
                  }

                  result[i][j] = cell;
              } else {
                  const datesId = new Date(year, month, day++);
                  const cell = {
                      purpose: 'dates',
                      date: datesId,
                  }
                  result[i][j] = cell;
              }
          }
      }
      return result;
  }

  const [calendarDays, setCalendarDays] = useState(getMonthDate(year, month));

    return(
            <div className='calendar'>   
                <DatesSelectors
                    setCalendarDays={setCalendarDays}
                    year={year}
                    setYear={setYear}
                    month={month}
                    setMonth={setMonth}
                    getMonthDate={getMonthDate}
                />
                
                <Table 
                    calendarDays={calendarDays}
                    setActiveCell={setActiveCell}
                    activeCell={activeCell}
                    notes={notes}
                    setChosenDate={setChosenDate}
                    convertDate={convertDate}
                /> 
            </div>
    )}

export default Calendar;