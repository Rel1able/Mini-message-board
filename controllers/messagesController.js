const db = require("../db/queries");

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
  },
  {
    text: "Let's gooooo",
    user: "Sherry",
    added: new Date()
  },
  {
    text: "Yahooo",
    user: "Jia",
    added: new Date()
  }
]

async function getAllMessages(req, res){
    res.render("messagesRouter", {messages: messages});
}

async function addNewMessage(req, res){
    let messageUser = req.body.username;
    let messageText = req.body.messageText;
    messages.push({text: messageText, user: messageUser, added: new Date()})
    res.redirect("/");
}

async function getMessage(req, res){
    const { index } = req.params;
    console.log(messages[index]);
    res.render("messageDetails", { message: messages[index]});
}

module.exports = {
    getAllMessages,
    addNewMessage,
    getMessage
}