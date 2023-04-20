import { useEffect, useState } from "react";
import ITaskBlockProps from "./ITaskBlockProps";
import { ETaskStatus } from "../../enum/ETaskStatus";


const TaskBlock: React.FunctionComponent<ITaskBlockProps> = (props): React.ReactElement => {
    
    const [color, setColor] = useState<string>('')

    const getColor = () => {
        switch (props.taskData.status){
            case ETaskStatus.NEW:
                setColor('#E02424')
            case ETaskStatus.IN_PROGRESS: 
                setColor('#FACA15')
            case ETaskStatus.FINISHED: 
                setColor('#057A55')
        }
    }

    useEffect(() => {
        getColor()
    }, [])

    return (
        <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <p className="font-normal text-gray-700 dark:text-gray-400">{props.taskData.task}</p>
            <p className="font-normal text-gray-700 dark:text-gray-400">status: 
                <span
                    className={`text-[${color}]`}
                >{props.taskData.status}</span>
            </p>
            {
                props.taskData.status !== ETaskStatus.FINISHED ? 
                <button onClick={props.changeStatus} type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
                    Next
                    <svg aria-hidden="true" className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </button> : null
            }
            <button onClick={props.finishTask} className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
                Finish
            </button>
        </div>
    )
}

export default TaskBlock