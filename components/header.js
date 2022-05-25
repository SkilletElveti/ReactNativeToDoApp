import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function Header() {
    return(
        <View style ={styles.header}>
            <Text style={styles.title}> ToDo </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        height: 80,
        paddingTop: 38,
        backgroundColor: 'coral'
    },
    title: {
        marginTop:5,
        textAlign:'center',
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 20,
    }
});