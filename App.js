import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { 
  Button,
  ImageBackground,
  StyleSheet,
  Text, 
  TextInput, 
  View, 
  KeyboardAvoidingView, 
  Keyboard
} from 'react-native';

export default function App() {
  const [isShowKeybord, setIsShowKeybord] = useState(false)

  const keyboardHide = () =>{
    setIsShowKeybord(false);
    Keyboard.dismiss()
  }

  return (
    <View style={styles.container}>
      <ImageBackground
      style={styles.image}
      source={require('./assets/images/hd-wallpaper-g894f88c32_1280.jpg')}>
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            >
            <View style={{...styles.form, marginBottom: isShowKeybord ? 20 : 100 }}>
            <View>
              <Text style={styles.inputTitle}>Email addres</Text>
              <TextInput 
              style={styles.loginInput} 
              textAlign={'center'}
              onFocus={()=>setIsShowKeybord(true)}
              />
            </View>
            <View style={{marginTop: 20, marginBottom: 20}}>
              <Text style={styles.inputTitle}>Password</Text>
              <TextInput 
              style={styles.loginInput} 
              textAlign={'center'}
              secureTextEntry={true}
              onFocus={()=>setIsShowKeybord(true)}
              />
            </View>
            <Button title='SIGN IN'
              onPress={keyboardHide}
            />
          </View>
        </KeyboardAvoidingView>
      </ImageBackground>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  text:{
    color: "blue",
     fontSize: 25
  },
  textBox:{
    borderWidth: 2,
    borderColor: "tomato",
    borderRadius: 10,
    padding: 10
  },
  image:{
    flex:1,
    resizeMode: 'cover',
    justifyContent: 'center',
    // alignItems: 'center'
  },
  loginInput:{
    // marginHorizontal: 20,
    height:40,
    color: "#fff",
    borderColor:'#fff',
    borderRadius: 5,
    borderWidth: 2
    
  },
  form:{
    marginHorizontal: 20,
  },
  inputTitle:{
    paddingBottom: 10,
    color:'#fff',
    fontSize: 18,
  }, 
});
