import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, Text } from "react-native";
import { Switch } from "react-native";
import { useState } from "react";


const SwitchCollection = () => {

    const [ isEnabled , setIsEnabled ] = useState(false);

    return(
        <SafeAreaView style={styles.container}>

            <Switch
                style={styles.switch}
                trackColor={{false: '#767577', true: '#81b0ff'}}
                thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={ () => setIsEnabled(v => !v) }
                value={isEnabled}
            />

        </SafeAreaView>
    )

}

const styles = StyleSheet.create({
    container:{flex:1,justifyContent:'center',alignItems:'center'},
    switch:{marginVertical:10}
})

export default SwitchCollection