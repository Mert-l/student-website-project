const express = require('express')
const app = express()



mongoose = require('mongoose')
require('dotenv').config()
var cors = require('cors')



app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json());

async function connecting(){
    try {
        await mongoose.connect(process.env.MONGO) 
        console.log('Connected to the DBBBB')
    } catch ( error ) {
        console.log('ERROR: Seems like your DB is not running, please start it up !!!');
    }
    }
    connecting();


    app.use('/user', require("./routs/Users"))
    app.use('/post', require("./routs/Posts"))

app.listen(4000,  ()=> {
    console.log('listening on port 4000!')
})