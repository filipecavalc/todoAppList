import { StyleSheet } from "react-native";
import { Colors, Typography } from "../../../src/styles";

export const styles = StyleSheet.create({
    container: {
        display: "flex",
        alignItems: "center",
    },
    line: {
        width: '100%',
        height: 1,
        backgroundColor: Colors.colors.gray400,
        marginBottom: 48,
    },
    clipboardIcon: {
        marginBottom: 16,
    },
    primaryText: {
        fontFamily: Typography.typography.defaultFontFamily,
        fontSize: 14,
        fontWeight: Typography.typography.bold,
        color: Colors.colors.gray300,
    },
    secondaryText: {
        fontFamily: Typography.typography.defaultFontFamily,
        fontSize: 14,
        fontWeight: Typography.typography.normal,
        color: Colors.colors.gray300,
    },
})