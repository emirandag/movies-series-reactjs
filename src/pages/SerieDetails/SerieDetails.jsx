import { useOutletContext, useParams } from 'react-router-dom';
import Article from '../../components/Article/Article';
import { getSerieById } from '../../services/API/serie.service';
import { getAllSerieCharacters } from '../../services/API/character.service';
import { useEffect, useState } from 'react';

const SerieDetails = () => {
  const { id } = useParams();
  const [res, setRes] = useState({})
  const [resCharacters, setResCharacters] = useState({})

  const loadPageSerie = async(id) => {
    setRes(await getSerieById(id))
    setResCharacters(await getAllSerieCharacters(id))
  }

  useEffect(() => {
    loadPageSerie(id);
    
  }, [id]);
  console.log(res);
  console.log(resCharacters);

  return (
    <>
      {
        res ? (
        <Article item={res?.data} characters={resCharacters?.data} type='serie' />

        // <h2>Encontrado</h2>
        // <Article item={seriesId} movie={false} />
        ) 
        : 
        // <div className='loading'><h1>Loading...</h1></div>
        <Spinner />
        }
    </>
  );
};

export default SerieDetails;