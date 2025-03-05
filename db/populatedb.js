const { Client } = require("pg");
require("dotenv").config();

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
text VARCHAR (255),
username VARCHAR (255),
added TIMESTAMP
);`

const INSERT_SQL = `INSERT INTO messages (text, username, added)
VALUES
    ('Hi there', 'Amando', ($1)),
    ('Hello World', 'Charles', ($2)),
    ('Yikes', 'Sherry', ($3)),
    ('Yahoo', 'Jia', ($4));
`;
let date = new Date();
async function main() {
    console.log("seeding...");
    const client = new Client({
        connectionString: process.env.DB_STRING
    })

    await client.connect();
    await client.query(SQL);
    await client.query(INSERT_SQL, [date, date, date, date])
    await client.end();
    console.log("done");
}

main();
