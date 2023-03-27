import { sql } from "../database/database.js";

const printMessage = async () => {
   const rows = await sql`SELECT * FROM messages ORDER BY id DESC`;

    if (rows.length < 5) {
        return rows;
    } else {
        return await sql`SELECT * FROM messages ORDER BY id DESC LIMIT 5`;
    }
};

const sendMessage = async (sender, message) => {
    await sql`INSERT INTO messages (sender, message) VALUES (${sender}, ${message})`;

};

export { sendMessage, printMessage };