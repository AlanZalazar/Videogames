import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGenres, getGameByGenre } from '../../redux/actions';
import style from './GenreButton.module.css';

const GenreButton = () => {
  const [selectedGenre, setSelectedGenre] = useState('');
  const genres = useSelector((state) => state.genres);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGenres()); // Obtenemos los géneros al cargar el componente
  }, [dispatch]);

  const handleGenreChange = (e) => {
    setSelectedGenre(e.target.value);
    dispatch(getGameByGenre(e.target.value)); // Filtramos los juegos por género al cambiar la selección
  };

  return (
    <div className={style.genreButton}>
      <span className={style.genreLabel}>GENRES: </span>
      <select
        value={selectedGenre}
        onChange={handleGenreChange}
        className={style.genreInput}
      >
        <option value="">input</option> {/* Cambiamos el valor "Select Genre" a "input" */}
        {genres.map((genre) => (
          <option key={genre.id} value={genre.name}>
            {genre.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default GenreButton;