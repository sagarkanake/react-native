import React, {useState} from 'react'
import {
  Text,
  View, 
  StyleSheet,
  TouchableOpacity,
  StatusBar,
} from 'react-native'
const App = () => {
  const [randomColor, setRandomColor]= useState("rgb(32, 0, 126)");

 const changeBG = () => {
   let color = "rgb("+
   Math.floor(Math.random() * 256)+
    ","+
    Math.floor(Math.random() * 256)+
    "," +
    Math.floor(Math.random() * 256)+
    ")";
    setRandomColor(color)
 }
 const setBG = () => {
   let color = 'rgb(0, 0, 0)';
   setRandomColor(color)
 }

  return(
    <> 
       <StatusBar  backgroundColor={randomColor} />
       <View style={[styles.container, {backgroundColor: randomColor}]}> 
       <TouchableOpacity onPress={changeBG}><Text style={[styles.text, styles.button]}> Tap me</Text>
       </TouchableOpacity>
       <TouchableOpacity onPress={setBG}><Text style={[styles.text, styles.button1]}>Reset</Text>
       </TouchableOpacity>
       
       
       
       
        </View>
    </>
  ); 
}

export default App;


const styles = StyleSheet.create({
  container: { 
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  }, 
  button: {
      marginTop:10,
      padding: 30,
      marginBottom: 10,
  },
  button1: {
    marginTop: 60,
    padding: 30, 
    marginBottom: 10,

},
  container1: {
    flex: 1,
    alignItems: "center",

  
  },
  text : {
    fontSize: 30,
   

    backgroundColor: "#BB2CD9",
    paddingVertical: 10,
    paddingHorizontal: 40,
    color: "#FFFFFF",
    borderRadius: 15,
    textTransform: "uppercase",
  }

}
);