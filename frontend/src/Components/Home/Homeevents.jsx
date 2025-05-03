import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import {
    faChevronCircleLeft,
    faChevronCircleRight,
} from "@fortawesome/free-solid-svg-icons";
import { useCustomHooks } from "../../Context/contextApi";
import SectionTitle from "../GlobalComponents/SectionTitle";
import { services } from "../../data/Services";
import { Titles } from "../../data/titles";
import ServiceCard from "./ServicesSection/ServiceCard";
import { Link } from "react-router-dom";

const HomeEvents = () => {
    //traduction
    const { traductionTitle, error, loading, Events } = useCustomHooks();
 

        
    
    
    //services

    const [Currentindex, setCurrentIndex] = useState(0);
console.log(Events);

    return (
        Events.length>0 && (
            <section className="flex  flex-col  px-5  gap-y-6 ">
                <SectionTitle title="recents" />
                <div className="w-full relative">
                    <div className="  services grid  place-self-center gap-5    sm:grid-cols-2 md:grid-cols-3    ">
                        {/* sort(()=>Math.random()-0.5) */}
                        {Events.slice(
                            3 * Currentindex,
                            (Currentindex + 1) * 3
                        ).map((item) => {
                            return (
                                <ServiceCard
                                    service={false}
                                    {...item}
                                    key={item.id}
                                />
                            );
                        })}
                    </div>
                    {(Currentindex + 1) * 3 < Events.length - 1 && (
                        <button
                            onClick={() => setCurrentIndex((prev) => prev + 1)}
                            className="absolute text-iconColor text-3xl -top-14  right-0 active:text-blackColor"
                        >
                            <FontAwesomeIcon icon={faChevronCircleRight} />
                        </button>
                    )}

                    {Currentindex > 0 && (
                        <button
                            onClick={() => setCurrentIndex((prev) => prev - 1)}
                            className="absolute text-iconColor text-3xl -top-14  left-0 active:text-blackColor"
                        >
                            <FontAwesomeIcon icon={faChevronCircleLeft} />
                        </button>
                    )}
                </div>
                <div className="flex my-10 justify-center items-center">
                    <Link
                        to="/events"
                        className="w-full flex justify-center items-center"
                    >
                        <button className="w-full sm:w-[50%]  h-11 font-B bg-blueColor transition-all  hover:opacity-[0.6] text-white  md:w-[30%] rounded ">
                            {traductionTitle(Titles, "discoverMore")}
                        </button>
                    </Link>
                </div>
            </section>
        )
    );
};
export default HomeEvents;
