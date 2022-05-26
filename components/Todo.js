import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'
export default function ToDo({ item, handler }) {

    return (
        <TouchableOpacity onPress={() => { handler(item.key) }} style={styles.item}>
            <Text style={styles.text}>{item.text}</Text>
            <MaterialIcons name='delete' style={styles.icon} size={18} color='#333'/>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    item: {
        padding: 16,
        flexDirection: 'row',
        alignItems:'center',
        marginTop: 16,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 10,
    },
    text:{
        flex:1,
    },
    icon: {
        alignItems:'flex-end',
        padding:5,
    }
})