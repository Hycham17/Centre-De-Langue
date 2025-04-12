const ServiceCard = ({ id, title, description, photo }) => {
    return (
        <div data-aos={id % 2 == 0 ? "fade-up" : "fade-down"} className="w-full sm:w-[18rem] lg:w-[19rem] md:w-[15rem]  flex-shrink-0 ">
            <div className=" flex flex-col  border overflow-hidden h-full w-full  rounded-xl shadow-xl transition-all duration-1000 hover:scale-[1.04] hover:shadow-2xl p-2">
                <div className="w-full py-4   flex justify-center items-center h-[15rem]  overflow-hidden min-h-[15rem]  ">
                    <img
                        className="w-[90%] h-full rounded-xl transition-all duration-1000  object-cover "
                        src={photo}
                        alt={title}
                    />
                </div>
                <div className="flex w-[90%] mx-auto select-none  h-full flex-col gap-y-4  justify-between">
                    <h1 className="text-sm text-center  font-semibold tracking-[2px] font-A bg-gradient-to-tr from-blueColor  text-transparent bg-clip-text">
                        {title}
                    </h1>
                    <p className="text-sm tracking-wider font-D text-blackColor text-justify">
                        {description.slice(0, 90)}...
                    </p>
                    <button className="bg-blueColor mx-auto transition-all hover:bg-orangeColor w-[30%] sm:w-[50%]   h-10 flex justify-center items-center text-xs  tracking-wider uppercase font-B rounded-xl text-white">
                        Lire Plus
                    </button>
                </div>
            </div>
        </div>
    );
};
export default ServiceCard;
