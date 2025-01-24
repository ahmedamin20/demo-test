import {  UseFormRegister } from "react-hook-form";
import { FieldErrors } from "react-hook-form";

export interface TFormDefaulProps {
    register: UseFormRegister<any>;
    errors: FieldErrors<any>;
}