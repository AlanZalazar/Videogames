const { Router } = require('express');
const { getGamesHandler, getGameHandler, createGameHandler} = require("../handlers/gameHandlers");

const gameRouter = Router()

gameRouter.get("/", getGamesHandler);
gameRouter.get("/:id", getGameHandler);
gameRouter.post("/", createGameHandler);

module.exports = gameRouter;