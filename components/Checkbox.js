import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity } from 'react-native';

const Checkbox = () => {
    const [isChecked, setIsChecked] = useState(false);

    const toggleCheckbox = () => {
        setIsChecked(!isChecked);
    };

    return (
        <TouchableOpacity onPress={toggleCheckbox}>
            <View style={[styles.checkbox, { backgroundColor: isChecked ? 'green' : 'transparent' }]} />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    checkbox:{
        borderWidth: 2,
        borderColor: "black",
        borderRadius: 10,
        width:29,
        height:29,
    },
})

export default Checkbox;