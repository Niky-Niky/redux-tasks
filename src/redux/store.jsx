import { configureStore} from '@reduxjs/toolkit';
import {filtersReducer, tasksReducer} from './slices';
// console.log(tasksReducer());

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    filters: filtersReducer
  },
});

