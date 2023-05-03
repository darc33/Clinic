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