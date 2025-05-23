import { useState } from "react";
import { useCustomHooks } from "../../Context/contextApi";
import { inputs } from "../../data/inputs";
import { Titles } from "../../data/titles";
import SectionTitle from "../GlobalComponents/SectionTitle";
import { texts } from "../../data/texts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCircleCheck} from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
    //la traduction
    const { currentLangAbrev, traductionTitle } = useCustomHooks();
        const [error, setError] = useState("");
        const [loading, setLoading] = useState(false);
        const [success, setSuccess] = useState(false);
    const handleSubmit = async (e) => { 
        e.preventDefault();
try{
    setLoading(true)
const formData = new FormData(e.target);
const data = Object.fromEntries(formData.entries());
const response = await fetch("http://localhost:8000/api/messages", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
    body: JSON.stringify(data), 
    
});
const errorData = await response.json();

if (!response.ok) {
    setError(traductionTitle(texts,"tryAgain"));
    setLoading(false);
    setTimeout(() => {
        setError(false);
    }, 2000);
    return;}
    else{
        setSuccess(true);
        e.target.reset();
        setLoading(false);
        setError(false);
        setTimeout(() => {
            setSuccess(false);
        }, 2000);

    }
}catch(error){
    console.log(error);
    
}
    }
    return (
        <section className="px-5 p-2" id="contact">
            <SectionTitle title="contact" />
            <div className="flex flex-col-reverse justify-center gap-y-8 md:flex-row md:gap-x-4 ">
                <div
                    data-aos="fade-right"
                    className="h-[20rem]  md:w-full md:h-[31rem]"
                >
                    <iframe
                        className="rounded-xl shadow-xl border-2 border-dashed border-orangeColor w-full h-full"
                        src="https://maps.google.com/maps?width=600&height=400&hl=en&q=Centre%20de%20Langues%20%26%20de%20Communication%20%2F%20Centre%20Socioculturel%20Hay%20Adil&t=&z=15&ie=UTF8&iwloc=B&output=embed"
                        loading="lazy"
                    ></iframe>
                </div>

                <div className="form md:w-full ">
                    <form onSubmit={handleSubmit} className="flex flex-col  gap-y-3">
                        {inputs.map((item, index) => {
                            return (
                                <div
                                    key={index}
                                    className="flex flex-col gap-y-3"
                                >
                                    <label
                                        className="font-semibold tracking-wider text-blackColor"
                                        htmlFor={item.name.en}
                                    >
                                        {item.name[currentLangAbrev]}
                                        <span className="text-[red]">*</span>:
                                    </label>
                                    {item.type !== "textarea" ? (
                                        <input
                                            placeholder={
                                                item.placeholder[
                                                    currentLangAbrev
                                                ] + "..."
                                            }
                                            className="text-blackColor  font-E border-b bg-transparent  w-full h-11 pl-3 rounded outline-none transition-all focus:border-blueColor placeholder:text-sm"
                                            type={item.type}
                                            id={item.name.en}
                                            name={item.name.en.split(" ").join("")}
                                        />
                                    ) : (
                                        <textarea
                                            placeholder={
                                                item.placeholder[
                                                    currentLangAbrev
                                                ] + "..."
                                            }
                                            name={item.name.en}
                                            id={item.name.en}
                                            className="text-blackColor  font-E border bg-transparent  w-full resize-none h-24 p-3 rounded outline-none transition-all focus:border-blueColor placeholder:text-sm"
                                        ></textarea>
                                    )}
                                </div>
                            );
                        })}
                        <div className="flex flex-col gap-y-3"></div>
                        <div className="pt-3 flex justify-center items-center">
                            <button className=" w-full h-11 font-B text-white bg-orangeColor transition-all  hover:opacity-[0.6]  rounded flex items-center justify-center ">
                                {!loading? (!success && !error?traductionTitle(Titles, "send"):success?<FontAwesomeIcon className='text-xl' icon={faCircleCheck}/>:error):<div className="border-[3px] border-orangeColor rounded-full h-5 w-5 animate-spin border-t-blueColor"></div>}
                            </button> 
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};
export default Contact;
