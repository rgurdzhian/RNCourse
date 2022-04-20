import { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Modal } from "react-native"

const GoalInput = ({addGoalHandler, cancelGoalHandler, visible}) => {

    const [enteredGoalText, setEnteredGoalText] = useState('');

    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText);
    }

    function onAddGoal() {
        addGoalHandler(enteredGoalText);
        setEnteredGoalText('');
    }

    return (
        <Modal visible={visible} animationType="slide">
            <View style={styles.inputContainer}>
                <TextInput style={styles.textInput} placeholder='Your Course Goal!' onChangeText={goalInputHandler} value={enteredGoalText}/>
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title='Add Goal' onPress={onAddGoal} />
                    </View>
                    <View style={styles.button}>
                        <Button title='Cancel' onPress={cancelGoalHandler}/>
                    </View>
                </View>
            </View> 
        </Modal>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 24,
        borderBottomWidth: 1,
        borderColor: '#ccc',
        padding: 16
      },
      textInput: {
        borderWidth: 1,
        borderColor: '#ccc',
        width: '100%',
        padding: 8
      },
      buttonContainer: {
          flexDirection: 'row',
          marginTop: 16
      },
      button: {
          width: 100,
          marginHorizontal: 8
      }
})

export default GoalInput;