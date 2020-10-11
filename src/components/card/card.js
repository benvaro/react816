import React from 'react'

import './card.css'

const Card = ({film}) => {
    const { name, genre, year } = film;
    const src = `https://robohash.org/${name}.png?set=set4&size=100x100`;

    return (
        <>
            <div className="col-12 col-md-6 col-lg-3">
                <h2>{name}</h2>
                <img className="img-fluid" src={src} alt="Card image cap" />
                <div className="card-body">
                    <p className="card-text"><b>Genre: </b>{genre}</p>
                    <p className="card-text"><b>Year: </b>{year}</p>
                </div>
            </div>
        </>)
}

export default Card;