import React, { useEffect, useState } from 'react';
import Card from '../../components/Card/Card';


const Profile = () => {
  const [addFav, setAddFav] = useState(false);
  const [resFav, setResFav] = useState({});

  const loadPageMovies = async () => {
    //const dataMovies = await getAllMovies(page);
    //setData(dataProject);
    const userFav = localStorage.getItem("userApp")
    
    const favs = JSON.parse(userFav)
    console.log(favs)
    setResFav(favs)
    setAddFav(() => false)
    console.log(resFav);
    //setRes(dataMovies)
}

const handleClickFavorites = (id, title, poster, date, type) => {
  setAddFav(() => true)
  const userData = localStorage.getItem('userApp')
  const userDataParse = JSON.parse(userData)

  console.log(userData);
  const newFavorite =  { id: id, title: title, poster, date, type: type};

  const favorites = userDataParse.favoritos
  console.log(userDataParse);
  console.log(favorites);

  if (!favorites.some((favorite) => favorite.id === newFavorite.id)) {
    const addFavorite = [...favorites, newFavorite];

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

// const handleSearch = (value) => {

//   const filteredMovies = res?.data?.results?.filter((movie) =>
//     movie.title.toLowerCase().includes(value.toLowerCase()),
//   );

//   setFilteredMovies(filteredMovies);
//   setNoResultFiltered(filteredMovies.length === 0);
// };

useEffect(() => {
  loadPageMovies();
}, [addFav]);


  return (
    <>


        <h1>Bienvenido</h1>


        <div className="cards-container">
          {console.log(resFav.favoritos)}
            {
            resFav?.favoritos === undefined ? (
              <h1>Loading ...</h1>
            ) : (
              resFav?.favoritos?.length === 0 ? (
                <p>No tienes favoritos agregados</p>
              ) : (
                resFav?.favoritos?.map((favorite) => (
  
                  <Card
                  key={favorite.id}
                  id={favorite.id}
                  image={favorite.poster}
                  name={favorite.title}
                  date={favorite.date}
                  type={favorite.type}
                  resFav={resFav}
                  actionClick={() =>
                    handleClickFavorites(favorite.id, favorite.title, favorite.poster, favorite.date, favorite.type)
                  }
                />
                ))
              )
            )  

            }
        
      </div>

    </>
    
    
  )
};

export default Profile;