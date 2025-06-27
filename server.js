// server.js
const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");
app.use(cors());

const app = express();


app.use(cors());
app.use(express.json());


const userRoutes = require("./routes/userRoutes");
app.use("/api/users", userRoutes);
console.log("MONGO_URI:", process.env.MONGO_URI);


mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log(" MongoDB connected"))
  .catch((err) => console.error(" MongoDB error:", err));


app.get("/", (req, res) => res.send(" API working"));


const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(` Server running on port ${PORT}`));
