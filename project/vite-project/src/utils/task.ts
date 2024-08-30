import { ITask } from "../types";





export const CreateTaskUtil = (title: string): ITask => {
    const currentDate = new Date()
    const createdAtLocal = ` ${currentDate.getDate() < 9 ? '0' + currentDate.getDate() : currentDate.getDate()}/${currentDate.getMonth() < 9 ? '0' + Number(currentDate.getMonth() + 1) : Number(currentDate.getMonth() + 1)} в ${currentDate.getHours() < 9 ? '0' + currentDate.getHours() : currentDate.getHours()}:${currentDate.getMinutes() < 9 ? '0' + currentDate.getMinutes() : currentDate.getMinutes()}`
    const createTask: ITask = {
        id: currentDate.getMilliseconds(),
        title: title,
        description: 'Нет описания',
        time: {
            created: createdAtLocal,
            starts: 'Нет',
        },
        isDone: false,
        isSelected: false,
        subtasks: [],
        isEdit: false,
        isOpen: false,
    }

    return createTask

}

export const AddSubTaskUtil = (id: number, array: Array<ITask>, task: ITask): Array<ITask> => {
    return array.reduce((arr: ITask[], item) => {
        if (item.id === id) {
            item.subtasks.push(task);
            arr.push(item);
        } else {
            arr.push({ ...item, subtasks: AddSubTaskUtil(id, item.subtasks, task) });
        }

        return arr;
    }, []);
};

export const RemoveTaskUtil = (id: number, array: Array<ITask>): Array<ITask> => {
    return array.reduce((arr: ITask[], item) => {
        if (item.id !== id) {
            arr.push({ ...item, subtasks: RemoveTaskUtil(id, item.subtasks) });
        }

        return arr;
    }, []);
};

export const SetDoneTasksUtil = (id: number, array: Array<ITask>): Array<ITask> => {
    return array.reduce((arr: ITask[], item) => {
        if (item.id !== id) {
            arr.push({ ...item, subtasks: SetDoneTasksUtil(id, item.subtasks) });
        } else {
            arr.push({
                ...item,
                isDone: !item.isDone,
                subtasks: SetDoneSubTasksUtil(item.subtasks, !item.isDone)
            });
        }

        return arr;
    }, []);
};

export const SetDoneSubTasksUtil = (array: Array<ITask>, state: boolean): Array<ITask> => {
    return array.reduce((arr: ITask[], item) => {
        arr.push({
            ...item,
            isDone: state,
            subtasks: SetDoneSubTasksUtil(item.subtasks, state)
        });

        return arr;
    }, []);
};


export const SelectTaskUtil = (id: number, array: Array<ITask>): Array<ITask> => {
    return array.reduce((arr: ITask[], item) => {
        if (item.id !== id) {
            arr.push({ ...item, subtasks: SelectTaskUtil(id, item.subtasks) });
        } else {
            arr.push({
                ...item,
                isSelected: !item.isSelected,
                subtasks: SelectSubTaskUtil(item.subtasks, !item.isDone)
            });
        }

        return arr;
    }, []);
};
export const SelectSubTaskUtil = (array: Array<ITask>, state: boolean): Array<ITask> => {
    return array.reduce((arr: ITask[], item) => {
        arr.push({
            ...item,
            isSelected: state,
            subtasks: SelectSubTaskUtil(item.subtasks, state)
        });

        return arr;
    }, []);
};

export const GetOpenedTaskUtil = (array: Array<ITask>): ITask | null => {
    for (let item of array) {
        if (item.isOpen) {
            return item;
        }

        const subItem = GetOpenedTaskUtil(item.subtasks);

        if (subItem) {
            return subItem;
        }
    }

    return null;
}
export const SetTaskOpenUtil = (id: number, array: Array<ITask>): ITask[] => {
    return array.reduce((arr: ITask[], item) => {
        if (item.id === id) {
            item.isOpen = !item.isOpen
        } else {
            item.isOpen = false
        }
        arr.push({ ...item, subtasks: SetTaskOpenUtil(id, item.subtasks) });
        return arr;
    }, [])
};

export const DeleteAllSelectedTasksUtil = (array: ITask[]): Array<ITask> => {
    return array.reduce((arr: ITask[], item) => {
        if (!item.isSelected) {
            arr.push({ ...item, subtasks: DeleteAllSelectedTasksUtil(item.subtasks) });
        }
        return arr;
    }, []);
};
export const SetEditTaskUtil = (array: ITask[], task: ITask): Array<ITask> => {
    return array.reduce((arr: ITask[], item) => {
        if (item.id === task.id) {
            const editedTask = task
            arr.push({ ...editedTask, subtasks: SetEditTaskUtil(item.subtasks, task) });
        } else {
            arr.push({ ...item, subtasks: SetEditTaskUtil(item.subtasks, task) });
        }
        return arr;
    }, []);
};

export const SetDoneAllSelectedTasksUtil = (array: ITask[]): Array<ITask> => {
    return array.reduce((arr: ITask[], item) => {
        if (item.isSelected) {
            item.isDone = !item.isDone
            arr.push({ ...item, subtasks: SetDoneSubTasksUtil(item.subtasks,item.isDone) });
        } else {
            arr.push({ ...item, subtasks: SetDoneAllSelectedTasksUtil(item.subtasks) });
        }
        return arr;
    }, []);
};

