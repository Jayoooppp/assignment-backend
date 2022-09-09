import axios from "axios"

const API = axios.create({ baseURL: "https://login-signup-assignment.herokuapp.com" })

export const login = (FormData) => {
    return API.post("/login", FormData);
}


export const signup = (FormData) => {
    return API.post("/signup", FormData)
}

export const updateUser = (FormData, id) => {
    return API.post(`/update/${id}`, FormData);
}