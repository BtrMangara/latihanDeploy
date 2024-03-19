const express = require('express')
const app = express();


app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/',(req,res)=>{
    res.json({
        message:"Hello World!"
    });
})
app.get('/test',(req,res)=>{
    res.json({
        message:"Hello World!"
    });
})
