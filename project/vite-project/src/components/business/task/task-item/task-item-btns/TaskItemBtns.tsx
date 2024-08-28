import { Button } from '@/components/ui/button'
import { ITask } from '@/types'

const TaskItemBtns = ({ task }: { task: ITask }) => {

    return (
        <div className="flex flex-row justify-between items-center space-x-2 z-10">
            <Button size={'sm'} variant={'secondary'}>Готово</Button>
            <Button size={'sm'} variant={'secondary'}>Добавить подзадачу</Button>
            <Button size={'sm'} variant={'secondary'}>Редактировать</Button>
            <Button size={'sm'} variant={'destructive'} >Удалить</Button>
        </div>
    )
}

export default TaskItemBtns