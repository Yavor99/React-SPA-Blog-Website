import "./register.css";
import { Link } from "react-router-dom";

import { useContext } from "react";
import { useForm } from "../../../hooks/useForm";

import { AuthContext } from "../../../context/AuthContext";

export default function Register() {

    const { onRegisterSubmit } = useContext(AuthContext);
    const { values, changeHandler, onSubmit } = useForm({
        username: '',
        email: '',
        password: '',
    }, onRegisterSubmit);


    return (
        <div className="register">
            <span className="registerTitle">Register</span>
            <form className="registerForm" method="POST" onSubmit={onSubmit}>
                <label>Username</label>
                <input
                    type="text"
                    name="username"
                    value={values.username}
                    onChange={changeHandler}
                    className="registerInput"
                    placeholder="Enter your username..."
                />
                <label>Email</label>
                <input
                    type="text"
                    name="email"
                    value={values.email}
                    onChange={changeHandler}
                    className="registerInput"
                    placeholder="Enter your email..." 
                />
                <label>Password</label>
                <input
                    type="password"
                    name="password"
                    value={values.password}
                    onChange={changeHandler}
                    className="registerInput"
                    placeholder="Enter your password..."
                />
                <button className="registerButton">Register</button>
            </form>
            <button className="registerLoginButton">
                <Link to="/login">Login</Link>
            </button>
        </div>
    )
}
