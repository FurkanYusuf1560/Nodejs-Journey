const express = require('express');

const app = express();

app.get("/", (req, res) => {
    res.send("Hello world dadasd");
})

const port = 3000;
app.listen(port, ()=>{
    console.log(`Server is running right now at port ${port}`);
    
})
