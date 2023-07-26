
import MyListCard from './MyListCard'

import ReactDOM from 'react-dom';
import { ScrollingCarousel } from '@trendyol-js/react-carousel';
import './MyMovieScreen.css'

const MyMovieScreen = (props) => {
    let movieList = props.movieList
    let getMovieList = props.getMovieList

    const displayMovies = movieList.map((movie, index) => {

        return (
            <MyListCard movie={movie} getMovieList={getMovieList}/>
        )
    })

    return (
        <div className="movie-screen">
           <ScrollingCarousel className='list-carousel' slide={3}>
            {displayMovies}
            </ScrollingCarousel>
            
        </div>
    )
}

export default MyMovieScreen;