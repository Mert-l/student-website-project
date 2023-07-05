const express = require('express')
const app = express()



mongoose = require('mongoose')
require('dotenv').config()
var cors = require('cors')


const PORT = process.env.PORT || 4000
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


    // const connectDB = async () => {

    //         try{
    //             const conn = await mongoose.connect(process.env.MONGO);
    //             console.log('hey');
    //             console.log(`MongoDB connested ${conn.connetction.host}`)
    //         } catch(err){
    //             console.log(err);
    //             process.exit(1);
    //         }

    // }





    


    app.use('/user', require("./routs/Users"))
    app.use('/post', require("./routs/Posts"))
    app.use('/contact', require("./routs/_Contact"))


    const path = require('path');

app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, '../client/build')));

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});
  

connecting().then(app.listen(PORT,  ()=> {
    console.log('listening on port 4000!')
}))