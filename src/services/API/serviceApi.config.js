import axios from "axios"
//import { updateToken } from "../../utils/updateToken"

export const APIHeaders = () => ({
    Accept: "application/json",
    "Content-Type": "application/json",
    // "Access-Control-Allow-Origin": "*",
    //Authorization: `Bearer ${updateToken()}`,
})

export const API = axios.create({
    baseURL: import.meta.env.VITE_APP_URL,
    headers: APIHeaders(),
    timeout: 600000
})