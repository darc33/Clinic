import express from "express";
import {toNewPatientEntry} from "../utils/utils";
import { getPatients, getPatientById, createPatient, updatePatient, deletePatient } from "../controllers/patientController";

const prouter = express.Router()

//Get all patients
prouter.get('/', getPatients)

//Create patients
prouter.post('/', toNewPatientEntry, createPatient)

//Update Patient
prouter.patch('/:patient_id/update',updatePatient)

//Get patient by id
prouter.get('/:patient_id',getPatientById)

//Delete patient by id
prouter.delete('/:patient_id',deletePatient)

export default prouter