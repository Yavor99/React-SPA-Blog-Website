import "./settings.css"
import Sidebar from "../../sidebars/Sidebar";
import { useState } from "react";

export default function Settings() {
    const [image, setImage] = useState(null);
    const [fileName, setFileName] = useState("No selected file");

    const fileInput = (files) => {
        setFileName(files);

        if (files) {
            setImage(URL.createObjectURL(files))
        }

    };

    return (
        <div className="settings">
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsUpdateTitle">Update Your Account</span>
                    <span className="settingsDeleteTitle">Delete Your Account</span>
                </div>

                <form className="settingsForm">
                    <label>Profile Picture</label>
                    <div className="settingsPP">
                        {image ?
                            <img src={image} />
                            :
                            <img
                                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW91bnRhaW5zfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                            />
                        }
                 
                        <label htmlFor="fileInput">
                            <i className="settingsPPIcon fa-solid fa-user"></i>
                        </label>

                        {/* <input type="file" id="fileInput" className="input-field" style={{ display: "none" }} onChange={({ target: { files } }) => {
                            files[0] && setFileName(files[0])
                            if (files) {
                                setImage(URL.createObjectURL(files[0]))
                            }
                        }} /> */}

                        <input type="file" id="fileInput" className="input-field" style={{ display: "none" }} onChange={(e) => fileInput(e.target.files[0])}/>

                    </div>
                    <label>Username</label>
                    <input type="text" placeholder="Yavor" />

                    <label>Email</label>
                    <input type="text" placeholder="yavor@abv.bg" />

                    {/* <label>Password</label>
                    <input type="password" /> */}
                    
                    <label>Description</label>
                    <input type="description" />
                    <button className="settingsSubmit">Update</button>
                </form>
            </div>
            <Sidebar />
        </div>
    )
}
