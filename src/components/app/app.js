import React, { Component } from 'react'

import Header from '../header'
import SearchBar from '../search-bar'

import FilmCollection from '../film-collection'
import AddFilm from '../add-film'

import './app.css'

export default class App extends Component {
    state = {
        arr: [{
            id: 1,
            name: "Avatar",
            genre: "Fantastic",
            year: "2011"
        },
        {
            id: 2,
            name: "It",
            genre: "Horror",
            year: "2016"
        },
        {
            id: 3,
            name: "It",
            genre: "Horror",
            year: "2016"
        },
        {
            id: 4,
            name: "It",
            genre: "Horror",
            year: "2016"
        },
        {
            id: 5,
            name: "It",
            genre: "Horror",
            year: "2016"
        },
        {
            id: 6,
            name: "It",
            genre: "Horror",
            year: "2016"
        },
        {
            id: 7,
            name: "Time",
            genre: "Fantastic",
            year: "2012"
        }
        ]
    }

    deleteFilm = (id) => {
        const { arr } = this.state;
        let index = arr.findIndex(x => x.id == id);
        let before = arr.slice(0, index);
        let after = arr.slice(index + 1);

        // let result = before.concat(after);
        this.setState({ arr: [...before, ...after] })

    }

    addFilm = (obj) => {
        console.log(obj);
    }

    render() {
        return (
            <div className="container">
                <Header text="FilmCollection" color="olive" />
                <SearchBar />
                <FilmCollection onDeleteFilm={this.deleteFilm} arr={this.state.arr} />
                <AddFilm onAddFilm={this.addFilm} />
            </div>
        )
    }
}
