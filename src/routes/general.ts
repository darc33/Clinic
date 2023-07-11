import express from "express";
import { getDoctors } from "../controllers/doctorController";
import { getPatients } from "../controllers/patientController";
import { getAppointments } from "../controllers/appointmentController";

const router = express.Router()

router.get('/', (_req, res) =>{
    res.render("index")
})

router.get('/doctors', getDoctors)

router.get('/patients', getPatients)

router.get('/appointments', getAppointments)

export default router