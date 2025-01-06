const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
  try {
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
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error.message}`);
    process.exit(1); // بس يصير ايرور بطفي السيرفر كامل
  }
};

module.exports = connectDB;
