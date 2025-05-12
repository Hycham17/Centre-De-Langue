import { useCustomHooks } from "../../Context/contextApi";

const ValueCard = ({description,title}) => {

    return (
        <div className=" w-full h-full bg-black/70 flex justify-center items-center ">
            <div className="rounded detailValue overflow-hidden relative    w-[95%]     shadow p-5 flex md:w-1/2 flex-col gap-y-5  ">
                  <span></span>
                <span></span>
                <span></span>
                <span></span>
                
                <h1 className="flex text-center justify-center items-center bg-gradient-to-r from-blueColor to-orangeColor bg-clip-text text-transparent  text-2xl tracking-wider font-E ">
                    {" "}
{title}                </h1>
                <p className=" text-justify tracking-wide font-D text-white">
                  {description}
                </p>

              
            </div>
        </div>
    );
};
export default ValueCard;
