import React, {useState, useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { 
  Button,
  ImageBackground,
  StyleSheet,
  Text, 
  TextInput, 
  View, 
  KeyboardAvoidingView, 
  Keyboard,
  TouchableWithoutFeedback,
  Platform,
  Dimensions,
  TouchableOpacity
} from 'react-native';

import { useDispatch } from "react-redux";

import {authSignInUser} from '../../redux/auth/authOperations'



const initialState = {
  email: '',
  password: ''
}

export default function LoginScreen({navigation}) {
  // console.log(navigation)
  
  const [isShowKeybord, setIsShowKeybord] = useState(false)
  const [state, setState] = useState(initialState)

  const dispatch = useDispatch()
  
  const [dimensions, setDimensions] = useState(
    Dimensions.get("window").width - 20 * 2
  );

  useEffect(() => {
    const onChange = () => {
      const width = Dimensions.get("window").width - 20 * 2;
      console.log(width)
      setDimensions(width);
    };
    Dimensions.addEventListener("change", onChange);
    // return () => {
    //     Dimensions.remove();
    // };
  }, []);
  

  const hadleSubmit = () =>{
    setIsShowKeybord(false);
    dispatch(authSignInUser(state))
    setState(initialState)
  }

  const keyboardHide = () => {
    Keyboard.dismiss()
    setIsShowKeybord(false);
  }


  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={keyboardHide}>
      <ImageBackground
      style={styles.image}
      source={require('../../assets/images/hd-wallpaper-g894f88c32_1280.jpg')}>
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            >
            <View style={{
              ...styles.form,
               marginBottom: isShowKeybord ? 20 : 40,  
               width: dimensions
              }}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Hello again</Text>
                <Text style={styles.headerTitle}>Welcome back</Text>
            </View>
            <View>
              <Text style={styles.inputTitle}>Email addres</Text>
              <TextInput 
              style={styles.loginInput} 
              textAlign={'center'}
              onFocus={()=>setIsShowKeybord(true)}
              value={state.email}
              onChangeText = {(value) => setState((prevState) => ({...prevState, email: value}))}
              />
            </View>
            <View style={{marginTop: 20, marginBottom: 20}}>
              <Text style={styles.inputTitle}>Password</Text>
              <TextInput 
              style={styles.loginInput} 
              textAlign={'center'}
              secureTextEntry={true}
              onFocus={()=>setIsShowKeybord(true)}
              value={state.password}
              onChangeText = {(value) => setState((prevState) => ({...prevState, password: value}))}
              />
            </View>
            <Button title='SIGN IN'
              onPress={hadleSubmit}
            />
            <TouchableOpacity 
                onPress={()=> navigation.navigate("Register")}
                style={{
                alignItems:'center',
                 justifyContent:'center',
                 fontSize:20,
                 marginTop:10
                 }}>
               <Text 
               style={{
               fontSize:20,
               fontFamily: 'DynaPuff', 
               color: '#dc143c'
               }}
               >Go to register</Text>
            </TouchableOpacity> 

          </View>
        </KeyboardAvoidingView>
      </ImageBackground>
      </TouchableWithoutFeedback>
      
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...Platform.select({
      android:{
        backgroundColor: "#fff"
      },
      ios:{
        backgroundColor: `#fffaf0`
      }
    })
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  text:{
    color: "blue",
     fontSize: 35,
     fontFamily: 'DynaPuff'
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
    fontFamily: 'DynaPuff'
  }, 
  header: {
    alignItems: "center",
    marginBottom: 120,
  },
  headerTitle: {
    fontSize: 40,
    color: "#f0f8ff",
     fontFamily: 'DynaPuff'
  },
});