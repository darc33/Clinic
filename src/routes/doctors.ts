import express from "express";
import * as doctorServices from '../services/doctorServices'
import bodyParser, { json } from 'body-parser'
import toNewDoctorEntry from "../utils";
import {body, validationResult} from "express-validator"
import { Specialty, newDoctorEntry } from "../types";
const urlencodedParser =bodyParser.urlencoded({extended: true})
const jsonParser=bodyParser.json()
const router = express.Router()

router.get('/', (_req, res) =>{
    //res.send(doctorServices.getEntries())
    doctorServices.getEntriesdb().then(function(result:any){res.render("doctors", {"doctorlist":result})})
    
})

router.post('/', toNewDoctorEntry, (req:any, res:any)=>{

    const errors =validationResult(req)
    if (!errors.isEmpty()){
        //const rslt  = doctorServices.getEntries()
        //res.render("doctors", {errors: errors.array(), 'doctorlist' : rslt})
        doctorServices.getEntriesdb().then(function(result:any){res.render("doctors", {"doctorlist":result, errors:errors.array()})})
        console.log(errors.array())
        //return res.json({errors: errors.array()})
        return
    } else {
        console.log(req.body)
        const name = req.body.nameInput;
        const lastname = req.body.lastnameInput;
        const Specialty = req.body.specialtyInput;
        const Consultory = req.body.consultoryInput
        const Email = req.body.emailInput
        
        const addedDoctorEntry = doctorServices.addEntrydb(name, lastname, Specialty, Consultory, Email)
        console.log(addedDoctorEntry)
        //const rslt  = doctorServices.getEntries()
        //res.render("doctors", {'success':"success", 'doctorlist' : rslt})
        /*doctorServices.adddoctorsdb(name, lastname, Specialty, Consultory, Email)
        console.log("RUTA2:", doctorServices.doctorsdb)
        doctorServices.doctorsdb.then(function(result){res.render("doctors", {"doctorlist":result,'success':"success"})})*/
        setTimeout(()=>{
        doctorServices.getEntriesdb().then(function(result:any){res.render("doctors", {"doctorlist":result, 'success':"success"})})
        }, 2000);
        //res.json(addedDoctorEntry)
    }
    
    /*
    try {
        const newDoctorEntry = toNewDoctorEntry(req.body)
        const addedDoctorEntry = doctorServices.addEntry(newDoctorEntry)
        res.json(addedDoctorEntry)

    } catch (e){
        res.status(400).send(e.message)
    }*/
    

})

export default router