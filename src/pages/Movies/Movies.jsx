import { useContext } from 'react';
import { useEffect, useState } from 'react';
import Card from '../../components/Card/Card';
import ButtonStyle from '../../components/UI/ButtonStyle/ButtonStyle';
import { ThemeContext } from '../../context/ThemeProvider';
import { getAllMovies } from '../../services/API/movie.service';

const Movies = () => {
  const { theme } = useContext(ThemeContext);
  const [res, setRes] = useState({})
  const [page, setPage] = useState(1);
  const [addFav, setAddFav] = useState(false);
  const [resFav, setResFav] = useState({});
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [noResultFiltered, setNoResultFiltered] = useState(false); //Estado para comprobar la longitud cuando se realice la búsqueda del filtro


  const loadPageMovies = async (page) => {
    const dataMovies = await getAllMovies(page);
    //setData(dataProject);
    const userFav = localStorage.getItem("userApp")
    const favs = JSON.parse(userFav)
    setResFav(favs)
    setAddFav(() => false)
    console.log(resFav);
    setRes(dataMovies)
}
  // const handleClick = (id, title, poster, date) => {
  
  //   const favorites = JSON.parse(localStorage.getItem(`${user}-Favorites`));


  //   const newFavorite =  { id: id, title: title, poster, date, type: 'movie'};
    

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

    const newFavorite =  { id: id, title: title, poster, date, type: 'movie'};

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

    const filteredMovies = res?.data?.results?.filter((movie) =>
      movie.title.toLowerCase().includes(value.toLowerCase()),
    );

    setFilteredMovies(filteredMovies);
    setNoResultFiltered(filteredMovies.length === 0);
  };

  useEffect(() => {
    loadPageMovies(page);
  }, [page, addFav]);

  return (
    <>
      <h1>Películas</h1>

      <input className="search" onChange={(e) => handleSearch(e.target.value)} />

      <div className="cards-container">
        {     
        res?.data?.results === undefined ? (
          <h1>Loading...</h1>
        ) : noResultFiltered ? (
            <h2>No hay criterios de búsqueda</h2>
        ) : filteredMovies.length > 0 && filteredMovies.length < res?.data?.results?.length ? (
          filteredMovies.map((movie) => (
            <Card
            key={movie.id}
            id={movie.id}
            image={movie.poster_path}
            name={movie.title}
            date={movie.release_date}
            resFav={resFav}
            actionClick={() =>
              handleClickFavorites(movie.id, movie.title, movie.poster_path, movie.release_date)
            }
          />
          ))
        ) : (
          res?.data?.results?.map((movie) => (
            <Card
            key={movie.id}
            id={movie.id}
            image={movie.poster_path}
            name={movie.title}
            date={movie.release_date}
            resFav={resFav}
            actionClick={() =>
              handleClickFavorites(movie.id, movie.title, movie.poster_path, movie.release_date)
            }
          />
          ))
        )}
      </div>
      {(!filteredMovies.length > 0 || filteredMovies.length === 20) && (
        <div className="btn-pages">
        {page !== 1 && <ButtonStyle variant='primary' theme={theme} onClick={() => setPage(page-1)}>{`<`}</ButtonStyle>}  
        <span>{(page-1) !== 0 && page-1}</span>
        <span className='actualPage'>{page}</span>
        <span>{page+1}</span>
        {page !== res?.data?.total_pages && <ButtonStyle variant='primary' theme={theme} onClick={() => setPage(page+1)}>{`>`}</ButtonStyle>}
      </div>
      )}
      {/* <div className="btn-pages">
        {page !== 1 && <ButtonStyle variant='primary' theme={theme} onClick={previousPage}>Anterior</ButtonStyle>}
        {page !== movies.total_pages && <ButtonStyle variant='primary' theme={theme} onClick={nextPage}>Siguiente</ButtonStyle>}
      </div> */}
      
    </>
  );
};

export default Movies;