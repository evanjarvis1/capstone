const { DataTypes } = require("sequelize");
const { sequelize } = require("../util/database");
const { Movie } = require("../models/movie");
const { User } = require("../models/userModel");

module.exports = {
  getMovieList: async (req, res) => {
    try {
      const { userid } = req.params;

      console.log(userid);

      const movieList = await Movie.findAll({
        where: { userid: userid },
      });
      res.status(200).send(movieList);
    } catch (error) {
      console.log("ERROR IN getMovieList");
      console.log(error);
      res.sendStatus(400);
    }
  },
  addMovie: async (req, res) => {
    try {
      const { movieid, imgurl, title, userid } = req.body;

      // const movieFound = await

      await Movie.create({ movieid, imgurl, title, userid });

      res.status(200).send(`${title} added to your movie list!`);
    } catch (err) {
      res.status(400).send(err);
    }
  },
  deleteMovie: async (req, res) => {
    try {
      const { movieid, userid } = req.query;

      console.log(movieid);
      console.log(userid);

      await Movie.destroy({ where: { movieid: movieid, userid: userid } });
      res.status(200).send(`Movie Deleted!`);
    } catch (err) {
      console.log(err);
    }
  },
};
