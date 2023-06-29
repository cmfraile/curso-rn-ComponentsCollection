import { TouchableOpacity , Text, View } from "react-native";
import { Alert } from "react-native";

//https://www.npmjs.com/package/react-native-prompt-android

const AlertComponent = () => {

    const createTwoButtonAlert = () =>
    Alert.alert('Alert Title', 'My Alert Msg', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);
    
    return(
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <TouchableOpacity style={{padding:15,backgroundColor:'red',borderRadius:100}} onPress={createTwoButtonAlert}>
                <Text style={{fontWeight:'900',fontSize:20,color:'white'}}>ALERTA</Text>
            </TouchableOpacity>
        </View>
    )

}

export default AlertComponent