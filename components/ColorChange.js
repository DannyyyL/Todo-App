import React from "react";
import { View, StyleSheet, TouchableOpacity } from 'react-native';

const ColorChange = ({ color, onPress }) => {
    return (
        <TouchableOpacity onPress={() => onPress(color)}>
            <View 
                style={[styles.colorchange, { backgroundColor: color}]} 
            />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    colorchange:{
        borderWidth: 1,
        borderColor: "black",
        borderRadius: 20,
        width:20,
        aspectRatio: 1, // Height will automatically match width
        marginRight: 5
    },
})

export default ColorChange;
