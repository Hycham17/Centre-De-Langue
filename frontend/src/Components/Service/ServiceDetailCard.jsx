// import clsx from "clsx";
// import { useCustomHooks } from "../../Context/contextApi";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
// import { faArrowAltCircleLeft } from "@fortawesome/free-regular-svg-icons";
// import { useState } from "react";

// const ServiceDetailCard = ({ item }) => {
//     //get Current language
//     //index pour la déplacement entre les elemets de sldier
//     const [currentIndexForSlider, setCurrentIndexForSlider] = useState(0);
//     const { currentLangAbrev } = useCustomHooks();
//     const { background, title, description, images } = item;

//     return (
//         <section
//             className=" overflow-hidden select-none min-h-[90vh] p-5 relative after:absolute z-[4] after:-z-[5] after:w-full after:h-full after:bg-gradient-to-b after:from-[#004cffcb]  after:to-orangeColor   after:bg-white/9 0 after:left-0 after:top-0 "
//             style={{
//                 background: `url(${background||''})`,
//                 backgroundRepeat: "no-repeat",
//                 backgroundSize:"cover",
//             }}
//         >
//             <div className=" w-full  md:w-2/3   mx-auto   h-full pt-10 flex flex-col gap-y-5">
//                 <div className="flex justify-center items-center ">
//                     <h1

//                         className={clsx(
//                             "text-white text-center text-2xl  md:text-5xl  font-E",
//                             currentLangAbrev !== "ar" && "tracking-wider"
//                         )}
//                         style={{ textShadow: "1px 0px 0px #000" }}
//                         data-aos="fade-down"
//                     >
//                         {title[currentLangAbrev]}{' '} 

//                     </h1>
//                 </div>
//                 <div className="images md:grid w-full  gap-5 grid-cols-1  md:grid-cols-2 lg:grid-cols-3   mx-auto hidden">
//                     {Array.from({ length: 6 }, (_, index) => {
//                         return (
//                             <div
//                                 key={index}
//                                 className="transition-all duration-700 cursor-pointer hover:scale-[1.05] shadow-xl w-full h-[25rem] md:h-[15rem]   overflow-hidden rounded-2xl"
//                             >
//                                 <img
//                                     data-aos={"zoom-out"}
//                                     className="w-full bg-white h-full object-cover "
//                                     src={images[0]}
//                                     alt={"image nr: " + index + 1}
//                                 />
//                             </div>
//                         );
//                     })}
//                 </div>
//                 <div className="md:hidden relative w-full h-[25rem] overflow-hidden rounded-2xl shadow-xl border">
//                     {currentIndexForSlider > 0 && (
//                         <button
//                             onClick={() =>
//                                 setCurrentIndexForSlider((prev) => prev - 1)
//                             }
//                             className="text-white cursor-pointer transition-all hover:text-blueColor active:scale-[0.9] left-2  text-3xl top-1/2 -translate-y-1/2 z-[99] absolute"
//                         >
//                             <FontAwesomeIcon icon={faArrowAltCircleLeft} />
//                         </button>
//                     )}{" "}
//                     {currentIndexForSlider < 5 && (
//                         <button
//                             onClick={() =>
//                                 setCurrentIndexForSlider((prev) => prev + 1)
//                             }
//                             className="text-white cursor-pointer transition-all hover:text-blueColor active:scale-[0.9] right-2 text-3xl  top-1/2 -translate-y-1/2 z-[99] absolute"
//                         >
//                             <FontAwesomeIcon icon={faArrowAltCircleRight} />
//                         </button>
//                     )}
//                     {Array.from({ length: 6 }, (_, index) => {
//                         return (
//                             <div
//                                 key={index}
//                                 className={clsx(
//                                     "w-full h-full absolute transition-all"
//                                 )}
//                                 style={{
//                                     left: index * 100 + "%",
//                                     transform: `translateX(${
//                                         -(currentIndexForSlider * 100) + "%"
//                                     })`,
//                                 }}
//                             >
//                                 <img
//                                     className="w-full bg-white h-full object-cover "
//                                     src={images[0]}
//                                     alt={"image nr: " + index + 1}
//                                 />
//                             </div>
//                         );
//                     })}
//                 </div>
//                 <div className=" p-2 rounded">
//                     <p
//                         data-aos="zoom-out"
//                         className="text-xl rounded-b-2xl p-2  text-justify font-D text-white "
//                     >
//                         {description[currentLangAbrev]}
//                     </p>
//                 </div>
//             </div>
//         </section>
//     );
// };
// export default ServiceDetailCard;
import clsx from "clsx";
import { useCustomHooks } from "../../Context/contextApi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
import { faArrowAltCircleLeft } from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";

