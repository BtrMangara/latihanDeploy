const express = require('express')
const app = express();
const ports = 4000 || process.env.PORTS

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
app.listen(ports,"0.0.0.0",function(){
     console.log(`App listening on port ${ports}`);
})