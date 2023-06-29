import { RefreshControl, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useCallback, useEffect, useState } from "react";
import { Text } from "react-native";
import digiHook from "../../hooks/digiHook";

const PullToRefreshComponent = () => {

    const [ refreshing , setRefreshing ] = useState<boolean>(false);
    const { getDigimon , roll } = digiHook();

    const onRefresh = useCallback(() => {
        setRefreshing(true);roll();setRefreshing(false)
    },[])

    //useEffect(() => {fetch('https://mywebsite.com/mydata.json').then(resp => setTest(resp))},[])

    return(
        <SafeAreaView style={{flex:1}}>
            <ScrollView
                refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>}
            >
                <Text style={{fontSize:30,padding:20}}>{JSON.stringify(getDigimon())}</Text>
            </ScrollView>
        </SafeAreaView>
    )
}

export default PullToRefreshComponent