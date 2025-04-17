import { faCheckSquare } from "@fortawesome/free-regular-svg-icons/faCheckSquare";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { useCustomHooks } from "../../Context/contextApi";

const CardInfoInscription = ({ index, title, list, image }) => {
    const [isHover, setIsHover] = useState(false);
    const { currentLangAbrev } = useCustomHooks();
    const traduction = (field) => {
        return field[currentLangAbrev];
    };

    return (
        <motion.div
            data-aos={index % 2 == 0 ? "zoom-out" : "zoom-in"}
          
            onClick={() => setIsHover((prev) => !prev)}
            className="card shadow-xl   duration-1000 transition-all relative w-full cursor-pointer  h-[29rem] border rounded-xl overflow-hidden after:absolute after:w-full after:h-full after:bg-[#00aaffd2] after:odd:bg-[#f49200d6] "
            style={
                isHover
                    ? { rotateY: "180deg" }
                    : {
                          background: `url(${image})`,
                          backgroundSize: "cover",
                          rotateY: 0,
                          
                      }
            }
        >
            <AnimatePresence>
                {!isHover ? (
                    <motion.h1
                        transition={{ delay: 0.5 }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="absolute text-center  -translate-x-1/2 left-1/2 -translate-y-1/2 top-1/2 text-4xl z-[99] text-white font-F tracking-wider uppercase"
                        style={{ textShadow: "1px 1px 0px #000" }}
                    >
                        {traduction(title)}
                    </motion.h1>
                ) : (
                    <motion.ul
                        transition={{ delay: 1 }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ y: 200 }}
                        style={{ scaleX: -1 }}
                        className="absolute  p-5 h-full flex flex-col left-0   justify-center items-start gap-y-5    right-0 top-0 text-l z-[99] text-white font-E tracking-wider uppercase"
                    >
                        {list[currentLangAbrev].map((item, index) => {
                            return (
                                <li
                            
                                    key={index}
                                    className="text-sm  lg:text-xl flex gap-x-2  items-center"
                                >
                                    <FontAwesomeIcon
                                        color={
                                            index % 2 == 0 ? "black" : "white"
                                        }
                                       
                                        className="text-xl"
                                        icon={faCheckSquare}
                                    />
                                    {item}
                                </li>
                            );
                        })}
                    </motion.ul>
                )}
            </AnimatePresence>
        </motion.div>
    );
};
export default CardInfoInscription;
