import { ValidatorConstraint, ValidatorConstraintInterface, ValidationArguments } from 'class-validator';

@ValidatorConstraint({name: 'isDateRange', async: false})
export class validarFecha implements ValidatorConstraintInterface{

    validate(value: any, args: ValidationArguments){
        if(!value) return false; //no hay valores.

        const minDate = new Date('1900-01-01'); //Fecha minima
        const maxDate = new Date(); //Fecha actual

        const dateValue = new Date(value);

        return dateValue >= minDate && dateValue <= maxDate; //Comparo las fechas y retorno
    }
    defaultMessage(args: ValidationArguments){
        return "No se encuentra en el rango de fecha [1900-01-01] a Actualidad"; //En caso de que no sean iguales
    }

}
