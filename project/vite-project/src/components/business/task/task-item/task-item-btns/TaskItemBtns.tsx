import { Button } from '@/components/ui/button'
import { ITask } from '@/types'

const TaskItemBtns = ({ task }: { task: ITask }) => {

    return (
        <div className="flex flex-row justify-between space-x-2 z-10">
            <Button>Готово</Button>
            <Button>Добавить подзадачу</Button>
            <Button>Редактировать</Button>
            <Button className="flex flex-row items-center">Удалить</Button>
        </div>
    )
}

export default TaskItemBtns