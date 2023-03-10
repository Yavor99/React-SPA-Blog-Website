import Home from "./components/pages/home/Home";
import Login from "./components/pages/login/Login";
import Register from "./components/pages/register/Register";
import Settings from "./components/pages/settings/Settings";
import Single from "./components/pages/single/Single";
import Write from "./components/pages/write/Write";
import TopBar from "./components/topBar/TopBar";
import {
  Routes,
  Route
} from "react-router-dom";

function App() {
  const user = false;
  return (
    <>
      <TopBar /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/settings" element={user ? <Settings /> : <Login />} />
        <Route path="/login" element={user ? <Home/> : <Login />} />
        <Route path="/register" element={user ? <Home/> : <Register/>} />        
        <Route path="/write" element={user ? <Write /> : <Login />} />
        <Route path="/post/:postId" element={<Single />} />
      </Routes>
      
    </>
  );
}

export default App;
