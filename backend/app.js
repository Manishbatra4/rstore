const express = require("express");
const app = express();
var bodyParser = require("body-parser");
const createError = require("http-errors");
const cookieParser = require("cookie-parser");
require("dotenv").config();
var cors = require("cors");
const jwt = require("jsonwebtoken");
const key = require("./Config/keys");

app.use(
  cors({
    origin: ["http://localhost:4000", "*"],
    optionsSuccessStatus: 200,
    credentials: true,
  })
);

app.use(cookieParser());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

app.get("/", async (req, res, next) => {
  res.send({ message: "Awesome it works 🐻🚀" });
});

app.use("/api", require("./routes/api.route"));

app.use((req, res, next) => {
  next(createError.NotFound());
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send({
    status: err.status || 500,
    message: err.message,
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 @ http://localhost:${PORT}`));
