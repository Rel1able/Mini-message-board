const { Router } = require("express");
const newMessageController = require("../controllers/newMessageController");

const newMessageRouter = Router();

newMessageRouter.get("/", newMessageController.createMessageForm)

module.exports = newMessageRouter;