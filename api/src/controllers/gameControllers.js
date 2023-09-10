const { Videogame, Genres } = require("../db");
const  axios  = require("axios");
const { API_KEY } = process.env;
const { cleanGamesApi, cleanGamesDb, include, cleanGame } = require("../utils/utils");
const { Op } = require('sequelize');

const getGameById = async (id, source) => {
    const game = 
      source === "api" 
        ? (await axios.get(`https://api.rawg.io/api/games/${id}${API_KEY}`))
            .data
        : await Videogame.findByPk(id, include);
       
    if(source==="api"){
        return cleanGame(game);
    } else{
        return game;
    }
    
}





const createGame = async (name, description, platforms, image, released, rating, genres) => {
    const newGame = await Videogame.create({ name, description, platforms, image, released, rating, genres });
  
    await newGame.addGenres(genres); // Agregar géneros al juego creado
  
    const aux = await Videogame.findByPk(newGame.id, { include: Genres }); // Incluir la relación "Genres" al buscar el juego
    
    const genresNames = aux.genres.map(genre => genre.name); // Extraer solo los nombres de los géneros
  
    const result = {
      id: aux.id,
      name: aux.name,
      description: aux.description,
      platforms: aux.platforms,
      image: aux.image,
      released: aux.released,
      rating: aux.rating,
      created: true,
      genres: genresNames
    };
  
    return result;
  };

  


const getAllGames = async () => {
    const dbGamesRaw = await Videogame.findAll(include);
    const dbGames = cleanGamesDb(dbGamesRaw);

    const totalPages = 10
    const apiGames100 = []
    for(let page = 1; page <= totalPages; page++ ) {
    const apiGamesRaw = (await axios.get(`https://api.rawg.io/api/games${API_KEY}&page=${page}`)).data.results;
    const apiGames = cleanGamesApi(apiGamesRaw);
    apiGames100.push(...apiGames);
    }
    return [...dbGames, ...apiGames100];
};

const searchGameByName = async (name) => {
    const dbGames = await Videogame.findAll({
        where: {
            name: {
                [Op.iLike]: `%${name}%`
            }
        },
        limit: 15,
        include: [{
            model: Genres,
            attributes: ['name'],
            through: {
                attributes: [],
            },
        }]
    });

    const dbGamesCount = dbGames.length;
    let apiGames = [];

    if (dbGamesCount < 15) {
        const remainingGames = 15 - dbGamesCount;

        const apiGamesRaw = (await axios.get(`https://api.rawg.io/api/games${API_KEY}&search=${name}`)).data.results;
        const cleanedApiGames = cleanGamesApi(apiGamesRaw);

        apiGames = cleanedApiGames.slice(0, remainingGames);
    }

    const games = [...dbGames, ...apiGames];

    if (games.length === 0) {
        throw new Error(`El juego ${name} no existe, imposible de buscar`);
    }

    return games;
};





module.exports = {createGame, getGameById, searchGameByName, getAllGames};