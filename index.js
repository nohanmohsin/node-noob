const express = require('express');

const app = express();

app.get('/', (req, res) =>{
    res.send("bohut joss")
})
app.listen(3000, () => console.log("aisi dada"));