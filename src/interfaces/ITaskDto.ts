import ITask from "./ITask";

export default interface ITaskDto {
    task: ITask['task']
    status: ITask['status']
}