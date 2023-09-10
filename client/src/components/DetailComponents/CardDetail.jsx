import React from "react";
import style from "./CardDetail.module.css";

const CardDetail = ({ name, platforms, released, rating, genres }) => {
  // Reemplazamos los guiones medios con espacios en la lista de plataformas
 

  const genresString = genres ? genres.map(genre => genre.name).join(", ") : "";

  return (
    <div className={style["card-container"]}>
      <div className={style["card-border-1"]}>
        <div className={style["card-border-2"]}>
          <div className={style["card-border-3"]}>
            <h2 className={style["card-title"]}>{name}</h2>
            <div className={style["section-container"]}>
              <h3 className={style["section-title"]}>PLATAFORMAS</h3>
              <p className={style["bold-text"]}>{platforms}</p>
            </div>
            <div className={style["section-container"]}>
              <h3 className={style["section-title"]}>LANZAMIENTO</h3>
              <p className={style["released-text"]}>{released}</p>
            </div>
            <div className={style["section-container"]}>
              <h3 className={style["section-title"]}>RATING</h3>
              <p className={style["rating-text"]}>{rating}</p>
            </div>
            {/* Mostramos los géneros como una cadena de texto */}
            {genres && (
              <div className={`${style["section-container"]} ${style["genres-section"]}`}>
                <h3 className={style["section-title"]}>GÉNEROS</h3>
                <p className={style["bold-text"]}>{genresString}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetail;
