import clsx from "clsx";
import { useCustomHooks } from "../../../Context/contextApi";
import { Titles } from "../../../data/titles";
import { Link } from "react-router-dom";

const ServiceCard = ({ id, title, description, images,name }) => {
      //traduction function
      const { traductionTitle,currentLangAbrev } = useCustomHooks();
    return (
        <div data-aos={id % 2 == 0 ? "fade-up" : "fade-down"} className="w-full sm:w-[18rem] lg:w-[19rem] md:w-[15rem]  flex-shrink-0 ">
            <div className=" flex flex-col  border overflow-hidden h-full w-full  rounded-xl shadow-xl transition-all duration-1000 hover:scale-[1.04] hover:shadow-2xl p-2">
                <div className="w-full py-4   flex justify-center items-center h-[15rem]  overflow-hidden min-h-[15rem]  ">
                    <img
                        className="w-[90%] h-full rounded-xl transition-all duration-1000  object-cover "
                        src={images[0]}
                        alt={title.en}
                    />
                </div>
                <div className="flex w-[90%] mx-auto select-none  h-full flex-col gap-y-4  justify-between">
                    <h1 className={clsx("text-sm text-center  font-semibold  font-A bg-gradient-to-tr from-blueColor  text-transparent bg-clip-text tracking-[2px]",currentLangAbrev=='ar' && 'tracking-normal text-xl')}>
                        {title[currentLangAbrev]}
                    </h1>
                    <p className="text-sm tracking-wider font-D text-blackColor text-justify">
                        {description[currentLangAbrev].slice(0, 90)}...
                    </p>
                    <Link to={"/services/"+name}>
                    <button className="bg-blueColor mx-auto transition-all hover:bg-orangeColor w-[30%] sm:w-[50%]   h-10 flex justify-center items-center text-xs  tracking-wider uppercase font-B rounded-xl text-white">
                        {traductionTitle(Titles,'learnMore')}
                    </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};
export default ServiceCard;
