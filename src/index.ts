import express from 'express'
import path from "path"
import bodyParser from 'body-parser'
import * as dotenv from "dotenv"
const urlencodedParser =bodyParser.urlencoded({extended: true})
dotenv.config()

const app = express()

app.use(express.urlencoded({extended:true}))
//app.use(express.json())
//app.use(bodyParser.json());
//app.use(urlencodedParser);
import doctorRouter from './routes/doctors'
import patientRouter from './routes/patients'
import gRouter from './routes/general'





app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs")

const PORT = 3000

app.get('/ping', (_req, res) => {
    console.log('uh un ping!!')
    res.send('pang')
})

app.use('/api/doctors', doctorRouter)
app.use('/api/patients', patientRouter)
app.use('/', gRouter)

app.listen(PORT, ()=> {
    console.log(`S running on port ${PORT}`)
})
