require("dotenv").config();
const pool = require("./pool");

async function getMessagesFromDB() {
    const { rows } = await pool.query('SELECT * FROM messages');
    return rows;
}

getMessagesFromDB();


async function addMessageToDB(text, username, added) {
    await pool.query('INSERT INTO messages (text, username, added) VALUES ($1, $2, $3)', [text, username, added])
}

async function getSingleMessageFromDB(messageId) {
    const { rows } = await pool.query('SELECT * FROM messages WHERE id = $1', [messageId]);
    return rows[0];
}


module.exports = {
    getMessagesFromDB,
    addMessageToDB,
    getSingleMessageFromDB
}

