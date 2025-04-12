import { useCustomHooks } from "../../../Context/contextApi";
import SectionTitle from "../../GlobalComponents/SectionTitle";
import ServiceCard from "./ServiceCard";
//import images 
import bureautiqueImg from './../../../assets/HomePage/Services/bureautique.png'
import Alphabitésation from './../../../assets/HomePage/Services/Alphabétisation.png'
import SoutienScolaire from './../../../assets/HomePage/Services/Soutienscolaire.png'
const services = [
    {
        id: 1,
        title: "Soutien Scolaire",
        description:
            "Ce service s’adresse aux élèves du primaire, du collège et du lycée qui rencontrent des difficultés ou souhaitent simplement renforcer leurs acquis. Nos professeurs qualifiés proposent un accompagnement personnalisé dans toutes les matières principales : mathématiques, physique-chimie, français, SVT, anglais, etc. Nous privilégions une approche pédagogique bienveillante, avec des outils modernes, des évaluations régulières et un suivi individualisé pour chaque élève. L’objectif est de restaurer la confiance en soi, améliorer les résultats scolaires, et développer une autonomie dans l’apprentissage.",
        photo: SoutienScolaire,
    },
    {
        id: 2,
        title: "Bureautique",
        description:
            "Nos formations en bureautique permettent aux apprenants, quel que soit leur niveau, de maîtriser les outils informatiques les plus utilisés dans le monde professionnel : Word (mise en forme de documents, insertion d’images, tableaux), Excel (formules, tableaux croisés dynamiques, gestion de données), PowerPoint (création de présentations attractives). Les modules sont orientés vers la pratique, avec des exercices concrets adaptés aux besoins de chacun : étudiants, chercheurs d’emploi, employés ou entrepreneurs. À la fin du parcours, chaque participant sera capable de créer des documents professionnels de qualité.",
        photo: bureautiqueImg,
    },
    {
        id: 3,
        title: "Alphabétisation",
        description:
            "Ce service est destiné principalement aux femmes n’ayant pas eu accès à l’éducation dans leur enfance. À travers des ateliers conviviaux et progressifs, elles apprennent à lire, écrire, et compter, dans un cadre respectueux et motivant. L’objectif est de leur permettre d’être autonomes dans leur quotidien : lire une ordonnance, comprendre des documents administratifs, gérer un budget simple, ou même aider leurs enfants dans leur scolarité. Ce programme favorise aussi l’estime de soi, la confiance en ses capacités et l’intégration sociale des participantes.",
        photo: Alphabitésation
    },
    {
        id: 4,
        title: "Langues",
        description:
            "Ce programme vise à développer les compétences linguistiques des participants dans plusieurs langues vivantes : français, anglais, espagnol, allemand. Chaque langue est enseignée à travers une méthode communicative mettant l’accent sur l’expression et la compréhension orale. Des activités variées (dialogues, jeux de rôles, écoutes, vidéos) permettent d’apprendre dans une ambiance dynamique. Un test de niveau est proposé au début afin de placer chaque apprenant dans le groupe le plus adapté. Nos enseignants natifs ou expérimentés accompagnent les élèves vers des objectifs précis : réussir un examen, voyager, travailler à l’étranger, ou tout simplement s’exprimer avec aisance.",
        photo: "https://via.placeholder.com/150",
    },
    
    {
        id: 5,
        title: "Sorties éducatives",
        description:
            "Les sorties éducatives sont organisées régulièrement pour compléter les apprentissages théoriques par des expériences concrètes. Musées, expositions, bibliothèques, jardins botaniques, sites historiques… ces visites sont encadrées par des éducateurs ou des guides spécialisés. Elles permettent aux enfants et aux jeunes de découvrir le patrimoine culturel, scientifique et naturel tout en développant leur curiosité, leur esprit critique et leur ouverture au monde. Des fiches pédagogiques et des activités de retour sont souvent prévues pour prolonger les apprentissages après la sortie.",
        photo: SoutienScolaire
    },
    {
        id: 6,
        title: "Développement personnel",
        description:
            "Le développement personnel est au cœur de notre pédagogie. À travers des ateliers thématiques (confiance en soi, prise de parole, gestion du stress, communication non violente, intelligence émotionnelle...), les participants acquièrent des compétences psychosociales essentielles pour leur épanouissement personnel, scolaire ou professionnel. Ces séances sont animées par des coachs et des formateurs spécialisés qui utilisent des outils variés comme la PNL, les jeux de rôle, la relaxation, l’art-thérapie ou le travail en groupe. Chaque participant est encouragé à mieux se connaître, à valoriser ses qualités et à dépasser ses blocages.",
        photo: "https://via.placeholder.com/150",
    },
    {
        id: 7,
        title: "Activités ludiques",
        description:
            "Parce que l’apprentissage passe aussi par le jeu, nous proposons de nombreuses activités ludiques pour les enfants et les jeunes : jeux éducatifs, concours, ateliers créatifs (peinture, bricolage), théâtre, chants, animations thématiques (journée de la science, soirée contes...). Ces moments permettent de développer la créativité, la coopération, la motricité fine, le langage, et surtout de vivre ensemble dans le respect et la joie. C’est aussi un excellent moyen de renforcer les liens sociaux et de valoriser les talents individuels.",
        photo: "https://via.placeholder.com/150",
    },
    {
        id: 8,
        title: "Coaching Scolaire",
        description:
            "Le coaching scolaire s’adresse aux élèves en difficulté ou en manque de motivation. Nos coachs spécialisés aident les jeunes à identifier leurs freins, à se fixer des objectifs clairs, et à mettre en place des stratégies efficaces : gestion du temps, méthodologie de travail, organisation personnelle, mémorisation, préparation aux examens… À travers un accompagnement bienveillant et structuré, nous cherchons à redonner goût à l’apprentissage et à renforcer la confiance en soi. Les parents sont également intégrés au processus pour un meilleur suivi et des résultats durables.",
        photo: "https://via.placeholder.com/150",
    },
];

