import { statusFilters } from './constants';
import {createSlice } from '@reduxjs/toolkit';


const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    status: statusFilters.all,
  },
  reducers: {
    setStatusFilter(state, action) {
      state.status = action.payload;
    },
  },
});


    export const taskSlice = createSlice({
        name: 'tasks',
        initialState: [
          { id: 0, text: "Learn HTML and CSS", completed: true },
          { id: 1, text: "Get good at JavaScript", completed: true },
          { id: 2, text: "Master React", completed: false },
          { id: 3, text: "Discover Redux", completed: false },
          { id: 4, text: "Build amazing apps", completed: false },
        ],
        reducers:{
          addTask(state, action){
              state.push(action.payload)
          },
          deleteTask(state, action){
            return state.filter(task => task.id !== action.payload)
          },
          toggleCompleted(state, action){
            return state.map(task => {
              if (task.id !== action.payload) {
                return task;
              }
              return {...task, completed: !task.completed};
            })
          }
        }
      })
      
      // Експортуємо генератори екшенів та редюсер
export const { setStatusFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
      
export const {addTask, deleteTask, toggleCompleted} = taskSlice.actions;
export const tasksReducer = taskSlice.reducer;