const ServiceDetailCard = ({ item }) => {
    const [currentIndexForSlider, setCurrentIndexForSlider] = useState(0);
    const { currentLangAbrev } = useCustomHooks();
    const { background, title, description, images, preview } = item || {};

    return (
        <section
            className="overflow-hidden select-none min-h-[90vh] p-5 relative after:absolute z-[4] after:-z-[5] after:w-full after:h-full after:bg-gradient-to-b after:from-[#004cffcb] after:to-orangeColor after:bg-white/90 after:left-0 after:top-0"
            style={{
                background: background ? `url(${background}) no-repeat center/cover` : undefined,
            }}
        >
            <div className="w-full md:w-2/3 mx-auto h-full pt-10 flex flex-col gap-y-5">
                {/* Title */}
                <div className="flex justify-center items-center">
                    <h1
                        className={clsx(
                            "text-white text-center text-2xl md:text-5xl font-E",
                            currentLangAbrev !== "ar" && "tracking-wider"
                        )}
                        style={{ textShadow: "1px 0px 0px #000" }}
                        data-aos="fade-down"
                    >
                        {title?.[currentLangAbrev] || "Titre"}
                    </h1>
                </div>

                {/* Images */}
                {images && images.length > 0 ? (
                    <>
                        {/* Grid for large screens */}
                        <div className="hidden md:grid w-full gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto">
                            {images.map((img, index) => (
                                <div
                                    key={index}
                                    className="transition-all duration-700 cursor-pointer hover:scale-[1.05] shadow-xl w-full h-[25rem] md:h-[15rem] overflow-hidden rounded-2xl"
                                >
                                    <img
                                        data-aos="zoom-out"
                                        className="w-full h-full object-cover"
                                        src={`/storage/${img}`}
                                        alt={`image-${index}`}
                                    />
                                </div>
                            ))}
                        </div>

                        {/* Slider for mobile */}
                        <div className="md:hidden relative w-full h-[25rem] overflow-hidden rounded-2xl shadow-xl border">
                            {currentIndexForSlider > 0 && (
                                <button
                                    onClick={() => setCurrentIndexForSlider((prev) => prev - 1)}
                                    className="text-white cursor-pointer transition-all hover:text-blueColor active:scale-[0.9] left-2 text-3xl top-1/2 -translate-y-1/2 z-[99] absolute"
                                >
                                    <FontAwesomeIcon icon={faArrowAltCircleLeft} />
                                </button>
                            )}
                            {currentIndexForSlider < images.length - 1 && (
                                <button
                                    onClick={() => setCurrentIndexForSlider((prev) => prev + 1)}
                                    className="text-white cursor-pointer transition-all hover:text-blueColor active:scale-[0.9] right-2 text-3xl top-1/2 -translate-y-1/2 z-[99] absolute"
                                >
                                    <FontAwesomeIcon icon={faArrowAltCircleRight} />
                                </button>
                            )}
                            {images.map((img, index) => (
                                <div
                                    key={index}
                                    className="w-full h-full absolute transition-all"
                                    style={{
                                        left: `${index * 100}%`,
                                        transform: `translateX(${-currentIndexForSlider * 100}%)`,
                                    }}
                                >
                                    <img
                                        className="w-full h-full object-cover"
                                        src={`/storage/${img}`}
                                        alt={`image-${index}`}
                                    />
                                </div>
                            ))}
                        </div>
                    </>
                ) : (
                    // Afficher preview si images vides
                    <div className="w-full h-[25rem] overflow-hidden rounded-2xl shadow-xl flex justify-center items-center">
                        <img
                            src={`/storage/${preview}`}
                            alt="Preview"
                            className="w-full h-full object-cover"
                        />
                    </div>
                )}

                {/* Description */}
                <div className="p-2 rounded">
                    <p
                        data-aos="zoom-out"
                        className="text-xl rounded-b-2xl p-2 text-justify font-D text-white"
                    >
                        {description?.[currentLangAbrev] || "Aucune description"}
                    </p>
                </div>
            </div>
        </section>
    );
};

export default ServiceDetailCard;
