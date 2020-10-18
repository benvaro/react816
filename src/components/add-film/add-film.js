import React from 'react';
import { Component } from 'react';

import './add-film.css'

export default class AddFilm extends Component {
    addFilm = (e) => {
        e.preventDefault();
        console.log(e)
        this.props.onAddFilm("hello");
    }

    render() {
        return (
            <div className="container" >
                <form>
                    <input className="form-control mb-2" type="text" placeholder="Enter title" />
                    <input className="form-control mb-2" type="text" placeholder="Enter genre" />
                    <input className="form-control mb-2" type="text" placeholder="Enter year" />
                    <input className="btn btn-info" type="submit" onSubmit={this.addFilm} value="Add film" />
                </form>
            </div>
        )
    }
}
