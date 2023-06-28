import { useEffect, useRef } from "react";
import { Animated, Button, Dimensions, StyleSheet, Text , TouchableOpacity, View } from "react-native"
import { Easing } from "react-native";

const { width } = Dimensions.get('window')

const Animation1 = () => {

    const opacity = useRef( new Animated.Value(0.5) ).current ;
    const top = useRef( new Animated.Value(50) ).current ;

    const fades = {

        fadeIn:() => {
            Animated.timing(opacity,{toValue:0.75,duration:2500,useNativeDriver:true}).start(({finished}) => {console.log(finished)});
            Animated.timing(top,{toValue:0,duration:1000,easing:Easing.bounce,useNativeDriver:true}).start(({finished}) => {console.log(finished)})
        },

        fadeOut:() => {
            Animated.timing(opacity,{toValue:0.25,duration:2500,useNativeDriver:true}).start(({finished}) => {console.log(finished)});
            Animated.timing(top,{toValue:100,duration:1000,easing:Easing.bounce,useNativeDriver:true}).start(({finished}) => {console.log(finished)})
        }

    }

    return(
        <Animated.View style={[styles.container,{transform:[{translateY:top}]}]}>
            <Animated.View style={{width:width/3,height:width/3,backgroundColor:'purple',borderRadius:10,opacity}}></Animated.View>
            <TouchableOpacity style={styles.button} onPress={() => fades.fadeIn()}><Text>IN</Text></TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => fades.fadeOut()}><Text>OUT</Text></TouchableOpacity>
        </Animated.View>
    )

}

const styles = StyleSheet.create({
    container:{flex:1,justifyContent:'center',alignItems:'center'},
    button:{padding:15,backgroundColor:'grey',margin:10,borderRadius:10}
})

export default Animation1