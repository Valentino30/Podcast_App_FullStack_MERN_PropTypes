const express = require("express");
const mongoose = require("mongoose");
const podcasts = require("./api/routes/podcasts");
const episodes = require("./api/routes/episodes");

const app = express();

require("dotenv").config();

const port = process.env.PORT;
const db = process.env.MONGO_URI;

app.use(express.json())

app.use("/api/podcasts/", podcasts);
app.use("/api/episodes/", episodes);

app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    error: {
      message: err.message,
      status: err.status
    }
  });
});

mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true }, () =>
    console.log("MongoDB connected...")
  )
  .then(() =>
    app.listen(port, () => console.log("Server listening on port " + port))
  )
  .catch(err => console.log(err.message));
