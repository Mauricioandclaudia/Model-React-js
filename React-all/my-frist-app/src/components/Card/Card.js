import React from "./node_modules/react";
import "./Card.css";

function Card({
  category,
  title,
  description,
  author,
  publicationDate,
  readTime,
  image,
}) {
  return (
    <div className="Card">
      <div className="Card-content">
        <p>{category}</p>
        <p>
          <strong>{title}</strong>
        </p>
        <p>{description}</p>
        <p>{author}</p>
        <p>
          {publicationDate}, {readTime}
        </p>
      </div>
      <div className="Card-image">
        <figure>
          <img alt="card-p" src={image} />
        </figure>
      </div>
    </div>
  );
}

export default Card;

// Card
// Categoria, titulo, description, Author, PublicationDate, timeRead
// image
