import { Dimensions, RefreshControl, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useCallback, useEffect, useState } from "react";
import { Image , View , Text } from "react-native";
import digiHook from "../../hooks/digiHook";
import { Content as digimon } from "../../interfaces/digimon";

const { width , height } = Dimensions.get('window')

const PullToRefreshComponent = () => {

    const [ refreshing , setRefreshing ] = useState<boolean>(false);
    const { getDigimon , roll } = digiHook();

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        roll();
        setRefreshing(false);
    },[])


    return(
        <SafeAreaView style={{flex:1}}>
            <ScrollView
                refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} style={{backgroundColor:'red'}} title="DIGIMON"/>}
            >
                {(getDigimon() && !refreshing)
                ?   <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                        <Image style={{flex:1,width,height:width,padding:10}} source={{uri:getDigimon().image}}/>
                        <Text style={{fontSize:40,marginVertical:20}}>{getDigimon().name}</Text>
                    </View>
                : <></>}
                
            </ScrollView>
        </SafeAreaView>
    )
}

export default PullToRefreshComponent