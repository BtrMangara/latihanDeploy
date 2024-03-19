const express = require('express')
const app = express();
const ports = 4000 || process.env.PORTS

app.get('/',(req,res)=>{
    res.send('hello world')
})
app.listen(ports,()=>{
     console.log(`App listening on port ${ports}`);
})