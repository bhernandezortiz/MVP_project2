const { pool } = require("pg");

const dbConfig = {
    connectionString: process.env.DATABASE_URL
}

const client = new pool(dbConfig);

module.exports = client;