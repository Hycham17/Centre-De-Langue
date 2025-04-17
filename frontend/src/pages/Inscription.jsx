import CardInfoInscription from "../Components/inscription/CardInfoInscription";
import { InscriptionInformations } from "../data/inscriptionData";

const Inscription = () => {
    return (
        <section className="mt-5 select-none  px-5 grid gap-5  md:grid-cols-2 ">
            {InscriptionInformations.map((item, index) => {
                return (
                    <CardInfoInscription index={index} key={index} {...item} />
                );
            })}
        </section>
    );
};
export default Inscription;
