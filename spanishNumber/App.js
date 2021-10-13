import React from 'react'
import {
  Text,
  View,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native'
import Sound from 'react-native-sound'

const soundList =[
  require('./assets/one.wav'),
  require('./assets/two.wav'),
  require('./assets/three.wav'),
  require('./assets/four.wav'),
  require('./assets/five.wav'),
  require('./assets/six.wav'),
  require('./assets/seven.wav'),
  require('./assets/eight.wav'),
  require('./assets/nine.wav'),
  require('./assets/ten.wav'),
]





const App =() => {

const playSound = (sound) => {
  const soundVar = new Sound(sound, Sound.MAIN_BUNDLE, (err)=> {
    if(err){
      console.log("Not Able To Play Sound ")
    }
  });

  setTimeout(() => {
    soundVar.play()
  }, 100)

  soundVar.release();
}

return(
  <ScrollView style={styles.container}>
    
      <Image style={styles.img} source={require('./assets/logo.png')}></Image> 
       <View style={styles.gridContainer}>
         {soundList.map((sound) => (
           <TouchableOpacity
           key={sound}
           style={styles.box}
           onPress= {() => {playSound(sound)}}>
             <Text style={styles.text}>{sound}</Text>
           </TouchableOpacity>
         )
         )}
        
       </View>
    
      
      
    
  </ScrollView>
);
};
export default App;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1b262c",
  },
  img: {
    alignSelf: "center",
    marginTop: 15,
    
  },
  gridContainer: {
      flex: 1,
      margin: 5,
      flexDirection: "row",
      flexWrap: "wrap",
      alignItems: "flex-start",
      justifyContent: "space-around",
  },
  box: {
    height: 110,
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "center",
    width : "46%",
    backgroundColor: "#0f4c75",

    borderRadius: 5,
    elevation: 5,
    shadowColor: "#393e46",
    shadowRadius: 5,
  },
  text: {
    fontSize: 40,
    color: "#ff4301",
  },
 
});