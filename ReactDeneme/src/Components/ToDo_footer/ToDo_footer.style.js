/* eslint-disable prettier/prettier */
/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable */
import {StyleSheet} from "react-native";

export default StyleSheet.create({
    container:{
        padding:1,
        justifyContent:"flex-end",
        margin:13,
        padding:2,
        borderRadius:7,
        backgroundColor:"darkslateblue"
    },
    textInput:{
        fontSize:15,
        color: 'khaki',
    },
    line:{        
        borderBottomColor:'white',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    buttonContainer:{
        padding:15,
    },
    button:{
        borderBottomLeftRadius:25,
        borderBottomRightRadius:20,
    }
})