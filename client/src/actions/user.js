import * as api from "../api"

import { UPDATE } from "../constants/actionTypes"


export const update = (FormData, id, navigate) => async (dispatch) => {
    try {
        const { data } = await api.updateUser(FormData, id);
        console.log(data);
        dispatch({ type: UPDATE, data })
        navigate("/home");


    } catch (error) {
        alert(error.response.data.message)
    }
}