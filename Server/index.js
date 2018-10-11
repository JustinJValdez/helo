const express = require('express'),
        cors=require('cors'),
        bodyparser=require('body-parser'),
       /* massive= require('massive'),*/
        axios = require ('axios',)
        controller=require('./controller')
    require('dotenv').config();

    const app=express();

/*massive(process.env.CONNECTION_STRING)
    .then(dbinstance => {
    app.set('db', dbinstance)
    console.log(`DB is Running`)
    }).catch( err=>console.log(err));*/


    app.use(cors());
    app.use(bodyparser.json());


    const port = process.env.SERVER_PORT || 8500

    app.listen(port,()=>{
        console.log(`active port on ${port}`)
    })