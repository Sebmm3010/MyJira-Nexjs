import { ChangeEvent, useState } from "react";

export const useForm = (inputState:string) => {


    const [inputValue, setInputValue] = useState(inputState);
    const [touched, setTouched] = useState(false);


    const onInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
        setInputValue(target.value);
    }

    return{
        //* Parametros
        inputValue,
        touched,
        //* Metodos
        setInputValue,
        setTouched,
        onInputChange
    }
}