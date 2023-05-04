import {query} from './db'

export const getAppointments = () => query(`SELECT cc, specialty FROM appointments`,[]);

export const addAppointment = (params:any) =>
    query(
        "INSERT INTO appointments(cc, specialty) VALUES (?,?)",
        [params.ccInput, params.specialtyInput]); 