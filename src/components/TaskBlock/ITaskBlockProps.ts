import { MouseEventHandler } from "react";
import ITask from "../../interfaces/ITask";

export default interface ITaskBlockProps{
    taskData: ITask,
    changeStatus: MouseEventHandler<HTMLButtonElement>
    finishTask: MouseEventHandler<HTMLButtonElement>
}