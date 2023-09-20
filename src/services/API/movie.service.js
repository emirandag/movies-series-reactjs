import { API } from "./serviceApi.config";


export const getAllMovies = async (page) => {
    return API.get("/discover/movie", {
        // headers: {
        //   Authorization: `Bearer ${updateToken()}`
        // }
        params: {
            api_key: import.meta.env.VITE_TMDB_API_KEY,
            language: 'es-ES',
            page: page
        }
      })
      .then((res) => res)
      .catch((error) => error);
};

export const getMovieById = async (id) => {
    return API.get(`/movie/${id}`, {
        // headers: {
        //   Authorization: `Bearer ${updateToken()}`
        // }
        params: {
            api_key: import.meta.env.VITE_TMDB_API_KEY,
            language: 'es-ES',
            // page: page
        }
      })
      .then((res) => res)
      .catch((error) => error);
};