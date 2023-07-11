import * as doctorServices from '../services/doctorServices'
import {validationResult} from "express-validator"
import { Specialty, newDoctorEntry } from "../models/types";

export function getDoctors (req:any, res:any): Promise<void>{
    doctorServices.getEntriesdb().then(function(result:any){res.render("doctors", {"doctorlist":result})})
    return res.status(200)
}

export function getDoctorById(req:any, res: any): void{
    doctorServices.getDoctorById(req.params.doctor_id).then(function(result:any){res.status(200).json(result)})
}

export function createDoctor(req:any, res: any):void{
    const errors =validationResult(req)
    if (!errors.isEmpty()){
        //const rslt  = doctorServices.getEntries()
        //res.render("doctors", {errors: errors.array(), 'doctorlist' : rslt})
        doctorServices.getEntriesdb().then(function(result:any){res.render("doctors", {"doctorlist":result, errors:errors.array()})})
        res.status(400)
        return
    } else {
        const name = req.body.nameInput;
        const lastname = req.body.lastnameInput;
        const Specialty = req.body.specialtyInput;
        const Consultory = req.body.consultoryInput
        const Email = req.body.emailInput
        
        const addedDoctorEntry = doctorServices.addEntrydb(name, lastname, Specialty, Consultory, Email)
        //const rslt  = doctorServices.getEntries()
        //res.render("doctors", {'success':"success", 'doctorlist' : rslt})
        /*doctorServices.adddoctorsdb(name, lastname, Specialty, Consultory, Email)
        console.log("RUTA2:", doctorServices.doctorsdb)
        doctorServices.doctorsdb.then(function(result){res.render("doctors", {"doctorlist":result,'success':"success"})})*/
        setTimeout(()=>{
        doctorServices.getEntriesdb().then(function(result:any){res.render("doctors", {"doctorlist":result, 'success':"success"})})
        }, 2000);
        return res.status(200)
        //res.json(addedDoctorEntry)
    }

}

export function updateDoctor(req:any, res:any): void{
    const id = req.params.doctor_id
    doctorServices.updatedoctordb(id, req.body).then(function(result:any){res.status(200).json(result)})
}

export function deleteDoctor(req:any, res:any): void{
    doctorServices.deleteDoctordb(req.params.doctor_id).then(function(result:any){res.status(200).json(result)})
}