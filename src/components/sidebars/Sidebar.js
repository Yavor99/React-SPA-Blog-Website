import "./sidebar.css"

import { useEffect, useState, useContext } from "react";

import { AuthContext } from "../../context/AuthContext";

import { postServiceFactory } from "../../services/postService";
import { useService } from "../../hooks/UseService";


export default function Sidebar() {
    const [postCategory, setCategory] = useState([]);
    const { description, image } = useContext(AuthContext);
    const postService = useService(postServiceFactory);

    useEffect(() => {
        postService.getAll()
            .then(result => {
                setCategory(result)
            })
    }, []);


    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">About Me</span>
                {/* <img
                src="https://www.mountainprofessor.com/images/Mountain-People-peruvian-girl.jpg"
                alt=""
            /> */}

                {image ?
                    <img 
                    className="imageSidebar"
                    src={image} />
                    :
                    <img
                        src="https://www.mountainprofessor.com/images/Mountain-People-peruvian-girl.jpg"
                    />
                }
                {description ? 
                    <p>
                        {description}
                    </p>
                    :
                    <p>
                        Tell something about you..
                    </p>
                }
                
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">Categories</span>
                <ul className="sidebarList">

                    {postCategory.map(p =>
                        <li className="sidebarListItem" key={p._id}> {p.category} </li>)
                    }

                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">Follow Us</span>
                <div className="sidebarSocial">
                    <i className="sidebarIcon fa-brands fa-facebook"></i>
                    <i className="sidebarIcon fa-brands fa-twitter"></i>
                    <i className="sidebarIcon fa-brands fa-pinterest"></i>
                    <i className="sidebarIcon fa-brands fa-instagram"></i>
                    <i className="sidebarIcon fa-brands fa-tiktok"></i>
                </div>
            </div>
        </div>
    )
}
