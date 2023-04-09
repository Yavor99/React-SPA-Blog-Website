import { useEffect, useState } from "react";

import { Routes, Route, useNavigate } from "react-router-dom";

import { postServiceFactory } from './services/postService';
import { AuthProvider } from "./context/AuthContext";


import Home from "./components/pages/home/Home";
import Login from "./components/pages/login/Login";
import Register from "./components/pages/register/Register";
import Settings from "./components/pages/settings/Settings";
import Single from "./components/pages/single/Single";
import Write from "./components/pages/write/Write";
import TopBar from "./components/topBar/TopBar";
import { Logout } from "./components/pages/logout/Logout";
import { EditPost } from "./components/pages/edit/EditPost";
import About from "./components/pages/about/About";
import { SettingsProvider } from "./context/SettingsContext";
import { RouteGuard } from "./components/common/RouteGuard";
import Contact from "./components/pages/contact/Contanct";


function App() {
    const navigate = useNavigate();
    const [posts, setPost] = useState([]);
    
    
    const postService = postServiceFactory();  //auth.accessToken
    
    
    useEffect(() => {
        postService.getAll()
            .then(result => {
                setPost(result.map(x => ({...x, likes: 0})));              
            })
    }, []);

    const onLikeClick = async (postId, like) => {
        setPost(state => state.map(x => x._id === postId ? {...x, likes: x.likes + 1} : x));
    }
 
    const onCreatePost = async (data) => {
        
        const newPost = await postService.create(data);

        setPost(state => [...state, newPost]);

        navigate('/');
    };

    const onEditForm = async (values) => {
        const editedPost = await postService.edit(values._id, values);

        setPost(state => state.map(x => x._id === values._id ? editedPost : x));

        navigate(`/post/${values._id}`);
    };

    const deletePost = (postId) => {
        setPost(state => state.filter(post => post._id !== postId));
    };

    

    return (
        <AuthProvider>
        <SettingsProvider>
        <>
            <TopBar />
            <Routes>
                <Route path="/" element={<Home posts={posts}/>} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/logout" element={<Logout />} />
                <Route path="/about" element={<About />} />  
                <Route path="/write" element={
                    <RouteGuard>
                        <Write onCreatePost={onCreatePost} />
                    </RouteGuard>
                } />
                <Route path="/post/:postId" element={<Single onLikeClick={onLikeClick} deletePost={deletePost} posts={posts}/>} />
                <Route element={<RouteGuard />}>
                    <Route path="/post/:postId/edit" element={<EditPost onEditForm={onEditForm}/>} />
                </Route>
            </Routes>
        </>
        </SettingsProvider>
        </AuthProvider>
    );
}

export default App;
