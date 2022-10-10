import { configureStore } from '@reduxjs/toolkit';
import notesSlice from '../slice/notesSlice';

export const store = configureStore({
  reducer: {
    notes: notesSlice,
  },
  
})