const Services = () => {
    const { AfficherDropDown } = useCustomHooks();
    return (
        <section className="flex flex-col gap-y-10 px-5">
            <SectionTitle title="Nos Services" />
            <div className="services grid sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
            {/* sort(()=>Math.random()-0.5) */}
                {services.slice(0,3).map((item)=> {
                    return <ServiceCard {...item} key={item.id} />;
                })}
            </div>
            <div className="flex justify-center items-center">
                <button
                    onClick={() => AfficherDropDown()}
                    className=" w-full h-11 font-B bg-orangeColor transition-all  hover:opacity-[0.6] text-white  md:w-[31.5%] rounded md:mx-auto "
                >
                    Savoir plus
                </button>
            </div>
        </section>
    );
};
export default Services;

// import React, { useState } from "react";
// import Calendar from "react-calendar";
// import "react-calendar/dist/Calendar.css"; // ضروري باش يبان التنسيق

// const Services = () => {
//   const [selectedDate, setSelectedDate] = useState(new Date());

//   // مثال ديال بيانات الجلسات
//   const sessions = {
//     "2025-04-12": "Cours de Français - 16h",
//     "2025-04-13": "Soutien Maths - 10h",
//     "2025-04-15": "Cours d'Anglais - 14h",
//   };

//   const getSessionForDate = (date) => {
//     const key = date.toISOString().split("T")[0];
//     return sessions[key] || "Aucune session prévue";
//   };

//   return (
//     <div className="max-w-xl mx-auto mt-10 bg-white p-4 rounded-xl shadow-lg">
//       <h2 className="text-2xl font-bold text-orangeColor text-center mb-4">
//         Planning des Sessions
//       </h2>
//       <Calendar onChange={setSelectedDate} value={selectedDate} />

//       <div className="mt-6 text-center">
//         <h3 className="text-lg font-semibold text-blue-800">📅 {selectedDate.toDateString()}</h3>
//         <p className="text-gray-700 mt-2">{getSessionForDate(selectedDate)}</p>
//       </div>
//     </div>
//   );
// };

// export default Services;
