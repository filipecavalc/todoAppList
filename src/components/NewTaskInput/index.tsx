import React, { useState } from 'react';
import { TextInput, View } from 'react-native';
import { AddNewTaskButton } from '../AddNewTaskButton';
import { styles } from "./styles";
import { Colors } from '../../../src/styles';
import { NewTaskInputProps } from './types';

export const NewTaskInput = ({
    onPress,
    placeHolder = "Adicione uma nova tarefa",
    style,
}: NewTaskInputProps) => {
    const [isFocused, setIsFocused] = useState(false);
    const [text, setText] = useState<string>('');

    const handleAddNewTask = () => {
        if (text.trim()) {
            onPress(text);
            setText('');
        }
    };
    
    return (
        <View style={[style, styles.container]}>
            <TextInput
                placeholder={placeHolder}
                value={text}
                onChangeText={setText}
                style={[styles.input, isFocused && styles.inputFocused]}
                placeholderTextColor={Colors.colors.gray300}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
            />
            <AddNewTaskButton onPress={handleAddNewTask} />
        </View>
    );
}
