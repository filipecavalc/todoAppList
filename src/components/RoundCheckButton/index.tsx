import { TouchableOpacity } from "react-native";
import UnmarkedRoundButtonIcon from "../../../assets/icons/unmarkedRoundButton.svg"
import MarkedRoundButtonIcon from "../../../assets/icons/markedRoundButton.svg"
import { RoundCheckButtonProps } from "./types";

export const RoundCheckButton = ({
    onPress,
    isChecked = false,
    iconSize = 24,
}: RoundCheckButtonProps) => {
    return (
        <TouchableOpacity onPress={onPress}>
            {isChecked ? <MarkedRoundButtonIcon height={iconSize} width={iconSize} /> : <UnmarkedRoundButtonIcon height={iconSize} width={iconSize} />}
        </TouchableOpacity>
    );
}
