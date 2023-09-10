const { DataTypes, Sequelize } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('videogame', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
      },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      },
    platforms: {
      type: DataTypes.STRING,
      allowNull: false,
      },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue:"https://www.gameshub.com/wp-content/uploads/sites/5/2022/04/mario-movie.jpg",
      },
    released: {
      type: DataTypes.STRING,
      allowNull: false,
      },
    rating: {
      type: DataTypes.FLOAT,
      allowNull: false,
      },
    created: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
      },
      {
        timestamps: false,
    });
      
      //// antes de crear un nuevo registro
      //Videogame.beforeCreate((videogame, _) => {
      //// asignar el valor del id con el formato requerido
      //videogame.id = `${videogame.id}db`;
      //});
      //
      //return Videogame;
      };
