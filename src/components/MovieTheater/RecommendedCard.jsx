import './RecommendedCard.css'

const RecommendedCard = (props) => {

    const movie = props.movie

    return (
        <div className="recommended-card">
            <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}  />
            <h2>{movie.original_title}</h2>
        </div>
    )
}

export default RecommendedCard;