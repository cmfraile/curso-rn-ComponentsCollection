import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainMenu from '../screens/mainmenu.screen';
import First from '../screens/detailScreens/101.screen';

export type rootStack = { MainMenu:undefined , Detail:undefined } ;
const Stack = createNativeStackNavigator<rootStack>();

const Main = () => {

    return(
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName='MainMenu'
                screenOptions={{headerShown:false}}
            >
                <Stack.Screen name='MainMenu' component={MainMenu}/>
                <Stack.Screen name='Detail' component={First}/>
            </Stack.Navigator>
        </NavigationContainer>
    )

}

export default Main