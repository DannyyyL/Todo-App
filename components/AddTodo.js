import React, { useState } from "react";
import { View, TextInput, StyleSheet } from 'react-native';

const AddTodo = () => {
    const [text, setText] = useState(text); // Initialize state for input text

    return (
        <View style={styles.container}>
            <TextInput 
                value={text}
                placeholder="Add something you need done"
                onChangeText={setText} // Update state when input changes
                style={styles.input}
                maxLength={50}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 10, // Add bottom margin to separate each AddTodo component
    },
    input: {
        borderWidth: 2, // Border width
        borderColor: 'black', // Border color
        borderRadius: 10, // Border radius
        padding: 5, // Padding
    },
});

export default AddTodo;
