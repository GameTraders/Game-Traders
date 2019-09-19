import axios from 'axios'

const initialState = {
    user: {},
    loggedIn: false,
    points: 0,
    traderId: ''
}

const LOGIN = "LOGIN"
const LOGOUT = "LOGOUT"
const REFRESH = "REFRESH"
const SAVE_TRADER_ID = "SAVE_TRADER_ID"

export function saveTraderId (traderId) {
    return {
        type: SAVE_TRADER_ID,
        payload: traderId
    }
}

export function login (username, password) {
    let user = axios
    .post("/auth/login", {username, password})
    .then(res=> res.data.user)


    return {
        type: LOGIN,
        payload: user
    }
}

export function logout() {
    axios.delete('/auth/logout')
    return {
        type: LOGOUT
    }
}

export function refreshUser() {
    let user = axios.get("/api/checkSession")
    .then(res => res.data)
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
            return { ...state, user: payload, loggedIn: true }
        case SAVE_TRADER_ID:
            return { ...state, traderId: payload }
        default: return state
    }
}