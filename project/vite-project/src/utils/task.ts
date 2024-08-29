import { ITask } from "../types";


type AddSubTaskUtil = (
    id: number,
    array: ITask[],
    task: ITask,
) => ITask[];

type RecursionProps = (
    id: number,
    array: ITask[],
) => ITask[];



type CompleteTogglerProps = (
    array: ITask[],
    state: boolean,
) => ITask[];




export const CreateTaskUtil = (title: string) => {
    const currentDate = new Date()
    const createdAtLocal = ` ${currentDate.getDate() < 9 ? '0' + currentDate.getDate() : currentDate.getDate()}/${currentDate.getMonth() < 9 ? '0' + currentDate.getMonth() : currentDate.getMonth()} в ${currentDate.getHours() < 9 ? '0' + currentDate.getHours() : currentDate.getHours()}:${currentDate.getMinutes() < 9 ? '0' + currentDate.getMinutes() : currentDate.getMinutes()}`
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

export const AddSubTaskUtil: AddSubTaskUtil = (id, array, task) => {
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

export const RemoveTaskUtil: RecursionProps = (id, array) => {
    return array.reduce((arr: ITask[], item) => {
        if (item.id !== id) {
            arr.push({ ...item, subtasks: RemoveTaskUtil(id, item.subtasks) });
        }

        return arr;
    }, []);
};

export const SetDoneTasksUtil: RecursionProps = (id, array) => {
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

export const SetDoneSubTasksUtil: CompleteTogglerProps = (array, state) => {
    return array.reduce((arr: ITask[], item) => {
        arr.push({
            ...item,
            isDone: state,
            subtasks: SetDoneSubTasksUtil(item.subtasks, state)
        });

        return arr;
    }, []);
};


export const SelectTaskUtil: RecursionProps = (id, array) => {
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
export const SelectSubTaskUtil: CompleteTogglerProps = (array, state) => {
    return array.reduce((arr: ITask[], item) => {
        arr.push({
            ...item,
            isSelected: state,
            subtasks: SelectSubTaskUtil(item.subtasks, state)
        });

        return arr;
    }, []);
};

// Delete selected or set done

export const SetTaskOpenUtil = (id: number, array: Array<ITask>): ITask[]=> {
    return array.reduce((arr: ITask[], item) => {
            if (item.id === id) {
                item.isOpen = !item.isOpen
            } else {
                item.isOpen = false
            }
            arr.push({ ...item, subtasks: SetTaskOpenUtil(id, item.subtasks)});
            return arr;
        }, [])    
};

export const DeleteAllSelectedTasksUtil = (array: ITask[]) => {
    return array.reduce((arr: ITask[], item) => {
        if (!item.isSelected) {
            arr.push({ ...item, subtasks: DeleteAllSelectedTasksUtil(item.subtasks) });
        }
        return arr;
    }, []);
};
// export const setEditTask = (array: ITask[], task: ITask) => {
//     return array.reduce((arr: ITask[], item) => {
//         if (item.id === task.id) {
//             const editedTask = task
//             arr.push({ ...editedTask, subtasks: setEditTask(item.subtasks, task) });
//         } else {
//             arr.push({ ...item, subtasks: setEditTask(item.subtasks, task) });
//         }
//         return arr;
//     }, []);
// };
// export const setOpenTaskForEdit = (array: ITask[]) => {
//     return array.reduce((arr: ITask[], item) => {
//         if (item.isSelected) {
//             item.isDone = !item.isDone
//         }
//         arr.push({ ...item, subtasks: setDoneAllSelectedTasks(item.subtasks) });
//         return arr;
//     }, []);
// };
export const SetDoneAllSelectedTasksUtil = (array: ITask[]) => {
    return array.reduce((arr: ITask[], item) => {
        if (item.isSelected) {
            item.isDone = !item.isDone
        }
        arr.push({ ...item, subtasks: SetDoneAllSelectedTasksUtil(item.subtasks) });
        return arr;
    }, []);
};
// export const findSubTask: SearchProps = (id, array) => {
//     for (let item of array) {
//         if (item.id === id) {
//             item.isDone = true
//             return [item,];
//         }

//         const subItem = findSubTask(id, item.subtasks);

//         if (subItem) {
//             return [subItem];
//         }
//     }

//     return null;
// };