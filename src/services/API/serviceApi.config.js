import axios from "axios"

export const APIHeaders = () => ({
    Accept: "application/json",
    "Content-Type": "application/json",
})

export const API = axios.create({
    baseURL: import.meta.env.VITE_APP_URL,
    headers: APIHeaders(),
    timeout: 600000
})