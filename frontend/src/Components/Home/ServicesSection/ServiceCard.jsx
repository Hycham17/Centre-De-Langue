import clsx from "clsx";
import { useCustomHooks } from "../../../Context/contextApi";
import { Titles } from "../../../data/titles";
import { Link } from "react-router-dom";

const ServiceCard = ({ id, title, description, images,name,service,event,date }) => {
      //traduction function
      const { traductionTitle,currentLangAbrev,dateFormat } = useCustomHooks();
   
      return (
        <div data-aos={id % 2 == 0 ? "fade-up" : "fade-down"} className="w-full sm:w-[18rem] lg:w-[19rem] md:w-[15rem]  flex-shrink-0 ">
          
            <div className=" flex flex-col  border overflow-hidden h-full w-full  rounded-xl shadow-xl transition-all duration-1000 hover:scale-[1.04] hover:shadow-2xl p-2">
                <div className="w-full py-4    flex justify-center items-center h-[15rem]  overflow-hidden min-h-[15rem]  ">
                   <div className="w-[90%] relative h-full rounded-xl transition-all duration-1000 overflow-hidden ">
                     <img
                        className="w-full  h-full   object-cover "
                        src={images[0]}
                        alt={'event'}
                    /> 
                     {/* {!service&&!event&&  <span className="absolute flex justify-center items-center font-E top-0 left-0 rounded-br-xl text-xs text-white p-1 bg-blueColor">
                        {traductionTitle(Titles,'event')}
                    </span>} */}
                    {!service&&  <span className="font-E flex justify-center items-center absolute bottom-0 right-0 rounded-tl-xl text-xs text-white p-1 bg-blueColor">
                       {dateFormat(date)}
                    </span>}
                   </div>
                  
                 
                </div>
                <div className="flex w-[90%] mx-auto select-none  h-full flex-col gap-y-4  justify-between">
                    <h1 className={clsx("text-sm text-center  font-semibold  font-A bg-gradient-to-tr from-blueColor  text-transparent bg-clip-text tracking-[2px]",currentLangAbrev=='ar' && 'tracking-normal text-xl',!service &&'font-D from-orangeColor ')}>
                    {title[currentLangAbrev].slice(0, 20)}

                    </h1>
                    <p className="text-sm tracking-wider font-D text-blackColor text-justify">
                        {description[currentLangAbrev].slice(0, 90)}...
                    </p>
                    <Link to={!service ? `/events/${id}` : `/services/${id}`} className="w-full flex justify-center items-center">
                    <button className={clsx("p-2 mx-auto transition-all  w-[35%] sm:w-[50%]   h-10 flex justify-center items-center text-xs  tracking-wider uppercase font-B rounded-xl text-white",!service ? 'bg-orangeColor hover:bg-blueColor':'bg-blueColor hover:bg-orangeColor')}>
                        {traductionTitle(Titles,'learnMore')}
                    </button>
                    </Link>
                </div>
                
            </div>
        </div>
    );
};
export default ServiceCard;
