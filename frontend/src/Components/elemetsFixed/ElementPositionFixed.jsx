import Newsletter from "../GlobalComponents/Newsletter.jsx"
import ChooseLanguage from "../GlobalComponents/ChooseLanguage.jsx"
import ScrollTo from "./elemets/ScrollTo"
import WhatsappLogo from "./elemets/whatsappLogo"

const ElementPositionFixed = () => {
  return (
    <>
        <WhatsappLogo/>
        <ScrollTo/>
        <ChooseLanguage/>
        <Newsletter/> 
        
    </>
  )
}
export default ElementPositionFixed