import express from "express";
import {toNewAppointmentEntry} from "../utils/utils";
import { getAppointments, getAppointmentById, createAppointment, updateAppointment, deleteAppointment } from "../controllers/appointmentController";

const arouter = express.Router()

//List all appointments
arouter.get('/', getAppointments)

//Create appointment
arouter.post('/', toNewAppointmentEntry, createAppointment)

//Update Patient
arouter.patch('/:appointment_id/update',updateAppointment)

//Get patient by id
arouter.get('/:appointment_id',getAppointmentById)

//Delete patient by id
arouter.delete('/:appointment_id',deleteAppointment)

export default arouter