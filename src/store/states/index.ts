import { InitialStateType } from "interfaces"

const initialState: InitialStateType = {
    tasks: [],
    selectedTask: {
        status: 1
    },
    statuses: []
}

export default initialState;