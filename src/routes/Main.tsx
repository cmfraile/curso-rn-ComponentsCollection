import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainMenu from '../screens/mainmenu.screen';

export type stackParams = { MainMenu:undefined , Detail:undefined } ;
const Stack = createNativeStackNavigator<stackParams>();

const Main = () => {

    return(
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName='MainMenu'
                screenOptions={{headerShown:false}}
            >
                <Stack.Screen name='MainMenu' component={MainMenu}/>
            </Stack.Navigator>
        </NavigationContainer>
    )

}

export default Main