import { ActivityIndicator, Dimensions, FlatList, Image, ScrollView, Text } from "react-native"
import { useRef, useState } from "react"
import { View } from "react-native"
import { Animated } from "react-native"

const { width , height } = Dimensions.get('window');

const ImageWithFade = ({url:uri}:{url:string}) => {
    const opacity = useRef( new Animated.Value(0) ).current;
    const fadeIn = () => Animated.timing(opacity,{toValue:1,duration:500,useNativeDriver:true}).start(({finished}) => {}) ;
    return <Animated.Image onLoad={fadeIn} style={{flex:1,width:width*0.75,height:width*0.75,marginVertical:10,borderRadius:20,opacity}} source={{uri}}/>
}

const InfiniteScrollComponent = () => {

    const [ length , setLength ] = useState<number>(10)

    const arrayCraft = () => {
        const base = 'https://picsum.photos/';
        let urls = [];
        for (var i = 0; i <= length; i++) {
            urls.push(`${base}${i}`);
        }
        return urls;
    }
    
    return(
        <View style={{flex:1,padding:20,justifyContent:'center',alignItems:'center'}}>
            <FlatList
                style={{flex:1}}
                data={arrayCraft()}
                keyExtractor={ (item,index) => item.toString() }
                renderItem={ ({item}) => <ImageWithFade url={item} /> }
                onEndReached={() => setLength(v => v+10)}
                onEndReachedThreshold={0.7}
                ListFooterComponent={<ActivityIndicator style={{padding:50}}/>}
            />
        </View>
    )
}

export default InfiniteScrollComponent