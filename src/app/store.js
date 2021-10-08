import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import counterReducer from '../features/counter/counterSlice';
import taskReducer from '../app/redux/tasks/tasksSlice';
import libraryReducer from '../app/redux/books/librarySlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    tasks: taskReducer,
    library: libraryReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
});
