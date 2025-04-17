import { Outlet } from "react-router-dom";
import Footer from "../partials/footer";
import Navbar from "../partials/navbar";
import ElementPositionFixed from "../components/elemetsFixed/ElementPositionFixed.jsx";
import { useCustomHooks } from "../Context/contextApi.jsx";
import { useEffect } from "react";

const Layout = () => {
    // Traduction 
    const { currentLangAbrev } = useCustomHooks();
    useEffect(() => {
        const SetAttribute = (value) => {
            document.querySelector("Html").setAttribute("dir", value);
        };

        currentLangAbrev == "ar" ? SetAttribute("rtl") : SetAttribute("ltr");
    }, [currentLangAbrev]);
    // scroll 0 initialement
    useEffect(() => {
window.scrollTo({left:0,top:0})
    },[]);
    return (
        <div>
            <Navbar />
            <div className="pt-[4.1rem]">
                <ElementPositionFixed />

                <Outlet />
            </div>

            <Footer />
        </div>
    );
};
export default Layout;
