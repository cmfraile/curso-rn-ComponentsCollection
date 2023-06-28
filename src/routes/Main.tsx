import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainMenu from '../screens/mainmenu.screen';
import Animation1 from '../screens/detailScreens/animacion1.screen';
import Animation2 from '../screens/detailScreens/animacion2.screen';

export type rootStack = { MainMenu:undefined , Animation1:undefined , Animation2:undefined } ;

const Stack = createNativeStackNavigator<rootStack>();

const Main = () => {

    return(
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName='MainMenu'
                screenOptions={{headerShown:false}}
            >
                <Stack.Screen name='MainMenu' component={MainMenu}/>
                <Stack.Screen name='Animation1' component={Animation1}/>
                <Stack.Screen name='Animation2' component={Animation2}/>
            </Stack.Navigator>
        </NavigationContainer>
    )

}

export default Main