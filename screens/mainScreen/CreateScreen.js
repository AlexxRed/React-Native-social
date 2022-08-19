import React, {useState} from "react";
import{
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image
} from "react-native";
import { Camera} from 'expo-camera';


const CreateScreen = ({navigation}) =>{
    const [camera, setCamera] = useState(null);
    const [photo, setPhoto] = useState('');


    const takePhoto = async() => {
        let photo = await camera.takePictureAsync();
        setPhoto(photo.uri);

    }

    const sendPhoto =() => {
        navigation.navigate('Posts',{photo});
    }


    return(
    <View style = {styles.container} >
        <Camera style = {styles.camera} ref={setCamera}>
           {photo && (
            <View style = {styles.takePhotoContainer} >
                <Image
                 source={{uri: photo}}
                 style={{height:200, width:200}}/>
            </View>
           )}
            <TouchableOpacity onPress={takePhoto} style={styles.buttonContainer}>
                <Text style={styles.buttonText}>SNAP</Text>
            </TouchableOpacity>
        </Camera>
        <View>
        <TouchableOpacity onPress={sendPhoto} style={styles.buttonSendContainer}>
                <Text style={styles.sendText}>SEND</Text>
            </TouchableOpacity>
        </View>
    </View>
    )
};
const styles = StyleSheet.create({
    container:{
        flex: 1,
        
    },
    camera:{
        height: '70%',
        justifyContent: "flex-end",
        alignItems: "center",
        // height:300,
    },
    buttonText:{
        color: "#fff",
    },
    buttonContainer:{
        justifyContent: "center",
        alignItems: "center",
        width:70,
        height:70,
        marginBottom: 20,
        borderWidth:1,
        borderColor: '#dc143c',
        borderRadius:50,
    },
    takePhotoContainer:{
        position:"absolute",
        top: 0,
        left:0,
        borderColor: '#fff',
        borderWidth: 1,
    },
    buttonSendContainer:{
        marginHorizontal:30,
        height: 40,
        borderWidth: 2,
        borderColor: '#000080',
        borderRadius: 10,
        marginTop:20,
        justifyContent: "center",
        alignItems: "center",
    },
    sendText:{
        color: '#000080',
        fontSize: 20,
        
    }
})

export default CreateScreen