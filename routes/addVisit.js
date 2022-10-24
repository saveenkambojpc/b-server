const express = require("express");
const client = require("../db/database");


const router = express.Router();

router.post("/addVisitForm", async (req, res) => {
    // Connecting to database
    const { database } = await client.databases.createIfNotExists({ id: "Biocon" });
    const { container } = await database.containers.createIfNotExists({ id: "AddVisitForm" });

    console.log("You hit the backend",req.body)
    // Push data to db
    container.items.create(req.body)
})


module.exports = router