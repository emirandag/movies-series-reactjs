import { useEffect } from "react"
import { useState } from "react"
import { getMovieCharacters, getMovies, getMoviesById } from "../services/movies"
import { getSerieCharacters, getSeries, getSeriesById } from "../services/series";

const useRequest = (id, type) => {
    const [movies, setMovies] = useState([]);
    const [series, setSeries] = useState([]);
    const [page, setPage] = useState(1);
    const [moviesId, setMoviesId] = useState();
    const [seriesId, setSeriesId] = useState();
    const [moviesCharacters, setMoviesCharacters] = useState();
    const [seriesCharacters, setSeriesCharacters] = useState();
  
    const getData = async () => {
      const dataMovies = await getMovies(page);
      const dataSeries = await getSeries(page);
  
      setMovies(dataMovies);
      setSeries(dataSeries);
    };

    const getMovieDataById = async () => {
      const dataMoviesId = await getMoviesById(id);
      const dataCharacterMoviesId = await getMovieCharacters(id);

      console.log('Entra al clicar en movies');

      if (type === 'movie') {
        setMoviesId(dataMoviesId)
        setMoviesCharacters(dataCharacterMoviesId)
      } 
      
    }

    const getSerieDataById = async () => {

      const dataSeriesId = await getSeriesById(id);
      const dataCharacterSeriesId = await getSerieCharacters(id);
      console.log('Entra al clicar en series');
      
      if (type === 'serie') {
      setSeriesId(dataSeriesId)
      setSeriesCharacters(dataCharacterSeriesId)
      } 
    }
  
    useEffect(() => {
      getData();
    }, [page]);


    useEffect(() => {
      if (type === 'movie') {
      getMovieDataById();
      } 

      if (type === 'serie') {
      getSerieDataById();
      } 

    }, [id]);

  
    const nextPage = () => {
      console.log('Hace click adelante');
      setPage(prevpPage => prevpPage + 1);
    };
  
    const previousPage = () => {
      console.log('Hace click atrás');
      setPage(prevpPage => prevpPage - 1);
    };
  
    return { movies, series, page, nextPage, previousPage, moviesId, seriesId, moviesCharacters, seriesCharacters };
  };

  export default useRequest