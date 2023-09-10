import React from "react";
import Card from "../Card/Card";
import style from "./CardsContainer.module.css";
import { useSelector } from "react-redux";

const CardsContainer = ({ page }) => {
  const filteredGames = useSelector((state) => state.filteredGames);
  const allGames = useSelector((state) => state.games);

  const gamesPerPage = 15;
  const startIndex = (page - 1) * gamesPerPage;
  const endIndex = startIndex + gamesPerPage;
  const gamesToShow = filteredGames.length > 0 ? filteredGames : allGames;
  const gamesToRender = gamesToShow.slice(startIndex, endIndex);

  return (
    <div className={style.container}>
      {gamesToRender.map((game) => {
        return (
          <Card
            key={game.id}
            id={game.id}
            image={game.image}
            name={game.name}
            genres={game.genres}
          />
        );
      })}
    </div>
  );
};

export default CardsContainer;

