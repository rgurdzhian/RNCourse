import { useState } from 'react';
import { StyleSheet, View, TextInput, Button } from "react-native"

const GoalInput = ({addGoalHandler}) => {

    const [enteredGoalText, setEnteredGoalText] = useState('');

    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText);
    }

    function onAddGoal() {
        addGoalHandler(enteredGoalText);
        setEnteredGoalText('');
    }

    return (
        <View style={styles.inputContainer}>
            <TextInput style={styles.textInput} placeholder='Your Course Goal!' onChangeText={goalInputHandler} value={enteredGoalText}/>
            <Button title='Add Goal' onPress={onAddGoal} />
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 24,
        borderBottomWidth: 1,
        borderColor: '#ccc'
      },
      textInput: {
        borderWidth: 1,
        borderColor: '#ccc',
        width: '70%',
        marginRight: 8,
        padding: 8
      },
})

export default GoalInput;