import { faArrowAltCircleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

const ScrollTo = () => {
    const [showArrow, setShowArrow] = useState(false);
    useEffect(() => {
        const handlScroll = () => {
            if (window.scrollY >= 400) {
                setShowArrow(true);
            } else {
                setShowArrow(false);
            }
        }
            window.addEventListener("scroll", handlScroll);
            return () => window.removeEventListener("scroll", handlScroll);
        
    }, []);
    return (
        showArrow && (
            <div onClick={()=>window.scrollTo({top:0})} className="fixed bottom-10 left-5 z-[999999999] ">
                <button className="text-3xl bg-blueColor rounded-full p-2 flex justify-center items-center text-white">
                    <FontAwesomeIcon icon={faArrowAltCircleUp} />
                </button>
            </div>
        )
    );
};
export default ScrollTo;
