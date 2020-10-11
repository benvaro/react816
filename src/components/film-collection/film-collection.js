import React from 'react'

import Card from '../card'

import './film-collection.css'

let arr = [
    { name: "Avatar", genre: "Fantastic", year: "2011" },
    { name: "It", genre: "Horror", year: "2016" },
    { name: "It", genre: "Horror", year: "2016" },
    { name: "It", genre: "Horror", year: "2016" },
    { name: "It", genre: "Horror", year: "2016" },
    { name: "It", genre: "Horror", year: "2016" },
    { name: "Time", genre: "Fantastic", year: "2012" }
]

const FilmCollection = () => {
    return (
        <div className="row">
            {arr.map(item => {
                return <Card film={item} />
            })}
        </div>
    )
}

export default FilmCollection;