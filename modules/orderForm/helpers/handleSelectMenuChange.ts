import { Dispatch, SetStateAction } from "react";


interface IHandleSelectMenuChange {
    e: React.ChangeEvent<HTMLSelectElement>;
    setValue: any;
    setState: Dispatch<SetStateAction<string | number | null>>;
    inputName: string;
    isNumebr: boolean;
}


export const handleSelectMenuChange = ({e, setValue, setState, inputName, isNumebr} : IHandleSelectMenuChange) => {
    const value = isNumebr ? parseInt(e?.target?.value) : e?.target?.value;
    setValue(inputName, value);
    setState(value);
  };