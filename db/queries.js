require("dotenv").config();
const pool = require("./pool");

async function getMessagesFromDB() {
    try {
        const { rows } = await pool.query('SELECT * FROM messages');
        return rows;
    } catch (err) {
        console.log("Error fetching messages:", err)
        throw err;
    }
    
}
async function addMessageToDB(text, username, added) {
    try {
        await pool.query('INSERT INTO messages (text, username, added) VALUES ($1, $2, $3)', [text, username, added])
    } catch (err) {
        console.log("Failed adding message: ", err);
        throw err;
    }
    
}

async function getSingleMessageFromDB(messageId) {
    try {
        const { rows } = await pool.query('SELECT * FROM messages WHERE id = $1', [messageId]);
        return rows[0];
    } catch (err) {
        console.log("Failed fetching message: ", err);
        throw err;
    }
    
}


module.exports = {
    getMessagesFromDB,
    addMessageToDB,
    getSingleMessageFromDB
}

