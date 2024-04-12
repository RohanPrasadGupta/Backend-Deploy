const app = require("./app");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });

const DB = process.env.MONGO_URL.replace(
  "PASSWORD_HERE",
  process.env.DATABASE_PASSWROD
);

mongoose
  .connect(DB, { useNewUrlParser: true })
  .then(() => {
    console.log("DB connection Sucessful");
  })
  .catch((err) => {
    console.log(err.message);
  });

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Server is working on port ${port}`);
});
