import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, Text } from "react-native";
import { Switch } from "react-native";
import { useState } from "react";

type initialType = {hungry:boolean,horny:boolean,angry:boolean};
const initialState:initialType = { hungry:false , horny:false , angry:false }

interface switchProps { state:initialType , stateKey:keyof initialType ,onChange:(initial:keyof initialType) => void }
const SwitchComponent = ({state,stateKey,onChange}:switchProps) => {

    const isOn = state[stateKey];

    return(
        <Switch
            style={styles.switch}
            trackColor={{false: '#767577', true: '#81b0ff'}}
            thumbColor={isOn ? '#f5dd4b' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onChange={() => onChange(stateKey)}
            value={isOn}
        />
    )

}

const SwitchCollection = () => {

    const [ state , setState ] = useState(initialState)

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