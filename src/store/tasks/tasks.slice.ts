import { createSlice } from "@reduxjs/toolkit"
import ITasksState from "./ITasksState"
import ITask from "../../interfaces/ITask"
import { v4 } from "uuid"

const namespace: string = 'tasks'

const initialState: ITasksState = {
    tasksList: []
}

export const tasksSlice = createSlice({
    name: namespace,
    initialState: initialState,
    reducers: {
        addNewTask(state, action){
            const newTask: ITask = {
                id: v4(),
                task: action.payload.task,
                publishDate: new Date(),
                status: action.payload.status
            }
            state.tasksList.push(newTask)
        }
    }
})

export const {addNewTask} = tasksSlice.actions