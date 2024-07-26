import { StyleSheet } from "react-native";
import { Colors, Typography } from "../../../src/styles";

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: "center",
        backgroundColor: Colors.colors.gray500,
        borderWidth: 2,
        borderRadius: 8,
        borderColor: Colors.colors.gray400,
        height: 64,
        width: '100%',
        justifyContent: 'space-between',
        paddingLeft: 12,
        paddingRight: 8,
        marginBottom: 8,
    },
    text: {
        fontFamily: Typography.typography.defaultFontFamily,
        fontSize: 14,
        color: Colors.colors.gray100,
        maxWidth: '85%',
    },
    completed: {
        color: Colors.colors.gray300,
        textDecorationLine: 'line-through',
    }
})