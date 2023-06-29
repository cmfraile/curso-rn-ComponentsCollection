import { useEffect, useState } from "react"
import { View , Text } from "react-native"
import { random } from "underscore"

const BurningBattery = () => {

    const [ number , setNumber ] = useState<number>(0)

    useEffect(() => {
        const interval = setInterval(() => setNumber(v => random(0,999999999999)),50);
        return () => clearInterval(interval);
    },[])

    return(
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <Text style={{textAlign:'justify',fontSize:50,color:'black'}}>{number}</Text>
            <Text style={{textAlign:'justify',fontSize:50,color:'black'}}>{number}</Text>
            <Text style={{textAlign:'justify',fontSize:50,color:'black'}}>{number}</Text>
            <Text style={{textAlign:'justify',fontSize:50,color:'black'}}>{number}</Text>
        </View>
    )

}

export default BurningBattery