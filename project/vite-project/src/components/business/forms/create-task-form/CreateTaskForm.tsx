import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"

import tasksStore from "@/store/taskStore"

const CreateTaskForm = () => {
    const createTask = tasksStore.addTask
    const [taskTitle, setTaskTitle] = useState<string>('')

    const handleCreateTask = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        
        setTaskTitle('')
        
        if (!taskTitle) return;

        createTask({
            id: new Date().getTime(),
            title: taskTitle,
            description: '',
            time: {
                created: null,
                starts: null,
            },
            isDone: false,
            isSelected: false,
            isOpen: false,
            isEdit: false,
            subtasks: [],
        })

    }
    return (
        <form onSubmit={(e) => { handleCreateTask(e) }} className="flex flex-row items-center gap-x-5">
            <Input
                placeholder="Enter task title"
                value={taskTitle}
                onChange={(e) => { setTaskTitle(e.target.value) }}
            />
            <Button disabled={!Boolean(taskTitle)}>Create</Button>
        </form>
    )
}

export default CreateTaskForm