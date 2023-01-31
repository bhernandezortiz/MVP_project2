import express from "express";
import postgres from "postgres";
import dotenv from "dotenv";
dotenv.config();
const app = express();
const port = process.env.PORT || 3000;
const client = require ('./db')

app.use()

const sql = postgres(process.env.DATABASE_URL);


app.route('/home')
.get(async (req, res))


app.use(express.static('./public'));

//listener on port
app.listen(port,() => {
    console.log(`Listening on Port: ${port}`)
})