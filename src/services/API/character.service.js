import { API } from "./serviceApi.config";


export const getAllMovieCharacters = async (id) => {
    return API.get(`/movie/${id}/credits`, {
        // headers: {
        //   Authorization: `Bearer ${updateToken()}`
        // }
        params: {
            api_key: import.meta.env.VITE_TMDB_API_KEY,
            language: 'es-ES',
        }
      })
      .then((res) => res)
      .catch((error) => error);
};

export const getAllSerieCharacters = async (id) => {
    return API.get(`/tv/${id}/credits`, {
        // headers: {
        //   Authorization: `Bearer ${updateToken()}`
        // }
        params: {
            api_key: import.meta.env.VITE_TMDB_API_KEY,
            language: 'es-ES',
        }
      })
      .then((res) => res)
      .catch((error) => error);
};