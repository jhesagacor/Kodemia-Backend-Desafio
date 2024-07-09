require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;
const apiRoutes = require("./routes/index");
const db = require("./utils/db");

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(cors());
db.connect();

app.get("/", (req, res) => {
  res.status(200).send("ok");
});

app.use(apiRoutes);

app.listen(port, () => {
  console.log("Server listen in port " + port);
});
