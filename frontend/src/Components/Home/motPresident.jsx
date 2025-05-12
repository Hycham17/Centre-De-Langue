import { useCustomHooks } from "../../Context/contextApi"
import { texts } from "../../data/texts"
import SectionTitle from "../GlobalComponents/SectionTitle"

const MotPresident = () => {
  const {traductionTitle}=useCustomHooks()

  return (
<div className="w-full py-5 flex justify-center items-center flex-col ">
  <SectionTitle title="motPresident"/>
<div className=" w-full h-full flex justify-center items-center ">
            <div className="rounded detailValue overflow-hidden relative    w-[95%]     shadow p-5 flex md:w-1/2 flex-col gap-y-5  ">
                  <span></span>
                <span></span>
                <span></span>
                <span></span>
                
    
                <p className=" text-justify tracking-wide font-D text-blackColor">
                  {traductionTitle(texts,'MotPresident')}
                </p>

              
            </div>
        </div>
</div>
)
}
export default MotPresident