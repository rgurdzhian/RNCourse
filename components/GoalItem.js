import { StyleSheet, View, Text, Pressable } from 'react-native'

const GoalItem = ({itemText, id, removeGoalHandler}) => {

    function onPressHandler() {
        removeGoalHandler(id);
    }

    return (
        <View style={styles.goalItem}>
            <Pressable onPress={onPressHandler} android_ripple={{color: '#210644'}}>
                <Text style={styles.goalText}>{itemText}</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        borderRadius: 6,
        backgroundColor: '#5e0acc',
    
      },
      goalText: {
        padding: 8,
        color: 'white'
      }
})

export default GoalItem;