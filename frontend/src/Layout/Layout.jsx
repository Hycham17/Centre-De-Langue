import { Outlet } from "react-router-dom";
import Footer from "../partials/footer";
import Navbar from "../partials/navbar";
import ElementPositionFixed from "../components/elemetsFixed/ElementPositionFixed.jsx";

const Layout = () => {
    return (
        <div>
            <Navbar />
            <div className="pt-[4.1rem]"> 
               <ElementPositionFixed/>

                <Outlet />
            </div>

            <Footer />
        </div>
    );
};
export default Layout;
