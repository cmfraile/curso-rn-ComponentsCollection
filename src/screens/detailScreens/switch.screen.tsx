import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, Text } from "react-native";
import { Switch } from "react-native";
import { useState } from "react";

type initialType = {hungry:boolean,horny:boolean,angry:boolean};
const initialState:initialType = { hungry:false , horny:false , angry:false }

interface switchProps { state:initialType , stateKey:keyof initialType ,onChange:() => void }
export const SwitchComponent = ({state,stateKey,onChange}:switchProps) => {

    const isOn = state[stateKey];

    return(
        <Switch
            style={styles.switch}
            trackColor={{false: '#767577', true: '#81b0ff'}}
            thumbColor={isOn ? '#f5dd4b' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onChange={onChange}
            value={isOn}
        />
    )

}

const SwitchCollection = () => {

    const [ state , setState ] = useState(initialState)

    const onChange = (initial:keyof initialType) => setState(v => ({...v,[initial]:!v[initial]}))

    return(
        <SafeAreaView style={styles.container}>
            <Text>{JSON.stringify(state)}</Text>
            <SwitchComponent state={state} stateKey='angry' onChange={() => onChange('angry')} />
            <SwitchComponent state={state} stateKey='horny' onChange={() => onChange('horny')} />
            <SwitchComponent state={state} stateKey='hungry' onChange={() => onChange('hungry')} />
        </SafeAreaView>
    )

}

const styles = StyleSheet.create({
    container:{flex:1,justifyContent:'center',alignItems:'center'},
    switch:{marginVertical:10}
})

export default SwitchCollection