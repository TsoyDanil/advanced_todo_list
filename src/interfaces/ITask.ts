import { ETaskStatus } from "../enum/ETaskStatus";

export default interface ITask {
    id: string,
    task: string,
    status: ETaskStatus,
    publishDate: Date
}