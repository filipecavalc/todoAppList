import { useState } from "react";
import { TaskProps } from "../components/Task/types";
import { TaskListProps } from "../components/TaskList/types";

export const useTodoApp = () => {
    const [taskList, setTaskList] = useState<TaskListProps>({
        tasks: [],
        lastId: 0
    });

    const addNewTask = (text: string) => {
        const newTask: TaskProps = {
            id: taskList.lastId.toString(),
            taskText: text,
            isComplete: false,
            completeTask,
            deleteTask,
        }

        setTaskList((prevState) => ({
            tasks: [...prevState.tasks, newTask],
            lastId: prevState.lastId + 1,
        }));
        
    };

    const completeTask = (id: string) => {
        setTaskList((prevState) => ({
            ...prevState,
            tasks: prevState.tasks.map(task =>
                task.id === id ? {...task, isComplete: !task.isComplete}: task
            )
        }));
    };

    const deleteTask = (id: string) => {
        setTaskList((prevState) => ({
            ...prevState,
            tasks: prevState.tasks.filter(task => task.id !== id)
        }));
    };

    const taskCounter = taskList.tasks.length;
    const completedCounter = taskList.tasks.filter(task => task.isComplete).length;

    
    return {
        taskList,
        addNewTask,
        taskCounter,
        completedCounter,
    };
}
