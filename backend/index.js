const express = require("express");
require("dotenv").config();
const app = express();
const cors = require("cors");
const router = require("./routes");
const connectdb = require("./config/db");
const cookieParser = require("cookie-parser");

connectdb();
app.use(cors());
app.use(cookieParser());
app.use(express.json());

app.use("/api", router);

const PORT = 3000 || process.env.PORT;
app.listen(PORT, () => {
  console.log("server listening on port " + PORT);
});
