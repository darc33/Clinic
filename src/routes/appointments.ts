import express from "express";
import * as appointmentServices from '../services/appointmentServices'
import {validationResult} from "express-validator"
import {toNewAppointmentEntry} from "../utils";

const arouter = express.Router()

arouter.get('/', (_req, res) =>{
    appointmentServices.getAppointments().then(function(result:any){res.render("appointments", {"appointmentlist":result})})
})

arouter.post('/', toNewAppointmentEntry, (req:any, res:any)=>{

    const errors =validationResult(req)
    if (!errors.isEmpty()){
        appointmentServices.getAppointments().then(function(result:any){res.render("appointments", {"appointmentlist":result, errors:errors.array()})})
        console.log(errors.array())
        return
    } else {
        const addedDoctorEntry = appointmentServices.addAppointment(req.body).then()
        console.log(addedDoctorEntry)
        
        setTimeout(()=>{
        appointmentServices.getAppointments().then(function(result:any){res.render("appointments", {"appointmentlist":result, 'success':"success"})})
        }, 2000);
        
    }   

})

export default arouter