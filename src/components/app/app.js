import React from 'react'

import Header from '../header'
import SearchBar from '../search-bar'

import FilmCollection from '../film-collection'

import './app.css'

const App = () => {
    return (
        <div className="container">
            <Header text="FilmCollection" color="olive" />
            <SearchBar />
            <FilmCollection />
        </div>
    )
}

export default App;