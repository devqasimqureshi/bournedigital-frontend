import { createSlice } from '@reduxjs/toolkit'
import { ActionType, InitialStateType, StatusType } from 'interfaces/index';
import services from 'services/index';
import initialState from 'store/states';
import { DispatchType } from '..';

export const counterSlice = createSlice({
    name: 'statuses',
    initialState: initialState.statuses,
    reducers: {
        setStatuses: (state, { payload }) => {
            return payload
        },
        setStatus: (state, { payload }) => {
            let statuses = [...state];
            statuses.push(payload);
            return statuses
        },
        removeStatu: (state, { payload }) => {
            let statuses = state.filter(task => task.id !== payload.id);
            return statuses
        },
        updateStatus: (state, { payload }) => {
            let statuses = [...state];
            var taskIndex: number = state.findIndex(task => task.id === payload.id);
            statuses[taskIndex] = payload.data;
            return statuses;
        },
    }
})

export const { setStatuses, setStatus, removeStatu, updateStatus } = counterSlice.actions;

export const setStatusesAction = () => (dispatch: DispatchType) => {
    services.statuses.get().then(response => {
        dispatch(setStatuses(response))
    });
}

export default counterSlice.reducer
