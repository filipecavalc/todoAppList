import { ViewStyle } from "react-native";

export interface TaskProps {
    id: string;
    isComplete?: boolean;
    taskText?: string;
    completeTask: (id: string) => void;
    deleteTask: (id: string) => void;
    style?: ViewStyle;
}
