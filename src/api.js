import axios from "axios";

const apiKey = process.env.REACT_APP_APIKEY
const baseurl = process.env.REACT_APP_BASEURL


export const getMovieList = async () =>{
    const movie = await axios.get(`${baseurl}/movie/popular?page=1&api_key=${apiKey}`)
    console.log({movieList: movie});
    return movie.data.results
}

export const searchMovie = async (e) =>{
    const search = await axios.get(`${baseurl}/search/movie?query=${e}&page=1&api_key=${apiKey}`)
    return search.data
}