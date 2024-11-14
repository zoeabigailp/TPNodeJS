import { IsDateString, IsNumber, IsString, IsEnum, Matches, Validate } from "class-validator";
import {validarFecha} from '../app.validaciones'

export enum DocumentType {
    CUIT = 'CUIT',
    DNI = 'DNI',
}


export class Requests{
    @IsString()
    @Matches(/^[A-Z][a-zA-Z]*$/, {message: 'Primer letra del name debe ser mayuscula'})
    name: string;
    
    @IsString()
    @Matches(/^[A-Z][a-zA-Z]*$/, {message: 'Primer letra del suraname debe ser mayuscula'})
    suraname: string;
    
    @IsDateString()
    @Validate(validarFecha) //Llamo a mi funcion validarFecha
    birthday: string;
    
    @IsNumber()
    age: number;
   
    @IsEnum(DocumentType, {message: "Tipo de documento incorrecto, solo admite DNI o CUIT"}) //Valida que sea uno de estos
    documentType: string;
   
    @IsNumber()
    documentNumber: number;
}