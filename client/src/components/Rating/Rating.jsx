import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { sortGamesByRating } from '../../redux/actions';
import style from './Rating.module.css'; // Asegúrate de que el archivo CSS esté importado correctamente con la ubicación correcta

const Rating = () => {
  const [selectedOption, setSelectedOption] = useState('Default');
  const dispatch = useDispatch();

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
    dispatch(sortGamesByRating(e.target.value));
  };

  return (
    <div className={style.container}>
      <span className={style.label}>Rating: </span>
      <select
        value={selectedOption}
        onChange={handleOptionChange}
        className={style.select}
      >
        <option value="Default">Default</option>
        <option value="+ Rating">Max-Min</option>
        <option value="- Rating">Min-Max</option>
      </select>
    </div>
  );
};

export default Rating;