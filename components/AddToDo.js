import { StyleSheet, Text, TextInput, Button, View } from 'react-native';
import React, { useState } from 'react';

export default function AddToDoForm() {
    const [text, setText] = useState(' ')
    const changeHandler = (val) => {
        setText(val);
    }
    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder='New ToDo.....'
                onChangeText={changeHandler}
            />
            <Button onPress={() => console.log(text)} title='Add' color='coral'/>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd'
    },
})