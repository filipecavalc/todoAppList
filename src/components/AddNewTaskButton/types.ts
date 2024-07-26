import { ViewStyle } from "react-native";

export interface AddNewTaskButtonProps {
    onPress: () => void;
    width?: number;
    height?: number;
    backgroundColor?: string;
    iconSize?: number;
    style?: ViewStyle;
}
