import { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Modal, Image } from "react-native"

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
                <Image source={require('../assets/images/goal.png')} style={styles.image}/>
                <TextInput style={styles.textInput} placeholder='Your Course Goal!' onChangeText={goalInputHandler} value={enteredGoalText}/>
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title='Cancel' onPress={cancelGoalHandler} color="#f31282"/>
                    </View>
                    <View style={styles.button}>
                        <Button title='Add Goal' onPress={onAddGoal} color="#b180f0"/>
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
        padding: 16,
        backgroundColor: '#311b6b'
      },
      image: {
          width: 100,
          height: 100,
          margin: 20
      },
      textInput: {
        borderWidth: 1,
        borderColor: '#e4d0ff',
        backgroundColor: '#e4d0ff',
        borderRadius: 6,
        width: '100%',
        padding: 16,
        color: '#120438'
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