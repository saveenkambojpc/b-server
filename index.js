const express = require('express')
const app = express()
const port = 5000


const cors = require("cors");
const corsOptions = {
    origin: '*',
    credentials: true,            //access-control-allow-credentials:true
    optionSuccessStatus: 200,
}


// Middleware for using req json in console in auth.js
app.use(express.json());



app.use(cors(corsOptions)) // Use this after the variable declaration

app.get('/', (req, res) => {
    res.send('Hello World Saveen Kamboj We are here lorem33    !')
})

// Available Routes
app.use("/api/fetch", require("./routes/fetch"));
app.use("/api/addVisit", require("./routes/addVisit"));


app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})