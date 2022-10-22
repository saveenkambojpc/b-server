const express = require("express");
const client = require("../db/database");


const router = express.Router();

// Route1 : Fetch all Visitor
router.get("/fetchVisitor", (req, res) => {

    const data = {
        "name": "This is a sample Text This is a sample Text This is a sample Text This is a sample Text. ha ha"
    }
    console.log(data)
    res.json(data)
})

// Route2 : Fetch Visiting Location
router.get('/addVisitor', async (req, res) => {
    const { database } = await client.databases.createIfNotExists({ id: "Biocon" });
    const { container } = await database.containers.createIfNotExists({ id: "AddVisit" });


    // const visitingLocations = await (await container.item("visitingLocations").read()).resource.options

    // const buildingNames = await (await container.item("buildingNames").read()).resource.options
    // console.log(buildingNames)

    const allData = await (await container.items.readAll().fetchAll()).resources

    // res.json([visitingLocations,buildingNames])
    res.json(allData)




})



module.exports = router