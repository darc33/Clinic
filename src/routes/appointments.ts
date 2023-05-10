import express from "express";
import * as appointmentServices from '../services/appointmentServices'
import {validationResult} from "express-validator"
import {toNewAppointmentEntry} from "../utils";

const arouter = express.Router()

arouter.get('/', (_req, res) =>{
    appointmentServices.getAppointments().then(function(result:any){res.render("appointments", {"appointmentlist":result})})
    res.status(200)
})

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

export default arouter