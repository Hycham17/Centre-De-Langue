import { useState } from "react";
import ServiceCard from "../Components/Home/ServicesSection/ServiceCard";
import { services } from "../data/Services";
import { useCustomHooks } from "../Context/contextApi";
import { Titles } from "../data/titles";

const Events = () => {
    const [events,setEvents]=useState(null)
    const {traductionTitle}=useCustomHooks()
    return (
        events?  <div className="w-full place-items-center grid gap-5 sm:grid-cols-2 md:grid-cols-3  p-5">
            {events.map((item) => {
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
