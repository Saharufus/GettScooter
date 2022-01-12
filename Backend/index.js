const express = require("express");
const app = express();
const userRoutes = require("./routes/user");
const scooterRoutes = require("./routes/scooter");
const authRoute = require("./routes/auth");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");

//Middlewares:
app.use(cookieParser());
app.use(express.json());

app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:3002"],
  })
);
dotenv.config();
//Routes that handle requests:
app.use("/users", userRoutes);
app.use("/scooters", scooterRoutes);

//authorisation route:
app.use("/api/user", authRoute);

//connecting to mongoose
mongoose.connect(process.env.DB_CONNECT);

app.listen(3001, () => {
  console.log("server is running on port 3001");
});
