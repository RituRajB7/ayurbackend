const express = require("express");
const dotenv = require("dotenv").config();
const dbConnect = require("./config/dbconnect");
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/authRoutes");

dbConnect();

const app = express();

//Middleware
app.use(express.json());

//Routes
app.use("/api/auth", authRoutes);
app.use("/api/users",  userRoutes);
//Start the server
const PORT = process.env.PORT || 7001;
app.listen(PORT, () => {
    console.log(`server is running at ${PORT}`);
});

