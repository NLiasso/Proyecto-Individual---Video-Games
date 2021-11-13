const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('genre', {
      genre_name : {
          type: DataTypes.STRING
      },
      genre_id : {
        type: DataTypes.INTEGER
      },
      genre_count : {
      type: DataTypes.INTEGER
      },
      genre_image : {
        type: DataTypes.STRING,
        allownull: false
      }
  });
}; 