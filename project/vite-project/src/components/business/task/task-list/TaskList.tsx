import { ITask } from '@/types'
import TaskItem from '../task-item/TaskItem'
import { observer } from 'mobx-react-lite'

import tasksStore from '@/store/taskStore'

const TaskList = observer(() => {
    return (
        <>
            {tasksStore.tasks.map((task) => {
                return (
                    <TaskItem
                        key={task.id}
                        task={task}
                        isSubTask={false}
                    />
                )
            })}
        </>
    )
})

export default TaskList