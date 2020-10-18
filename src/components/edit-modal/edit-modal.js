import React, { Component } from 'react';

import './edit-modal.css'

export default class EditModal extends Component {
    state = {
        id: '',
        name: '',
        genre: '',
        year: ''
    }
    onOpen = () => {
        const { film } = this.props;
        this.setState({ id: film.id, name: film.name, genre: film.genre, year: film.year });
    }

    onSave = () => {
        this.props.onEdit(this.state);
    }

    onChangeName = (e) => {
        console.log(e)
        this.setState({ name: e.target.value });
    }

    onChangeGenre = (e) => {
        this.setState({ genre: e.target.value });
    }
    onChangeYear = (e) => {
        this.setState({ year: e.target.value });
    }

    render() {
        const { film } = this.props;
        const id = 'modal' + film.id;
        return <>
            <div className="card-footer text-right">
                <i className="far fa-edit" onClick={this.onOpen} data-toggle="modal" data-target={`#${id}`}></i>
            </div>
            <div className="modal fade" data-show id={id} tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLongTitle">Edit Film</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <input type="text" onChange={(e) => this.onChangeName(e)} value={this.state.name} name="film" className="form-control mb-4" />
                                <input type="text" onChange={(e) => this.onChangeGenre(e)} value={this.state.genre} name="genre" className="form-control mb-4" />
                                <input type="number" onChange={(e) => this.onChangeYear(e)} value={this.state.year} name="year" className="form-control mb-4" />
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" onClick={this.onSave}>Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    }
}