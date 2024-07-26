import React from "react";
import { FlatList, View, Text } from "react-native";
import { Task } from "../Task";
import { TaskListProps } from "./types";
import ClipboardIcon from "../../../assets/icons/clipboard.svg";
import { styles } from "./styles";

export const TaskList = ({
    tasks,
    lastId,
}: TaskListProps) => {
    return (
        <>
            {tasks.length ? (
                <FlatList
                    data={tasks}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <Task
                            id={item.id}
                            isComplete={item.isComplete}
                            completeTask={() => item.completeTask(item.id)}
                            taskText={item.taskText}
                            deleteTask={() => item.deleteTask(item.id)}
                        />
                    )}
                />
            ) : (
                <View style={styles.container}>
                    <View style={styles.line}/>
                    <ClipboardIcon style={styles.clipboardIcon}/>
                    <Text style={styles.primaryText}>Você ainda não tem tarefas cadastradas</Text>
                    <Text style={styles.secondaryText}>Crie tarefas e organize seus itens a fazer</Text>
                </View>
            )}
        </>
    );
}
