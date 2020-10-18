import React from 'react'

import './card.css'
import EditModal from '../edit-modal'

export default class Card extends React.Component {

    state = {
        selected: false,
        disabled: false
    }

    onSelected = () => {
        const { selected } = this.state;
        console.log(selected)
        this.setState({ selected: !selected });
    }

    onDoubleClick = () => {
        const { disabled } = this.state;
        this.setState({ disabled: !disabled });
    }

    render() {
        const { id, name, genre, year } = this.props.film;
        const src = `https://robohash.org/${name}.png?set=set4&size=100x100`;
        const { selected, disabled } = this.state;
        let className = "col-12 col-md-6 col-lg-3 mb-4";
        if (selected)
            className += ' selected';
        if (disabled)
            className += ' disabled';
        return (
            <>
                <div className={className}
                    onClick={this.onSelected}
                // onDoubleClick={this.onDoubleClick}
                >
                    <div className="d-flex justify-content-between">
                        <h2>{name}</h2>
                        <i className="far fa-window-close" onClick={() => this.props.onDeleteFilm(id)}></i>
                    </div>
                    <img className="img-fluid" src={src} alt="Card image cap" />
                    <div className="card-body">
                        <p className="card-text"><b>Genre: </b>{genre}</p>
                        <p className="card-text"><b>Year: </b>{year}</p>
                    </div>
                    <EditModal film={this.props.film} onEdit={this.props.onEdit} />
                </div>
            </>)
    }
}
