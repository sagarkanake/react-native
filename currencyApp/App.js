import React,{useState} from 'react'
import {
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  TextInput,
} from 'react-native'
import Snackbar from 'react-native-snackbar';
import LinearGradient from "react-native-linear-gradient";
const currencyPerRupee = {
  DOLLAR: 0.014,
  EURO: 0.012,
  POUND: 0.011,
  RUBEL: 0.93,
  AUSDOLLAR: 0.2,
  CANDOLLAR: 0.019,
  YEN: 1.54,
  DINAR: 0.0043,
  BITCOIN: 0.000004,
}
const App = () => {
  const [inputValue, setInputValue] = useState(0);
  const [resultValue, setResultValue] = useState(0); 
  const buttonPressed = (currency) => {
    if (!inputValue) {
      return Snackbar.show({
        text: 'Please Enter the Value',
        backgoundColor: '#EA7773',
        textColor: '#FFFFFF',
        

      })
    }
    let result = parseFloat(inputValue) * currencyPerRupee[currency]
    setResultValue(result.toFixed(2))
  }
  return(
    <>
    <ScrollView backgroundColor="#1b262c"
    keyboardShouldPersistTaps="handled"
    contentInsetAdjustmentBehavior="automatic">
      <SafeAreaView style={styles.container}>
       
        <View style={styles.resultContainer}>
          <Text style={styles.resultValue}>{resultValue}</Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput 
          keyboardType= "numeric"
          placeholder="Enter Value"
          placeholderTextColor="#c1c1c1"
          style={styles.input} 
          value={inputValue}
          onChangeText= {(inputValue) => setInputValue(inputValue)}>


          </TextInput>
         
        </View>
        <View style= {styles.convertButtonContainer}>
          {Object.keys(currencyPerRupee).map((currency) => (
            <TouchableOpacity
            onPress= {() => buttonPressed(currency)}
            key={currency}
            style={styles.converterButton}> 
            <LinearGradient colors={["#004d40", "#009688"]} style={styles.appButtonContainer}>
              <Text style={styles.converterButtonText}>
                {currency}
              </Text>
              </LinearGradient>
            </TouchableOpacity>
          ))}
         
        </View>
      </SafeAreaView>
        
    </ScrollView>
    </>

  );
}
export default App;

const styles = StyleSheet.create({
  container: {
    flex : 1,
    backgroundColor: "#1b262c",
  },
  resultContainer: {
    height: 70,
    marginTop: 80,
    justifyContent: "center",
    borderColor: "#bbe1fa",
    borderWidth: 2,
    alignItems: "center",

    
  },
  appButtonContainer: {
    elevation: 8,
    height: "100%",
    width : "100%",
    alignItems: "center",
    justifyContent: "center",

    backgroundColor: "#009688",
    borderRadius: 10,
    paddingVertical: 30,
    paddingHorizontal: 12,
  },
  resultValue : {
    color: "#FFF",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 30,
    fontWeight: "bold",

  },
  inputContainer: {
    height: 70,

    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#bbe1fa",
    borderWidth: 2,


  },
  input: {
    fontSize: 25,
    color: "#FFF",
    textAlign: "center"
    

  },
  convertButtonContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 10,

  },
  converterButtonText: {
    color: "#fff",
    fontSize: 15,

  },
  converterButton: {
    alignItems: "center",
    justifyContent: "center",
    height: 100,
    width: "33.3%",
    borderWidth: 2,
    borderColor: "#bbe1fa",
    marginTop: 10,
    backgroundColor: "#0f4c75",
  },
 converterButton1:{
  alignItems: "center",
  justifycontent: "center",
   height: 70,
   marginTop: 10,
   paddingTop: 24,
   width: "33.3%",
   backgroundColor: "#87CEEB",
   borderWidth: 2,
   borderColor: "#FFf",

 }

})
