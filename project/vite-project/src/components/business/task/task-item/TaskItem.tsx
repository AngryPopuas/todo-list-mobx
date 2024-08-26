import { ITask } from "@/types"
import TaskItemBtns from "./task-item-btns/TaskItemBtns"



const TaskItem = ({ task, isSubTask }: { task: ITask, isSubTask: boolean }) => {



    return (
        <div className="flex flex-col w-full items-center">
            <div
                className={`
            ${task.isDone ? 'opacity-70' : 'opacity-100'}
            ${task.isOpen && 'min-h-[160px]'}
            ${isSubTask ? 'bg-[#1d1d1d] w-[95%] ' : 'bg-[#262626] border border-[#333333]'}
            flex flex-col justify-between w-full p-5 min-h-[72px] mt-2 rounded-[8px] cursor-pointer transition-all 
        `}
            >
                <div className="flex flex-row justify-between items-center">
                    <TaskItemBtns task={task} />
                </div>
                {task.isOpen &&
                    <div className="flex flex-row justify-between items-end">
                        <h1 className={`font-light ${task.isDone ? 'line-through' : ''}`}>{task.description}</h1>
                        <div className="flex flex-row space-x-10">
                            <h1 className={`font-light text-[#000000] text-center ${task.isDone ? 'line-through' : ''}`}>Создана:{task.time.created}</h1>
                            <h1 className={`font-light text-[#000000] text-center ${task.isDone ? 'line-through' : ''}`}>Начинается:{task.time.starts?.slice(0, 10)}</h1>
                        </div>
                    </div>
                }
            </div>
            <div className="w-full">
            </div>
        </div >
    )
}

export default TaskItem