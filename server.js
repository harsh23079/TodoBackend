const DatabaseConnection = require("./config/database");
const router = require("./Router/router");
const express = require("express");
require("dotenv").config();
const app = express();
app.use(express.json());

app.use("/api/v1", router);
DatabaseConnection();
app.listen(process.env.port || 5000, () => {
  console.log(`nancy baklol server is running ${process.env.port}`);
});
