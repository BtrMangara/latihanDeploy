const express = require('express')
const app = express();
const ports = 4000 || process.env.PORTS


app.use(express.json());
app.use(express.urlencoded({extended: true}));

// const route = require('./router');
// app.use(route);

app.get('/',(req,res)=>{
    res.json({
        message:"Hello World!"
    });
})

app.listen(ports,()=>{
    console.log(`App listening on port ${ports}`);
})