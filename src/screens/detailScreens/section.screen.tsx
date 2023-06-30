import { SectionList, StyleSheet, Text } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import digiHook from "../../hooks/digiHook"
import { useEffect, useState } from "react"
import { View } from "react-native"

const abc = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
interface collectionSlice {title:string,data:string[]};

const SectionListComponent = () => {

    const { digimons } = digiHook();

    const [ list , setList ] = useState<collectionSlice[]>();

    useEffect(() => {

        if(digimons.length == 0){return}

        const fillingCollection:{[key:string]:string[]} = {};
        let fillingArray:{title:string,data:string[]}[] = [];

        abc.map(x => {
            const letter = x.substring(0,1).toUpperCase();
            digimons.filter(y => letter == y.name.substring(0,1).toUpperCase())
            .map( z => {
                if(!fillingCollection[x]){fillingCollection[x] = []};
                fillingCollection[x] = [...fillingCollection[x],z.name];
            })
        });

        Object.keys(fillingCollection).map(x => {
            fillingArray = [...fillingArray,{title:x,data:fillingCollection[x]}]
        })

        setList(v => fillingArray)

    },[digimons]);



    return(
        <SafeAreaView style={{flex:1,padding:15}}>
            { (list)
            ?
                <SectionList
                    style={{flex:1}}
                    sections={list}                    
                    keyExtractor={(item,index) => `${item}${index}`}
                    renderItem={({item}) => <Text style={styles.item}>{item}</Text>}

                    renderSectionHeader={ ({section: {title}}) => <Text style={styles.title}>{title}</Text> }
                    renderSectionFooter={ ({section: {title}}) => <View style={styles.bottom}></View> }

                    ListHeaderComponent={() => <Text style={styles.borders}>HEADER</Text>}
                    ListFooterComponent={() => <Text style={styles.borders}>FOOTER</Text>}

                    //itemSeparator
                    //SectionSeparator

                    //ItemSeparatorComponent={() => <View style={styles.bottom}></View> }

                />
            :   <></>
            }
        </SafeAreaView>
    )

}

const styles = StyleSheet.create({
    item:{},
    borders:{marginVertical:20},
    title:{textAlign:'center',marginTop:10},
    bottom:{borderWidth:0.5,marginTop:10}
})

export default SectionListComponent