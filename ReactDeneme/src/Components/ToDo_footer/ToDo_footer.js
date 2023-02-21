/* eslint-disable prettier/prettier */
/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable */
import {React, useState} from 'react';
import {View, Text,Button, Image,TextInput } from 'react-native';
import styles from './ToDo_footer.style';


const ToDoFooter = (props) => {


    return (
    <View style={styles.container}>
        <View style={styles.textInputContainer}>
            <TextInput
                label="ToDo"
                style={styles.textInput}
                value={props.text}
                placeholder="Yapılacaklar..."
                placeholderTextColor='lightgrey'
                onChangeText={props.setText}
            />
        </View>
        <View style={styles.line}></View>
        <View style={styles.buttonContainer}>
            <Button style={styles.button} color={"mediumpurple"} title="kaydet" onPress={props.press}></Button>
        </View>
    </View>
    );
};

export default ToDoFooter;