import { ITask } from "@/types";
import { makeAutoObservable } from "mobx";

class TaskStore {
    tasks: Array<ITask> = []

    constructor() {
        makeAutoObservable(this)
    }

    addTask = (task: ITask) => {
        this.tasks.push(task)
    }
    removeTask = () => {

    }
    removeAllTasks = () => {
        this.tasks = []
    }
}
const tasksStore = new TaskStore();

export default tasksStore;