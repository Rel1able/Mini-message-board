const { Router } = require("express");

const messagesRouter = Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
]

messagesRouter.get("/", (req, res) => {
    res.render("messagesRouter", {messages: messages});
})

messagesRouter.post("/new", (req, res) => {
    let messageUser = req.body.username;
    let messageText = req.body.messageText;
    messages.push({text: messageText, user: messageUser, added: new Date()})
    res.redirect("/");
})

messagesRouter.get("/:index", (req, res) => {
    const { index } = req.params;
    console.log(messages[index]);
    res.render("messageDetails", { message: messages[index]});
})

module.exports = messagesRouter;