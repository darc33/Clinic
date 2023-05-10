import { query } from './db'

//export const getAppointments = () => query(`SELECT cc, specialty FROM appointments`,[]);
export const getAppointments = () => query(
    `SELECT patients.name pname, patients.lastname plname,appointments.cc, appointments.specialty, doctors.name, doctors.lastname, doctors.consultory 
    FROM appointments, doctors, patients 
    WHERE appointments.specialty=doctors.specialty AND appointments.cc=patients.cc 
    GROUP BY appointments.specialty, appointments.cc`, []);

export const addAppointment = async (params: any) => {
    const errors =[]//: {key : string , value : string}[] = []
    const rslt1: any = await query(`SELECT EXISTS(SELECT * FROM patients WHERE cc=?)`, [params.ccInput]);
    const rslt2: any = await query(`SELECT EXISTS(SELECT * FROM doctors WHERE specialty=?)`, [params.specialtyInput]);
    const res1 = Object.values(rslt1[0])[0]
    const res2 = Object.values(rslt2[0])[0]
    if (res1 == 0) {
        errors.push({'msg':'Paciente no existe'});
    };
    if (res2 === 0) {
        errors.push({'msg':'No hay ningun doctor disponible en esa especialidad'});
    };

    if (errors.length != 0) {
        return errors
    }
    else {
        query(
            "INSERT INTO appointments(cc, specialty) VALUES (?,?)",
            [params.ccInput, params.specialtyInput]);
        return 'success'
    }
}