const express = require("express");
const connectDB = require("./db/connect");
const cors = require("cors");

require("dotenv").config();
const eventsRouter = require("./routes/events");
const citiesRouter = require("./routes/cities");
const coursesRouter = require("./routes/courses");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1/", eventsRouter);
app.use("/api/v1/cities", citiesRouter);
app.use("/api/v1/courses", coursesRouter);

const PORT = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.DB);

    app.listen(PORT, () => {
      console.log(`Server is listening on port ${PORT}...`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
