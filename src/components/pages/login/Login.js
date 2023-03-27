import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";
import { useContext } from "react";
import { useForm } from "../../../hooks/useForm";

import "./login.css";

export default function Login() {
    const { onLoginSubmit } = useContext(AuthContext);
    const { values, changeHandler, onSubmit } = useForm({
        email: '',
        password: ''
    }, onLoginSubmit)

    return (
        <div className="login">
            <span className="loginTitle">Login</span>
            <form className="loginForm" method="POST" onSubmit={onSubmit}>
                <label>Email</label>
                <input
                    type="text"
                    name="email"
                    value={values.email}
                    onChange={changeHandler}
                    className="loginInput"
                    placeholder="Enter your email..."
                />
                <label>Password</label>
                <input
                    type="password"
                    name="password"
                    value={values.password}
                    onChange={changeHandler}
                    className="loginInput"
                    placeholder="Enter your password..."
                />
                <button className="loginButton">Login</button>
            </form>
            <button className="loginRegisterButton">
                <Link to="/register">Register</Link>
            </button>
        </div>
    )
}
