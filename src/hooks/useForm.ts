import { useEffect, useState } from "react";

const useForm = <typeofInitialForm extends {}>(initialForm:{[key:string]:string}) => {

    const [ formState , setFormState ] = useState(initialForm);

    const onInputChange = (value:string,name:keyof typeofInitialForm) => {
        const setFormStateCallback = () => setFormState({...formState,[ name ]:value}) ;
        setFormStateCallback() ;
    }

    const onResetForm = () => setFormState(initialForm);
    
    return({ formState , onInputChange , onResetForm , setFormState });

}

export default useForm