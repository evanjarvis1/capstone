import MovieCard from "./MovieCard"
import './MovieScreen.css'

const MovieScreen = (props) => {
    let movieList = props.movieList
    

    const displayMovies = movieList.map((movie, index) => {

        return (
            <MovieCard movie={movie} />
        )
    })

    return (
        <div className="movie-screen">
            {displayMovies}
        </div>
    )
}

export default MovieScreen;