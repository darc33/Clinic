import * as patientServices from '../services/patientServices'
import {validationResult} from "express-validator"

export function getPatients(req:any, res:any):Promise<void>{
    patientServices.getPatients().then(function(result:any){res.render("patients", {"patientlist":result})})
    return res.status(200)
}

export function getPatientById(req:any, res:any):void{
    patientServices.getPatientById(req.params.patient_id).then(function(result:any){res.status(200).json(result)})
}

export function createPatient(req:any, res:any):void{
    const errors =validationResult(req)
    if (!errors.isEmpty()){
        patientServices.getPatients().then(function(result:any){res.render("patients", {"patientlist":result, errors:errors.array()})})
        res.status(400)
        return
    } else {
        
        const addedpatientEntry = patientServices.addPatient(req.body).then()
        
        setTimeout(()=>{
        patientServices.getPatients().then(function(result:any){res.render("patients", {"patientlist":result, 'success':"success"})})
        }, 2000);

        return res.status(200)
        
    }
}

export function updatePatient(req:any, res:any):void{
    const id = req.params.patient_id
    patientServices.updatePatientdb(id, req.body).then(function(result:any){res.status(200).json(result)})
}

export function deletePatient(req:any, res:any):void{
    patientServices.deletePatientdb(req.params.patient_id).then(function(result:any){console.log(result),res.status(200).json(result)})
}