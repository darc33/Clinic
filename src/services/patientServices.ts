import {query} from './db'

export const getPatients = () => query(`SELECT name, cc, lastname, age, telephone FROM patients`,[]);

export const addPatient = (params:any)=>//(name:string, lastname: string, cc:number, age: number, telephone: number) =>
    query(
        `INSERT INTO patients(name, cc, lastname, age, telephone) VALUES (?,?,?,?,?)`,
        [params.nameInput, params.ccInput, params.lastnameInput, params.ageInput, params.telephoneInput]); 

    
