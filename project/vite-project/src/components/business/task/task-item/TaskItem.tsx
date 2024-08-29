import { ITask } from "@/types"
import TaskItemBtns from "./task-item-btns/TaskItemBtns"
import { observer } from "mobx-react-lite"
import { ChevronDown } from "lucide-react"
import tasksStore from "@/store/taskStore"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@radix-ui/react-accordion"


const TaskItem = observer(({ task, isSubTask }: { task: ITask, isSubTask: boolean }) => {

    const handleSelectTask = () => tasksStore.selectTask(task.id)
    const handleOpenTask = () => tasksStore.setOpenTask(task.id)

    return (
        <Accordion type="single" collapsible>
            <AccordionItem value="item-1" >
                <div className="flex flex-col w-full items-center">
                    <div
                        className={`
                            ${task.isDone ? 'opacity-70' : 'opacity-100'}
                            ${task.isOpen && 'border border-white'}
                            ${isSubTask ? 'bg-[#1d1d1d] w-[95%] ' : 'bg-[#262626] border border-[#333333]'}
                            flex flex-col justify-between w-full p-5 min-h-[72px] mt-2 rounded-[8px] transition-all gap-y-5`}>

                        <div className="flex flex-row justify-between items-center gap-x-5">
                            {task.subtasks.length > 0 ? <AccordionTrigger><ChevronDown color="#4EA8DE" /></AccordionTrigger> : <></>}
                            
                            <button onClick={handleSelectTask}><div className={`w-4 h-4 rounded-full border border-[#4EA8DE] ${task.isSelected && 'bg-[#4EA8DE]'}`}></div></button>
                            <div onClick={handleOpenTask} className="grow px-5"><h1 className={`font-light cursor-pointer ${task.isDone ? 'line-through' : ''}`}>{task.title}</h1></div>
                        </div>
                        <div className="flex flex-row">
                            <TaskItemBtns task={task} />
                        </div>
                    </div>

                    <AccordionContent className="w-[95%]">
                            {
                                task.subtasks.length > 0 &&
                                task.subtasks.map(subtask => <TaskItem key={subtask.id} isSubTask={true} task={subtask} />)
                            }
                    </AccordionContent>

                </div >
            </AccordionItem>
        </Accordion>
    )
})

export default TaskItem