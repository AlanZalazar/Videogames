const { createGame, getGameById, searchGameByName, getAllGames } = require("../controllers/gameControllers");


const getGamesHandler = async (req, res) => {
    try {
        const { name } = req.query;
        const results = name ? await searchGameByName(name) : await getAllGames();

        res.status(200).json(results);
    } catch (error) {
        res.status(401).json({ error: error.message });
    }
};






const getGameHandler = async (req, res) => {
    const { id } = req.params
    const source = isNaN(id) ? "bdd" : "api";
        try {
            const game = await getGameById(id, source);
            res.status(200).json(game);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
};

const createGameHandler = async (req, res) => {
    const { name, description, platforms, image, released, rating, genres } = req.body
    try {
        const newGame = await createGame(name, description, platforms, image, released, rating, genres);
        res.status(201).json(newGame);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
    
};


module.exports = { getGamesHandler, getGameHandler, createGameHandler};