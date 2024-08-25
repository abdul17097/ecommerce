const express = require("express");
require("dotenv").config();
const app = express();
const cors = require("cors");
const connectdb = require("./config/db");
const cookieParser = require("cookie-parser");
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");
connectdb();
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
    credentials: true,
  }));

app.use("/api", authRoutes, userRoutes, productRoutes);

const PORT = 3000 || process.env.PORT;
app.listen(PORT, () => {
  console.log("server listening on port " + PORT);
});
