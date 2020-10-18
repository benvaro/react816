import React, { Component } from 'react'

import Card from '../card'

import './film-collection.css'

export default class FilmCollection extends Component {

    render() {
        const { onDeleteFilm, arr, onEdit } = this.props;
        return (
            <div className="row">
                {arr.map(item => {
                    return <Card key={item.id}
                        film={item}
                        onDeleteFilm={onDeleteFilm} onEdit={onEdit} />
                })}
            </div>
        )
    }
}