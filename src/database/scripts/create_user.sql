CREATE USER 'clinic_api'@'localhost' IDENTIFIED BY 'ASD';

GRANT ALL PRIVILEGES ON clinic.doctors, clinic.patients, clinic.appointments TO 'clinic_api'@'localhost';

FLUSH PRIVILEGES;