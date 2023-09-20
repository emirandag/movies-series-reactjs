import './CharactersCard.css'

const CharactersCard = ({ characters }) => {
  return (
 <div className="characters">
    <h2>Reparto</h2>
    <div className='characters-container'>  
    {characters.cast.map((character) => (
        <figure key={character.id} className='characters-card'>
            {
              //console.log(character.character)
              character.profile_path === null ? 
              <img className='image-generic' src={`https://thumbs.dreamstime.com/b/marcador-de-posici%C3%B3n-icono-perfil-usuario-cuenta-gen%C3%A9rica-fondo-gris-del-232952793.jpg`} alt={character.character} /> :
              <img src={`https://image.tmdb.org/t/p/w500/${character.profile_path}`} alt={character.character} />
            }
            
            <figcaption>
                <h4>{character.character}</h4>
                <p>{character.name}</p>
            </figcaption>
        </figure>
    ))}
</div>
 </div>

  )
}

export default CharactersCard