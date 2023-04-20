import { ChangeEvent, FormEvent, useEffect, useState } from "react"
import { ETaskStatus } from "../../enum/ETaskStatus"
import ITaskDto from "../../interfaces/ITaskDto"
import { AppDispatch, useAppDispatch } from "../../store/store"
import { addNewTask } from "../../store/tasks/tasks.slice"


const AddTaskForm: React.FunctionComponent = (): React.ReactElement => {

    const [taskStatus, setTaskStatus] = useState<ETaskStatus>(ETaskStatus.NEW)

    const [showAlert, setShowAlert] = useState<boolean>(false)

    const dispatch: AppDispatch = useAppDispatch()

    const [task, setTask] = useState<ITaskDto>({
        task: '',
        status: taskStatus
    })

    const hideAlert = () => setShowAlert(false)

    const inputHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setTask(prevState => {
            return {...prevState, [e.target.name]: e.target.value}
        })
    }

    const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
        switch (e.target.value){
            case ETaskStatus.NEW: 
                setTaskStatus(ETaskStatus.NEW)
                break
            case (ETaskStatus.IN_PROGRESS): 
                setTaskStatus(ETaskStatus.IN_PROGRESS)
                break
            case (ETaskStatus.FINISHED): 
                setTaskStatus(ETaskStatus.FINISHED)
                break
        }
    }

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        if (task.task.trim() === ''){
            setShowAlert(true)
            return
        }
        dispatch(addNewTask(task))
        setTask({
            task: '',
            status: taskStatus
        })
    }

    return(
        <div className="flex justify-center items-center min-h-screen">
            <form onSubmit={handleSubmit} className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                <h5 className="text-xl font-medium text-gray-900 dark:text-white">Add new task</h5>
                <select defaultValue={taskStatus} onChange={handleSelectChange} className="mb-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option value={ETaskStatus.NEW}>New Task</option>
                    <option value={ETaskStatus.IN_PROGRESS}>Task In Progress</option>
                    <option value={ETaskStatus.FINISHED}>Task Finished</option>
                </select>
                <div className="mb-6">
                    {
                        showAlert ?
                        <div id="alert-2" className="flex p-4 mb-4 text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                            <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path></svg>
                            <span className="sr-only">Info</span>
                            <div className="ml-3 text-sm font-medium">
                                Task text should exists!
                            </div>
                            <button onClick={hideAlert} type="button" className="ml-auto -mx-1.5 -my-1.5 bg-red-50 text-red-500 rounded-lg focus:ring-2 focus:ring-red-400 p-1.5 hover:bg-red-200 inline-flex h-8 w-8 dark:bg-gray-800 dark:text-red-400 dark:hover:bg-gray-700" data-dismiss-target="#alert-2" aria-label="Close">
                                <span className="sr-only">Close</span>
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                            </button>
                        </div> : null
                    }
                <textarea 
                    value={task.task}
                    name="task"
                    onChange={inputHandler}
                    className="resize-none block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Write your new task..."></textarea>
                </div>
                <button 
                    type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >Add new task</button>
            </form>
        </div>
    )
}

export default AddTaskForm