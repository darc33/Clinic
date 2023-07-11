import express from "express";
import * as patientServices from '../services/patientServices'
import {validationResult} from "express-validator"
import {toNewPatientEntry} from "../utils";

const prouter = express.Router()

//Get all patients
prouter.get('/', (_req, res) =>{
    patientServices.getPatients().then(function(result:any){res.render("patients", {"patientlist":result})})
    res.status(200)
})

//Create patients
prouter.post('/', toNewPatientEntry, (req:any, res:any)=>{

    const errors =validationResult(req)
    if (!errors.isEmpty()){
        patientServices.getPatients().then(function(result:any){res.render("patients", {"patientlist":result, errors:errors.array()})})
        res.status(400)
        return
    } else {
        
        const addedDoctorEntry = patientServices.addPatient(req.body).then()
        
        setTimeout(()=>{
        patientServices.getPatients().then(function(result:any){res.render("patients", {"patientlist":result, 'success':"success"})})
        }, 2000);

        return res.status(200)
        
    }   

})

//Update Patient
prouter.patch('/:patient_id/update',(req:any, res:any)=>{
    const id = req.params.patient_id
    patientServices.updatePatientdb(id, req.body).then(function(result:any){res.status(200).json(result)})

})

//Get patient by id
prouter.get('/:patient_id',(req, res) =>{

    patientServices.getPatientById(req.params.patient_id).then(function(result:any){res.status(200).json(result)})
})

//Delete patient by id
prouter.delete('/:patient_id',(req, res)=>{
    patientServices.deletePatientdb(req.params.patient_id).then(function(result:any){console.log(result),res.status(200).json(result)})   
})

export default prouter