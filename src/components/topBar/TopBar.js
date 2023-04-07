import "./topbar.css";
import { Link } from "react-router-dom";

import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { SettingsContext } from "../../context/SettingsContext";


export default function TopBar() {
    const { isAuth } = useContext(AuthContext);
    const { image } = useContext(SettingsContext);
    return (
        <div className="top">
            <div className="topLeft">
                <i className="topIcon fa-brands fa-facebook"></i>
                <i className="topIcon fa-brands fa-twitter"></i>
                <i className="topIcon fa-brands fa-pinterest"></i>
                <i className="topIcon fa-brands fa-instagram"></i>
                <i className="topIcon fa-brands fa-tiktok"></i>
            </div>

            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">
                        <Link className="link" to="/">HOME</Link>
                    </li>
                    <li className="topListItem">
                        <Link className="link" to="/about">ABOUT</Link>
                    </li>
                    <li className="topListItem">
                        <Link className="link" to="/contact">CONTACT</Link>
                    </li>

                    {isAuth && (
                        <>
                            <li className="topListItem">
                                <Link className="link" to="/write">WRITE</Link>
                            </li>
                            <li className="topListItem">
                                <Link className="link" to="/logout">LOGOUT</Link>
                            </li>
                        </>
                    )}


                </ul>
            </div>
            <div className="topRight">

                {
                    isAuth ? (
                        <>
                            {/* <img 
                                className="topImg"                        
                                src="https://cdn.hswstatic.com/gif/play/0b7f4e9b-f59c-4024-9f06-b3dc12850ab7-1920-1080.jpg"
                                alt=""    
                            /> */}

                            {image ?
                                <img 
                                className="topImg"
                                src={image} />
                                :
                                <img
                                    className="topImg" 
                                    src="https://cdn.hswstatic.com/gif/play/0b7f4e9b-f59c-4024-9f06-b3dc12850ab7-1920-1080.jpg"
                                />
                            }

                            <Link to="/settings">Settings</Link>
                        </>
                    ) : (
                        <ul className="topList">
                            <li className="topListItem">
                                <Link className="link" to="/login">
                                    Login
                                </Link>
                            </li>
                            <li className="topListItem">
                                <Link className="link" to="/register">
                                    Register
                                </Link>
                            </li>
                        </ul>
                    )
                }

                <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
            </div>
        </div>
    )
}
