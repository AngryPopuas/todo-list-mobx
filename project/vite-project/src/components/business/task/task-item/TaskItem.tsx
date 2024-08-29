import { ITask } from "@/types"
import TaskItemBtns from "./task-item-btns/TaskItemBtns"
import { observer } from "mobx-react-lite"
import tasksStore from "@/store/taskStore"


const TaskItem = observer(({ task, isSubTask }: { task: ITask, isSubTask: boolean }) => {

    const handleSelectTask = () => tasksStore.selectTask(task.id)
    const handleOpenTask = () => tasksStore.setOpenTask(task.id)
    return (
        <div className="flex flex-col w-full items-center">
            <div
                className={`
            ${task.isDone ? 'opacity-70' : 'opacity-100'}
            ${task.isOpen && 'border border-white'}
            ${isSubTask ? 'bg-[#1d1d1d] w-[95%] ' : 'bg-[#262626] border border-[#333333]'}
            flex flex-col justify-between w-full p-5 min-h-[72px] mt-2 rounded-[8px] transition-all 
        `}
            >
                <div className="flex flex-row justify-between items-center">
                    <button onClick={handleSelectTask}><div className={`w-4 h-4 rounded-full border border-[#4EA8DE] ${task.isSelected && 'bg-[#4EA8DE]'}`}></div></button>
                    <div onClick={handleOpenTask} className="grow px-5"><h1 className={`font-light cursor-pointer ${task.isDone ? 'line-through' : ''}`}>{task.title}</h1></div>
                    <TaskItemBtns task={task} />
                </div>   
            </div>
            <div className="w-full">
                {
                    task.subtasks.length > 0 &&
                    task.subtasks.map(subtask => <TaskItem key={subtask.id} isSubTask={true} task={subtask} />)
                }
            </div>
        </div >
    )
})

export default TaskItem