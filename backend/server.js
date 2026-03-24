const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const trafficRoutes = require("./routes/trafficRoutes");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/trafficDB");

// root route add
app.get("/", (req, res) => {
  res.send("Traffic AI Backend Running 🚦");
});

app.use("/api/traffic", trafficRoutes);

app.listen(5000, () => {
  console.log("Server running");
});
