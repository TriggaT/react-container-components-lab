import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component {
    constructor(){
        super()
        this.state = {
            reviews: [],
            searchTerm: ""
        }
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        fetch(URL + `&query=${this.state.searchTerm}`)
        .then(r => r.json())
        .then(data => this.setState({
            reviews: data.results
        }))
    }

    handleChange = (e) => {
        this.setState({
            searchTerm: e.target.value
        })
    }


    render(){
        return(
            <div className="searchable-movie-reviews">
                <form onSubmit={this.handleSubmit}>
                <input type="text" onChange={this.handleChange}></input>
                <button type="submit">Search Reviews</button>
                </form>
                <h1>Seached Movie Reviews</h1>
                <MovieReviews reviews={this.state.reviews} />

            </div>
        )
    }
}

export default SearchableMovieReviewsContainer

