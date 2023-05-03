import mysql from "mysql2";
import * as dotenv from "dotenv"

dotenv.config()

const{DB_USER, DB_PASSWORD, DB_NAME, DB_HOST} = process.env
console.log(DB_USER,DB_PASSWORD,DB_NAME,DB_HOST)

export const pool = mysql.createPool({
    connectionLimit : 10,
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME
})

export const config ={
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME
    
}
