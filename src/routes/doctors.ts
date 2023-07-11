import express from "express";
import bodyParser from 'body-parser'
import {toNewDoctorEntry} from "../utils/utils"
import { getDoctors, getDoctorById, createDoctor, updateDoctor, deleteDoctor } from "../controllers/doctorController";

const urlencodedParser =bodyParser.urlencoded({extended: true})
const jsonParser=bodyParser.json()
const router = express.Router()

//List all doctors
router.get('/', getDoctors)

//Create Doctor
router.post('/', toNewDoctorEntry, createDoctor)

//Update Doctor
router.patch('/:doctor_id/update',updateDoctor)

//Get doctor by id
router.get('/:doctor_id',getDoctorById)

//Delete doctor by id
router.delete('/:doctor_id',deleteDoctor)

export default router