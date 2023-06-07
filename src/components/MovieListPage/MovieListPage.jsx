import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import MovieScreen from "./MovieScreen";
import axios from "axios";
import './MovieListPage.css'

const MovieListPage = () => {

  const [movieList, setMovieList] = useState([])
  const [page, setPage] = useState(1)

  useEffect(() => {
    getData();
  }, [page]);

  const getData = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}`
      )
      .then((res) => {
        setMovieList(res.data.results);
        console.log(res.data.results);
      });
  };

    return (
        <div>
            <NavLink to='/Movie/vBwj0QpKbSM/603692'>Movie List Page</NavLink>
            <MovieScreen movieList={movieList} />
        </div>
    )
}

export default MovieListPage;