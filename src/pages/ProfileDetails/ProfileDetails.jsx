import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import Article from '../../components/Article/Article'
import { getMovieById } from '../../services/API/movie.service'
import { getAllMovieCharacters, getAllSerieCharacters } from '../../services/API/character.service'
import { getSerieById } from '../../services/API/serie.service'

const ProfileDetails = () => {
    const { id } = useParams()
    const location = useLocation()
    const [res, setRes] = useState({})
    const [resCharacters, setResCharacters] = useState({})

    const loadPageProfile = async(id) => {
        console.log(location.state);
        if (location.state == 'movie') {
            setRes(await getMovieById(id))
            setResCharacters(await getAllMovieCharacters(id))
        } else {
            setRes(await getSerieById(id))
            setResCharacters(await getAllSerieCharacters(id))
        }
      
    }

    useEffect(() => {
        loadPageProfile(id);
      
    }, [id]);

  return (
    <>
        {
        res ? (
            <Article item={res?.data} characters={resCharacters?.data} type={location.state == 'movie' ? 'movie' : 'serie'} />
        ) 
        : 
            <Spinner />
        }
    </>
  )
}

export default ProfileDetails