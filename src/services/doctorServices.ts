import { DoctorEntry, Specialty } from '../types'
import doctorData from './doctors.json'
import {query, get, insert} from './db'
import { Result } from 'express-validator'

const doctors: Array<DoctorEntry> = doctorData as Array<DoctorEntry>
export const getEntries = () => doctors
export const getEntriesdb = () => query(`SELECT name, lastname, specialty, consultory, email FROM doctors`,[]);
//console.log("qresults",query(`SELECT name, lastname, specialty, consultory, email FROM doctors`))
//console.log("resultados", getEntriesdb)
export const addEntry = (name: string, lastname: string, Specialty: Specialty, Consultory: number, Email: string): DoctorEntry => {
    const newDoctorEntry = {
        id: doctors.length + 1,
        name,
        lastname,
        Specialty,
        Consultory,
        Email
    }

    doctors.push(newDoctorEntry)
    return newDoctorEntry
}

export const addEntrydb = (name:string, lastname: string, Specialty: Specialty, Consultory: number, Email: string) =>{
    const result = query(
        "INSERT INTO doctors(name, lastname, specialty, consultory, email) VALUES (?,?,?,?,?)",
        [name, lastname, Specialty, Consultory, Email]) 
    
    return "success"
}

export const doctorsdb = get('doctors', ['name', 'lastname','specialty', 'consultory', 'email'])

export const adddoctorsdb = (name:string, lastname: string, Specialty: Specialty, Consultory: number, Email: string) =>{
    const result=insert('doctors', ['name', 'lastname','specialty', 'consultory', 'email'], [name, lastname, Specialty, Consultory, Email])
    console.log("added:", result)
} 