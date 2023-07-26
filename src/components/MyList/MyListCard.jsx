import React from 'react'
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import {BsTrash3} from 'react-icons/bs'
import axios from 'axios';
import './MyListCard.css'

const MyListCard = (props) => {

    const {user} = useAuth0()

    let movie = props.movie

    const getMovieList = props.getMovieList

    let [trailerKey, setTrailerKey] = useState()

    console.log(movie.id)

    const getTrailerLink = () => {
        axios.get(`http://api.themoviedb.org/3/movie/${movie.movieid}/videos?api_key=${process.env.REACT_APP_API_KEY}`)
        .then((res) => {
            console.log(res.data.results[0])
            setTrailerKey(res.data.results[0].key)
        })
    }

    const deleteMovie = () => {
        axios.delete(`/delete?movieid=${movie.movieid}&userid=${user.sub}`)
        .then((res) => {
            getMovieList()
            console.log(res)
    })         .catch((err) => console.log(err))
    }

    return (
        <div className='my-list-movie-card'>
            <NavLink to={`/Movie/${trailerKey}/${movie.movieid}/0`}>
            <img src={`https://image.tmdb.org/t/p/original${movie.imgurl}`} onMouseEnter={getTrailerLink}/>
            </NavLink>
            <NavLink to={`/Movie/${trailerKey}/${movie.movieid}/0`}>
            <h3 onMouseEnter={getTrailerLink}>{movie.title}</h3>
            </NavLink>
            <button className='trash-button' onClick={deleteMovie}><BsTrash3 /></button>
        </div>
    )

}

export default MyListCard