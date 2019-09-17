import Axios from 'axios'

const initialState = {
    user: {},
    loggedIn: false,
    points: 0
}

const LOGIN = "LOGIN"
const LOGOUT = "LOGOUT"
const REFRESH = "REFRESH"
const UPDATE_POINTS = 'UPDATE_POINTS'


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
// export function currentPoints() {

// }
// export function onToken(token, amount) {

//     token.card = void 0;
     
//     let updatedPoints = Axios
//       .post(`/api/payment/${this.props.user_id}`, { token, amount})
//       .then(res => 
//        res.data
//       );
//       return {
//           type: UPDATE_POINTS,
//           payload: updatedPoints
//       }
//   };

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
        // case UPDATE_POINTS + "_PENDING":
        //     return { ...state }
        // case UPDATE_POINTS + "_REJECTED":
        //     return { ...state }
        // case UPDATE_POINTS + "_FULFILLED":
        //     return {...state, points: payload }
        default: return state
    }
}