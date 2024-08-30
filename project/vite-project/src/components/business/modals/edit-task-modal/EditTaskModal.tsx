import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ITask } from "@/types"
import { useState } from "react"
import tasksStore from "@/store/taskStore"

const EditTaskModal = ({ initialValues, handleClose }: { initialValues: ITask, handleClose: () => void }) => {
    const editTask = tasksStore.setEditTask
    const [formValues, setFormValues] = useState<{ title: string, description: string }>({
        title: initialValues.title,
        description: initialValues.description
    })


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const editedTask: ITask = {
            id: initialValues.id,
            title: formValues.title,
            description: formValues.description,
            time: {
                created: initialValues.time.created,
                starts: initialValues.time.starts,
            },
            isDone: initialValues.isDone,
            isSelected: initialValues.isSelected,
            isOpen: initialValues.isOpen,
            isEdit: initialValues.isEdit,
            subtasks: initialValues.subtasks,
        }
        editTask(editedTask)
        handleClose()
    }

    return (
        <div>
            <form onSubmit={(e) => handleSubmit(e)} className='flex flex-col gap-y-5'>
                <h1>Редактируйте задачу</h1>
                <Input
                    value={formValues.title}
                    onChange={(e) => setFormValues((formValues) => { return { ...formValues, title: e.target.value } })}
                    placeholder='Название задачи'
                />
                <Input
                    value={formValues.description}
                    onChange={(e) => setFormValues((formValues) => { return { ...formValues, description: e.target.value } })}
                    placeholder='Описание задачи'
                />
                <Button>Сохранить</Button>
            </form>
        </div>
    )
}

export default EditTaskModal