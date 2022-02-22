const express = require("express");
const app = express();
require("dotenv").config();
const connect = require("./db");
const userRouter = require("./routers/user")

app.use(express.json());
app.use(userRouter)
connect();


const PORT = 3000;
app.listen(PORT, (req, res) => {
  console.log(`Server running on ${PORT}`);
});
