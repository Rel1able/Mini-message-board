const { Router } = require("express");
const messagesController = require("../controllers/messagesController");
const messagesRouter = Router();


messagesRouter.get("/", messagesController.getAllMessages)

messagesRouter.post("/new", messagesController.addNewMessage)

messagesRouter.get("/:index", messagesController.getMessage)

module.exports = messagesRouter;