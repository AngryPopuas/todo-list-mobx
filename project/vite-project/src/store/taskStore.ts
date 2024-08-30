import { ITask } from "@/types";
import { AddSubTaskUtil, CreateTaskUtil, SetDoneTasksUtil, RemoveTaskUtil, SetTaskOpenUtil, SelectTaskUtil, SetEditTaskUtil, DeleteAllSelectedTasksUtil, SetDoneAllSelectedTasksUtil } from "@/utils/task";
import { makeAutoObservable } from "mobx";

class TaskStore {
    tasks: Array<ITask> = localStorage.getItem('tasks-storage') ? JSON.parse(localStorage.getItem('tasks-storage')!) : []
    openedTask: ITask | null = null

    constructor() {
        makeAutoObservable(this)
    }
    selectTask = (id: number) => {
        this.tasks = SelectTaskUtil(id, this.tasks)
        localStorage.setItem('tasks-storage', JSON.stringify(this.tasks));
    }
    addSubTask = (id: number) => {
        this.tasks = AddSubTaskUtil(id, this.tasks, CreateTaskUtil('Новая подзадача'))
        localStorage.setItem('tasks-storage', JSON.stringify(this.tasks));
    }
    setOpenTask = (id: number) => {
        this.tasks = SetTaskOpenUtil(id, this.tasks)
        localStorage.setItem('tasks-storage', JSON.stringify(this.tasks));
    }
    setDoneTasks = (id: number) => {
        this.tasks = SetDoneTasksUtil(id, this.tasks);
        localStorage.setItem('tasks-storage', JSON.stringify(this.tasks));
    }
    setEditTask = (task: ITask) => {
        this.tasks = SetEditTaskUtil(this.tasks, task)
        localStorage.setItem('tasks-storage', JSON.stringify(this.tasks));
    }
    addTask = (task: ITask) => {
        this.tasks.push(task)
        localStorage.setItem('tasks-storage', JSON.stringify(this.tasks));
    }
    removeTask = (id: number) => {
        this.tasks = RemoveTaskUtil(id, this.tasks);
        localStorage.setItem('tasks-storage', JSON.stringify(this.tasks));
    }
    removeAllSelectedTasks = () => {
        this.tasks = DeleteAllSelectedTasksUtil(this.tasks)
        localStorage.setItem('tasks-storage', JSON.stringify(this.tasks));
    }
    setDoneAllSelectedTasks = () => {
        this.tasks =  SetDoneAllSelectedTasksUtil(this.tasks)
        localStorage.setItem('tasks-storage', JSON.stringify(this.tasks));
    }
    removeAllTasks = () => {
        this.tasks = []
        localStorage.setItem('tasks-storage', JSON.stringify(this.tasks));
    }
}
const tasksStore = new TaskStore();

export default tasksStore;