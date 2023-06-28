import { useEffect, useRef } from "react";
import { Animated, Button, Dimensions, StyleSheet, Text , TouchableOpacity, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";

const { width } = Dimensions.get('window')

const Animation1 = () => {

    const opacity = useRef( new Animated.Value(0.5) ).current ;

    const fades = {

        fadeIn:() => 
        Animated.timing(
            opacity,
            {toValue:1,duration:2500,useNativeDriver:true}
        ).start(({finished}) => {console.log(finished)}),

        fadeOut:() => 
        Animated.timing(
            opacity,
            {toValue:0,duration:2500,useNativeDriver:true}
        ).start(({finished}) => {console.log(finished)})

    }

    return(
        <SafeAreaView style={styles.container}>
            <Animated.View style={{width:width/3,height:width/3,backgroundColor:'purple',borderRadius:10,opacity}}></Animated.View>
            <TouchableOpacity style={styles.button} onPress={() => fades.fadeIn()}><Text>IN</Text></TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => fades.fadeOut()}><Text>OUT</Text></TouchableOpacity>
        </SafeAreaView>
    )

}

const styles = StyleSheet.create({
    container:{flex:1,justifyContent:'center',alignItems:'center'},
    button:{padding:15,backgroundColor:'grey',margin:10,borderRadius:10}
})

export default Animation1