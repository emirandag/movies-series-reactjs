import { useOutletContext, useParams } from 'react-router-dom';
import Article from '../../components/Article/Article';
import useRequest from '../../hooks/useRequest';

const SerieDetails = () => {
  const { id } = useParams();

  const [, series] = useOutletContext();

  const foundSeries = series.results?.find((serie) => serie.id === parseInt(id));


  const { seriesId, seriesCharacters } = useRequest(foundSeries?.id, 'serie');

  return (
    <>
      {seriesId === undefined && foundSeries === undefined ? (
        <div className="loading">
          <h1>Loading...</h1>
        </div>
      ) : (
        <Article item={seriesId} characters={seriesCharacters} type='serie' />

        // <h2>Encontrado</h2>
        // <Article item={seriesId} movie={false} />
      )}
    </>
  );
};

export default SerieDetails;