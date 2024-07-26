import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useFonts, Inter_400Regular } from '@expo-google-fonts/inter';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { NewTaskInput } from "./src/components/NewTaskInput";
import { TextWithCounter } from "./src/components/TextWithCounter";
import { TaskList } from "./src/components/TaskList";
import { useTodoApp } from "./src/hooks/useTodoApp";
import { Colors } from './src/styles/';
import LogoIcon from './assets/icons/logo.svg';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const { taskList, addNewTask, taskCounter, completedCounter } = useTodoApp();

  const [fontsLoaded] = useFonts({
    Inter_400Regular,
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container} >
      <StatusBar style='light' />
      <View style={styles.topSection}>
        <LogoIcon style={styles.todoIcon} />
        <NewTaskInput style={styles.input} onPress={addNewTask} />
      </View>
      <View style={styles.bottomSection}>
        <View style={styles.counterContainer}>
          <TextWithCounter text='Criadas' counter={taskCounter} />
          <TextWithCounter text='Concluídas' textColor={Colors.colors.purple} counter={completedCounter} />
        </View>
        <TaskList tasks={taskList.tasks} lastId={taskList.lastId} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  topSection: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: 173,
    flex: 1.4,
    backgroundColor: Colors.colors.gray700,
    paddingHorizontal: 20,
    zIndex: 2,
    alignItems: 'center',
  },
  bottomSection: {
    backgroundColor: Colors.colors.gray600,
    width: "100%",
    flex: 5.2,
    paddingHorizontal: 20,
    paddingTop: 55,
    zIndex: 1,
  },
  todoIcon: {
    position: 'absolute',
    bottom: 67,
  },
  input: {
    position: 'absolute',
    bottom: -27,
  },
  counterContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
});
