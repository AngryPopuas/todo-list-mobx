import { Button } from '@/components/ui/button'
import tasksStore from '@/store/taskStore'
import { observer } from 'mobx-react-lite'

const TasksActions = observer(() => {

    const handleDeleteTasks = () => tasksStore.removeAllSelectedTasks()
    const handleSetDoneTasks = () => tasksStore.setDoneAllSelectedTasks()
    const handleRemoveAllTasks = () => tasksStore.removeAllTasks()
    return (
        <div className={`w-full flex flex-row justify-between items-center transition-all ${tasksStore.tasks.length === 0 && 'opacity-20'}`}>
            <Button onClick={handleDeleteTasks} variant={'destructive'}>Удалить выбранные</Button>
            <Button onClick={handleRemoveAllTasks} variant={'destructive'}>Удалить все</Button>
            <Button onClick={handleSetDoneTasks}>Отметить выбранные</Button>
        </div>
    )
})

export default TasksActions