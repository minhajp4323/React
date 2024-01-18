import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {id:1 , task: "Go" , Completed: false},
    {id:2 , task: "Go" , Completed: true},
    {id:3 , task: "Go" , Completed: false},
    {id:4 , task: "Go" , Completed: false},
];
const ReducerSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTask: {
      
    },
    editTask: {},
    deleteTask: {},
    Completed: {},
  },
});

export const { addTask, editTask, deleteTask, Completed } = ReducerSlice.actions;
export default ReducerSlice.reducer;
