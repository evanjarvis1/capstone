import React from 'react';
import HomeHeader from './HomeHeader';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './Home.css'

const Home = () => {

    return(
    <div class="container">
        
        <div className='scroll-div' id='page-1'>
        <HomeHeader />
            <div className='landing-page-text'>
                <h1>Trailer Site</h1>
                <p>Watch Trailers and behind the scenes content for your favorite movies!</p>
            </div>
            <div className='home-search'>
                <form>
                    <input type='text' className='home-searchbar'/>
                    <button type='submit' className='home-searchbutton'>Search</button>
                </form>
            </div>
        </div>
        <div className='scroll-div' id='page-2'>
            <div className='page-2-text'>
                <h1>Trailers</h1>
                <h3>for all your favorite movies</h3>
                <h5>All in one place! <br></br>With over 800,000 Movie trailers available to be searched!</h5>
            </div>
            <div className='popcorn-div'>
            <img src='https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/7813158/popcorn-popping-corn-clipart-md.png' className='popcorn-image'/>
            </div>
            </div>
        <div className='scroll-div' id='page-3'>
        <div className='page-3-text'>
                <h1>Log-In</h1>
                <h3>To save a list of your favorite content</h3>
                <h5>Sign-in securely & easily with your google account</h5>
                <NavLink to="/auth"><div className='log-in-button-div'>Log In!</div></NavLink>
            </div>
            <div className='tv-div'>
            <img src='https://cdn.pixabay.com/photo/2019/12/13/14/55/tv-4693154_1280.png' className='tv-image'/>
            </div>
        </div>
        <div className='scroll-div' id='page-4'>
        <div className='page-4-text'>
                <h3>So what are you waiting for?</h3>
                <NavLink to="/MovieListPage"><h1>Get Started!</h1></NavLink>
            </div>
        </div>
    </div>
    )
}

export default Home;