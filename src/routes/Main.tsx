import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainMenu from '../screens/mainmenu.screen';
import Animation1 from '../screens/detailScreens/animacion1.screen';
import Animation2 from '../screens/detailScreens/animacion2.screen';
import SwitchCollection from '../screens/detailScreens/switch.screen';
import AlertComponent from '../screens/detailScreens/alert.screen';

export type rootStack = { MainMenu:undefined , Animation1:undefined , Animation2:undefined , SwitchCollection:undefined , Alert:undefined } ;

export interface menuItemWithoutIcon {name:string,toComponent:keyof rootStack}
export interface menuItem extends menuItemWithoutIcon {icon:string}
export const menuItems:menuItemWithoutIcon[] = [
    {name:'Animacion 1',toComponent:'Animation1'},
    {name:'Animacion 2',toComponent:'Animation2'},
    {name:'Switches',toComponent:'SwitchCollection'},
    {name:'Alert',toComponent:'Alert'},
]

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
                <Stack.Screen name='SwitchCollection' component={SwitchCollection}/>
                <Stack.Screen name='Alert' component={AlertComponent}/>
            </Stack.Navigator>
        </NavigationContainer>
    )

}

export default Main