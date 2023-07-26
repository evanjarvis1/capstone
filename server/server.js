require("dotenv").config();

const { sequelize } = require("./util/database");

const express = require("express");

const cors = require("cors");

const { SERVER_PORT, CONNECTION_STRING } = process.env;

const { User } = require("./models/userModel");

const { Movie } = require("./models/movie");

const app = express();

app.use(express.json());

app.use(cors());

const { login } = require("./controllers/auth");

const { getMovieList, addMovie, deleteMovie } = require("./controllers/movies");

require("dotenv").config();

app.post("/login", login);

app.post("/addMovie", addMovie);

app.get("/getMovieList/:userid", getMovieList);

app.delete("/delete", deleteMovie);

sequelize
  .sync()
  .then(() => {
    app.listen(SERVER_PORT, () => {
      console.log(`Database synced, and Server up on ${SERVER_PORT}!`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
