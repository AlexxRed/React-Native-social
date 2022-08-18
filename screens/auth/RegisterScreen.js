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
  Dimensions
} from 'react-native';





const initialState = {
  name:'',
  email: '',
  password: ''
}

export default function RegisterScreen() {
  const [isShowKeybord, setIsShowKeybord] = useState(false)
  const [state, setState] = useState(initialState)
  

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
    return () => {
      Dimensions.remove();
    };
  }, []);
  

  const keyboardHide = () =>{
    setIsShowKeybord(false);
    Keyboard.dismiss();
    console.log(state)
    setState(initialState)
  }



  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <ImageBackground
      style={styles.image}
      source={require('../../assets/images/hd-wallpaper-g894f88c32_1280.jpg')}>
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            >
            <View style={{
              ...styles.form,
               marginBottom: isShowKeybord ? 20 : 100,
               width: dimensions
              }}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Hello</Text>
                <Text style={styles.headerTitle}>Please register now!</Text>
            </View>
            <View style={{marginBottom: 20}}>
              <Text style={styles.inputTitle}>Name</Text>
              <TextInput 
              style={styles.nameInput} 
              textAlign={'center'}
              onFocus={()=>setIsShowKeybord(true)}
              value={state.name}
              onChangeText = {(value) => setState((prevState) => ({...prevState, name: value}))}
              />
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
              onPress={keyboardHide}
            />
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
  nameInput:{
    height:40,
    color: "#fff",
    borderColor:'#fff',
    borderRadius: 5,
    borderWidth: 2,
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
    textAlign:'center',
    fontFamily: 'DynaPuff'
  },
});