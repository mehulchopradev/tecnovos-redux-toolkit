import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    tasks: [],
    checkedTasks: []
  },
  reducers: {
    newTask: (state, action) => {
      const { payload } = action;
      const task = { ...payload };
      task.id = state.tasks.length + 1;
      task.createdDate = new Date();

      state.tasks.push(task); // u can write mutable code here
    },
    checkUncheckTask: (state, action) => {
      const { payload: { id, checked } } = action;
      if (checked) {
        state.checkedTasks.push(id);
      } else {
        state.checkedTasks = state.checkedTasks.filter(taskId => taskId !== id)
      }
    },
    clearTasks: (state) => {
      state.tasks = state.tasks.filter(task => !state.checkedTasks.includes(task.id));
      state.checkedTasks = [];
    }
  }
});

// type
// payload
export const { newTask, checkUncheckTask, clearTasks } = tasksSlice.actions;


export default tasksSlice.reducer;
