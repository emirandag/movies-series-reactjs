import useAxios from "../hooks/useAxios";

export const getMovies = async (page) =>  {


    const optionsRequest = {
        method: "GET",
        url: 'https://api.themoviedb.org/3/discover/movie',
        params: {
            api_key: import.meta.env.VITE_TMDB_API_KEY,
            language: 'es-ES',
            page: page,
        }
    }

    return await useAxios(optionsRequest)
}


export const getMoviesById = async (id) =>  {

    if (id !== undefined) {
    const optionsRequest = {
        method: "GET",
        url: `https://api.themoviedb.org/3/movie/${id}`,
        params: {
            api_key: import.meta.env.VITE_TMDB_API_KEY,
            language: 'es-ES',
        }
    }

    return await useAxios(optionsRequest)
}
}


export const getMovieCharacters = async (id) =>  {

    if (id !== undefined) {
    const optionsRequest = {
        method: "GET",
        url: `https://api.themoviedb.org/3/movie/${id}/credits`,
        params: {
            api_key: import.meta.env.VITE_TMDB_API_KEY,
            language: 'es-ES',
        }
    }

    return await useAxios(optionsRequest)
}
}