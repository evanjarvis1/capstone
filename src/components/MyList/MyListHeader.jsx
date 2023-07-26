import { Squash as Hamburger } from 'hamburger-react'
import { useState } from 'react'
import { NavLink } from "react-router-dom";
import { useAuth0 } from '@auth0/auth0-react'
import './MyListHeader.css'

const MyListHeader = () => {

    const [open, setOpen] = useState(false);
    
    const {user} = useAuth0()
    
    return (
        <div className="home-header">
            <div className="logo">
                <h2>{user.given_name}'s Movie List</h2>
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

export default MyListHeader;