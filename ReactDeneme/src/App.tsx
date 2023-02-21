/* eslint-disable prettier/prettier */
/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable */
import { React ,useState, useEffect} from "react";
import {TouchableHighlight,Alert, StyleSheet,SafeAreaView,Text,View,FlatList } from "react-native";




import ToDoHeader from "./Components/ToDo_header"
import ToDoFooter from "./Components/ToDo_footer"
import ToDoCard from "./Components/ToDo_card"





function App() {

    const [yapilacaklar, setYapilacaklar] = useState([]);
    const [counter,setCounter] = useState(0)
    const [text, setText] = useState("Yapılacak..");
    
    const onPressButton = () => {
      if (text === "")
        return Alert.alert("Boş geçemezsiniz")
      setCounter(counter+1)
      const deger = 
      {
        id:counter,
        title:text,
        isDeleted:false
      }
      setYapilacaklar([...yapilacaklar,deger])
      console.log(deger)
      setText("")
      }

    const renderToDo = ({item,index}) =>
    {
      return(
      <TouchableHighlight onLongPress={()=>{handleLongPress(item.title,index,item.isDeleted)}} onPress={()=>{handlePress(item.id)}}>
        <ToDoCard text={item}></ToDoCard>
      </TouchableHighlight>
      )
    }

    const handleLongPress = (title,index,isDeleted) => {
      Alert.alert("Task silindi",'"' + title+'"'+ " silindi")
      const newTask = [...yapilacaklar]
      newTask.splice(index,1)
      setYapilacaklar(newTask)
      if (isDeleted == false) {
        setCounter(counter-1)
      }
    };

    const handlePress =(id)=>{
      const newYapilacaklar = yapilacaklar.map(element=>{
        if (element.id == id) {
          element.isDeleted = !element.isDeleted;
          if (element.isDeleted == false) {
            setCounter(counter+1)
          }
          else{
            setCounter(counter-1)
          }
        }
        return element;
      })
      setYapilacaklar(newYapilacaklar);
    }

    return (

        <View style={styles.container}>
          <ToDoHeader counter={counter}/>
          <FlatList data={yapilacaklar} renderItem={renderToDo}></FlatList>
          <ToDoFooter setText={setText} value={text} press={onPressButton}/>
        </View>
    );
  }
export default App;


  const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:"midnightblue"
  },
    separator:{
      borderWidth:1,
      borderColor:"#e0efe9"
    }
  })