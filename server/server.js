// This file is to run a server in localhost:3000
// Code to handle annotations is in annotationHandler.js

var corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200,
};

const express = require("express");
const bodyParser = require("body-parser");
const port = process.env.PORT || 5000;
const cors = require("cors");
const SQLite3 = require("sqlite3").verbose();
const TABLE = "annotations";
const multer = require("multer");
const { type } = require("os");

const app = express();
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "../server/uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

app.use("../../frontend", express.static("client")); // For statically serving 'client' folder at '/'
app.use(cors());

app.get("/", (req, res) => {
  res.send("Test");
});
// Run server

app.post(
  "/post",
  cors(corsOptions),
  upload.single("my blob"),
  async (req, res) => {
    console.log(req.file);
    res.send("Test");
  }
);

app.listen(port, () => console.log(`Listening on port ${port}`));
