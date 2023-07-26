import { useState } from 'react'
import { AiOutlineSearch, AiOutlineArrowLeft } from 'react-icons/ai'
import { Squash as Hamburger } from 'hamburger-react'
import { NavLink } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import './ListHeader.css'

const ListHeader = (props) => {

    const setSearchTerms = props.setSearchTerms

    const searchTerms = props.searchTerms

    const [expanded, setExpanded] = useState(false)

    const [inputValue, setInputValue] = useState('')

    const [timer, setTimer] = useState(null)

    const toggleHandler = (e) => {
        e.preventDefault()
        setExpanded(!expanded)
    }

    const changeHandler = (e) => {

        e.preventDefault()

        setInputValue(e.target.value)

        clearTimeout(timer)

        const newTimer = setTimeout(() => {
            setSearchTerms(inputValue)
            console.log(inputValue)
            console.log(searchTerms)
        }, 500)
        
        setTimer(newTimer)

    }

    const [open, setOpen] = useState(false);

    return (
        <div className="list-header">
            <div className="back"><NavLink to="/">Movie Site</NavLink></div>
            <div className='search-and-menu'>
                <div className='form-container'>
                {expanded && <input type='text' className='search-bar' placeholder="Search for a movie!"  onChange={changeHandler}/>}
                <button className='toggle' onClick={toggleHandler}><AiOutlineSearch /></button>
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
        </div>
    )
}

export default ListHeader;