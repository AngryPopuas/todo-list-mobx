import { Button } from '@/components/ui/button'
import { ITask } from '@/types'

import tasksStore from '@/store/taskStore'

const TaskItemBtns = ({ task }: { task: ITask }) => {
    const handleDeleteTask = () => tasksStore.removeTask(task.id)
    const handleAddSubTask = () => tasksStore.addSubTask(task.id)
    const handleSetDoneTask = () => tasksStore.setDoneTasks(task.id)
    return (
        <div className="flex flex-row justify-between items-center space-x-2 z-10">
            <Button size={'sm'} variant={'secondary'} onClick={handleSetDoneTask}>Готово</Button>
            <Button size={'sm'} variant={'secondary'} onClick={handleAddSubTask}>Добавить подзадачу</Button>
            <Button size={'sm'} variant={'secondary'}>Редактировать</Button>
            <Button size={'sm'} variant={'destructive'} onClick={handleDeleteTask} >Удалить</Button>
        </div>
    )
}

export default TaskItemBtns