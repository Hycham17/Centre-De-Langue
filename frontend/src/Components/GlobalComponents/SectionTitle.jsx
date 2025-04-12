import { faServer } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { motion } from "framer-motion"


const SectionTitle = ({title}) => {
  return (
    <div className=" my-10  p-1 flex justify-center items-center  ">
   
    <motion.h1 className=" rounded text-3xl md:text-5xl tracking-wider font-E text-blackColor capitalize  bg-no-repeat   py-4  " style={{background:'conic-gradient(var(--blueColor) 180deg,var(--orangeColor) 180deg)',backgroundSize:'0%',backgroundPosition:'left bottom',backgroundRepeat:'no-repeat'}} whileInView={{backgroundSize:'100% 4px'}} transition={{delay:0.5}}  >{title}</motion.h1>
</div>  )
}
export default SectionTitle