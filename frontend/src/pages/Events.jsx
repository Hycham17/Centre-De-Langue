import { useState } from "react";
import ServiceCard from "../Components/Home/ServicesSection/ServiceCard";
import { services } from "../data/Services";
import { useCustomHooks } from "../Context/contextApi";
import { Titles } from "../data/titles";
import { useSearchParams } from "react-router-dom";

const Events = () => {
    const {traductionTitle,Events,loading,error}=useCustomHooks()
    const [params,setSearchParams]=useSearchParams() 
    

    return (
        loading?<div className="min-h-[90vh] flex items-center justify-center ">

            <div className="border-[7px] border-blueColor border-t-orangeColor animate-spin rounded-full w-14 h-14"></div>
        </div>:
        Events?  <div className="w-full min-h-screen place-items-center grid gap-5 sm:grid-cols-2 md:grid-cols-3  p-5">
            {Events.map((item) => {
                return <ServiceCard service={false} {...item} key={item.id} />;
            })}
        </div>:<div className="h-screen flex justify-center items-center">
            <h1 className="uppercase text-3xl text-blackColor font-E">
{traductionTitle(Titles,'noEvents')}
            </h1>
        </div>
    );
};
export default Events;
