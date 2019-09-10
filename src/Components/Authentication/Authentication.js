import React, {Component} from "react"
import "./Authentication.css"
import Axios from "axios"





export default class Authentication extends Component {
    state = {
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
    handleChange = (key, e) => {
        this.setState({
            [key]: e
        })
    }
    Login = ()=> {
        const {username, password} = this.state
        Axios.post("/auth/login", {username, password}).then(
            this.props.history.push("/home")
        )
    }
    Register = ()=> {
        const {usernameReg, passwordReg, profile_pic, email,
        street, city, state, zip} = this.state
        Axios.post('/auth/register', {usernameReg, passwordReg, profile_pic, email,
            street, city, state, zip})
            .then(
                this.props.history.push("/home")
            )
    }
render() {
    const {passwordReg, confirm_passwordReg} = this.state
    return (
        <div className="Authentication_Outer">
            <div className="Authentication_NavBar">
                <div className="Authentication_Logo">
                    <h1>Game Traders</h1>
                </div>
                <div className="Authentication_Login">
                    <button onClick={this.Login} className="Authentication_Button">
                        <h4>Login</h4>
                    </button>
                    <div className="Authentication_Username_Container">
                        <h4>Username</h4>
                        <input onChange={(e)=> {this.handleChange("username", e.target.value)}} className="Authentication_Input" type="text" placeholder="Username" />
                    </div>
                    <div className="Authentication_Password_Container">
                        <h4>Password</h4>
                        <input onChange={(e)=> {this.handleChange("password", e.target.value)}} className="Authentication_Input" type="Password" placeholder="Password" />
                    </div>
                </div>
            </div>
            <div className="Authentication_Register">
                <h1>New User? No problem! Registration is simple</h1>
                <div className="Authentication_User_Left">
                    <div className="Authentication_Container2">
                        <h4>Username</h4>
                        <input onChange={(e)=> {this.handleChange("usernameReg", e.target.value)}} className="Authentication_Input" type="text" placeholder="Username" />
                    </div>
                    <div className="Authentication_Container2">
                        <h4>Email</h4>
                        <input onChange={(e)=> {this.handleChange("email", e.target.value)}} className="Authentication_Input" type="text" placeholder="Email" />
                    </div>
                    <div className="Authentication_Container2">
                        <h4>Password</h4>
                        <input onChange={(e)=> {this.handleChange("passwordReg", e.target.value)}} className="Authentication_Input" type="password" placeholder="Password" />
                    </div>
                    <div className="Authentication_Container2">
                        <h4>Confirm Password</h4>
                        {passwordReg === confirm_passwordReg ? null: <h6 className="passwords_Dont_Match">Passwords Do not match</h6>}
                        <input onChange={(e)=> {this.handleChange("confirm_passwordReg", e.target.value)}} className="Authentication_Input" type="Password" placeholder="Confirm" />
                    </div>
                    <div className="Authentication_Container2">
                        <h4>Profile Url</h4>
                        <input onChange={(e)=> {this.handleChange("profile_pic", e.target.value)}} className="Authentication_Input" type="text" placeholder="Profile Pic Url" />
                    </div>
                </div>
                <div className="Authentication_User_Right">
                    <div className="Authentication_Container2">
                        <h4>Street</h4>
                        <input onChange={(e)=> {this.handleChange("street", e.target.value)}} className="Authentication_Input" type="text" placeholder="Street Address" />
                    </div>
                    <div className="Authentication_Container2">
                        <h4>City</h4>
                        <input onChange={(e)=> {this.handleChange("city", e.target.value)}} className="Authentication_Input" type="text" placeholder="City" />
                    </div>
                    <div className="Authentication_Container2">
                        <h4>State</h4>
                        <input onChange={(e)=> {this.handleChange("state", e.target.value)}} className="Authentication_Input" type="text" placeholder="State" />
                    </div>
                    <div className="Authentication_Container2">
                        <h4>Zip</h4>
                        <input onChange={(e)=> {this.handleChange("zip", e.target.value)}} className="Authentication_Input" type="text" placeholder="Zip Code" />
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