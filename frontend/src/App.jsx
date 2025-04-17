import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./Layout/Layout";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Inscription from "./pages/Inscription";
import About from "./pages/About.jsx";
import ErrorNotFound from "./pages/ErrorNotFound.jsx";
import DetailService from "./DetailService.jsx";
const App = () => {
useEffect(()=>{
    AOS.init({
        duration: 1000, // durée de l’animation
    once:true
    });
    }, [])
   
    const Routes_=[
        {
path:'*',
element:<ErrorNotFound/>
        },
        {
            path:'/inscription',
            element:<Inscription/>
        },
         {
            path:'/About',
            element:<About/>
        },
        {
            path:'Langues',
            element:<DetailService/>
        }
    ]
    return (
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route element={<Home/>} index></Route>
            {Routes_.map(({path,element},index)=><Route key={index} path={path} element={element}/>)}
            </Route>
        </Routes>
    );
};
export default App;
