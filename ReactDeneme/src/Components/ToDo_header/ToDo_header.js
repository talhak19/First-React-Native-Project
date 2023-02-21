/* eslint-disable prettier/prettier */
/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable */
import {React, useState} from 'react';
import {View, Text, Image} from 'react-native';
import styles from './ToDo_header.styles';


const ToDoHeader = (props) => {


    return (
    <View style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.title}>
                Yapılacaklar
            </Text>
            <Text style={styles.counter}>
                {props.counter}
            </Text>
        </View>
    </View>
    );
};

export default ToDoHeader;