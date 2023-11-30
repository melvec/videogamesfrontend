// This module will display a card
// -  Sector en el que se vea un listado de cards con los videojuegos. Al iniciar deberá cargar los primeros resultados obtenidos desde la ruta **`GET /videogames`** y deberá mostrar su:
// -  Imagen.  background_image
// -  Nombre.  name
// -  Géneros. genres

import styles from "./Card.module.css";
import { Link } from "react-router-dom";

export function Card(props) {
  const { genre, id, name, image } = props;
  return (
    <div className={styles.card}>
      <Link to={`/detail/${id}`}>
        <div>
          {image == undefined ? (
            <img
              src="https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg"
              alt={name}
            />
          ) : (
            <img src={image} alt={name} />
          )}
          <h1>{name}</h1>
        </div>
        <div>
          <h2>{genre}</h2>
        </div>
      </Link>
    </div>
  );
}

export default Card;
