import {AiOutlineArrowLeft, AiOutlineArrowRight} from 'react-icons/ai'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import axios from 'axios'
import './TheaterButtons.css'

const TheaterButtons = (props) => {

    const id = props.id

    const addToList = props.addToList

    const {isAuthenticated} = useAuth0()

    const [trailerNumber, setTrailerNumber] = useState(0)
    const [trailerKey, setTrailerKey] = useState(null)
    const navigate = useNavigate()

    const getTrailerLink = (number) => {
        axios.get(`http://api.themoviedb.org/3/movie/${id}/videos?api_key=${process.env.REACT_APP_API_KEY}`)
        .then((res) => {
            console.log(res.data.results[0])
            setTrailerKey(res.data.results[number].key)
            navigate(`/Movie/${res.data.results[number].key}/${id}/${number}`)
        })
    }

    const increment = () => {
        setTrailerNumber(trailerNumber + 1)
            getTrailerLink(trailerNumber + 1)
        console.log(trailerKey)
        // navigate(`/Movie/${trailerKey}/${id}/${trailerNumber}`)
        console.log(trailerKey)
    }

    const decrement = () => {
        if (trailerNumber > 0) {
        setTrailerNumber(trailerNumber - 1)
            getTrailerLink(trailerNumber - 1)
        console.log(trailerKey)
        // navigate(`/Movie/${trailerKey}/${id}/${trailerNumber}`)
        }
    }

    const plusButtonHandler = () => {


        if (isAuthenticated) {
            addToList()
        } else {
            alert(`You must be logged in to add movies to your list!`)
        }
    }

    return (
        <div className="theater-buttons" >
            <div className="plus-button-div">
                <button className="plus-button" onClick={plusButtonHandler}>+</button>
            </div>
            <div className="previous-next">
                <button className="previous-button" onClick={decrement}><AiOutlineArrowLeft /></button>
                <button className="next-button" onClick={increment}><AiOutlineArrowRight /></button>
            </div>
            

            
        </div>
    )
}

export default TheaterButtons;