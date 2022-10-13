import pg from "pg"
import readline from "readline-sync"
const { Pool } = pg
import { creds } from "./creds.js"

const pool = new Pool(creds);


async function runQuery(query) {
    return await pool.query(query)
}

while (true) {
    const answer = readline.question("run what?")
    let query = ""
    let results = ""
    switch (answer) {
        case "1": // 1. select * from customers
            query = "SELECT customer_id, first_name, last_name FROM customers"
            results = await runQuery(query)
            console.table(results.rows)
            break;
        case "2":  // 2. add a new customer
            query = `INSERT INTO customers(
                first_name, "last_name", phone, email)
                VALUES ('bob', 'smith', '5615737773', 'bob@bocacode.com');`
            results = await runQuery(query)
            console.log("user added")
            break;
        case "3":  // 3. update that customer
            query = `UPDATE customers
            SET 
            --customer_id=?,
            first_name='Spongebob',
            last_name='Squarepants', 
            -- email=?, 
            --phone=?, 
            --created_at=?, 
            updated_at=NOW()
                WHERE customer_id=4;`
            results = await runQuery(query)
            console.log("customer updated")
            break;
        default:
            console.log("what?")
            break;
    }

}


