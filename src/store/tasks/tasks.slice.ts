import { createSlice } from "@reduxjs/toolkit"
import ITasksState from "./ITasksState"
import ITask from "../../interfaces/ITask"
import { v4 } from "uuid"
import { ETaskStatus } from "../../enum/ETaskStatus"

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
                publishDate: new Date().toLocaleString(),
                status: action.payload.status
            }
            state.tasksList.push(newTask)
        },
        changeTaskStatus(state, action){
            const index = state.tasksList.findIndex((task: ITask) => task.id === action.payload)
            switch(state.tasksList[index].status){
                case ETaskStatus.NEW:
                    state.tasksList[index].status = ETaskStatus.IN_PROGRESS
                    break
                case ETaskStatus.IN_PROGRESS:
                    state.tasksList[index].status = ETaskStatus.FINISHED
                    break
            }
        }
    }
})

export const {addNewTask, changeTaskStatus} = tasksSlice.actions