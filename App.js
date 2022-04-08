import { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

const App = () => {

  const [courseGoals, setCourseGoals] = useState([]);

  function addGoalHandler(enteredGoalText) {
    setCourseGoals((currentCourseGoals) => [...currentCourseGoals, {text: enteredGoalText, key: Math.random().toString()}]);
  }

  function removeGoalHandler(id) {
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.key !== id)
    })
  }

  return (
    <View style={styles.appContainer}>
      <GoalInput addGoalHandler={addGoalHandler}/>
      <View style={styles.goalsContainer}>
        <FlatList data={courseGoals} renderItem={(itemData) => {
          return <GoalItem itemText={itemData.item.text} removeGoalHandler={removeGoalHandler} id={itemData.item.key}/>
        }}>
        </FlatList>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16
  },
  goalsContainer: {
    flex: 5
  }
});

export default App;
