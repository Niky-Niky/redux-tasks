import { statusFilters } from './constants';
import {createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchTask, addTask, deleteTask, toggleTask } from './operations';


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
        initialState: {
        items: [],
        isLoading: false,
        error: null
        },
        extraReducers(builder){
          builder
            .addCase(fetchTask.fulfilled, (state, action) => {
              state.isLoading = false
              state.error = null
              state.items = action.payload
            })
            .addCase(addTask.fulfilled, (state, action) => {
              console.log(action.payload)
              state.isLoading = false
              state.error = null
              state.items.push(action.payload) 
            })
            .addCase(deleteTask.fulfilled, (state, action) => {
              console.log(action.payload)
              state.isLoading = false
              state.error = null
              console.log(state.items)
              const idx = state.items.findIndex((item) => item.id === action.payload.id)
              state.items.splice(idx, 1)
            })
            .addCase(toggleTask.fulfilled, (state, action) => {
              console.log(action.payload)
              state.isLoading = false
              state.error = null
              console.log(state.items)
              const idx = state.items.findIndex((item) => item.id === action.payload.id)
              state.items.splice(idx, 1, action.payload)
            })
            .addMatcher(isAnyOf(fetchTask.pending, deleteTask.pending, addTask.pending, toggleTask.pending), (state) => {
              state.isLoading = true
            })
            .addMatcher(isAnyOf(fetchTask.rejected, deleteTask.rejected, addTask.rejected, toggleTask.rejected), (state, action) => {
              state.error = action.payload
            })
            .addMatcher(isAnyOf(fetchTask.fulfilled, deleteTask.fulfilled, addTask.fulfilled, toggleTask.fulfilled), (state, action) => {
              state.isLoading = false
              state.error = null
            })
        }
      })
      
      // Експортуємо генератори екшенів та редюсер
export const { setStatusFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
      
// export const {setStatusFilter} = filtersSlice.actions;

// export const filtersReducer = filtersSlice.reducer;
export const tasksReducer = taskSlice.reducer;