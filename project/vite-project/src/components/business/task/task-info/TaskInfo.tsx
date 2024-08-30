import tasksStore from "@/store/taskStore"
import { GetOpenedTaskUtil } from "@/utils/task"
import { observer } from "mobx-react-lite"

const TaskInfo = observer(() => {
    const currentTask = GetOpenedTaskUtil(tasksStore.tasks)

    return (
        <div className="h-full rounded-md border border-input bg-header">
            <div className="p-5 relative">
                {
                    currentTask
                        ?
                        <>
                            <div className="flex flex-row items-center justify-between">
                                <h2 className="break-words">Заголовок: {currentTask.title.length > 30 ? currentTask.title.slice(0, 30) + '...' : currentTask.title}</h2>
                                <p>Создана: {currentTask.time.created}</p>
                            </div>
                            <div className="py-10 max-w-[400px] max-h-[300px] overflow-y-hidden">
                                <p className="break-words">Описание: {currentTask.description}</p>
                            </div>
                        </>
                        :
                        <h2>Выберите задачу для просмотра</h2>
                }
            </div>
        </div>
    )
})

export default TaskInfo