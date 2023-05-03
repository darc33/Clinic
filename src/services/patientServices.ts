import {query} from './db'

export const getPatients = () => query(`SELECT name, cc, lastname, age, telephone FROM patients`,[]);

export const addPatient = (name:string, lastname: string, cc:number, age: number, telephone: string) =>
    query(
        "INSERT INTO patients(name, cc, lastname, age, telephone) VALUES (?,?,?,?,?)",
        [name, cc, lastname, age, telephone]); 
