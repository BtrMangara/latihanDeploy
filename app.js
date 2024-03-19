const express = require('express')
const app = express();
const ports = 4000 || process.env.PORTS


app.use(express.json());
app.use(express.urlencoded({extended: true}));

// const route = require('./router');
// app.use(route);

app.get('/',(req,res)=>{
    console.log(`app run in port : ${ports}`)
})

app.listen(ports,()=>{
    console.log(`App listening on port ${ports}`);
})