import React from 'react';
import HomeHeader from './HomeHeader';
import './Home.css'

const Home = () => {
    return(
    <div class="container">
        
        <div className='scroll-div' id='page-1'>
        <HomeHeader />
            <div className='home-search'>
                <form>
                    <input type='text' className='home-searchbar'/>
                    <button type='submit' className='home-searchbutton'>Search</button>
                </form>
            </div>
        </div>
        <div className='scroll-div' id='page-2'>Item 2</div>
        <div className='scroll-div' id='page-3'>Item 3</div>
        <div className='scroll-div' id='page-4'>Item 4</div>
    </div>
    )
}

export default Home;