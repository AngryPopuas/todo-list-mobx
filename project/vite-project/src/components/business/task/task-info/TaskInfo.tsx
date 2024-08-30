import tasksStore from "@/store/taskStore"
import { GetOpenedTaskUtil } from "@/utils/task"
import { observer } from "mobx-react-lite"

const TaskInfo = observer(() => {
    const currentTask = GetOpenedTaskUtil(tasksStore.tasks)

    return (
        <div className="flex-1 rounded-md border border-input bg-header">
            <div className="flex flex-col p-5">
                {
                    currentTask
                        ?
                        <>
                            <h2>{currentTask.title}</h2>
                            <p>{currentTask.description}</p>
                        </>
                        :
                        <h2>Выберите задачу для просмотра</h2>
                }
            </div>
        </div>
    )
})

export default TaskInfo