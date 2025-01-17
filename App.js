import { StatusBar } from 'expo-status-bar';
import {useState} from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, Modal } from 'react-native';
import Slider from '@react-native-community/slider';
import { ModalPassword } from "./src/components/modal/index";

export default function App() {


  const [size,setSize] = useState(10)
  const [passwordValue, setPasswordValue] = useState("")
  const [modalVisible, setModalVisible]= useState(false)

  let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"

  function generatePassword(){
    let password = "";
    for(let i = 0, n = charset.length; i < size; i++){
      password += charset.charAt(Math.floor(Math.random() * n))
    }
    setPasswordValue(password)
    setModalVisible(true)
  }



  return (
    <View style={styles.container}>

      <Image
        source={require("./src/assets/icon.png")}
        style={styles.logo}></Image>

      <Text style={styles.title}>{size} Caracteres</Text>

      <View style={styles.area}>
        <Slider 
        style={{height:50}}
        minimumValue={6}
        maximumValue={20}
        maximumTrackTintColor='#274A59'
        minimumTrackTintColor='#FF8900'
        thumbTintColor='#274A59'
        value={size}
        onValueChange={(value)=> setSize(value)}
        step={1}
  
        ></Slider>
      </View>

      <TouchableOpacity 
      style={styles.button} 
      onPress={generatePassword}>
        <Text style={styles.buttonText}>Gerar Senha</Text>
      </TouchableOpacity>


      <Modal visible={modalVisible} animationType='fade' transparent={true} >
        <ModalPassword password={passwordValue} handleClose={()=>{setModalVisible(false)}}/>
      </Modal>

    </View>
  );
}





const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f3f3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    height:220,
    width:220,
    marginBottom: 60
  },
  area:{
    marginTop:14,
    marginBottom:14,
    width:"80%",
    backgroundColor:"#fff",
    borderRadius:8,
    padding:8
  },
  button:{
    backgroundColor:"#FF8900",
    width:"80%",
    justifyContent:"center",
    alignItems:"center",
    height:"50",
    borderRadius:8,
    marginBottom:18
  },
  buttonText:{
    color:"#fff",
    fontSize:20,
  },
  title:{
    fontSize:30,
    fontWeight:'bold',
    color:"#274A59"
  }
});
