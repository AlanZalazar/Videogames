import { GET_GAME, GET_GAMES, GET_GENRES, GET_NAME, GET_GAMES_BY_GENRE, GET_GAMES_BY_DB_API, SORT_GAMES, SORT_GAMES_BY_RATING } from "./actions";
// Estado inicial
const initialState = {
    games: [],
    detail: [],
    filteredGames: [],
    genres: [],
  };
  
  // Reducer
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_GAMES:
        return {
          ...state,
          games: action.payload,
        };
        case GET_GAME:
          return {
            ...state,
            detail: action.payload,
          };
          case GET_NAME:
            return {
              ...state,
              filteredGames: action.payload, // Actualizamos filteredGames con los juegos filtrados
            };
            case GET_GENRES:
              return {
                ...state,
                genres: action.payload,
              };
              case GET_GAMES_BY_GENRE: // Agrega el nuevo caso para GET_GAMES_BY_GENRE
      return {
        ...state,
        filteredGames: action.payload,
       } // Actualizamos filteredGames con los juegos filtrados por género
       case GET_GAMES_BY_DB_API: // Agrega el nuevo caso para GET_GAMES_BY_DB_API
      return {
        ...state,
        filteredGames: action.payload,
      };
      case SORT_GAMES: // Agrega el nuevo caso para SORT_GAMES
  return {
    ...state,
    filteredGames: action.payload,
  };
  case SORT_GAMES_BY_RATING: // Agrega el nuevo caso para SORT_GAMES_BY_RATING
  return {
    ...state,
    filteredGames: action.payload,
  };
      default:
        return state;
    }
  };
  
  export default rootReducer;