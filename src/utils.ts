//Validations for the entry fields

import {Specialty, newDoctorEntry} from './types'
import {check, validationResult} from "express-validator"

const parseName = (nameFromRquest: any): string => {
    if (!isString(nameFromRquest)) {
        throw new Error('Nombre incorrecto o faltante')
    }
    return nameFromRquest
}

const parseSpecialty = (specialtyFromRequest: any): Specialty => {
    if(!isString(specialtyFromRequest) || isSpecialty(specialtyFromRequest)){
        throw new Error('Especialidad incorrecta o faltante')
    }
    return specialtyFromRequest
}

const parseConsultory = (consultoryFromRequest: any): number => {
    if (!isNumber(consultoryFromRequest)){
        throw new Error('Consultorio incorrecto o faltante')        
    }
    return consultoryFromRequest
}

const isString = (string: string): boolean => {
    return typeof string =='string'
}

const isSpecialty = (param: any): boolean =>{
    return Object.values(Specialty).includes(param)
}

const isNumber = (number:number):boolean => {
    return typeof number =='number'
}

/*const toNewDoctorEntry = (object:any): newDoctorEntry => {
    const newEntry: newDoctorEntry = {
        name: parseName(object.name),
        lastname: parseName(object.lastname),
        Specialty: parseSpecialty(object.specialty),
        Consultory: parseConsultory(object.Consultory),
        Email: parseName(object.Email)
    }

    return newEntry
}*/

export const toNewDoctorEntry =[
    check('nameInput')
    .trim()
    .escape()
    .notEmpty()
    .withMessage("Por favor ingrese el nombre.").bail()
    .isAlpha()
    .withMessage("El nombre tiene caracteres no permitidos"),

    check('lastnameInput')
    .trim()
    .escape()
    .notEmpty()
    .withMessage("Por favor ingrese el apellido.").bail()
    .isAlpha()
    .withMessage("El apellido tiene caracteres no permitidos"),

    check('consultoryInput')
    .trim()
    .escape()
    .notEmpty()
    .withMessage("Por favor ingrese el consultorio").bail()
    .isNumeric()
    .withMessage("Solo consultorios numericos"),

    check('emailInput')
    .trim()
    .escape()
    .notEmpty()
    .withMessage("Por favor ingrese el E-mail").bail()
    .isEmail()
    .withMessage("E-mail invalido")
]

export const toNewPatientEntry =[
    check('nameInput')
    .trim()
    .escape()
    .notEmpty()
    .withMessage("Por favor ingrese el nombre.").bail()
    .isAlpha()
    .withMessage("El nombre tiene caracteres no permitidos"),

    check('lastnameInput')
    .trim()
    .escape()
    .notEmpty()
    .withMessage("Por favor ingrese el apellido.").bail()
    .isAlpha()
    .withMessage("El apellido tiene caracteres no permitidos"),

    check('ccInput')
    .trim()
    .escape()
    .notEmpty()
    .withMessage("Por favor ingrese el documento de identificacion").bail()
    .isNumeric()
    .withMessage("Solo documentos de identificacion numericos"),

    check('ageInput')
    .trim()
    .escape()
    .notEmpty()
    .withMessage("Por favor ingrese la edad").bail()
    .isNumeric()
    .withMessage("Edad en numeros"),

    check('telephoneInput')
    .trim()
    .escape()
    .notEmpty()
    .withMessage("Por favor ingrese un numero de telefono").bail()
    .isNumeric()
    .withMessage("Solo numeros")
]

export const toNewAppointmentEntry =[
    check('ccInput')
    .trim()
    .escape()
    .notEmpty()
    .withMessage("Por favor ingrese el documento de identificacion").bail()
    .isNumeric()
    .withMessage("Solo documentos de identificacion numericos")
]