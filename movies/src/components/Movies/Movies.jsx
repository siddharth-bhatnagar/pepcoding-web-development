import React, { Component } from 'react';
// import { getMovies } from '../getMovies';
import axios from 'axios';

class Movies extends Component {
    constructor() {
        super();
        this.state = {
            movies: [],
            currSearchText: '',
            limit: 4,
            currPage: 1,
            genres: [{ _id: 'abcd', name: 'All Genres' }],
            currGenre: 'All Genres'
        }
    }

    async componentDidMount() {
        let result = await axios.get(`https://backend-react-movie.herokuapp.com/movies`);
        let genreRes = await axios.get(`https://backend-react-movie.herokuapp.com/genres`);
        this.setState({
            movies: result.data.movies,
            genres: [...this.state.genres, ...genreRes.data.genres]
        });
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

    sortByStocks = (e) => {
        let className = e.target.className;
        let sortedArr = [];
        if (className === 'fa fa-sort-asc') {
            sortedArr = this.state.movies.sort((moviesObjA, moviesObjB) => {
                return moviesObjA.numberInStock - moviesObjB.numberInStock;
            });
        } else {
            sortedArr = this.state.movies.sort((moviesObjA, moviesObjB) => {
                return moviesObjB.numberInStock - moviesObjA.numberInStock;
            });
        }

        this.setState({
            movies: sortedArr
        })
    }

    sortByRatings = (e) => {
        let className = e.target.className;
        let sortedArr = [];
        if (className === 'fa fa-sort-asc') {
            sortedArr = this.state.movies.sort((moviesObjA, moviesObjB) => {
                return moviesObjA.dailyRentalRate - moviesObjB.dailyRentalRate;
            });
        } else {
            sortedArr = this.state.movies.sort((moviesObjA, moviesObjB) => {
                return moviesObjB.dailyRentalRate - moviesObjA.dailyRentalRate;
            });
        }

        this.setState({
            movies: sortedArr
        })
    }

    handlePageChange = (pageNumber) => {
        this.setState({
            currPage: pageNumber
        });
    }

    handleLimitChange = (e) => {
        let lim = e.target.value;
        this.setState({
            limit: lim
        })
    }

    handleGenreChange = (name) => {
        this.setState({
            currGenre: name
        })
    }

    render() {
        let { movies, currSearchText, limit, currPage, genres, currGenre } = this.state;
        let filteredArr = [];
        if (currSearchText === '') {
            filteredArr = movies;
        }
        else {
            filteredArr = movies.filter(function (moviesObj) {
                let title = moviesObj.title.toLowerCase();
                return title.includes(currSearchText.toLowerCase());
            });
        }

        if (currGenre !== 'All Genres') {
            filteredArr = filteredArr.filter(function (movieObj) {
                return movieObj.genre.name === currGenre
            })
        }
        let numberOfPages = Math.ceil(filteredArr.length / limit);
        let pageNumberArr = [];
        for (let i = 0; i < numberOfPages; i++) {
            pageNumberArr.push(i + 1);
        }

        let si = (currPage - 1) * limit;
        let ei = si + limit;
        filteredArr = filteredArr.slice(si, ei);


        return (
            <>
                {this.state.movies.length === 0 ? <div class="spinner-border text-primary" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div> :
                    <div className='container'>
                        <div className='row'>
                            <div className='col-3'>
                                <ul class="list-group">
                                    {
                                        genres.map((genreObj) => {
                                            let cs = genreObj.name === currGenre ? 'list-group-item active' : 'list-group-item';
                                            return <li key={genreObj._id} onClick={()=> this.handleGenreChange(genreObj.name)} className={cs}>{genreObj.name}</li>
                                        })
                                    }
                                </ul>
                            </div>
                            <div className='col-9'>
                                <input type="text" value={this.state.currSearchText} onChange={this.handleChange} />
                                <input type="number" value={this.state.limit} onChange={this.handleLimitChange} />
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Title</th>
                                            <th scope="col">Genre</th>
                                            <th scope="col">
                                                <i onClick={this.sortByStocks} className="fa fa-sort-asc" aria-hidden="true"></i>
                                                Stock
                                                <i onClick={this.sortByStocks} className="fa fa-sort-desc" aria-hidden="true"></i>
                                            </th>
                                            <th scope="col">
                                                <i onClick={this.sortByRatings} className="fa fa-sort-asc" aria-hidden="true"></i>
                                                Rate
                                                <i onClick={this.sortByRatings} className="fa fa-sort-desc" aria-hidden="true"></i>
                                            </th>
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
                                <ul className="pagination">
                                    {
                                        pageNumberArr.map((pageNumber) => {
                                            let classStyle = pageNumber === currPage ? 'page-item active' : 'page-item';
                                            return (
                                                <li key={pageNumber} onClick={() => this.handlePageChange(pageNumber)} className={classStyle}><span className="page-link">{pageNumber}</span></li>
                                            );
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                    </div >
                }
            </>
        )
    }
}

export default Movies;


