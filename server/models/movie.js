const { DataTypes } = require("sequelize");

const { sequelize } = require("../util/database");

module.exports = {
  Movie: sequelize.define(
    "movies",
    {
      movieid: {
        type: DataTypes.CHAR,
        autoIncrement: false,
        allowNull: false,
        primaryKey: false,
      },
      imgurl: DataTypes.CHAR,
      title: DataTypes.CHAR,
      userid: DataTypes.CHAR,
    },
    {
      timestamps: false,
    }
  ),
};
