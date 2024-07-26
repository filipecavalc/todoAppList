import { ViewStyle } from "react-native";

export interface NewTaskInputProps {
    onPress: (text: string) => void;
    placeHolder?: string;
    style?: ViewStyle;
}
