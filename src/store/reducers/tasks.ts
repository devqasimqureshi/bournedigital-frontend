import { createSlice } from '@reduxjs/toolkit'
import { StatusEnum, TaskType } from 'interfaces/index';
import initialState from 'store/states';
import { DispatchType } from '..';

export const counterSlice = createSlice({
    name: 'tasks',
    initialState: initialState.tasks,
    reducers: {
        setTasks: (state, { payload }) => {
            return payload
        },
        setTask: (state, { payload }) => {
            let tasks = [...state];
            if (tasks.length) {
                payload['id'] = tasks[tasks.length - 1].id;
                payload['id'] =  payload['id'] ?  payload['id'] + 1 : 1;
            }
            else {
                payload['id'] = 1;
            }
            tasks.push(payload);
            return tasks
        },
        removeTask: (state, { payload }) => {
            let tasks: TaskType[] = state.filter(task => !payload.ids.includes(task.id));
            return tasks
        },
        updateTask: (state, { payload }) => {
            console.log(payload);
            let tasks = [...state];
            var taskIndex: number = state.findIndex(task => task.id === payload.id);
            tasks[taskIndex] = {
                ...tasks[taskIndex],
                ...payload
            };
            return tasks;
        },
    }
})

export const { setTasks, setTask, removeTask, updateTask } = counterSlice.actions;

export const getNestedChildIds = (data: TaskType): number[] => {
    let ids: any = {};
    const nestedChildTasks = (tasks: TaskType[]) => {
        for (var i = 0; i < tasks.length; i++) {
            let task = tasks[i];
            ids[String(task.id)] = task.id;
            if (task.childrens?.length) {
                nestedChildTasks(task.childrens)
            }
        }
    }
    nestedChildTasks([data]);
    return Object.values(ids);
}

export const updateTaskAction = (id: number, data: TaskType) => (dispatch: DispatchType) => {
    dispatch(updateTask({ id, ...data }));
    if(data.status === StatusEnum.COMPLETED) {
        let ids = getNestedChildIds(data);
        dispatch(removeTask({ ids }));
    }
}

export default counterSlice.reducer
