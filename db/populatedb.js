const { Client } = require("pg");
require("dotenv").config();

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
message VARCHAR (255)
);

INSERT INTO messages (message)
VALUES
    ('Hello'),
    ('What'),
    ('How');
`;

async function main() {
    console.log("seeding...");
    console.log(process.env.DB_STRING);
    const client = new Client({
        connectionString: process.env.DB_STRING
    })

    await client.connect();
    await client.query(SQL);
    await client.end();
    console.log("done");
}

main();
