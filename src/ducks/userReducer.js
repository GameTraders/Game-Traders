import Axios from 'axios'
import swal from "sweetalert"

const initialState = {
    user: {},
    loggedIn: false
}

const LOGIN = "LOGIN"

export function login (username, password) {
    let user = Axios
    .post("/auth/login", {username, password})
    .then(res=> res.data.user)
    .catch(res=> {
        swal("Sorry!", "Invalid username or password", "error")
    })
    console.log(user)
    return {
        type: LOGIN,
        payload: user
    }
}

export default function(state = initialState, action) {
    let{type, payload} = action

    switch (type) {
        case LOGIN + "_PENDING":
            console.log({payload});
            return { ...state }
        case LOGIN + "_REJECTED":
            console.log({payload});
            return { ...state }
        case LOGIN + "_FULFILLED":
            console.log({payload});
            return { user: payload, loggedIn: true }
        default: return state
    }
}