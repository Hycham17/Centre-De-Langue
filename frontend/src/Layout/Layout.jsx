import { Outlet } from "react-router-dom"
import Footer from "../partials/footer"
import Navbar from "../partials/navbar"

const Layout = () => {
  return (
    <div>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}
export default Layout