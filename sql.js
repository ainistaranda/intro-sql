import pg from "pg"
const { Client, Pool } = pg

import {creds} from "./creds.js"

const pool = new Pool(creds);

const query = "SELECT * FROM customers inner join orders on customers.customerid = orders.customerid"

pool.query(query, (err, data) => {
    if (err) {
        console.error(err);
        return;


    }
    console.table(data.rows);


    pool.end();
})