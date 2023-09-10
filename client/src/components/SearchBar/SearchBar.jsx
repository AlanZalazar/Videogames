import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getGameByName } from '../../redux/actions';
import style from './SearchBar.module.css';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    // Utilizamos useEffect para disparar la búsqueda cada vez que el valor de searchTerm cambie
    const delayDebounceFn = setTimeout(() => {
      dispatch(getGameByName(searchTerm));
    }, 500);

    // Limpiar el temporizador en cada cambio del valor de searchTerm
    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm, dispatch]);

  return (
    <div className={style.container}>
      <input
        type="text"
        placeholder="Search for name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;