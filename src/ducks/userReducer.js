import Axios from 'axios'

const initialState = {
    user: {},
    loggedIn: false
}

const LOGIN = "LOGIN"
const LOGOUT = "LOGOUT"
const REFRESH = "REFRESH"


export function login (username, password) {
    let user = Axios
    .post("/auth/login", {username, password})
    .then(res=> res.data.user)


    return {
        type: LOGIN,
        payload: user
    }
}

export function logout() {
    Axios.delete('/auth/logout')
    return {
        type: LOGOUT
    }
}

export function refreshUser() {
    let user = Axios.get("/api/checkSession")
    .then(res => res.data)
    console.log({user});
    return {
        type: REFRESH,
        payload: user
    }
 }

export default function(state = initialState, action) {
    let{type, payload} = action

    switch (type) {
        case LOGIN + "_PENDING":
            return { ...state }
        case LOGIN + "_REJECTED":
            return { ...state }
        case LOGIN + "_FULFILLED":
            return { user: payload, loggedIn: true }
        case LOGOUT:
            return { ...state, user: {}, loggedIn: false }
        case REFRESH + "_PENDING":
            return { ...state }
        case REFRESH + "_REJECTED":
            return { ...state }
        case REFRESH + "_FULFILLED":
            return { user: payload, loggedIn: true }
        default: return state
    }
}