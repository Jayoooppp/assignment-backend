import { UPDATE } from "../constants/actionTypes";

export default function auth(state = { authData: null }, action) {
    switch (action.type) {
        case UPDATE:
            localStorage.setItem("profile", JSON.stringify({ ...action?.data }))
            return { ...state, authData: action.data }

        default:
            return state;
    }
}