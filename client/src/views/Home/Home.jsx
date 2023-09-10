import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import CardsContainer from "../../components/CardsContainer/CardsContainer";
import style from "./Home.module.css";
import GenreButton from "../../components/GenreButton/GenreButton";
import SwitchDbApi from "../../components/SwitchDbApi/SwitchDbApi";
import Rating from "../../components/Rating/Rating";
import AlfaBeta from "../../components/AlfaBeta/AlfaBeta";
import Paginated from "../../components/Paginated/Paginated";
import { getAllGames } from "../../redux/actions";

const Home = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const page = parseInt(queryParams.get("page")) || 1;

  const dispatch = useDispatch();
  const allGames = useSelector((state) => state.games);

  useEffect(() => {
    dispatch(getAllGames());
  }, [dispatch]);

  // Calcular la cantidad total de páginas
  const totalPages = Math.ceil(allGames.length / 15);

  return (
    <div className={style.container}>
      <div className={style.filtersContainer}>
        <GenreButton />
        <AlfaBeta />
        <Rating />
        <SwitchDbApi />
      </div>
      <Paginated currentPage={page} totalPages={totalPages} />
      <CardsContainer page={page} />
      <Paginated currentPage={page} totalPages={totalPages} />
    </div>
  );
};

export default Home;