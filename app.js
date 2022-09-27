const express = require('express');
const app = express();

app.get('/', (req, res)=>{
    res.send("This is just the homepage, and it's deployed on EBS. Change set - 1");
});

let port = process.env.port || 3000;
app.listen(port, ()=>{
    console.log('Server started');
})