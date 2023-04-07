import "./settings.css"
import Sidebar from "../../sidebars/Sidebar";
import { useContext, useId, useState } from "react";
import { useForm } from "../../../hooks/useForm";
import { SettingsContext } from "../../../context/SettingsContext";

export default function Settings() {

    const {onAccountSettings} = useContext(SettingsContext)
    
    const { values, changeHandler, onSubmit } = useForm({
        _id: useId(),
        username: '',
        email: '',
        description: '',
        imageUrl: '',
    }, onAccountSettings);

    return (
        <div className="settings">
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsUpdateTitle">Update Your Account</span>
                    <span className="settingsDeleteTitle">Delete Your Account</span>
                </div>

                <form className="settingsForm" method="POST" onSubmit={onSubmit}>
                    
                    
                    <label>Profile Picture</label>
                    <input value={values.imageUrl} onChange={changeHandler} name="imageUrl" placeholder="imageUrl" type="text" />

                    <label>Username</label>
                    <input type="text" placeholder="username" name="username" onChange={changeHandler} value={values.username}/>

                    <label>Email</label>
                    <input type="text" placeholder="username@abv.bg" name="email" onChange={changeHandler}  value={values.email}/>

                    {/* <label>Password</label>
                    <input type="password" /> */}
                    
                    <label>Description</label>
                    <input type="description" name="description" onChange={changeHandler} value={values.description}/>
                    <button className="settingsSubmit">Update</button>
                </form>
            </div>
            <Sidebar />
        </div>
    )
}
