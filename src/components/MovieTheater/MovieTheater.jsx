import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import MovieTheaterHeader from "./MovieTheaterHeader";
import RecommendedCard from "./RecommendedCard";
import TheaterButtons from "./TheaterButtons";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './MovieTheater.css'

const MovieTheater = () => {
    let {videoKey, id, trailerNumber} = useParams()

    console.log(id)
    

    const [recommendations, setRecommendations] = useState([])


    console.log(recommendations)

    const getRecommended = (id) => {
        axios.get(`https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`)
            .then((res) => {
                setRecommendations(res.data.results)
            })
            .catch((err) => console.log(err))
    }

     useEffect(() => {
        getRecommended(id)
     }, [])


     const {user, isAuthenticated} = useAuth0()

     const addToList = () => {

        console.log(`addToList invoked`)



        axios.get(`https://api.themoviedb.org/3/movie/${id}?language=en-US&page=1&api_key=${process.env.REACT_APP_API_KEY}`)
        .then((res) => {
            if (isAuthenticated) {
                // console.log(res)
            const body = {
                movieid: id,
                imgurl: res.data.poster_path,
                title: res.data.original_title,
                userid: user.sub
            }
            console.log(process.env.SERVER_PORT)
            axios.post(`http://localhost:6969/addMovie`, body)
            .then((res) => {
                toast.success(`${res.data}`, {
                    position: toast.POSITION.BOTTOM_CENTER
                })
            }) .catch((err) => {
                toast.error(`${err}`, {
                    position: toast.POSITION.BOTTOM_CENTER
                });
            })
        }
        }).catch((err) => console.log(err))
     }


    const recommendedDisplay = recommendations.map((movie, index) => {
        return (
            <RecommendedCard movie={movie} trailerKey={videoKey} />
        )
    })

    return (
        <>
        <MovieTheaterHeader />
        <main>
            <div className="left">
            <div className="video-player-div">
                <iframe 
                width='100%'
                height='100%'
                src={`https://www.youtube.com/embed/${videoKey}?autoplay=1&modestbranding=1`}
                allowFullScreen
                >
                </iframe>
            </div>
            {/* <div id="recommended">
                {recommendedDisplay}
            </div> */}

            <TheaterButtons id={id} addToList={addToList}/>
            </div>

            <div id="recommended">
                {recommendedDisplay}
            </div>
            <ToastContainer />
        </main>
        </>
    )
}

export default MovieTheater;