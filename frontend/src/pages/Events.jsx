// import { useState } from "react";
// import ServiceCard from "../Components/Home/ServicesSection/ServiceCard";
// import { services } from "../data/Services";
// import { useCustomHooks } from "../Context/contextApi";
// import { Titles } from "../data/titles";
// import { useSearchParams } from "react-router-dom";

// const Events = () => {
//     const [events,setEvents]=useState(services)
//     const {traductionTitle}=useCustomHooks()
//     const [params,setSearchParams]=useSearchParams() 
//     console.log(params.get('page'));
        
//     return (
//         events?  <div className="w-full place-items-center grid gap-5 sm:grid-cols-2 md:grid-cols-3  p-5">
//             {events.map((item) => {
//                 return <ServiceCard service={false} {...item} key={item.id} />;
//             })}
//         </div>:<div className="h-screen flex justify-center items-center">
//             <h1 className="uppercase text-3xl text-blackColor font-E">
// {traductionTitle(Titles,'noEvents')}
//             </h1>
//         </div>
//     );
// };
// export default Events;
import { useState, useEffect } from "react";
import ServiceCard from "../Components/Home/ServicesSection/ServiceCard";
import { useCustomHooks } from "../Context/contextApi";
import { Titles } from "../data/titles";
import { useSearchParams } from "react-router-dom";

const Events = () => {
    const [events, setEvents] = useState([]);
    const { traductionTitle } = useCustomHooks();
    const [params, setSearchParams] = useSearchParams();

    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/evenements')
            .then(res => res.json())
            .then(data => {
                const formattedEvents = data.map(item => ({
                    id: item.id,
                    title: { 
                        fr: item.titre_fr, 
                        en: item.titre_en, 
                        ar: item.titre_ar 
                    },
                    description: { 
                        fr: item.description_fr, 
                        en: item.description_en, 
                        ar: item.description_ar 
                    },
                    images: item.images_details ? JSON.parse(item.images_details) : [],
                    preview: item.image_apercu,
                    name: item.titre_en.split(' ').join('-'),
                    date: item.date,
                }));
                setEvents(formattedEvents);
            })
            .catch(error => console.error("Erreur lors du chargement des événements:", error));
    }, []);

    return (
        events.length > 0 ? (
            <div className="w-full place-items-center grid gap-5 sm:grid-cols-2 md:grid-cols-3 p-5">
                {events.map((item) => (
                    <ServiceCard 
                        service={false} 
                        key={item.id} 
                        id={item.id}
                        title={item.title}
                        description={item.description}
                        images={item.images.length > 0 ? item.images : [item.preview]}
                        name={item.name}
                        event={true}
                    />
                ))}
            </div>
        ) : (
            <div className="h-screen flex justify-center items-center">
                <h1 className="uppercase text-3xl text-blackColor font-E">
                    {traductionTitle(Titles, 'noEvents')}
                </h1>
            </div>
        )
    );
};

export default Events;
