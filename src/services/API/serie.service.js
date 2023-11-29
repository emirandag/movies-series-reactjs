import { API } from "./serviceApi.config";

export const getAllSeries = async (page) => {
    return API.get("/discover/tv", {
        params: {
            api_key: import.meta.env.VITE_TMDB_API_KEY,
            language: 'es-ES',
            page: page
        }
      })
      .then((res) => res)
      .catch((error) => error);
};

export const getSerieById = async (id) => {
    return API.get(`/tv/${id}`, {
        params: {
            api_key: import.meta.env.VITE_TMDB_API_KEY,
            language: 'es-ES',
        }
      })
      .then((res) => res)
      .catch((error) => error);
};