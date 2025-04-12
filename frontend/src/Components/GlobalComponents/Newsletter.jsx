import { useEffect, useState } from "react";
import { useCustomHooks } from "../../Context/contextApi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faClose } from "@fortawesome/free-solid-svg-icons";
import { AnimatePresence, motion } from "framer-motion";

const Newsletter = () => {
    //NewsLetter
    const { setShowNewsLetter, showNewsLetter } = useCustomHooks();
    //empecher le scroll pendant le Newsletter est visible
    useEffect(() => {
        if (showNewsLetter) {
            document.body.style.overflow = "hidden";
        }
        else{
            document.body.style.overflow = "visible";
 
        }
    }, [showNewsLetter]);
    //onFocus 
    const [focus,setFocus]=useState(false)
    
    return (
        <AnimatePresence>
     {   showNewsLetter && (
            <div className="select-none fixed top-0 left-0 z-[9999999999] w-full h-screen bg-black/90 flex justify-center items-center ">
                <motion.div  layout initial={{scale:0}} animate={{scale:1}}  className="shadow-xl bg-whiteColor border backdrop-blur-sm  w-[90%] md:w-1/2 h-fit rounded-2xl overflow-hidden p-3">
                    <div className="header  flex justify-end items-center p-1">
                        <button onClick={()=>setShowNewsLetter(false)} className="text-sm text-iconColor border-iconColor transition-all hover:text-orangeColor hover:border-blueColor border-2 border-dashed rounded-full h-6 w-6 p-2 flex justify-center items-center">
                            <FontAwesomeIcon  icon={faClose} />
                        </button>
                    </div>
                    <div className="flex flex-col gap-y-5">
                        <div className=" flex flex-col items-center gap-y-2 p-2 ">
                            <FontAwesomeIcon
                                className="text-7xl text-orangeColor "
                                icon={faBell}
                                shake
                            />
                            <h1 className="text-2xl  font-E font-bold tracking-wider text-blackColor">
                                Inscrivez-vous à notre newsletter
                            </h1>
                        </div>
                      <form style={{borderColor:focus?'var(--orangeColor)':'var(--blackColor)'}} action="" className="h-10 border border-dashed flex  border-iconColor rounded-2xl overflow-hidden">
                      <input 
                      onFocus={()=>setFocus(true)}
                      onBlur={()=>setFocus(false)}
                      className="bg-transparen outline-none h-full w-[80%] px-2 text-sm placeholder:tracking-wider capitalize font-E"
                                type="email"
                                placeholder="Enter Votre Adresse email"
                            /> 
                            <button  className=" h-full inline-block w-[20%] text-white font-semibold tracking-wider font-B text-sm  hover:opacity-[0.6] transition-all bg-gradient-to-tr from-blueColor to-white">S'abonner</button>
                      </form>
                        </div>
                </motion.div>
            </div>
           
        )}
    </AnimatePresence> );
};
export default Newsletter;
