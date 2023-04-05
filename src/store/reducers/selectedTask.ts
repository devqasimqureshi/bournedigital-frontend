import { createSlice } from '@reduxjs/toolkit'
import initialState from 'store/states';

export const counterSlice = createSlice({
    name: 'selectedTask',
    initialState: initialState.selectedTask,
    reducers: {
        setSelectedTask: (state, { payload }) => {
            return payload
        },
        removeSelectedTask: (state) => {
            return initialState.selectedTask
        },
        updateSelectedTask: (state, { payload }) => {
            let task = {...state};
            return {
                ...task,
                ...payload
            };
        }
    }
})

export const { setSelectedTask, removeSelectedTask, updateSelectedTask } = counterSlice.actions;


export default counterSlice.reducer
