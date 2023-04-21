import { shallowEqual, useSelector } from "react-redux"
import { AppDispatch, AppState, useAppDispatch } from "../../store/store"
import ITask from "../../interfaces/ITask"
import TaskBlock from "../../components/TaskBlock/TaskBlock"
import { changeTaskStatus, finishTask } from "../../store/tasks/tasks.slice"


const MainPage: React.FunctionComponent = (): React.ReactElement => {

    const {tasksList} = useSelector((state: AppState) => state.tasks, shallowEqual)

    const dispatch: AppDispatch = useAppDispatch()

    const changeStatusHandler = (id: string) =>{
        dispatch(changeTaskStatus(id))
    }
    
    const finishTaskHandler = (id: string) => {
        dispatch(finishTask(id))
    }

    return(
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-4 mx-auto">
            {
                tasksList.length ? tasksList.map((task: ITask) => {
                    return <TaskBlock
                                key={task.id}
                                taskData={task}
                                changeStatus={()=>changeStatusHandler(task.id)}
                                finishTask={()=>finishTaskHandler(task.id)}
                            />
                }) : <h1 className="text-slate-50 text-7xl">No tasks</h1>
            }
        </div>
    )
}

export default MainPage