import clsx from "clsx";
import { useCustomHooks } from "@/Context/contextApi";
import { Link } from "react-router-dom";

const ServiceCard = ({ id, title, description, images, name, service, event, date }) => {
    const { traductionTitle, currentLangAbrev } = useCustomHooks();

    return (
        <div data-aos={id % 2 === 0 ? "fade-up" : "fade-down"} className="w-full sm:w-[18rem] lg:w-[19rem] md:w-[15rem] flex-shrink-0">
            <div className="flex flex-col border overflow-hidden h-full w-full rounded-xl shadow-xl transition-all duration-700 hover:scale-[1.04] hover:shadow-2xl p-2">

                {/* Image Section */}
                <div className="w-full py-4 flex justify-center items-center h-[15rem] overflow-hidden min-h-[15rem]">
                    <div className="w-[90%] relative h-full rounded-xl overflow-hidden">
                        {images && images.length > 0 && (
                            <img
                                className="w-full h-full object-cover"
                                src={`/storage/${images[0]}`}
                                alt={title?.[currentLangAbrev] || "Service"}
                            />
                        )}
                        {!service && !event && (
                            <span className="absolute flex justify-center items-center font-E top-0 left-0 rounded-br-xl text-xs text-white p-1 bg-blueColor">
                                {traductionTitle("event")}
                            </span>
                        )}
                        {!service && (
                            <span className="font-E flex justify-center items-center absolute bottom-0 right-0 rounded-tl-xl text-xs text-white p-1 bg-blueColor">
                                {date || "Sans date"}
                            </span>
                        )}
                    </div>
                </div>

                {/* Text Section */}
                <div className="flex w-[90%] mx-auto select-none h-full flex-col gap-y-4 justify-between">
                    <h1 className={clsx(
                        "text-sm text-center font-semibold font-A bg-gradient-to-tr from-blueColor text-transparent bg-clip-text tracking-[2px]",
                        currentLangAbrev === 'ar' && 'tracking-normal text-xl',
                        !service && 'font-D from-orangeColor'
                    )}>
                        {title?.[currentLangAbrev] || "Titre"}
                    </h1>

                    <p className="text-sm tracking-wider font-D text-blackColor text-justify">
                        {description?.[currentLangAbrev]?.slice(0, 90) || "Pas de description"}...
                    </p>

                    {/* Link vers détail */}
                    <Link to={`/services/${name}`}>
                        <button className={clsx(
                            "p-2 mx-auto transition-all w-[35%] sm:w-[50%] h-10 flex justify-center items-center text-xs tracking-wider uppercase font-B rounded-xl text-white",
                            !service ? 'bg-orangeColor hover:bg-blueColor' : 'bg-blueColor hover:bg-orangeColor'
                        )}>
                            {traductionTitle("learnMore")}
                        </button>
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default ServiceCard;
