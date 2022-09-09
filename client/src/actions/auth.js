import * as api from "../api"

import { AUTH } from "../constants/actionTypes"

export const login = (FormData, navigate) => async (dispatch) => {
    try {

        const { data } = await api.login(FormData);
        dispatch({ type: AUTH, data })
        navigate("/home")

    } catch (error) {
        alert(error.response.data.message);

    }

}

export const signup = (FormData, navigate) => async (dispatch) => {
    try {
        console.log("data");

        const { data } = await api.signup(FormData);

        dispatch({ type: AUTH, data })
        navigate("/home")

    } catch (error) {
        alert(error.response.data.message);

    }
}