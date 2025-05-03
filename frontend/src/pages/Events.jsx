import { useState } from "react";
import ServiceCard from "../Components/Home/ServicesSection/ServiceCard";
import { services } from "../data/Services";
import { useCustomHooks } from "../Context/contextApi";
import { Titles } from "../data/titles";
import { useSearchParams } from "react-router-dom";
import Loading from "../Components/GlobalComponents/loading";

const Events = () => {
    const {traductionTitle,Events,loading,error}=useCustomHooks()
    const [params,setSearchParams]=useSearchParams() 
    

    return (
        <div className="min-h-screen">

     { !loading?  Events.length>0? 
      <div className="w-full  place-items-center grid gap-5 sm:grid-cols-2 md:grid-cols-3  p-5">
            {Events.map((item) => {
                return <ServiceCard service={false} {...item} key={item.id} />;
            })}
        </div>:
        <div className="h-screen flex justify-center items-center">
            <h1 className="uppercase text-3xl text-blackColor font-E">
{traductionTitle(Titles,'noEvents')}
            </h1>
        </div>:<div className="min-h-screen flex justify-center items-center"><Loading/></div>}
        </div>
    );
};
export default Events;
