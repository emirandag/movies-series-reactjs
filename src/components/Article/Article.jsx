
import CharactersCard from '../CharactersCard/CharactersCard'
import Spinner from '../Spinner/Spinner';
import './Article.css'

const Article = ({ item, characters, type}) => {

    console.log(characters);
  return (
    <>
        {item === undefined || characters === undefined ? 
        <Spinner />
        // <div className='loading'><h1>Loading...</h1></div> 
        
        : (

        
            
            type === 'movie' ? (
                <>
                            <article className='article' key={item.id}>
                            <div className='article-left'>
                                <img src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} alt={item.title} />
                            </div>
                            <div className="article-right">
                                <h1>{item.title}</h1>
                                <p><strong>Tipo: </strong>Película</p>
                                <p><strong>Estreno: </strong>{item.release_date.replaceAll("-", "/")}</p>
                                <p><strong>Duración: </strong>{item.runtime} min</p>
                                <p>
                                <strong>Género: </strong>
                                {
                                    item.genres.map(genre => genre.name).join(", ")
                                }</p>
                                <h3>Descripción general</h3>
                                <p>{item.overview}</p>
                            </div>
                        </article>
                        <CharactersCard characters={characters} />
                    </>
            ) :  type === 'serie' && (
                <>
                <article className='article' key={item.id}>
                <div className='article-left'>
                    <img src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} alt={item.title} />
                </div>
                <div className="article-right">
                    <h1>{item.name}</h1>
                    <p><strong>Tipo: </strong>Serie - Programa TV</p>
                    <p><strong>Primera emisión: </strong>{item.first_air_date.replaceAll("-", "/")}</p>
                    <p><strong>Duración episodio: </strong>{item.episode_run_time.map(episode => episode).join(", ")} min</p>
                    <p>
                    <strong>Género: </strong>
                    {
                        item.genres.map(genre => genre.name).join(", ")
                    }</p>
                    <p><strong>Temporadas: </strong>{item.number_of_seasons}</p>
                    <h3>Descripción general</h3>
                    <p>{item.overview === "" ? "No hay información disponible." : item.overview}</p>
                </div>
            </article>
            <CharactersCard characters={characters} />
        </>
            )

            
            
        )}
    </>

  )
}

export default Article