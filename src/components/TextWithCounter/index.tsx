import { TextWithCounterProps } from "./types";
import { Text, View } from 'react-native';
import { styles } from "./styles";
import { Colors } from "../../../src/styles";

export const TextWithCounter = ({
    text = 'Counter',
    textColor = Colors.colors.blue,
    counter = 0,
    style,
}: TextWithCounterProps) => {
    return (
        <View style={[styles.container, style]}>
            <Text style={[styles.text, {color: textColor}]}>{text}</Text>
            <View style={styles.counterContainer}>
                <Text style={styles.counterText}>{counter}</Text>
            </View>
        </View>
    );
}
