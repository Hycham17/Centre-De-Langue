import { useParams } from "react-router-dom";
import { services } from "../data/Services";
import {  useLayoutEffect, useState } from "react";
import ServiceDetailCard from "../Components/Service/ServiceDetailCard";
const DetailService = () => {
    const params = useParams();
    const [item, setItem] = useState(services.find((item) => item.name == params.serviceName));
    useLayoutEffect(() => {
        setItem(services.find((item) => item.name == params.serviceName));
  
      }, [params]); 
  
    

    return <div>{item &&<ServiceDetailCard item={item} />}</div>;
};

export default DetailService;
