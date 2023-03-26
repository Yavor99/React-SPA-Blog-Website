import { useEffect, useState } from "react";

import { Routes, Route, useNavigate } from "react-router-dom";

import * as postService from './services/postService';

import Home from "./components/pages/home/Home";
import Login from "./components/pages/login/Login";
import Register from "./components/pages/register/Register";
import Settings from "./components/pages/settings/Settings";
import Single from "./components/pages/single/Single";
import Write from "./components/pages/write/Write";
import TopBar from "./components/topBar/TopBar";


function App() {
    const navigate = useNavigate();
    const [posts, setPost] = useState([]);

    useEffect(() => {
        postService.getAll()
            .then(result => {
                console.log(result);
                setPost(result)
            })
    }, []);

    const onCreatePost = async (data) => {
        const newPost = await postService.create(data);

        setPost(state => [...state, newPost]);

        navigate('/');
    }


    return (
        <>
            <TopBar />
            <Routes>
                <Route path="/" element={<Home posts={posts}/>} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/write" element={<Write onCreatePost={onCreatePost}/>} />
                <Route path="/post/:postId" element={<Single />} />
            </Routes>

        </>
    );
}

export default App;
