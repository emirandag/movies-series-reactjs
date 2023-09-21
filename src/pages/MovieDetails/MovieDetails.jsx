
import { useParams } from 'react-router-dom';
import Article from '../../components/Article/Article';

import { useEffect, useState } from 'react';
import { getMovieById } from '../../services/API/movie.service';
import { getAllMovieCharacters } from '../../services/API/character.service';

const MovieDetails = () => {

    const { id } = useParams()
    const [res, setRes] = useState({})
    const [resCharacters, setResCharacters] = useState({})

    console.log(id);

    const loadPageMovie = async(id) => {
      setRes(await getMovieById(id))
      setResCharacters(await getAllMovieCharacters(id))
    }

    useEffect(() => {
      loadPageMovie(id);
      
    }, [id]);
    console.log(res);
    console.log(resCharacters);
  return (
    <>
       {/* {moviesId === undefined && foundSeries === undefined ? <div className='loading'><h1>Loading...</h1></div> : ( 
            <Article item={moviesId} characters={moviesCharacters} type='movie' />
        )} */}
        {
        res ? (
          // <Article item={id} characters={moviesCharacters} type='movie' />
          <Article item={res?.data} characters={resCharacters?.data} type='movie' />
        ) 
        : 
        // <div className='loading'><h1>Loading...</h1></div>
        <Spinner />
        }
    </>
    
  )
};

export default MovieDetails;