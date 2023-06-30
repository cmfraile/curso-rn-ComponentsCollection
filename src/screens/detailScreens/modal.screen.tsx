import { useState } from "react"
import { Dimensions, Text, TouchableOpacity, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";
import { Modal } from "react-native";
import { random } from "underscore";

const { width , height } = Dimensions.get('window');

const ModalButton = ({text,callback}:{text:string,callback:() => void}) =>
    <TouchableOpacity
        style={{
            flex:1,justifyContent:'center',alignItems:'center',alignContent:'center',
            maxWidth:width/3 , maxHeight:width/3 ,
            minWidth:width/3 , minHeight:width/3 ,
            top:random(50,150),left:random(50,150),
            backgroundColor:'grey' , borderRadius:20
        }}
        onPress={callback}
    >
    <Text style={{fontWeight:'900',fontSize:25,textAlign:'center',color:'white'}}>{text}</Text>
    </TouchableOpacity>

const ModalComponent = () => {

    const [ isModal , setIsModal ] = useState<boolean>(false);

    return(
        <>
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <ModalButton text="abrir modal" callback={() => setIsModal(v => !v)}/>
        </View>
        <Modal
            animationType='slide'
            transparent={true}
            visible={isModal}
        >
            <View style={{flex:1,backgroundColor:'rgba(0,0,0,0.2)'}}>
                <ModalButton text="cerrar modal" callback={() => setIsModal(v => !v)}/>
            </View>
        </Modal>
        </>
    )

}

export default ModalComponent