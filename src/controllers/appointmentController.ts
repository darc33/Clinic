import * as appointmentServices from '../services/appointmentServices'
import {validationResult} from "express-validator"

export function getAppointments(req:any, res:any):Promise<void>{
    appointmentServices.getAppointments().then(function(result:any){res.render("appointments", {"appointmentlist":result})})
    return res.status(200)
}

export function getAppointmentById(req:any, res:any):void{
    appointmentServices.getAppointmentById(req.params.appointment_id).then(function(result:any){res.status(200).json(result)})
}

export async function createAppointment(req:any, res:any):Promise<void>{
    const errors =validationResult(req)
    if (!errors.isEmpty()){
        appointmentServices.getAppointments().then(function(result:any){res.render("appointments", {"appointmentlist":result, errors:errors.array()})})
        res.status(400)
        return
    } else {
        const addedDoctorEntry = await appointmentServices.addAppointment(req.body)//.then()

        if (addedDoctorEntry == 'success'){
            appointmentServices.getAppointments().then(function(result:any){res.render("appointments", {"appointmentlist":result, 'success':"success"})})
        }
        else{
            appointmentServices.getAppointments().then(function(result:any){res.render("appointments", {"appointmentlist":result, errors:addedDoctorEntry})})
        }
        return res.status(200)
        
    }
}

export function updateAppointment(req:any, res:any):void{
    const id = req.params.appointment_id
    appointmentServices.updateAppointmentdb(id, req.body).then(function(result:any){res.status(200).json(result)})
}

export function deleteAppointment(req:any, res:any):void{
    appointmentServices.deleteAppointmentdb(req.params.appointment_id).then(function(result:any){res.status(200).json(result)})   
}