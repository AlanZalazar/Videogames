import axios from "axios";
import { useState } from "react";
import useGenres from "../Genres/Genres";
import style from "./Form.module.css"
import { useSelector } from "react-redux";



const Form = () => {

  const allGames = useSelector((state) => state.games);

    const genres = useGenres();

    const [form,setForm] = useState({
        name:"",
        description:"",
        platforms:"",
        image:"",
        released:"",
        rating:"",
        genres:[],
        newGenre: "",
    })

    const [errors,setErrors] = useState({
        name:"",
        description:"",
        platforms:"",
        image:"",
        released:"",
        rating:"",
        genres:""
    })

    const removeGenreHandler = (index) => {
        // Crear una copia del array de géneros y eliminar el género seleccionado por su índice
        const updatedGenres = [...form.genres];
        updatedGenres.splice(index, 1);
      
        // Actualizar el estado con los géneros actualizados
        setForm({
          ...form,
          genres: updatedGenres,
        });
      };

      const changeHandler = (event) => {
        const { name, value } = event.target;
      
        // Validar el campo actualizado
        const updatedForm = { ...form, [name]: value };
        const updatedErrors = validate(updatedForm);
      
        // Actualizar el estado del formulario y los errores
        setForm(updatedForm);
        setErrors(updatedErrors);
      
        // Validar el campo "released" específicamente
        if (name === "released") {
          const inputDate = new Date(value);
          if (inputDate instanceof Date && !isNaN(inputDate)) {
            setForm({ ...form, [name]: value });
          }
          return;
        }
      };

    const addGenreHandler = () => {
        if (form.newGenre.trim() !== "") {
          // Buscar el género a partir del nombre
          const selectedGenre = genres.find((genre) => genre.name === form.newGenre.trim());
          if (selectedGenre) {
            // Agregar el ID del género al array de géneros si se encontró el género seleccionado
            setForm({
              ...form,
              genres: [...form.genres, selectedGenre.id],
              newGenre: "", // Limpiar el estado para la próxima entrada de género
            });
          }
        }
      };

    const validate = (form)=>{
        const errors = {};
        
        // Validar el campo "name"
  if (!/^[A-Za-z0-9 _-]+$/.test(form.name)) {
    errors.name = "Name must only contain letters, numbers, spaces, and underscores.";
  }
  if (!form.name.trim()) {
    errors.name = "Name is required.";
  } else if (checkGameNameExists(form.name)) {
    errors.name = "A game with this name already exists. Please choose a different name.";
  }

  // Validar el campo "description" para que no contenga caracteres raros
  const descriptionRegex = /^[A-Za-z0-9\s.,!?'"()]+$/;
  if (!descriptionRegex.test(form.description)) {
    errors.description =
      "Description must only contain letters, numbers, spaces, and basic punctuation.";
  }

  // Validar el campo "platforms" para que no contenga caracteres raros
  const platformsRegex = /^[A-Za-z0-9\s.,!?'"()]+$/;
  if (!platformsRegex.test(form.platforms)) {
    errors.platforms =
      "Platforms must only contain letters, numbers, spaces, and basic punctuation.";
  }

  // Validar el campo "image" para que sea una URL de imagen válida
  const imageRegex = /\.(png|jpg|jpeg|gif)$/i;
  if (form.image && !imageRegex.test(form.image)) {
    errors.image = "Please enter a valid image URL ending with .png, .jpg, .jpeg, or .gif.";
  }

  // Validación del campo "rating"
  if (form.rating > 5  ) {
    errors.rating = "Rating cannot be greater than 5.";
  }
  if (form.rating < 0  ) {
    errors.rating = "no puede ser menor a 0";
  }
 


  return errors;

    }

    

    const submitHandler = (event) => {
        event.preventDefault();

            // Verificar si el campo de imagen está vacío
    const formData = { ...form };
    if (formData.image.trim() === "") {
      // Si está vacío, omitir la clave "image" en el objeto que se enviará
      delete formData.image;
    }

    

        axios
          .post("http://localhost:3001/videogames", formData)
          .then(res => {
            // Mostrar el mensaje en inglés cuando el juego se crea correctamente
            alert("The game has been created successfully.");
          })
          .catch(error => {
            // Mostrar el mensaje de error en caso de que ocurra un problema
            alert("An error occurred while creating the game.");
          });
      };

      const checkGameNameExists = (name) => {
        // Verificar si el nombre del juego ya existe en la lista de juegos
        const gameNameExists = allGames.some((game) => game.name.toLowerCase() === name.toLowerCase());
        return gameNameExists;

        
      };


    return(
      <div className={style.detailContainer}>
        <form className={style.container} onSubmit={submitHandler}>
            <div>
                <label>Name</label>
                <input type="text" value={form.name} onChange={changeHandler} name="name"/>
                {errors.name && <p>{errors.name}</p>}
            </div> 

            <div>
                <label>Description</label>
                <input type="text" value={form.description} onChange={changeHandler} name="description"/>
                {errors.description && <p>{errors.description}</p>}
            </div>

            <div>
                <label>Platforms</label>
                <input type="text" value={form.platforms} onChange={changeHandler} name="platforms"/>
                {errors.platforms && <p>{errors.platforms}</p>}
            </div>

            <div>
                <label>Image</label>
                <input type="text" value={form.image} onChange={changeHandler} name="image"/>
                {errors.image && <p>{errors.image}</p>}
            </div>

            <div>
                <label>Released</label>
                <input type="date" value={form.released} onChange={changeHandler} name="released"/>
                {errors.released && <p>{errors.released}</p>}
            </div>

            <div>
                <label>Rating</label>
                <input type="number" value={form.rating} onChange={changeHandler} name="rating"/>
                {errors.rating && <p>{errors.rating}</p>}
            </div>

            <div>
            <label>Genres</label>
        <select
          value={form.newGenre}
          onChange={(e) => setForm({ ...form, newGenre: e.target.value })}
        >
          <option value="">Select Genre</option>
          {/* Renderizar opciones de géneros disponibles */}
          {genres.map((genre) => (
            <option key={genre.id} value={genre.name}>
              {genre.name}
            </option>
          ))}
        </select>
        <button type="button" onClick={addGenreHandler}>
          Add Genre
        </button>
      </div>
      {/* Mostrar los géneros agregados */}
      {form.genres.map((genreId, index) => (
        <div key={index}>
          {/* Buscar el nombre del género a partir del ID */}
          {genres.find((genre) => genre.id === genreId)?.name}
          <button type="button" onClick={() => removeGenreHandler(index)}>
            x
          </button>
        </div>
      ))}
      <button type="submit">CREATE GAME</button>
    </form>
    </div>
    ) 
}
export default Form;