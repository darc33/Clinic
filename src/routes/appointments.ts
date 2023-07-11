import express from "express";
import * as appointmentServices from '../services/appointmentServices'
import {validationResult} from "express-validator"
import {toNewAppointmentEntry} from "../utils";

const arouter = express.Router()

//List all appointments
arouter.get('/', (_req, res) =>{
    appointmentServices.getAppointments().then(function(result:any){res.render("appointments", {"appointmentlist":result})})
    res.status(200)
})

//Create appointment
arouter.post('/', toNewAppointmentEntry, async (req:any, res:any)=>{

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

})

//Update Patient
arouter.patch('/:appointment_id/update',(req:any, res:any)=>{
    const id = req.params.appointment_id
    appointmentServices.updateAppointmentdb(id, req.body).then(function(result:any){res.status(200).json(result)})

})

//Get patient by id
arouter.get('/:appointment_id',(req, res) =>{

    appointmentServices.getAppointmentById(req.params.appointment_id).then(function(result:any){res.status(200).json(result)})
})

//Delete patient by id
arouter.delete('/:appointment_id',(req, res)=>{
    appointmentServices.deleteAppointmentdb(req.params.appointment_id).then(function(result:any){console.log(result),res.status(200).json(result)})   
})

export default arouter