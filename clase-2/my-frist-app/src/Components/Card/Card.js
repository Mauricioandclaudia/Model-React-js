import React from 'react'

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
    <div className='Card'>
      <div className='Card-content'>
        <p>{category}</p>
        <p><strong>{title}</strong></p>
        <p>{description}</p>
        <p>{author}</p>
        <p>{publicationDate}, {readTime}</p>
      </div>
      <div className='Card-image'>
        <figure>
          <img alt='card-p' src={'http://piscum.photos/200/300'} />
        </figure>
      </div>
    </div>
  )
}

export default Card;

// Card 
// Categoria, titulo, description, Author, PublicationDate, timeRead
// image