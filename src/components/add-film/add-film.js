import React from 'react';
import { Component } from 'react';

import './add-film.css'

export default class AddFilm extends Component {
    state = {
        name: '',
        genre: '',
        year: ''
    }

    addFilm = (e) => {
        e.preventDefault();
        console.log(e);
        this.props.onAddFilm(this.state);
        // this.setState(({state})=>{ 
        //     const obj = {
        //         name: '',
        //         year: '',
        //         genre:''
        //     };

        //     return {state: obj}
        //     });

        this.setState({ name: '', genre: '', year: '' });
    }

    onChangeName = (e) => {
        this.setState({ name: e.target.value });
    }

    onChangeGenre = (e) => {
        this.setState({ genre: e.target.value });
    }
    onChangeYear = (e) => {
        this.setState({ year: e.target.value });
    }

    render() {
        return (
            <div className="container" >
                <form>
                    <input onChange={(e) => this.onChangeName(e)} value={this.state.name} className="form-control mb-2" type="text" placeholder="Enter title" />
                    <input onChange={(e) => this.onChangeGenre(e)} value={this.state.genre} className="form-control mb-2" type="text" placeholder="Enter genre" />
                    <input onChange={(e) => this.onChangeYear(e)} value={this.state.year} className="form-control mb-2" type="text" placeholder="Enter year" />
                    <input className="btn btn-info" type="submit" onClick={this.addFilm} value="Add film" />
                </form>
            </div>
        )
    }
}
