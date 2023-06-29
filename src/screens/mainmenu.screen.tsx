import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { rootStack } from "../routes/Main";
import { menuItem , menuItems } from "../routes/Main";


const OptionRender = ({icon,name,toComponent}:menuItem) => {

    const { navigate } = useNavigation<NativeStackNavigationProp<rootStack>>() ;

    return(
        <TouchableOpacity style={optionRender} onPress={() => navigate(toComponent)}>
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
                renderItem={({item,index}) => <OptionRender icon={'american-football-outline'} name={item.name} toComponent={item.toComponent}/>}
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