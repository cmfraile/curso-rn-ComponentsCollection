import { SafeAreaView, Text } from "react-native"

/*
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./Home.screen";
import Detail from "./Detail.screen";

export type stackParams = { Home:undefined , Detail:undefined } ;
const Stack = createNativeStackNavigator<stackParams>();

const Main = () => {

    return(
        <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerShown:false,
            }}            
        >
            <Stack.Screen name="Home" component={Home}/>
            <Stack.Screen name="Detail" component={Detail}/>
        </Stack.Navigator>
    )

}

export default Main
*/

const Main = () => {

    return(
        <SafeAreaView style={{flex:1,padding:20}}>
            <Text>MAIN WORKS!</Text>
        </SafeAreaView>
    )

}

export default Main