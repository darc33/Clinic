import express from "express";
import * as doctorServices from '../services/doctorServices'


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
    res.render("patients")
})

router.get('/appointments', (req,res) =>{
    res.render("appointments")
})

router.post('/', (req, res)=>{   

})

export default router