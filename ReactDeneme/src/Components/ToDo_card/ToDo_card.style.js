/* eslint-disable prettier/prettier */
/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable */
import {StyleSheet} from "react-native";

export default StyleSheet.create({
    container:
    {
        borderRadius:5,
        backgroundColor:"darkgreen",
        padding:5,
        margin:5
    },
    container_text:
    {
        fontSize:23,
        color:"snow"
    },
    inactive_container:{
        padding:5,
        margin:5,
        borderRadius:5,
        backgroundColor:"lightslategrey",
    },
    inactive_text:{
        fontSize:20,
        color:"dimgrey",
        textDecorationLine: 'line-through', 
    },
})