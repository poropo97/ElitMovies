import React, { Component } from 'react';
import $ from 'jquery'
import config from '../../config'
import Movie from '../Global/Movie';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Inicio/Inicio.css'

class Inicio extends Component {

  constructor(props) {
    super(props);
    this.state = {}
    this.loadPopularMovies()
  }

  // Carga las películas más populares en TheMovieDB
  loadPopularMovies() {
    const urlString = `https://api.themoviedb.org/3/discover/movie?api_key=${config.movieDBbApiKey}&sort_by=popularity.desc`
    $.ajax({
      url: urlString,
      success: (searchResults) => {
        const results = searchResults.results

        var movies = [];

        results.forEach(movie => {
          movie.poster_src = "https://image.tmdb.org/t/p/w185" + movie.poster_path
          if (movie.release_date !== undefined) movie.release_date = (movie.release_date).substring(0, 4)
          if (movie.title !== undefined) {
            const movieRow = <Movie key={movie.id} movie={movie} />;
            movies.push(movieRow)
          }
        });

        this.setState({ rows: movies })

      },
      error: (xhr, status, err) => {
        console.log("Failed to fetch data...")
      }
    })
  }

  render() {
    return (
      <div>
        <h1>Películas más populares</h1>
        <div className="container">
          <div className="row">
            {this.state.rows}
          </div>
        </div>
      </div>
    )
  }
}

export default Inicio;