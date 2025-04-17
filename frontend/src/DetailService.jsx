import clsx from "clsx";
import { useCustomHooks } from "./Context/contextApi";

const DetailService = () => {
    const {currentLangAbrev}=useCustomHooks()
    return <section class="p-5 min-h-[90vh] relative after:absolute after:w-full after:h-full after:bg-gradient-to-tr after:to-whiteColor   after:from-[#0088ffc6] after:left-0 after:top-0 " 
    style={{background:"url(https://t4.ftcdn.net/jpg/03/18/54/07/360_F_318540723_8KmnUJWSQozZNyRJ9ZP9kH2f6vwsj68i.jpg)"}}
    >
       <div className="absolute z-[999999]">
       <div className="">
            {/* <h1 className={clsx("text-blackColor text-xl uppercase font-A ",currentLangAbrev!=='ar'&&'bg-red-300','text-yellow-400')}>Langues</h1> */}
        </div>
       </div>

    </section>;
};
export default DetailService;
