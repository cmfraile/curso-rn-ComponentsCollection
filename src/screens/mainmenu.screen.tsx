import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from 'react-native-vector-icons/Ionicons';
import First from "./detailScreens/101.screen";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { rootStack } from "../routes/Main";


interface menuItem {icon:string,name:string,toComponent?:() => JSX.Element}
const menuItems:menuItem[] = [
    {icon:"logo-css3",name:'Lorem Ipsum',toComponent:First},
    {icon:"alert-circle",name:'101',toComponent:First},
]

const OptionRender = ({icon,name,toComponent}:menuItem) => {

    const { navigate } = useNavigation<NativeStackNavigationProp<rootStack>>() ;

    return(
    <TouchableOpacity style={optionRender} onPress={() => navigate('Detail')}>
        <Icon name={icon} size={30}/>
        <Text style={optionText}>{name}</Text>
    </TouchableOpacity>
    )
}

const MainMenu = () => {

    return(
        <SafeAreaView style={container}>
            <Text style={{marginVertical:30,fontSize:20}}>Colección de componentes</Text>
            <FlatList
                style={list}
                data={menuItems}
                renderItem={({item}) => <OptionRender icon={item.icon} name={item.name}/>}
                keyExtractor={(item,index) => index.toString()}
                ItemSeparatorComponent={() => <View style={{borderBottomWidth:2,opacity:0.2}}></View>}
            />
        </SafeAreaView>
    )

}

const { container , optionRender , optionText , list } = StyleSheet.create({
    container:{flex:1,justifyContent:'center',alignItems:'center'},
    list:{flex:1,marginBottom:20},
    optionRender:{flex:1,minWidth:'50%',flexDirection:'row',justifyContent:'space-between',alignItems:'center',borderRadius:10,marginVertical:10},
    optionText:{fontSize:20}
})

export default MainMenu