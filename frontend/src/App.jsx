import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./Layout/Layout";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
const App = () => {
useEffect(()=>{
    AOS.init({
        duration: 1000, // durée de l’animation
    once:true
    });
    }, [])
    
    return (
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route element={<Home/>} index></Route>
            </Route>
        </Routes>
    );
};
export default App;
