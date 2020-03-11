const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
app.use(express.static(path.join(__dirname, "/dist")));

const port = 5000;
app.listen(port, () => console.log(`Server up and running on port ${port} !`));
