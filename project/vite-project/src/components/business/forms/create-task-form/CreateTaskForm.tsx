import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"

import tasksStore from "@/store/taskStore"
import { CreateTaskUtil } from "@/utils/task"

const CreateTaskForm = () => {
    const createTask = tasksStore.addTask
    const [taskTitle, setTaskTitle] = useState<string>('')

    const handleCreateTask = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        
        setTaskTitle('')
        
        if (!taskTitle) return;

        createTask(CreateTaskUtil(taskTitle))

    }
    return (
        <form onSubmit={(e) => { handleCreateTask(e) }} className="flex flex-row items-center gap-x-5">
            <Input
                placeholder="Заголовок задачи"
                value={taskTitle}
                onChange={(e) => { setTaskTitle(e.target.value) }}
            />
            <Button disabled={!Boolean(taskTitle)}>Создать</Button>
        </form>
    )
}

export default CreateTaskForm