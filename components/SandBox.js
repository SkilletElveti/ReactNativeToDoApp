import { StyleSheet, Text, TextInput, Button, View } from 'react-native';
import React, { useState } from 'react';

export default function SandBox() {
    return(
        <View style={styles.container}>
            <Text style={styles.box1}>One</Text>
            <Text style={styles.box2}>Two</Text>
            <Text style={styles.box3}>Three</Text>
            <Text style={styles.box4}>Four</Text>
        </View>
    )
} 

const styles = StyleSheet.create({
    container: {
        //flex: 1,
        flexDirection:'column',
        //justifyContent:'space-evenly',
        alignItems:'flex-end',
        paddingTop: 40,
        backgroundColor: '#333',
    },
    box1: {
       
        backgroundColor:'violet',
        padding:10,
    },
    box2: {
        
        backgroundColor:'gold',
        padding:10,
    },
    box3: {
        backgroundColor:'coral',
        padding:10,
    },
    box4: {
        backgroundColor:'skyblue',
        padding:10,
    }
});