import { useEffect, useState } from "react";
import fetchComponent from "../components/fetch";
import { TopLevel, Content as digimon } from "../interfaces/digimon";
import { random } from "underscore";

const digiHook = () => {

    const [ digimons , setDigimons ] = useState<digimon[]>([]);
    const [ amount , setAmount ] = useState<number>(0);
    const [ pointer , setPointer ] = useState<number>(random(0,amount));

    const roll = () => setPointer(v => random(0,amount));

    const getDigimon = () => digimons[pointer];

    useEffect(() => {
        fetchComponent<TopLevel>({
            route:'https://digi-api.com/api/v1/digimon?pageSize=100',
            method:'GET',
        })
        .then( (resp) => { setDigimons(v => resp.content) ; setAmount(v => resp.content.length) } )
        .catch(console.log);
    },[])

    return ({digimons,getDigimon,roll})

}

export default digiHook