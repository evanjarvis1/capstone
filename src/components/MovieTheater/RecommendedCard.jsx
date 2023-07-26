import './RecommendedCard.css'
import { NavLink } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'

const RecommendedCard = (props) => {

    const movie = props.movie

    console.log(movie.id)

    let [trailerKey, setTrailerKey] = useState()


    const getTrailerLink = () => {
        axios.get(`http://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=${process.env.REACT_APP_API_KEY}`)
        .then((res) => {
            console.log(res.data.results[0])
            setTrailerKey(res.data.results[0].key)
        })
    }



    return (
        <NavLink to={`/Movie/${trailerKey}/${movie.id}/0`}>
        <div className="recommended-card" onMouseEnter={getTrailerLink}>
            <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}  />
            <h2 onMouseEnter={getTrailerLink}>{movie.original_title}</h2>
        </div>
        </NavLink>
    )
}

export default RecommendedCard;