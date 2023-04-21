import { useEffect, useState } from "react";
import ITaskBlockProps from "./ITaskBlockProps";
import { ETaskStatus } from "../../enum/ETaskStatus";


const TaskBlock: React.FunctionComponent<ITaskBlockProps> = (props): React.ReactElement => {
    
    const [color, setColor] = useState<string>('')

    const getColor = () => {
        switch (props.taskData.status){
            case ETaskStatus.NEW:
                setColor('text-red-500')
                break
            case ETaskStatus.IN_PROGRESS: 
                setColor('text-amber-400')
                break
            case ETaskStatus.FINISHED: 
                setColor('text-lime-600')
                break
        }
    }

    useEffect(() => {
        getColor()
    }, [props])

    return (
        <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <p className="font-normal text-gray-700 dark:text-gray-400">{props.taskData.task}</p>
            <p className="font-normal text-gray-700 dark:text-gray-400">{props.taskData.publishDate}</p>
            <p className="font-normal text-gray-700 dark:text-gray-400">status: 
                <span
                    className={`${color} ml-1`}
                >{props.taskData.status}</span>
            </p>
            {
                props.taskData.status !== ETaskStatus.FINISHED ? 
                <button onClick={props.changeStatus} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                    Next
                </button> : null
            }
            <button onClick={props.finishTask} className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
                Finish
            </button>
        </div>
    )
}

export default TaskBlock