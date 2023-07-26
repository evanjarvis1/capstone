import { useState } from "react";
import { Squash as Hamburger } from 'hamburger-react'
import { NavLink } from "react-router-dom";
import {AiOutlineArrowLeft} from 'react-icons/ai'
import { useAuth0 } from '@auth0/auth0-react'
import './MovieTheaterHeader.css'

const MovieTheaterHeader = () => {

    const [open, setOpen] = useState(false);

    return (
        <div className="movie-theater-header">
            <div className="back">
            <NavLink to="/MovieListPage"><AiOutlineArrowLeft /> Back to Movies</NavLink>
            </div>
            <div className="menu">
                <Hamburger onToggle={() => {setOpen(!open)
                console.log(open);}} />
            </div>
            {open && <div className='dropdown'>
                <ul className='navlinks'>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/auth">Login/Register</NavLink></li>
                    <li><NavLink to="/MovieListPage">Browse Movies</NavLink></li>
                    <li><NavLink to="/MyList">My list</NavLink></li>
                </ul>
                </div>}
        </div>
    )
}

export default MovieTheaterHeader;