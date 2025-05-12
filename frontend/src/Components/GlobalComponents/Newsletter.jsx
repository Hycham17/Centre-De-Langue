import { useEffect, useState } from "react";
import { useCustomHooks } from "../../Context/contextApi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBell,
    faClose,
    faCircleCheck,
    faExclamationTriangle,
} from "@fortawesome/free-solid-svg-icons";
import { AnimatePresence, motion } from "framer-motion";
import { Titles } from "../../data/titles";
import { inputs } from "../../data/inputs";
import { texts } from "../../data/texts";
import clsx from "clsx";
import Loading from "./loading";
const Newsletter = () => {
    //NewsLetter
    const { setShowNewsLetter, showNewsLetter } = useCustomHooks();
    //empecher le scroll pendant le Newsletter est visible
    useEffect(() => {
        if (showNewsLetter) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "visible";
        }
    }, [showNewsLetter]);
    //onFocus
    const [focus, setFocus] = useState(false);
    //traduction
    const { traductionTitle, currentLangAbrev } = useCustomHooks();
    //send emails
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            setError("");
            const response = await fetch("http://localhost:8000/api/emails", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    email,
                    lang: currentLangAbrev,
                }),
            });
            const data = await response.json();
            if (!response.ok) {
                setError(data.errors.email[0]);
                setEmail("");
                setLoading(false);
                return;
            }
            else{
                setSuccess(true);
                setEmail("");
                setLoading(false);
                setTimeout(() => {
                    setShowNewsLetter(false);
                    setSuccess(false);

                }, 2000);
            }
        } catch (error) {
            setLoading(false);        }
    };
    return (
        <AnimatePresence>
            {showNewsLetter && (
               <div className="select-none fixed top-0 left-0 z-[9999999999] w-full h-screen bg-black/90 flex justify-center items-center ">
                    <motion.div
                        layout
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="shadow-xl bg-whiteColor border backdrop-blur-sm  w-[90%] md:w-1/2 h-fit rounded-2xl overflow-hidden p-3"
                    >
                        <div className="header  flex justify-end items-center p-1">
                            <button
                                aria-label="Fermer la Newsletter"
                                onClick={() => setShowNewsLetter(false)}
                                className="text-sm text-iconColor border-iconColor transition-all hover:text-orangeColor hover:border-blueColor border-2 border-dashed rounded-full h-6 w-6 p-2 flex justify-center items-center"
                            >
                                <FontAwesomeIcon icon={faClose} />
                            </button>
                        </div>
                        {!loading?!success? <div className="flex flex-col gap-y-5">
                            <div className=" flex flex-col items-center gap-y-2 p-2 ">
                                <FontAwesomeIcon
                                    className={clsx("text-7xl ",error?'text-[red]':'text-orangeColor ')}
                                    icon={!error ? faBell : faExclamationTriangle}
                                    shake 
                                />
                                {!error&&<h1 className="text-xl text-center md:text-2xl  font-D uppercase font-bold tracking-wider text-blackColor">
                                    {traductionTitle(texts, "NewsLetter")}
                                </h1>}
                            </div>
                            <span className="font-sans italic tracking-wider text-[red]">{error}</span>
                            <form
                                onSubmit={handleSubmit}
                                style={{
                                    borderColor: focus
                                        ? "var(--blueColor)"
                                        : "var(--iconColor)",
                                }}
                                className="h-10 border border-dashed flex  border-iconColor rounded-2xl overflow-hidden"
                            >
                                <input
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    onFocus={() => setFocus(true)}
                                    onBlur={() => setFocus(false)}
                                    className="bg-transparent text-blackColor outline-none h-full w-[70%] px-2 text-sm placeholder:tracking-wider placeholder:capitalize font-E"
                                    type="email"
                                    name="email"
                                    placeholder={
                                        traductionTitle(
                                            inputs[1],
                                            "placeholder"
                                        ) + "..."
                                    }
                                />
                                <button
                                    className={clsx(
                                        "text-xs h-full inline-block w-[30%] text-white font-semibold tracking-wider font-B md:text-sm  hover:bg-gradient-to-bl transition-all bg-gradient-to-tr from-blueColor to-white "
                                    )}
                                >
{traductionTitle(Titles, "subscribebtn")}                                </button>
                            </form>
                        </div>:<div>
<div className="flex gap-y-4 flex-col items-center">
<FontAwesomeIcon icon={faCircleCheck} className='text-center text-orangeColor bg-blueColor overflow-hidden rounded-full text-4xl'/>
<h1 className="font-D text-xl text-blackColor">{traductionTitle(texts,'mercinewsletter')}</h1>
</div>                        </div>
                        :<Loading/>
                        }
              </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};
export default Newsletter;
