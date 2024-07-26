import { Text, TouchableOpacity, View } from "react-native";
import { RoundCheckButton } from "../RoundCheckButton";
import DeleteIcon from "../../../assets/icons/delete.svg";
import { styles } from "./styles";
import { TaskProps } from "./types";

export const Task = ({
    id,
    isComplete = false,
    taskText = "Integer urna interdum massa libero auctor neque turpis turpis semper.",
    completeTask,
    deleteTask,
    style,
}: TaskProps) => {
    return (
        <View key={id} style={[style, styles.container]}>
            <RoundCheckButton onPress={() => completeTask(id)} isChecked={isComplete} />
            <Text style={[styles.text, isComplete && styles.completed]}>{taskText}</Text>
            <TouchableOpacity onPress={() => deleteTask(id)}>
                <DeleteIcon />
            </TouchableOpacity>
        </View>
    );
}
