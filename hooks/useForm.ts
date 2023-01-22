import { ChangeEvent, useState } from "react";

export const useForm = () => {


    const [inputValue, setInputValue] = useState('');
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