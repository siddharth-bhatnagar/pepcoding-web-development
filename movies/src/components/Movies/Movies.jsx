import React, { Component } from 'react';
import { getMovies } from '../getMovies';

class Movies extends Component {
    constructor() {
        super();
        this.state = {
            movies: getMovies(),
            currSearchText: ''
        }
    }

    onDelete = (id) => {
        let arr = this.state.movies.filter(function (moviesObj) {
            return moviesObj._id !== id;
        });

        this.setState({
            movies: arr
        });
    }

    handleChange = (e) => {
        let val = e.target.value;
        this.setState({
            currSearchText: val
        })
    }

    render() {
        let {movies, currSearchText} = this.state;
        let filteredArr = [];
        if(currSearchText === '') {
            filteredArr = movies;
        }
        else {
            filteredArr = movies.filter(function(moviesObj) {
                let title = moviesObj.title.toLowerCase();
                return title.includes(currSearchText.toLowerCase());
            });
        }

        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-3'>
                        Hello
                    </div>
                    <div className='col-9'>
                        <input type="text" value={this.state.currSearchText} onChange={this.handleChange} />
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Title</th>
                                    <th scope="col">Genre</th>
                                    <th scope="col">Stock</th>
                                    <th scope="col">Rate</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    filteredArr.map((movieObj) => {
                                        return (
                                            <tr scope='row' key={movieObj._id} >
                                                <td></td>
                                                <td>{movieObj.title}</td>
                                                <td>{movieObj.genre.name}</td>
                                                <td>{movieObj.numberInStock}</td>
                                                <td>{movieObj.dailyRentalRate}</td>
                                                <td><button type="button" className="btn btn-danger" onClick={() => { this.onDelete(movieObj._id) }}>Delete</button></td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

export default Movies;