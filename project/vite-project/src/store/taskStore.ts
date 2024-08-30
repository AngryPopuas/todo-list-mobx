import { ITask } from "@/types";
import { AddSubTaskUtil, CreateTaskUtil, SetDoneTasksUtil, RemoveTaskUtil, SetTaskOpenUtil, SelectTaskUtil, GetOpenedTaskUtil, SetEditTaskUtil } from "@/utils/task";
import { makeAutoObservable } from "mobx";

class TaskStore {
    tasks: Array<ITask> = []
    openedTask: ITask | null = null

    constructor() {
        makeAutoObservable(this)
    }
    selectTask = (id: number) => {
        this.tasks = SelectTaskUtil(id, this.tasks)
    }
    addSubTask = (id: number) => {
        this.tasks = AddSubTaskUtil(id, this.tasks, CreateTaskUtil('Новая подзадача'))
    }
    setOpenTask = (id: number) => {
        this.tasks = SetTaskOpenUtil(id, this.tasks)
    }
    setDoneTasks = (id: number) => {
        this.tasks = SetDoneTasksUtil(id, this.tasks);
    }
    setEditTask = (task: ITask) => {
        this.tasks = SetEditTaskUtil(this.tasks, task)
    }
    addTask = (task: ITask) => {
        this.tasks.push(task)
    }
    removeTask = (id: number) => {
        this.tasks = RemoveTaskUtil(id, this.tasks);
    }
    removeAllTasks = () => {
        this.tasks = []
    }
}
const tasksStore = new TaskStore();

export default tasksStore;