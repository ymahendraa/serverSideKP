module.exports = app => {
    const devices = require("../controllers/device.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Device
    router.post("/", devices.create);
  
    // Retrieve all Devices
    router.get("/", devices.findAll);
  
    // Retrieve a single Device with id
    router.get("/:id", devices.findOne);
  
    // Update a Device with id
    router.put("/:id", devices.update);
  
    // Delete a Device with id
    router.delete("/:id", devices.delete);
  
    // Delete all devices
    router.delete("/", devices.deleteAll);
  
    app.use('/api/devices', router);
  };