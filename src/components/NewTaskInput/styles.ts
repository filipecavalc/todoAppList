import { StyleSheet } from "react-native";
import { Colors } from "../../../src/styles";

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: "center",
    },
    input: {
        display: "flex",
        flexGrow: 1,
        backgroundColor: Colors.colors.gray500,
        color: Colors.colors.gray100,
        borderRadius: 6,
        height: 54,
        paddingLeft: 16,
        marginRight: 4,
        borderColor: Colors.colors.gray700,
        borderWidth: 2,
    },
    inputFocused: {
        borderColor: Colors.colors.purpleDark,
    },
});