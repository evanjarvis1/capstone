import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import ListHeader from "./ListHeader";
import MovieScreen from "./MovieScreen";
import axios from "axios";
import './MovieListPage.css'

const MovieListPage = (props) => {

  const [movieList, setMovieList] = useState([])
  const [searchTerms, setSearchTerms] = useState('')
  const [page, setPage] = useState(1)

  const homeSearch = props.homeSearch

  if(homeSearch) {
    setSearchTerms(homeSearch)
  }

  useEffect(() => {
    getData();
  }, [page, searchTerms]);

  const getData = () => {
    if (searchTerms === '') {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}`
      )
      .then((res) => {
        setMovieList(res.data.results);
        console.log(res.data.results);
      });

    } else {
      axios
      .get(
        `https://api.themoviedb.org/3/search/movie?query=${searchTerms}&include_adult=false&language=en-US&page=1&api_key=${process.env.REACT_APP_API_KEY}`
      )
      .then((res) => {
        setMovieList(res.data.results);
        console.log(res.data.results);
      });
    }
  };

    return (
        <>
            <ListHeader searchTerms={searchTerms} setSearchTerms={setSearchTerms}/>
            <MovieScreen movieList={movieList} />
        </>
    )
}

export default MovieListPage;