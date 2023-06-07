import { NavLink } from 'react-router-dom';
import './MovieCard.css'

const MovieCard = (props) => {
    
    let movie = props.movie

    return (
        <div className='movie-card'>
            <NavLink to='/Movie/vBwj0QpKbSM/603692'>
            <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} />
            </NavLink>
            <NavLink to='/Movie/vBwj0QpKbSM/603692'>
            <h3>{movie.original_title}</h3>
            </NavLink>
        </div>
    )
}

export default MovieCard