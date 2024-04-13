const express = require("express");
const userRouter = require("./Routers/userRouter");

const app = express();
app.use(express.json());

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
