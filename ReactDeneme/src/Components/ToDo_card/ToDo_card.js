/* eslint-disable prettier/prettier */
/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable */
import {React, useState} from 'react';
import {View, Text,Button, Image,TextInput } from 'react-native';
import styles from './ToDo_card.style';


const ToDoCard = (props) => {
    return (
    <View style={props.text.isDeleted ? styles.inactive_container : styles.container}>
       <Text style={props.text.isDeleted ? styles.inactive_text: styles.container_text}>{props.text.title}</Text>
    </View>
    );
};

export default ToDoCard;