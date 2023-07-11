import mysql from "mysql2"
import mysql2 from 'mysql2/promise'
import {config} from "../config/connect"


/*export const query = (sql:any) =>{
    const connection = mysql.createConnection(config)
    connection.connect(function(err){
        if (err) throw err;
        const results = connection.query(sql, function(err,result,fields){
            if (err) throw err;
            console.log("resultados db",result)
            return result

        })
    })
    const results = connection.query(sql)
    console.log("otros resultaods",results)
    
} */

export async function get(table:string, params:any) {
    const connection = await mysql2.createConnection(config)
    const query = `SELECT ${params} FROM ${table}`
    const [data]= await connection.query(query)
    return data
}

export async function insert(table:string, params:any, values:any) {
    const connection = await mysql2.createConnection(config)
    const query = `INSERT INTO ${table}(${params}) VALUES (?)`
    console.log (query, values)
    const[result] = await connection.query(query, values)
    return result
    
}

export async function query(sql:any,params:any) {
    const connection = mysql.createConnection(config)
    const results = await connection.promise().query(sql,params)
    return results[0]
}



