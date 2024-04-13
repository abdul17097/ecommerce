const express = require("express");
require("dotenv").config();
const app = express();
const cors = require("cors");
const connectdb = require("./config/db");
const cookieParser = require("cookie-parser");
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
connectdb();
app.use(cors());
app.use(cookieParser());
app.use(express.json());

app.use("/api", authRoutes, userRoutes);

const PORT = 3000 || process.env.PORT;
app.listen(PORT, () => {
  console.log("server listening on port " + PORT);
});
