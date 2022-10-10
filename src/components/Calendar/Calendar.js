import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getMonthDate } from "../../slice/notesSlice";

import DatesSelectors from "./DatesSelectors/DatesSelectors";
import Table from "./Table/Table";

import "./calendar.css";

function Calendar({ convertDate }) {
  const dispatch = useDispatch();
  const activeCell = useSelector((state) => state.notes.activeCell);
  const calendarDays = useSelector((state) => state.notes.calendarDays);

  const date = new Date();
  const [month, setMonth] = useState(date.getMonth());
  const [year, setYear] = useState(date.getFullYear());

  useEffect(() => {
    dispatch(getMonthDate({ year: year, month: month }));
  }, []);

  return (
    <div className="calendar">
      <DatesSelectors
        year={year}
        setYear={setYear}
        month={month}
        setMonth={setMonth}
      />

      <Table
        calendarDays={calendarDays}
        activeCell={activeCell}
        convertDate={convertDate}
      />
    </div>
  );
}

export default Calendar;
