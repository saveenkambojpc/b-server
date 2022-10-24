const express = require("express");
const client = require("../db/database");


const router = express.Router();



// Route1 : Fetch AddVisit Page - Select Option
router.get('/options', async (req, res) => {
    const { database } = await client.databases.createIfNotExists({ id: "Biocon" });
    const { container } = await database.containers.createIfNotExists({ id: "AddVisitOptions" });

    const options = await (await container.item("addVisitOptions").read()).resource;
    
    res.json(options)
})

// Router2 : Fetch Visitor List
router.get('/getVisitorList?:id',async (req,res) => {
    
    const {id} = req.query;
    
    const { database } = await client.databases.createIfNotExists({ id: "Biocon" });
    const { container } = await database.containers.createIfNotExists({ id: "AddVisitForm" });

    const idp = "e3707c90-1b65-4589-b168-afaf7a996870"
    const visitorList = await (await container.item(idp).read()).resource;
    res.json(visitorList)
})



module.exports = router



    
    // const options = await container.item("options").read()
    // res.json({work:"now working"})
    
    // const visitingLocations = await (await container.item("visitingLocations").read()).resource.options
    // const buildingNames = await (await container.item("buildingNames").read()).resource.options
    // console.log(buildingNames)

    // const allData = await (await container.items.readAll().fetchAll()).resources