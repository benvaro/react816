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
        ],
        search: ""
    }

    search = (pattern) => {
        this.setState({ search: pattern })
    }

    deleteFilm = (id) => {
        const { arr } = this.state;
        let index = arr.findIndex(x => x.id == id);
        let before = arr.slice(0, index);
        let after = arr.slice(index + 1);

        // let result = before.concat(after);
        this.setState({ arr: [...before, ...after] }) // spread operator

    }
    max = 1000;
    addFilm = (obj) => { // obj = {film}
        const { arr } = this.state;

        let newObj = {
            id: this.max++,
            name: obj.name,
            genre: obj.genre,
            year: obj.year
        };
        this.setState({ arr: [...arr, newObj] });
    }

    edit = (obj) => {
        console.log(obj)
    }

    render() {
        const { arr, search } = this.state;
        let filtered = [];
        if (search === '')
            filtered = arr;
        else
            filtered = arr.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));
        return (
            <div className="container">
                <Header text="FilmCollection" color="olive" />
                <SearchBar onSearch={this.search} />
                <FilmCollection onDeleteFilm={this.deleteFilm} arr={filtered} onEdit={this.edit} />
                <AddFilm onAddFilm={this.addFilm} />
            </div>
        )
    }
}
