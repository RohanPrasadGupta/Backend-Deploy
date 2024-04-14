const express = require("express");
const userRouter = require("./Routers/userRouter");
const morgan = require("morgan");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(morgan("dev"));
app.use(cors);

app.use(
  cors({
    origin: "http://127.0.0.1:3000", // Allow requests from this origin
  })
);
app.use((req, res, next) => {
  console.log("Hellow from middle ware");
  next();
});

app.use("/api/users/v1/", userRouter);

app.get("/", (req, res) => {
  res.send("hellow World!");
});

app.all("*", (req, res, next) => {
  res.status(404).json({
    status: "fail",
    message: `cannot find ${req.originalUrl} on this site`,
  });
  next();
});

module.exports = app;
