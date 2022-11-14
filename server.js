const express = require('express');
const app = new express();

const cors_app = require('cors');
app.use(cors_app());

app.get("/helloworld", (req,res) => {
    res.send("This is a whole new world")
});

let server = app.listen(8080, () => {
    console.log('Listening', server.address().port)
})
