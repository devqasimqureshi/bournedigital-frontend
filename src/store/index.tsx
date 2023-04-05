import React from "react";
import taskReducer from "./reducers/tasks";
import statusReducer from "./reducers/statuses";
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import selectedTask from "./reducers/selectedTask";

interface Props { }

const store = configureStore({
  reducer: {
    tasks: taskReducer,
    selectedTask: selectedTask,
    statuses: statusReducer
  },
});

export type InitialStateType = ReturnType<typeof store.getState>
export type DispatchType = typeof store.dispatch

const Store: React.FC<Props> = ({ children }) => {
  return (
    <Provider store={store}>{children}</Provider>
  )
}

export default Store;
