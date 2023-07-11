import {query} from './db'
import { newPatientEntry, Patient } from '../types'

export const getPatients = () => query(`SELECT name, cc, lastname, age, telephone FROM patients`,[]);

export const getPatientById =async (patient_id:string) => {
    const rslt = await query(`SELECT * FROM patients where id=?`,[patient_id]);
    if (Object.keys(rslt).length === 0){
        return 'Patient does not exist'
    } else{
        return rslt
    }
    
}

export const addPatient = (params:any)=>//(name:string, lastname: string, cc:number, age: number, telephone: number) =>
    query(
        `INSERT INTO patients(name, cc, lastname, age, telephone) VALUES (?,?,?,?,?)`,
        [params.nameInput, params.ccInput, params.lastnameInput, params.ageInput, params.telephoneInput]); 

export const updatePatientdb = async (patient_id:string, params:any)=>{
    const errors =[]
    const rslt1: any = await query(`SELECT EXISTS(SELECT * FROM patients WHERE id=?)`, [patient_id]);
    const res1 = Object.values(rslt1[0])[0]
    if (res1 == 0) {
        errors.push({'msg':'Paciente no existe'});
    };

    if (errors.length != 0) {
        return errors
    }
    else {
        query("UPDATE patients SET ? WHERE id=?",[params, patient_id]);
        return 'Patient was updated successfully'
    }

}

export const deletePatientdb = async (patient_id:string)=>{
    const errors =[]
    const rslt1: any = await query(`SELECT EXISTS(SELECT * FROM patients WHERE id=?)`, [patient_id]);
    const res1 = Object.values(rslt1[0])[0]
    if (res1 == 0) {
        errors.push({'msg':'Paciente no existe'});
    };

    if (errors.length != 0) {
        return errors
    }
    else {
        query("DELETE FROM patients WHERE id=?",[patient_id]);
        return 'Patient was deleted successfully'
    }
}

    
