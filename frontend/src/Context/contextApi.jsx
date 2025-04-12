import { createContext, useContext, useState } from "react";

const Context = createContext();
export const useCustomHooks = () => useContext(Context);
const ContextApi = ({ children }) => {
    //drop down
    const [showServices, setshowServices] = useState(false);
    const toggleDropDown = () => setshowServices((prev) => !prev);
    const AfficherDropDown = () => setshowServices(true);
    const HideDropDown = () => setshowServices(false);
 //NewsLetter 
 const [showNewsLetter,setShowNewsLetter]=useState(false)
    return (
        <Context.Provider
            value={{
                showServices,
                toggleDropDown,
                AfficherDropDown,
                HideDropDown,
                showNewsLetter,
                setShowNewsLetter
            }}
        >
            {children}
        </Context.Provider>
    );
};
export default ContextApi;
