// import { useParams } from "react-router-dom";
// import { services } from "../data/Services";
// import {  useLayoutEffect, useState } from "react";
// import ServiceDetailCard from "../Components/Service/ServiceDetailCard";
// const DetailService = () => {
//     const params = useParams();
//     const [item, setItem] = useState(services.find((item) => item.name == params.serviceName));
//     useLayoutEffect(() => {
//         setItem(services.find((item) => item.name == params.serviceName));
  
//       }, [params]); 
  
    

//     return <div><ServiceDetailCard item={item} /></div>;
// };
// export default DetailService;
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ServiceDetailCard from "../Components/Service/ServiceDetailCard";

const DetailService = () => {
    const params = useParams();
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`http://127.0.0.1:8000/api/evenements`)
            .then(res => res.json())
            .then(data => {
                const formattedData = data.map(event => ({
                    id: event.id,
                    title: { 
                        fr: event.titre_fr, 
                        en: event.titre_en, 
                        ar: event.titre_ar 
                    },
                    description: { 
                        fr: event.description_fr, 
                        en: event.description_en, 
                        ar: event.description_ar 
                    },
                    images: event.images_details ? JSON.parse(event.images_details) : [],
                    name: event.titre_en.split(' ').join('-'),
                    preview: event.image_apercu,
                    date: event.date,
                }));

                const foundItem = formattedData.find(e => e.name === params.serviceName);
                setItem(foundItem);
                setLoading(false);
            })
            .catch(err => {
                console.error("Erreur:", err);
                setLoading(false);
            });
    }, [params]);

    if (loading) {
        return (
            <div className="h-screen flex justify-center items-center">
                <h1>Chargement...</h1>
            </div>
        );
    }

    if (!item) {
        return (
            <div className="h-screen flex justify-center items-center">
                <h1>Événement non trouvé</h1>
            </div>
        );
    }

    return (
        <div>
            <ServiceDetailCard item={item} />
        </div>
    );
};

export default DetailService;
