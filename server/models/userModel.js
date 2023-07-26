const { DataTypes } = require("sequelize");
const { sequelize } = require("../util/database");

//comment
module.exports = {
  User: sequelize.define(
    "users",
    {
      userid: {
        type: DataTypes.CHAR,
        autoIncrement: false,
        allowNull: false,
        primaryKey: true,
      },
    },
    {
      timestamps: false,
    }
  ),
};
