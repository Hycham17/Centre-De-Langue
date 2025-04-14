import { faWhatsapp, faWhatsappSquare } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const WhatsappLogo = () => {
  return (
  
        <a target="_blank" href="https://wa.me/212661473249" className="z-[999999999999] text-5xl transition-all hover:scale-[1.1]  text-green-400 rounded-xl p-2 fixed bottom-10 right-5 ">
<FontAwesomeIcon icon={faWhatsappSquare}/>
        </a>
   
  )
}
export default WhatsappLogo