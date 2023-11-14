//import mangoose
const mongoose = require('mongoose')

//get connectionstring from process.env
const connectionString = process.env.DATABASE

//connect mongodb with node using mangoose
mongoose.connect(connectionString).then(()=>{
    console.log("Mongodb Atlas Successfully Connected with pfServer!!!");
}).catch((err)=>{
    console.log(`Mongodb connection failed !!! Error :${err}`);
})