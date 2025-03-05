const db = require("../db/queries");

async function getAllMessages(req, res) {
    const messages = await db.getMessagesFromDB();
    res.render("messagesRouter", {messages: messages});
}


async function addNewMessage(req, res){
    let messageUser = req.body.username;
    let messageText = req.body.messageText;
    await db.addMessageToDB(messageText, messageUser, new Date());
    res.redirect("/");
}

async function getMessage(req, res){
    const { index } = req.params;
    const message = await db.getSingleMessageFromDB(index);
    res.render("messageDetails", { message: message});
}

module.exports = {
    getAllMessages,
    addNewMessage,
    getMessage
}