const { Router } = require("express");
const routers = Router();

const ObjectController = require("./controllers/ObjectController");
const ConfigController = require("./controllers/ConfigController");

routers.post("/create_objects.fcgi", ObjectController.createObject);
routers.post("/set_configuration.fcgi", ConfigController.setConfigration);

module.exports = routers;
