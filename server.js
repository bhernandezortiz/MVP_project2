dotenv.config()

import express from "express"
import postgres from "postgres"
import dotenv from "dotenv"

const app = express();

const sql = postgres(process.env.DATABASE_URL);

app.use(express.static("public"));



app.listen(process.env.PORT, () => {
    console.log(`listening on Port ${process.env.PORT}`);
});