const express = require("express");
const client = require("../db/database");


const router = express.Router();

router.post("/addVisitForm", (req, res) => {
    console.log("You are making post request")
    console.log(req.body)
  
})


module.exports = router