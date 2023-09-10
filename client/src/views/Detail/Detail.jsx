import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGame } from "../../redux/actions";
import { useParams } from "react-router-dom";
import CardDetail from "../../components/DetailComponents/CardDetail";
import DescriptionDetail from "../../components/DetailComponents/DescriptionDetail";
import style from "./Detail.module.css"; // Importa los estilos utilizando el módulo CSS

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGame(id));
  }, [dispatch, id]);

  // Obtener el detalle del videojuego desde el estado
  const gameDetail = useSelector((state) => state.detail);

  return (
    <div className={`detail-page ${style["detail-container"]}`}>
      {gameDetail ? (
        <>
          <div className={style["image-background"]} style={{ backgroundImage: `url(${gameDetail.image})` }} />
          <div className={style["image-container"]}>
            <img src={gameDetail.image} alt={gameDetail.name} className={style["original-image"]} />
          </div>
          <div className={style["info-container"]}>
            <div className={style["info-card"]}>
              <CardDetail
                name={gameDetail.name}
                platforms={gameDetail.platforms}
                released={gameDetail.released}
                rating={gameDetail.rating}
                genres={gameDetail.genres}
              />
            </div>
            <div className={style["description-box"]}>
              <DescriptionDetail description={gameDetail.description} />
            </div>
          </div>
        </>
      ) : (
        <p>Cargando...</p>
      )}
      <div className={style["id-container"]}>
        ID: {id}
      </div>
    </div>
  );
};

export default Detail;