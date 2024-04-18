const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const {connection} = require("./config/database");
require("dotenv").config();
const { router } = require("./routes/router")
// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use("/api", router);

app.get("/", (req, res) => {
    res.send("Welcome..");
})

// ======================Start the server======================================>
app.listen(process.env.PORT, async () => {
    try {
        await connection;
        console.log('Database connected successfully');
    } catch (error) {
        console.error(`Error connecting to the database: ${error.message}`);
        process.exit(1);
    }
    console.log(`Server is running on ${process.env.PORT}`);
});