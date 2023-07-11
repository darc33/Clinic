//This file includes all the models required for the project

//export type Specialty = 'Medicina general' | 'Cariologia' | 'Medicina interna' | 'Dermatologia' | 'Rehabilitacion fisica' | 'Psicologia' | 'Odontologia' | 'Radiologia'
export enum Specialty {
    Mgeneral = 'Medicina general',
    Cardiologia = 'Cardiologia',
    Minterna = 'Medicina interna',
    Dermatologia = 'Dermatologia',
    Rfisica = 'Rehabilitacion fisica',
    Psicologia = 'Psicologia',
    Odontologia = 'Odontologia',
    Radiologia = 'Radiologia'
}

export interface DoctorEntry {
    id: number,
    name: string,
    lastname: string,
    Specialty: Specialty,
    Consultory: number,
    Email: string
}

export type newDoctorEntry = Omit<DoctorEntry, 'id'>

export interface Patient {
    id:number,
    name: string,
    lastname: string,
    identification: number,
    age: number,
    telephone: number
}

export type newPatientEntry = Omit<Patient, 'id'>

export interface Appointment {
    id:number,
    patient_id: number,
    patient_name: string,
    patient_lname: string,
    Specialty:Specialty,
    doctor_name: string,
    doctor_lname:string,
    doctor_consultory: number,
}

export interface newAppointmentEntry {
    patiend_id: number,
    Specialty: Specialty
}