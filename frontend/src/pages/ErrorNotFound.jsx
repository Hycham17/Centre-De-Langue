import { Link } from "react-router-dom"
import { useCustomHooks } from "../Context/contextApi"
import { useEffect } from "react"

const ErrorNotFound = () => {
    const {traductionFunction}=useCustomHooks()
  
  return (
    <div className="h-screen  flex-col gap-y-5 flex justify-center items-center">
        <h1 className="text-5xl text-blackColor font-A">{traductionFunction('Erreur 404','Error 404','خطأ 404')}</h1> 
        <Link to='/' replace className="transition-all hover:text-orangeColor text-blueColor cursor-pointer tracking-wider font-E">
        {traductionFunction('Retour à la page d\'accueil','Back to Home Page','العودة إلى الصفحة الرئيسية')}
        </Link>
    </div>
  )
}
export default ErrorNotFound