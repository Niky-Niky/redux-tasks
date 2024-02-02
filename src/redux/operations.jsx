import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'https://65b92f2ab71048505a8a6149.mockapi.io/'

export const fetchTask = createAsyncThunk('tasks/fetchTask', async (_, thunkAPI) => {
    try {
        const res = await axios.get('tasks');
        return res.data
    } catch (error) {
        thunkAPI.rejectWithValue(error.message)
    }
}) 

export const addTask = createAsyncThunk('tasks/addTask', async (text, thunkAPI) => {
    try {
        const res = await axios.post('tasks', {text});
        return res.data
    } catch (error) {
        thunkAPI.rejectWithValue(error.message)
    }
}) 

export const deleteTask = createAsyncThunk('tasks/deleteTask', async (task, thunkAPI) => {
    try{
        const res = await axios.delete(`tasks/${task.id}`)
        return res.data
    } catch (error) {
        thunkAPI.rejectWithValue(error.message)
    }
})

export const toggleTask = createAsyncThunk('tasks/toggleTask', async (task, thunkAPI) => {
    try{
        const res = await axios.put(`tasks/${task.id}`, {
            completed: !task.completed
        })
        return res.data
    } catch (error) {
        thunkAPI.rejectWithValue(error.message)
    }
})