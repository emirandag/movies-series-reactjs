import { useContext, useEffect, useState } from "react";
import { getAllMovies } from "../services/API/movie.service";
import Card from "../components/Card2/Card";
import ButtonStyle from "../components/UI/ButtonStyle/ButtonStyle";
import { ThemeContext } from "../context/ThemeProvider";
import { useOutletContext } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";



const Movies2 = () => {
    //const { userFav } = useAuth()
    const { theme } = useContext(ThemeContext);
    const [res, setRes] = useState({})
    const [page, setPage] = useState(1);
    const [addFav, setAddFav] = useState(false);
    const [resFav, setResFav] = useState({});
    //const [movies, , page, nextPage, previousPage] = useOutletContext();

    //console.log(userFav);

    
    //const favs = JSON.parse(userFav)
    //console.log(favs);

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

    useEffect(() => {
        loadPageMovies(page);
      }, [page, addFav]);

    //   useEffect(() => {
    
    //   }, [addFav]);

      console.log(resFav);
      console.log(res)

  return (
    <>
        <h1>Películas 2</h1>
        {}
        <div className="cards-container">
        {
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
            //     <figure className='card' key={movie.id}>
            //     <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} onClick={() => (handleCheckId(id))} />
            //     <figcaption>
            //         <h3>{movie.title}</h3>
            //         <h4>{movie.release_date?.replaceAll("-", "/")}</h4>

        
            //     </figcaption>
            //     <button
            //     // style={{
            //     //     backgroundColor: resFav.favoritos.some((fav) => fav.id == movie.id) ? "red" : "white" 
            //     // }}
            //     onClick={() => {
                    
            //         handleClickFavorites(movie.id, movie.title, movie.poster_path, movie.release_date)
            //         }    
            //     }
            //     >{resFav.favoritos.some((fav) => fav.id == movie.id) ? "💗" : "🤍" }</button>
            // </figure>
              ))
        }
        </div>

        <div className="btn-pages">
        {page !== 1 && <ButtonStyle variant='primary' theme={theme} onClick={() => setPage(page-1)}>{`<`}</ButtonStyle>}  
        <span>{(page-1) !== 0 && page-1}</span>
        <span className='actualPage'>{page}</span>
        <span>{page+1}</span>
        {page !== res?.data?.total_pages && <ButtonStyle variant='primary' theme={theme} onClick={() => setPage(page+1)}>{`>`}</ButtonStyle>}
      </div>
    </>
  )
}

export default Movies2