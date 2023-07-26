import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import MyMovieScreen from './MyMovieScreen'
import MyListHeader from './MyListHeader'

const MyList = () => {
    const {user} = useAuth0()

    const [myMovieList, setMyMovieList] = useState([])



    const getMovieList = () => {

        const body = {
            userid: user.sub
        }

        axios.get(`http://localhost:6969/getMovieList/${user.sub}`)
        .then((res) => {
            console.log(res.data)
            setMyMovieList(res.data)
        })
    }

    useEffect(() => {getMovieList()}, [])
    

  return (
    <div>
        <MyListHeader />
        <MyMovieScreen movieList={myMovieList} getMovieList={getMovieList}/>
    </div>
  )
}

export default MyList