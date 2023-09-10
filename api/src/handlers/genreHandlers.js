const { getGenres } = require("../controllers/genreControllers");
const { Genres } = require("../db");

const getGenresHandler = async (req,res) => {
    const genres = await getGenres()
    try {
        res.status(200).json(genres)
    } catch (error) {
        res.status(401).json({ error: error.message });
    }
};

module.exports = { getGenresHandler}