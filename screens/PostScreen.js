import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class PostScreen extends Comment{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.text}>
                    THIS IS POSTSCREEN 
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        flex : 1
    },
    text : {
        alignItems : 'center',
        fontSize : 50
    }
})