import './App.css';
import { getMovieList, searchMovie } from "./api"
import { useEffect, useState } from 'react';

const App = () => {
  const [popularMovies, setPoppularMovies] = useState([])

  useEffect(() => {
    getMovieList().then((result) => {
      setPoppularMovies(result)
    })
  }, [])

  const PopularMovieList = () => {
    return popularMovies.map((movie, i) => {
      return (
        <div className="Movie-wrapper" key={i}>
          <div className="Movie-title">{movie.title}</div>
          <img className="Movie-image" src={`${process.env.REACT_APP_BASEIMGURL}/${movie.poster_path ?? 'default-path'}`} alt={movie.title} />
          <div className="Movie-date">release : {movie.release_date ?? 'N/A'}</div>
          <div className="Movie-rate">{movie.vote_average ?? 'N/A'}</div>
        </div>
      )
    })
  }

  const search = async (e) => {
    if (e.length > 3) {
      const query = await searchMovie(e)
      setPoppularMovies(query.results)
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>SUKA NONTON</h1>
        <input placeholder='Cari Film'
          className='Movie-search'
          onChange={({ target }) => search(target.value)}

        />
        <div className="Movie-container">
          <PopularMovieList />
        </div>
      </header>
    </div>
  );
}

export default App;
