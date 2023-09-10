import React from 'react';
import { Link } from 'react-router-dom';
import style from "./Card.module.css";

const Card = (props) => {
  return (
    <div className={style.card}>
      <img src={props.image} alt={props.name} />
      <p>
        <p><strong><u>{props.name.toUpperCase()}</u></strong></p>
      </p>

      <div className={style.genreContainer}>
      </div>

      <div className={style.genreTags}>
        {props.genres?.map((genre) => (
          <div className={style.genreTag} key={genre.name}>
            {genre.name}
          </div>
        ))}
      </div>

      <Link to={`detail/${props.id}`}>
        <button className={style.button}>View Details</button>
      </Link>
    </div>
  );
};

export default Card;

//import React from 'react';
//import { Link } from 'react-router-dom';
//import style from "./Card.module.css";
//
//const Card = (props) => {
//  return (
//<Link to={`detail/${props.id}`}>
//    <div className={style.card}>
//      <img src={props.image} alt={props.name} />
//      <p>
//      <p><strong><u>{props.name.toUpperCase()}</u></strong></p>
//      </p>
//
//      <div className={style.genreContainer}>
//        </div>
//
//        <div className={style.genreTags}>
//          {props.genres.map((genre) => (
//              <div className={style.genreTag}>
//              {genre.name}
//            </div>
//          ))}
//          </div>
//          
//          
//            <button className={style.button}>View Details</button>
//          
//    </div>
//          </Link>
//  );
//};
//
//export default Card;