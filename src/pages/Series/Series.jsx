import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { useOutletContext } from 'react-router-dom';
import Card from '../../components/Card/Card';
import ButtonStyle from '../../components/UI/ButtonStyle/ButtonStyle';
import { ThemeContext } from '../../context/ThemeProvider';
import { getAllSeries } from '../../services/API/serie.service';
import Spinner from '../../components/Spinner/Spinner';

const Series = () => {

  const { theme } = useContext(ThemeContext);
  const [res, setRes] = useState({})
  const [page, setPage] = useState(1);
  const [addFav, setAddFav] = useState(false);
  const [resFav, setResFav] = useState({});
  const [filteredSeries, setFilteredSeries] = useState([]);
  const [noResultFiltered, setNoResultFiltered] = useState(false); //Estado para comprobar la longitud cuando se realice la búsqueda del filtro

  const loadPageMovies = async (page) => {
    const dataMovies = await getAllSeries(page);
    //setData(dataProject);
    const userFav = localStorage.getItem("userApp")
    const favs = JSON.parse(userFav)
    setResFav(favs)
    setAddFav(() => false)
    //console.log(resFav);
    setRes(dataMovies)
}
  // const handleClick = (id, title, poster, date) => {
  //   const favorites = JSON.parse(localStorage.getItem(`${user}-Favorites`));

  //   const newFavorite = { id: id, title: title, poster, date, type: 'serie'};

  //   if (!favorites.some((favorite) => favorite.id === newFavorite.id)) {
  //     const addFavorite = [...favorites, newFavorite];
  //     !favorites
  //       ? localStorage.setItem(`${user}-Favorites`, JSON.stringify(newFavorite))
  //       : localStorage.setItem(`${user}-Favorites`, JSON.stringify(addFavorite));
  //   }
  // };

  const handleClickFavorites = (id, title, poster, date) => {
    setAddFav(() => true)
    const userData = localStorage.getItem('userApp')
    const userDataParse = JSON.parse(userData)

    const newFavorite =  { id: id, title: title, poster, date, type: 'serie'};

    const favorites = userDataParse.favoritos
    console.log(userDataParse);
    console.log(favorites);

    if (!favorites.some((favorite) => favorite.id === newFavorite.id)) {
      const addFavorite = [...favorites, newFavorite];
    //   !favorites
    //     ? localStorage.setItem(`userApp`, JSON.stringify({name: userDataParse.name, favoritos: newFavorite}))
    //     : 
        localStorage.setItem(`userApp`, JSON.stringify({name: userDataParse.name, favoritos: addFavorite}));
    } else {
        const updatedFavorites = favorites.filter(
            (favorite) => favorite.id !== newFavorite.id
          );
      
          localStorage.setItem(
            'userApp',
            JSON.stringify({ name: userDataParse.name, favoritos: updatedFavorites })
          );
    }
     
}

  const handleSearch = (value) => {

    const filteredSeries = res?.data?.results?.filter((serie) =>
      serie.name.toLowerCase().includes(value.toLowerCase()),
    );
    // console.log(filteredSeries);
    setFilteredSeries(filteredSeries);
    setNoResultFiltered(filteredSeries.length === 0);

    // console.log('Estas en la página: '+ page);
  };

  useEffect(() => {
    loadPageMovies(page);
  }, [page, addFav]);


  return (
    <>
      <h1>Series</h1>

      <input className="search" onChange={(e) => handleSearch(e.target.value)} />
      <div className="cards-container">
        {res?.data?.results === undefined ? (
          // <h1>Loading...</h1>
          <Spinner />
        ) : noResultFiltered ? (
          <h2>No hay criterios de búsqueda</h2>
        ) : filteredSeries.length > 0  && filteredSeries.length < res?.data?.results?.length ? (
          filteredSeries.map((serie) => (
            <Card
              key={serie.id}
              id={serie.id}
              image={serie.poster_path}
              name={serie.name}
              date={serie.first_air_date}
              resFav={resFav}
              actionClick={() =>
                handleClickFavorites(serie.id, serie.name, serie.poster_path, serie.first_air_date)
              }
            />
          ))
        ) : (
          res?.data?.results.map((serie) => (
            <Card
              key={serie.id}
              id={serie.id}
              image={serie.poster_path}
              name={serie.name}
              date={serie.first_air_date}
              resFav={resFav}
              actionClick={() =>
                handleClickFavorites(serie.id, serie.name, serie.poster_path, serie.first_air_date)
              }
            />
          ))
        )}
      </div>
      {/* {!filteredSeries.length > 0 && (
        <div className="btn-pages">
        {page !== 1 && <ButtonStyle variant='primary' theme={theme} onClick={previousPage}>Anterior</ButtonStyle>}
        {page !== series.total_pages && <ButtonStyle variant='primary' theme={theme} onClick={nextPage}>Siguiente</ButtonStyle>}
        </div>
      )} */}
      {(!filteredSeries.length > 0 || filteredSeries.length === 20) && (
        <div className="btn-pages">
        {page !== 1 && <ButtonStyle variant='primary' theme={theme} onClick={() => setPage(page-1)}>{`<`}</ButtonStyle>}  
        <span>{(page-1) !== 0 && page-1}</span>
        <span className='actualPage'>{page}</span>
        <span>{page+1}</span>
        {page !== res?.data?.total_pages && <ButtonStyle variant='primary' theme={theme} onClick={() => setPage(page+1)}>{`>`}</ButtonStyle>}
      </div>
      )}
    </>
  );
};

export default Series;