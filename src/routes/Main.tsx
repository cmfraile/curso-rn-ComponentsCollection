import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainMenu from '../screens/mainmenu.screen';
import Animation1 from '../screens/detailScreens/animacion1.screen';
import Animation2 from '../screens/detailScreens/animacion2.screen';
import SwitchCollection from '../screens/detailScreens/switch.screen';
import AlertComponent from '../screens/detailScreens/alert.screen';
import TextInputComponent from '../screens/detailScreens/textInput.screen';
import BurningBattery from '../screens/detailScreens/burning.screen';
import PullToRefreshComponent from '../screens/detailScreens/pullToRefresh.screen';
import SectionListComponent from '../screens/detailScreens/section.screen';
import ModalComponent from '../screens/detailScreens/modal.screen';
import InfiniteScrollComponent from '../screens/detailScreens/infinitescroll.screen';

export type rootStack = { MainMenu:undefined , Animation1:undefined , Animation2:undefined , SwitchCollection:undefined , Alert:undefined , TextInput:undefined , BurningBattery:undefined , pullToRefresh:undefined , SectionList:undefined , Modal:undefined , InfiniteScroll:undefined } ;

export interface menuItemWithoutIcon {name:string,toComponent:keyof rootStack}
export interface menuItem extends menuItemWithoutIcon {icon:string}
export const menuItems:menuItemWithoutIcon[] = [
    {name:'Animacion 1',toComponent:'Animation1'},
    {name:'Animacion 2',toComponent:'Animation2'},
    {name:'Switches',toComponent:'SwitchCollection'},
    {name:'Alert',toComponent:'Alert'},
    {name:'TextInput',toComponent:'TextInput'},
    {name:'pullToRefresh',toComponent:'pullToRefresh'},
    {name:'SectionList',toComponent:'SectionList'},
    {name:'Modal',toComponent:'Modal'},
    {name:'InfiniteScroll',toComponent:'InfiniteScroll'},
    {name:'BurningBattery',toComponent:'BurningBattery'},
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
                <Stack.Screen name='TextInput' component={TextInputComponent}/>
                <Stack.Screen name='pullToRefresh' component={PullToRefreshComponent}/>
                <Stack.Screen name='BurningBattery' component={BurningBattery}/>
                <Stack.Screen name='SectionList' component={SectionListComponent}/>
                <Stack.Screen name='Modal' component={ModalComponent}/>
                <Stack.Screen name='InfiniteScroll' component={InfiniteScrollComponent}/>
            </Stack.Navigator>
        </NavigationContainer>
    )

}

export default Main