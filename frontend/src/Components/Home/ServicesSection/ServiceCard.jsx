const ServiceCard = ({id,title,description,photo}) => {
    return (
        <div className=" flex flex-col gap-y-3 border overflow-hidden  rounded-xl shadow-xl transition-all duration-1000 hover:scale-[1.04] hover:shadow-2xl">
            <div className="w-full h-[20rem] overflow-hidden min-h-[20rem]  border-b">
                <img
                    className="w-full transition-all duration-1000 hover:scale-[1.2] h-full object-cover "
                    src={photo}
                    alt={title}
                />
            </div>
            <div className="flex  h-full flex-col gap-y-3 p-2 justify-between">
                <h1 className="text-sm text-center  font-semibold tracking-[2px] font-A bg-gradient-to-tr from-blueColor  text-transparent bg-clip-text">
              {title}  </h1>
                <p className="text-sm tracking-wider font-D text-blackColor text-justify">
{description.slice(0,200)}...
                </p>
                <button className="bg-blueColor mx-auto transition-all hover:bg-orangeColor w-[30%] sm:w-[50%]   h-10 flex justify-center items-center text-xs  tracking-wider uppercase font-B rounded-xl text-white">
                    Lire Plus
                </button>
            </div>
        </div>
    );
};
export default ServiceCard;
