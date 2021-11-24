//const router = require('express').Router();
const { DataTypes, NUMBER } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('videogame', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    release_date: {
      type: DataTypes.DATE
    },
    rating:{
      type: DataTypes.DECIMAL({length: 6, decimals: 2}, )
    },
    platforms:{
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull:false
    },
    background_image: {
      type: DataTypes.STRING,
      allowNull: false
    },
    createdInDb: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
  }); 
}

