const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const contactRoutes= require("./routes/contact");


dotenv.config();


const app= express();
  app.use(express.json());
  app.use(cors());

  //Routers
  app.use('/api/contact', contactRoutes);

  //Connect to Mongodb
  mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

  //Start server
const PORT= process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 server running on port  ${PORT}`)); 