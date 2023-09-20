
import { useOutletContext, useParams } from 'react-router-dom';
import Article from '../../components/Article/Article';
import useRequest from '../../hooks/useRequest';
import { useEffect, useState } from 'react';
import { getMovieById } from '../../services/API/movie.service';

const MovieDetails = () => {

    const { id } = useParams()
    const [res, setRes] = useState({})

    console.log(id);

    //const [movies] = useOutletContext() 

    //const foundSeries = movies.results?.find((movie) => movie.id === parseInt(id))
    //const filteredMovies = movies.results.filter((movie) => console.log('De array:' + typeof movie.id))

    //const { moviesId, moviesCharacters } = useRequest(foundSeries?.id, 'movie')
    // console.log('pelicula: '+moviesId);
    // console.log('personajes: '+moviesCharacters);
    const loadPageMovie = async(id) => {
      setRes(await getMovieById(id))
    }

    useEffect(() => {
      loadPageMovie(id);
      
    }, [id]);
    console.log(res);
  return (
    <>
       {/* {moviesId === undefined && foundSeries === undefined ? <div className='loading'><h1>Loading...</h1></div> : ( 
            <Article item={moviesId} characters={moviesCharacters} type='movie' />
        )} */}
        {
        res ? (
          // <Article item={id} characters={moviesCharacters} type='movie' />
          <Article item={res?.data}  type='movie' />
        ) 
        : 
        <div className='loading'><h1>Loading...</h1></div>
        }
    </>
    
  )
};

export default MovieDetails;