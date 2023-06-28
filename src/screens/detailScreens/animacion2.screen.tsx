import { useRef } from "react";
import { Animated , Dimensions, PanResponder, StyleSheet } from "react-native"

const { width } = Dimensions.get('window')

const Animation2 = () => {

    //const opacity = useRef( new Animated.Value(0.5) ).current ;
    const pan = useRef(new Animated.ValueXY()).current;

        const panResponder = PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onPanResponderMove: Animated.event([
            null,
            {
                dx: pan.x, // x,y are Animated.Value
                dy: pan.y,
            },
            ],{useNativeDriver:true}),
            onPanResponderRelease: () => {
            Animated.spring(
                pan, // Auto-multiplexed
                {toValue: {x: 0, y: 0},useNativeDriver:true}, // Back to zero
            ).start();
            },
        });

    return(
        <Animated.View style={[styles.container]}>
            <Animated.View 
                style={[pan.getLayout(),{width:width/3,height:width/3,backgroundColor:'pink',borderRadius:width/3}]}
                {...panResponder.panHandlers}
            />
        </Animated.View>
    )

}

const styles = StyleSheet.create({
    container:{flex:1,justifyContent:'center',alignItems:'center'},
})

export default Animation2