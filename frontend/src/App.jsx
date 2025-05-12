import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./Layout/Layout";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Inscription from "./pages/Inscription";
import About from "./pages/About.jsx";
import ErrorNotFound from "./pages/ErrorNotFound.jsx";
import DetailService from "./pages/DetailService.jsx";
import Events from "./pages/Events.jsx";
import DetailEvent from "./Components/Events/EventDetail.jsx";
import DetailValue from "./pages/DetailValue.jsx";
const App = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000, // durée de l’animation
            once: true,
        });
    }, []);

    const Routes_ = [
        {
            path: "*",
            element: <ErrorNotFound />,
        },
        {
            path: "/inscription",
            element: <Inscription />,
        },
        {
            path: "/About",
            element: <About />,
        },  {
            path: "/Events",
            element: <Events />,
        },
         
        
     
    ];

  
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route element={<Home />} index></Route>
                {Routes_.map(({ path, element }, index) => (
                    <Route key={index}  path={path} element={element} />
                ))}
                <Route path="/services/:serviceName" element={<DetailService/>}/>
                <Route path="/about/values/:valueName" element={<DetailValue/>}/>

                <Route path="/events/:Eventid" element={<DetailEvent/>}/>
            </Route> 

        </Routes>
    );
};
export default App;
