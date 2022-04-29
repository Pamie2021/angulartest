module.exports = app => {
    const facesnaps = require("./controllers.js");

    var router = require("express").Router();

    // Create a new snap
    router.post("/", facesnaps.create);
    // Retrieve all facesnaps
    router.get("/", facesnaps.findAll);
    // Retrieve a single facenap with id
    router.get("/:id", facesnaps.findOne);
    // Update a snap with id
    router.put("/:id", facesnaps.update);
    // Delete a snap with id
    router.delete("/:id", facesnaps.delete);
    // Create a new snap
    router.delete("/", facesnaps.deleteAll);
    app.use('/api/facesnaps', router);
  };