import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground
      style={styles.image}
      source={require('./assets/images/hd-wallpaper-g894f88c32_1280.jpg')}>
      <View style={styles.form}>
        <View>
          <Text style={styles.inputTitle}>Email addres</Text>
          <TextInput style={styles.loginInput} textAlign={'center'}/>
        </View>
        <View style={{marginTop: 20}}>
          <Text style={styles.inputTitle}>Password</Text>
          <TextInput style={styles.loginInput} textAlign={'center'} secureTextEntry={true}/>
        </View>
      </View>
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
