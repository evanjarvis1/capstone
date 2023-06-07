import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import RecommendedCard from "./RecommendedCard";
import axios from "axios";
import './MovieTheater.css'

const MovieTheater = () => {
    let {videoKey, id} = useParams()

    console.log(id)
    

    const [recommendations, setRecommendations] = useState([])

    console.log(recommendations)

    const getRecommended = (id) => {
        axios.get(`https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`)
            .then((res) => {
                setRecommendations(res.data.results)
                console.log(recommendations)
            })
            .catch((err) => console.log(err))
    }

     useEffect(() => {
        getRecommended(id)
     }, [])

    const recommendedDisplay = recommendations.map((movie, index) => {
        return (
            <RecommendedCard movie={movie} />
        )
    })

    return (
        <main>
            <div className="video-player-div">
                <iframe 
                width='100%'
                height='100%'
                src={`https://www.youtube.com/embed/${videoKey}?autoplay=1&modestbranding=1`}
                allowFullScreen
                >
                </iframe>
            </div>
            <div id="recommended">
                {recommendedDisplay}
            </div>
            <div className="description">
            <button className="plus-button">+</button>
            </div>
        </main>
    )
}

export default MovieTheater;