require("dotenv").config();
const pool = require("./pool");

async function getAllMessages() {
    const { rows } = await pool.query('SELECT * FROM messages');
    console.log(rows);
}

getAllMessages();