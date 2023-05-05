import express from "express";
import * as patientServices from '../services/patientServices'
import {validationResult} from "express-validator"
import {toNewPatientEntry} from "../utils";

const prouter = express.Router()

prouter.get('/', (_req, res) =>{
    patientServices.getPatients().then(function(result:any){res.render("patients", {"patientlist":result})})
    res.status(200)
})

prouter.post('/', toNewPatientEntry, (req:any, res:any)=>{

    const errors =validationResult(req)
    if (!errors.isEmpty()){
        patientServices.getPatients().then(function(result:any){res.render("patients", {"patientlist":result, errors:errors.array()})})
        res.status(400)
        console.log(errors.array())
        return
    } else {
        
        const addedDoctorEntry = patientServices.addPatient(req.body).then()
        console.log(addedDoctorEntry)
        
        setTimeout(()=>{
        patientServices.getPatients().then(function(result:any){res.render("patients", {"patientlist":result, 'success':"success"})})
        }, 2000);

        return res.status(200)
        
    }   

})

export default prouter