import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import './MovieCard.css'

const MovieCard = (props) => {
    
    let movie = props.movie

    let [trailerKey, setTrailerKey] = useState()

    console.log(movie.id)

    const getTrailerLink = () => {
        axios.get(`http://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=${process.env.REACT_APP_API_KEY}`)
        .then((res) => {
            console.log(res.data.results[0])
            setTrailerKey(res.data.results[0].key)
        })
    }

    return (
        <div className='movie-card'>
            <NavLink to={`/Movie/${trailerKey}/${movie.id}/0`}>
            <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} onMouseEnter={getTrailerLink}/>
            </NavLink>
            <NavLink to={`/Movie/${trailerKey}/${movie.id}/0`}>
            <h3 onMouseEnter={getTrailerLink}>{movie.original_title}</h3>
            </NavLink>
        </div>
    )
}

export default MovieCard