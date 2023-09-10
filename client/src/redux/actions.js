import axios from "axios";

export const GET_GAMES_BY_GENRE = "GET_GAMES_BY_GENRE";
export const GET_GAMES = "GET_GAMES";
export const GET_GAME = "GET_GAME";
export const GET_NAME = "GET_NAME";
export const GET_GENRES = "GET_GENRES";
export const GET_GAMES_BY_DB_API = "GET_GAMES_BY_DB_API";
export const SORT_GAMES = "SORT_GAMES";
export const SORT_GAMES_BY_RATING = "SORT_GAMES_BY_RATING";



// Acción para obtener todos los juegos
export const getAllGames = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get("http://localhost:3001/videogames");
      const gamesData = response.data;
      dispatch({ type: GET_GAMES, payload: gamesData });
    } catch (error) {
      // Manejar cualquier error aquí si es necesario
      console.error("Error fetching games:", error);
    }
  };
};




export const getGame = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`http://localhost:3001/videogames/${id}`);
      const gameData = response.data;
      dispatch({ type: GET_GAME, payload: gameData });
    } catch (error) {
      // Manejar cualquier error aquí si es necesario
      console.error("Error fetching game:", error);
    }
  };
};

export const getGameByName = (name) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`http://localhost:3001/videogames?name=${name}`);
      const gameData = response.data;
      
      // Aquí, utilizamos la propiedad `filteredGames` en lugar de `game`, para distinguir
      // entre los juegos filtrados y los juegos almacenados en el estado
      if (gameData.length > 0) {
        dispatch({ type: GET_NAME, payload: gameData });
      } else {
        // Si no se encuentra ningún juego, puedes manejarlo o simplemente no dispatch nada
        // Por ejemplo, mostrar un mensaje de "No se encontraron juegos"
      }
    } catch (error) {
      // Manejar cualquier error aquí si es necesario
      console.error("Error fetching games by name:", error);
    }
  };
};



export const getGenres = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`http://localhost:3001/genres`);
      const genreData = response.data;
      dispatch({ type: GET_GENRES, payload: genreData });
    } catch (error) {
      // Manejar cualquier error aquí si es necesario
      console.error("Error fetching genre:", error);
    }
  };
};

export const getGameByGenre = (genre) => {
  return (dispatch, getState) => {
    const allGames = getState().games; // Obtener todos los juegos desde el estado
    const filteredGames = allGames.filter((game) =>
      game.genres?.map((genreObj) => genreObj.name).includes(genre)
    );

    dispatch({ type: GET_GAMES_BY_GENRE, payload: filteredGames });
  };
};  

export const getGamesByDbApi = (option) => {
  return (dispatch, getState) => {
    const allGames = getState().games; // Obtener todos los juegos desde el estado
    let filteredGames = [];

    if (option === 'All games') {
      // Mostrar todos los juegos
      filteredGames = allGames;
    } else if (option === 'DB games') {
      // Mostrar solo los juegos con "created: true"
      filteredGames = allGames.filter((game) => game.created === true);
    } else if (option === 'API games') {
      // Mostrar solo los juegos con "created: false"
      filteredGames = allGames.filter((game) => game.created === false);
    }

    dispatch({ type: GET_GAMES_BY_DB_API, payload: filteredGames });
  };
};

export const sortGames = (option) => {
  return (dispatch, getState) => {
    const allGames = getState().games; // Obtener todos los juegos desde el estado
    let sortedGames = [...allGames];

    if (option === "A-Z") {
      // Ordenar en orden alfabético ascendente
      sortedGames.sort((a, b) => a.name.localeCompare(b.name));
    } else if (option === "Z-A") {
      // Ordenar en orden alfabético descendente
      sortedGames.sort((a, b) => b.name.localeCompare(a.name));
    }

    dispatch({ type: SORT_GAMES, payload: sortedGames });
  };
};


export const sortGamesByRating = (option) => {
  return (dispatch, getState) => {
    const allGames = getState().games; // Obtener todos los juegos desde el estado
    let sortedGames = [...allGames];

    if (option === "- Rating") {
      // Ordenar por rating de menor a mayor
      sortedGames.sort((a, b) => a.rating - b.rating);
    } else if (option === "+ Rating") {
      // Ordenar por rating de mayor a menor
      sortedGames.sort((a, b) => b.rating - a.rating);
    }

    dispatch({ type: SORT_GAMES_BY_RATING, payload: sortedGames });
  };
};

