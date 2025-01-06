// backend framework
const express = require("express");
// data base
const mongoose = require("mongoose");
// routes
const bodyParser = require("body-parser");
// middleware : to make the front end able to send requests
const cors = require("cors");
// to take var from the .env file بنحمي الداتا
require("dotenv").config();
const userRoutes = require("./routes/userRoutes");

// the main app
const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use("/api", userRoutes);

//connect mongoose
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    // بعد ما يعمل connection بعمل استجابه معينه
    console.log("Database connected");
  })
  .catch((error) => {
    console.log(error);
  });

app.get("/test", (req, res) => {
  res.send("Hello from the server");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
