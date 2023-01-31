import express from "express";
import postgres from "postgres";
import dotenv from "dotenv";
dotenv.config();
const app = express();
const port = process.env.PORT || 3000;
const client = require ('./db')

app.use(express.json())

app.route('/home')
    .get(async (req, res) => {
        try {
            const result = await client.query("SELECT * FROM skater_spots")
            res.status(200).type(application/JS0N).json(result.rows)
        } catch (error) {
            console.log(error.message)
        }
    })


app.use(express.static('./public'));

//listener on port
app.listen(port,() => {
    console.log(`Listening on Port: ${port}`)
})