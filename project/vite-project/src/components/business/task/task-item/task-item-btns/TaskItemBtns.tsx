import { Button } from '@/components/ui/button'
import { ITask } from '@/types'

import tasksStore from '@/store/taskStore'
import ModalsOverlay from '@/components/business/modals/ModalsOverlay'
import EditTaskModal from '@/components/business/modals/edit-task-modal/EditTaskModal'
import { useState } from 'react'

const TaskItemBtns = ({ task }: { task: ITask }) => {
    const [isOpenEdit, setIsOpenEdit] = useState<boolean>(false)

    const handleDeleteTask = () => tasksStore.removeTask(task.id)
    const handleAddSubTask = () => tasksStore.addSubTask(task.id)
    const handleSetDoneTask = () => tasksStore.setDoneTasks(task.id)
    const handleEditTask = () => setIsOpenEdit(true)

    return (
        <>
            <ModalsOverlay handleClose={() => setIsOpenEdit(false)} isOpen={isOpenEdit}>
                <EditTaskModal handleClose={() => setIsOpenEdit(false)} initialValues={task} />
            </ModalsOverlay>
            
            <div className="flex flex-row justify-between items-center space-x-2 z-10">
                <Button size={'sm'} variant={'secondary'} onClick={handleSetDoneTask}>Готово</Button>
                <Button disabled={task.isDone} size={'sm'} variant={'secondary'} onClick={handleAddSubTask}>Добавить подзадачу</Button>
                <Button disabled={task.isDone} size={'sm'} variant={'secondary'} onClick={handleEditTask}>Редактировать</Button>
                <Button size={'sm'} variant={'destructive'} onClick={handleDeleteTask} >Удалить</Button>
            </div>
        </>
    )
}

export default TaskItemBtns