import { ActionConstent } from "../constants/store"

export enum StatusEnum {
    TODO = 1,
    IN_PROGRESS = 2,
    COMPLETED = 3
}

export interface ActionType {
    type: ActionConstent
    payload?: any
}

export interface StatusType {
    id?: number
    value?: number
    label?: string
}

export interface TaskType {
    id?: number
    name?: string
    description?: string
    status?: number
    childrens?: TaskType[]
}

export interface InitialStateType {
    tasks: TaskType[]
    selectedTask: TaskType
    statuses: StatusType[]
}
