import { DoctorEntry, Specialty, newDoctorEntry } from '../types'
import doctorData from './doctors.json'
import {query, get, insert} from './db'
import { Result } from 'express-validator'

const doctors: Array<DoctorEntry> = doctorData as Array<DoctorEntry>
export const getEntries = () => doctors
export const getEntriesdb = () => query(`SELECT name, lastname, specialty, consultory, email FROM doctors`,[]);
export const getDoctorById =async (doctor_id:string) => {
    const rslt = await query(`SELECT * FROM doctors where id=?`,[doctor_id]);
    if (Object.keys(rslt).length === 0){
        return 'Doctor does not exist'

    } else{
        return rslt
    }
    
}
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

export const updatedoctordb = async (doctor_id:string, params:any)=>{
    const errors =[]
    const rslt1: any = await query(`SELECT EXISTS(SELECT * FROM doctors WHERE id=?)`, [doctor_id]);
    const res1 = Object.values(rslt1[0])[0]
    if (res1 == 0) {
        errors.push({'msg':'Doctor no existe'});
    };

    if (errors.length != 0) {
        return errors
    }
    else {
        query("UPDATE doctors SET ? WHERE id=?",[params, doctor_id]);
        return 'Doctor was updated successfully'
    }

}

export const deleteDoctordb = async (doctor_id:string)=>{
    const errors =[]
    const rslt1: any = await query(`SELECT EXISTS(SELECT * FROM doctors WHERE id=?)`, [doctor_id]);
    const res1 = Object.values(rslt1[0])[0]
    if (res1 == 0) {
        errors.push({'msg':'Doctor no existe'});
    };

    if (errors.length != 0) {
        return errors
    }
    else {
        query("DELETE FROM doctors WHERE id=?",[doctor_id]);
        return 'Doctor was deleted successfully'
    }
}