import { TouchableOpacity } from "react-native"
import AddIcon from "../../../assets/icons/add.svg"
import { AddNewTaskButtonProps } from "./types";
import { styles } from "./styles";
import { Colors } from "../../styles/";
import { useState } from "react";

export const AddNewTaskButton = ({
    onPress,
    width = 52,
    height = 52,
    backgroundColor = Colors.colors.blueDark,
    iconSize = 16,
    style,
}: AddNewTaskButtonProps) => {
    const [buttonColor, setButtonColor] = useState<string>(backgroundColor);

    return (
        <TouchableOpacity
            style={[
                styles.button,
                {
                    width,
                    height,
                    backgroundColor: buttonColor
                },
                style,
            ]}
            onPress={onPress}
            onPressIn={() => {setButtonColor(Colors.colors.blue)}}
            onPressOut={() => {setButtonColor(Colors.colors.blueDark)}}
            activeOpacity={1}
        >
            <AddIcon height={iconSize} width={iconSize} />
        </TouchableOpacity>
    );
}
