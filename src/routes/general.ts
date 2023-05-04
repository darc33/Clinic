import express from "express";
import * as doctorServices from '../services/doctorServices'
import * as patientServices from '../services/patientServices'
import * as appointmentServices from '../services/appointmentServices'


const router = express.Router()


router.get('/', (_req, res) =>{
    res.render("index")
})

router.get('/doctors', (req, res) => {
    //const rslt  = doctorServices.getEntries()
    const rslt =doctorServices.getEntriesdb().then(function(result){res.render("doctors", {"doctorlist":result})})
    //console.log("RUTA:", doctorServices.doctorsdb)
    //doctorServices.doctorsdb.then(function(result){res.render("doctors", {"doctorlist":result})})
    //console.log("nonsoossoosso", rslt)
    //res.render("doctors", {'doctorlist' : rslt})
})

router.get('/patients', (req,res) =>{
    patientServices.getPatients().then(function(result:any){res.render("patients", {"patientlist":result})})
})

router.get('/appointments', (req,res) =>{
    appointmentServices.getAppointments().then(function(result:any){res.render("appointments", {"appointmentlist":result})})
})

router.post('/', (req, res)=>{   

})

export default router