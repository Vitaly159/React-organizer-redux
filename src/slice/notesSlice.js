import { createSlice } from "@reduxjs/toolkit";
import uuid from "react-uuid";

export const notesSlice = createSlice({
  name: "notes",
  initialState: {
    notes: [],
    activeCell: "",
    chosenDate: "",
    calendarDays: "",
    activeNote: false,
    searchValue: "",
    valueTitle: "",
    valueBody: "",
    date: "",
  },
  reducers: {
    // test(state, action) {
    //   let day = action.payload.getDate();
    //   let month = action.payload.getMonth() + 1;
    //   let year = action.payload.getFullYear();

    //   if (day < 10) {
    //     day = "0" + day;
    //   }

    //   if (month < 10) {
    //     month = "0" + month;
    //   }

    //   state.date = day + "." + month + "." + year;
    // },
    getMonthDate(state, { payload }) {
      const result = [];
      const date = new Date(payload.year, payload.month + 1, 0);
      const date2 = new Date(payload.year, payload.month);
      const monthesDays = date.getDate();
      const monthStartsOn = () => {
        const weekDaysArray = [6, 0, 1, 2, 3, 4, 5];
        const weeksDay = date2.getDay();

        return weekDaysArray[weeksDay];
      };
      let day = 1;

      for (let i = 0; i < (monthesDays + monthStartsOn()) / 7; i++) {
        result[i] = [];

        for (let j = 0; j < 7; j++) {
          if ((i === 0 && j < monthStartsOn()) || day > monthesDays) {
            const cell = {
              purpose: "emptiness",
            };

            result[i][j] = cell;
          } else {
            const datesId = new Date(payload.year, payload.month, day++);

            const cell = {
              purpose: "dates",
              date: datesId,
            };

            result[i][j] = cell;
          }
        }
      }
      state.calendarDays = result;
    },
    onAddNote(state, action) {
      state.notes.push({
        id: uuid(),
        sub: state.activeCell,
        title: "Имя задачи",
        body: "",
        lastChanged: Date.now(),
      });
    },
    onUpdateNote(state, action) {
      const updatedNotesArray = state.notes.map((note) => {
        if (note.id == state.activeNote) {
          return action.payload;
        }

        return note;
      });

      state.notes = updatedNotesArray;
    },
    setActiveCell(state, action) {
      state.activeCell = action.payload;
    },
    setChosenDate(state, action) {
      state.chosenDate = action.payload;
    },
    onDeleteNote(state, action) {
      state.notes = state.notes.filter((note) => note.id !== action.payload);
    },
    setActiveNote(state, action) {
      state.activeNote = action.payload;
    },
    setSearchValue(state, action) {
      state.searchValue = action.payload;
    },
    setValueTitle(state, action) {
      state.valueTitle = action.payload;
    },
    setValueBody(state, action) {
      state.valueBody = action.payload;
    },
  },
});

export const {
  test,
  setActiveCell,
  setChosenDate,
  getMonthDate,
  onAddNote,
  onDeleteNote,
  setActiveNote,
  onUpdateNote,
  setSearchValue,
  setValueBody,
  setValueTitle,
} = notesSlice.actions;
export default notesSlice.reducer;
