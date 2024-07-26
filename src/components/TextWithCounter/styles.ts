import { StyleSheet } from "react-native";
import { Colors, Typography } from "../../../src/styles";

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: "center"
    },
    text: {
        fontFamily: Typography.typography.defaultFontFamily,
        fontSize: 14,
        fontWeight: Typography.typography.bold,
        color: Colors.colors.blue,
        marginRight: 8,
    },
    counterContainer: {
        backgroundColor: Colors.colors.gray400,
        borderRadius: 10,
        width: 25,
        alignItems: "center",
    },
    counterText: {
        fontFamily: Typography.typography.defaultFontFamily,
        color: Colors.colors.gray200,
        fontSize: 12,
        fontWeight: Typography.typography.bold,
    },
})
