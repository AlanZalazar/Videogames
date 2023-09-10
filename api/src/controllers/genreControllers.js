const {Genres} = require("../db");
const axios = require("axios");
const { API_KEY } = process.env;

const cleanGenres = async (arr) => {
  const clean = arr.map(elem=>{
    return{
      name: elem.name
    };
  });
  return clean
};

const getGenres = async () => {
   const apiGenresRaw = (await axios.get(`https://api.rawg.io/api/genres${API_KEY}`)).data.results;
   const apiGenres = await cleanGenres(apiGenresRaw);
//guardo el array en la base de datos, ignoreDuplicates es para no guardar lo que ya existe
   await Genres.bulkCreate(apiGenres, { ignoreDuplicates: true } );
   const dbGenres = await Genres.findAll();
  
  return dbGenres;
};

module.exports = { getGenres };