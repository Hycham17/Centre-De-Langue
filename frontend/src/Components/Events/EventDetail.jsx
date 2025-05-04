import { replace, useNavigate, useParams } from "react-router-dom";
import { useLayoutEffect, useState } from "react";
import { useCustomHooks } from "../../Context/contextApi";
import ServiceDetailCard from "../Service/ServiceDetailCard";
const DetailEvent = () => {
    const params = useParams();
    const { Events } = useCustomHooks();
    const [item, setItem] = useState(
        Events.find((item) => item.id == params.Eventid)
    );
    const [loading, setLoading] = useState(false);
    useLayoutEffect(() => {
        const fetchingEvent = async () => {
            try {
              setLoading(true)
                const response = await fetch(
                    `http://localhost:8000/api/evenements/${params.Eventid}`
                );
                const data = await response.json();
                if (response.ok) {
                    setItem({
                        ...data,
                        title: {
                            fr: data.title_fr,
                            en: data.title_en,
                            ar: data.title_ar,
                        },
                        description: {
                            fr: data.description_fr,
                            en: data.description_en,
                            ar: data.description_ar,
                        },

                    });
                                       setLoading(false)
 }

 
            } catch (err) {
console.log(err.message);
            }
        };
        fetchingEvent();
    }, [params]);

    return <div className="min-h-screen">
      {loading?<div className="min-h-[90vh] flex items-center justify-center ">

<div className="border-[7px] border-blueColor border-t-orangeColor animate-spin rounded-full w-14 h-14"></div>
</div>:item&& <ServiceDetailCard item={item} />}

     

      </div>
}

export default DetailEvent;
