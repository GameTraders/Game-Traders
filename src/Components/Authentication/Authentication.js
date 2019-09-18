import React, { Component } from "react"
import "./Authentication.css"
import Axios from "axios"
import swal from "sweetalert"
import { connect } from "react-redux";
import { login } from '../../ducks/userReducer'
import GTLogo from '../../GTLogo.png'


class Authentication extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: "",
            usernameReg: "",
            email: "",
            password: "",
            passwordReg: "",
            confirm_passwordReg: '',
            profile_pic: "",
            street: '',
            city: '',
            state: '',
            zip: ''

        }
    }


    handleChange = (key, e) => {
        this.setState({
            [key]: e
        })
    }
    Login = () => {
        const { username, password } = this.state
        this.props.login(username, password).then(
            this.props.history.push("/home")
        ).catch(res => {
            this.props.history.push('/')
            swal("Sorry!", "Invalid username or password", "error")
        })
    }
    Register = () => {
        const { usernameReg, passwordReg, profile_pic, email,
            street, city, state, zip, confirm_passwordReg } = this.state
        if (passwordReg !== confirm_passwordReg) {
            swal("Passwords Do Not Match", "Please confirm your password", "error")
            return
        }
        if (passwordReg.length < 6) {
            swal('Longer Password Needed', 'Please make your password longer than 6 characters', 'error')
            return
        }
        if(usernameReg === '' || passwordReg === '' || email === '' || street === '' || city === '' || state === '' || zip === '' ) {
            swal( 'Required Fields Needed', 'Please fill out the required fields')
        }
        Axios.post('/auth/register', {
            usernameReg, passwordReg, profile_pic, email,
            street, city, state, zip
        })
            .then(res => {
               this.props.login(usernameReg, passwordReg).then(res=> {
                   this.props.history.push("/home")
                   swal('Success :D', "Welcome to Game Traders", "success")
                }
               )
            }
                
            ).catch(err => { swal("Username and or Email in use", "", "error") })
    }
    render() {
        const { passwordReg, confirm_passwordReg } = this.state
        return (
            <div className="Authentication_Outer">
                <div className="Authentication_NavBar">
                    <div className="Authentication_Logo">
                        <img src={GTLogo} alt="Logo" />
                    </div>
                    <div className="Authentication_Login">
                        <button onClick={this.Login} className="Authentication_Button">
                            <h4>Login</h4>
                        </button>
                        <div className="Authentication_Username_Container">
                            <h4>Username</h4>
                            <input onChange={(e) => { this.handleChange("username", e.target.value) }} className="Authentication_Input" type="text" placeholder="Username" />
                        </div>
                        <div className="Authentication_Password_Container">
                            <h4>Password</h4>
                            <input onChange={(e) => { this.handleChange("password", e.target.value) }} className="Authentication_Input" type="Password" placeholder="Password" />
                        </div>
                    </div>
                </div>
                <div className="Authentication_Register">
                    <h1>New User? No problem! Registration is simple</h1>
                    <div className="Authentication_User_Left">
                        <div className="Authentication_Container21">
                            <h4>Username</h4>
                            <input onChange={(e) => { this.handleChange("usernameReg", e.target.value) }} className="Authentication_Input" type="text" placeholder="Username" />
                        </div>
                        <div className="Authentication_Container22">
                            <h4>Email</h4>
                            <input onChange={(e) => { this.handleChange("email", e.target.value) }} className="Authentication_Input" type="text" placeholder="Email" />
                        </div>
                        <div className="Authentication_Container23">
                            <h4>Password</h4>
                            <input onChange={(e) => { this.handleChange("passwordReg", e.target.value) }} className="Authentication_Input" type="password" placeholder="Password" />
                        </div>
                        <div className="Authentication_Container24">
                            <h4>Confirm Password</h4>
                            {passwordReg === confirm_passwordReg ? null : <h6 className="passwords_Dont_Match">Passwords Do not match</h6>}
                            <input onChange={(e) => { this.handleChange("confirm_passwordReg", e.target.value) }} className="Authentication_Input" type="Password" placeholder="Confirm" />
                        </div>
                        <div className="Authentication_Container25">
                            <h4>Profile Url</h4>
                            <input onChange={(e) => { this.handleChange("profile_pic", e.target.value) }} className="Authentication_Input" type="text" placeholder="Profile Pic Url" />
                        </div>
                    </div>
                    <div className="Authentication_User_Right">
                        <div className="Authentication_Container26">
                            <h4>Street</h4>
                            <input onChange={(e) => { this.handleChange("street", e.target.value) }} className="Authentication_Input" type="text" placeholder="Street Address" />
                        </div>
                        <div className="Authentication_Container27">
                            <h4>City</h4>
                            <input onChange={(e) => { this.handleChange("city", e.target.value) }} className="Authentication_Input" type="text" placeholder="City" />
                        </div>
                        <div className="Authentication_Container28">
                            <h4>State</h4>
                            <input onChange={(e) => { this.handleChange("state", e.target.value) }} className="Authentication_Input" type="text" placeholder="State" />
                        </div>
                        <div className="Authentication_Container29">
                            <h4>Zip</h4>
                            <input onChange={(e) => { this.handleChange("zip", e.target.value) }} className="Authentication_Input" type="text" placeholder="Zip Code" />
                        </div>
                        <button onClick={this.Register} className="Authentication_Button2">
                            <h3 className="Register_Button_h3">Register</h3>
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = reduxState => {
    return reduxState;
};

export default connect(
    mapStateToProps,
    { login }
)(Authentication);