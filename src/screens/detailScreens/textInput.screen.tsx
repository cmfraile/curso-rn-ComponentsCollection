import { KeyboardAvoidingView, ScrollView, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from "react-native";
import useForm from "../../hooks/useForm";
import { useState } from "react";
import { Switch } from "react-native";

const TextInputComponent = () => {

    const [ isKeyboardAvoiding , setIsKeyboardAvoiding ] = useState<boolean>(true);

    const ChildrenJSX = () => {

        const initialState = {nombre:'',apellido:''} ;
        const { formState , onInputChange } = useForm<typeof initialState>(initialState) ;        

        return(
            <View style={style.containerChild}>

                <View><Text style={style.jsonText}>{JSON.stringify({...formState,isKeyboardAvoiding})}</Text></View>
                
                <View>

                    <Switch
                        trackColor={{false: '#767577', true: '#81b0ff'}}
                        thumbColor={isKeyboardAvoiding ? '#f5dd4b' : '#f4f3f4'}
                        onChange={() => setIsKeyboardAvoiding(v => !v)}
                        value={isKeyboardAvoiding}
                    />

                    <TextInput
                        style={style.input} autoCapitalize={'none'} autoComplete={'off'} autoCorrect={false}
                        value={formState['nombre']} onChangeText={(text) => onInputChange(text,'nombre')}
                    />

                    <TextInput
                        style={style.input} autoCapitalize={'none'} autoComplete={'off'} autoCorrect={false}
                        value={formState['apellido']} onChangeText={(text) => onInputChange(text,'apellido')}
                />

                </View>

            </View>
        )

    }

    return(
        (isKeyboardAvoiding)
        ?   <KeyboardAvoidingView style={style.container}><TouchableWithoutFeedback><ChildrenJSX/></TouchableWithoutFeedback></KeyboardAvoidingView>
        :   <View style={style.container}><ChildrenJSX/></View>
    )

}

const style = StyleSheet.create({
    container:{flex:1,padding:20},
    containerChild:{flex:1,justifyContent:'space-between'},
    input:{padding:15,margin:15,borderRadius:5,borderWidth:1},
    jsonText:{fontWeight:'900',fontSize:25,textAlign:'center'}
})

export default TextInputComponent