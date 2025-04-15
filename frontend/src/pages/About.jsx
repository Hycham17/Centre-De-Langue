import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SectionTitle from "../Components/GlobalComponents/SectionTitle";
import {
    faCheckCircle,
    faGraduationCap,
    faBriefcase,
    faHeart,
    faUserCheck,
    faHandHoldingHeart,
    faUniversalAccess,
    faLightbulb,
    faScaleBalanced,
    faHandshake,
} from "@fortawesome/free-solid-svg-icons"; 

import { useCustomHooks } from "../Context/contextApi";
const navItems = [
    {
        id: "creation",
        label_fr: "creation",
        label_en: "Creation",
        label_ar: "التأسيس",
    },
    {
        id: "nosmissions",
        label_fr: "nos missions",
        label_en: "Our Missions",
        label_ar: "مهامنا",
    },
    {
        id: "nosvaleurs",
        label_fr: "nos valeurs",
        label_en: "Our Values",
        label_ar: "قيمنا",
    },
];
const missions = [
    {
        label_fr: "Offrir une éducation de qualité accessible",
        label_en: "Provide accessible quality education",
        label_ar: "تقديم تعليم عالي الجودة وسهل الوصول إليه",
    },
    {
        label_fr: "Assurer un suivi personnalisé des élèves",
        label_en: "Ensure personalized student support",
        label_ar: "ضمان متابعة شخصية للتلاميذ",
    },
    {
        label_fr: "Impliquer les parents dans le processus éducatif",
        label_en: "Involve parents in the educational process",
        label_ar: "إشراك الآباء في العملية التعليمية",
    },
    {
        label_fr:
            "Créer un environnement chaleureux et propice à l’apprentissage",
        label_en: "Create a warm and learning-friendly environment",
        label_ar: "خلق بيئة دافئة ومناسبة للتعلم",
    },
    {
        label_fr: "Maximiser l’impact social",
        label_en: "Maximize social impact",
        label_ar: "تعظيم الأثر الاجتماعي",
    },
    {
        label_fr:
            "Fournir un enseignement de qualité grâce à un personnel professionnel",
        label_en: "Provide quality teaching through professional staff",
        label_ar: "توفير تعليم عالي الجودة من خلال طاقم مهني",
    },
    {
        label_fr: "Favoriser l’inclusion et l’égalité des chances",
        label_en: "Promote inclusion and equal opportunities",
        label_ar: "تعزيز الشمول وتكافؤ الفرص",
    },
];


const valeurs = [
    {
        icon: faGraduationCap,
        label_fr: "Éducation de qualité",
        label_en: "Quality Education",
        label_ar: "تعليم ذو جودة",
    },
    {
        icon: faBriefcase,
        label_fr: "Professionnalisme",
        label_en: "Professionalism",
        label_ar: "الاحترافية",
    },
    {
        icon: faHeart,
        label_fr: "Bienveillance et inclusion",
        label_en: "Kindness and Inclusion",
        label_ar: "اللطف والشمول",
    },
    {
        icon: faUserCheck,
        label_fr: "Accompagnement personnalisé",
        label_en: "Personalized Support",
        label_ar: "دعم مخصص",
    },
    {
        icon: faHandHoldingHeart,
        label_fr: "Engagement social",
        label_en: "Social Commitment",
        label_ar: "الالتزام الاجتماعي",
    },
    {
        icon: faUniversalAccess,
        label_fr: "Accessibilité pour tous",
        label_en: "Accessibility for All",
        label_ar: "إمكانية الوصول للجميع",
    },
    {
        icon: faLightbulb,
        label_fr: "Innovation pédagogique",
        label_en: "Educational Innovation",
        label_ar: "الابتكار التربوي",
    },
    {
        icon: faScaleBalanced,
        label_fr: "Responsabilité et transparence",
        label_en: "Responsibility and Transparency",
        label_ar: "المسؤولية والشفافية",
    },
    {
        icon: faHandshake,
        label_fr: "Collaboration et partenariats",
        label_en: "Collaboration and Partnerships",
        label_ar: "التعاون والشراكات",
    },
];


const About = () => {
    //get language
    //dark mode
    //traduction for title
    const {
        currentLangAbrev,
       
        isDarkMode,
        traductionFunction,
    } = useCustomHooks();

    return (
        <div className="p-5 overflow-hidden  ">
            <div className="bg-orangeColor flex justify-center items-center">
                <ul className="flex z-[9999] fixed top-[5rem] w-[90%] md:w-[50%]  bg-whiteColor border border-blueColor shadow-xl rounded -translate-x-1/2 left-1/2 justify-between overflow-hidden">
                    {navItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <a
                                    className="p-2 inline-block tracking-wider font-E active:bg-orangeColor active:text-white transition-all hover:text-blueColor text-blackColor capitalize"
                                    href={"#" + item.id}
                                >
                                    {item["label_" + currentLangAbrev]}
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </div>
            <div id="creation">
                <SectionTitle title="creation" />
                <div className="flex flex-col gap-y-5  md:flex-row md:justify-between md:gap-x-11 md:items-center">
                    <div
                        data-aos="fade-right"
                        className="  w-full h-[14rem] sm:h-[20rem] rounded-t-3xl md:rounded-l-3xl md:rounded-none overflow-hidden hover:border-2 border-orangeColor transition-all duration-1000 "
                    >
                        <img
                            className=" w-full h-full object-cover hover:scale-[1.1] transition-all duration-1000 "
                            src="https://cdn.zido.ma/adresse/img_articles/44620b5e29aa1acf8bdc5d8935d7036fa4f5/detail/7193815104ed949f9deaf45165c4b8337013.png"
                            alt=""
                        />
                    </div>
                    <p
                        data-aos="fade-left"
                        className=" w-full text-justify text-blackColor font-H font-semibold tracking-wide"
                    >
                        {traductionFunction(
                            "La Fondation Mohammed V a alloué dans la région Roches Noires, un espace social",
                            "The Mohammed V Foundation has allocated a social space in the Roches Noires region.",
                            "خصصت مؤسسة محمد الخامس فضاءً اجتماعياً في منطقة روش نوار"
                        )}
                        <span className="bg-gradient-to-tr from-orangeColor to-black/5 text-transparent bg-clip-text">
                            {" "}
                            «
                            {traductionFunction(
                                " Centre socioculturel Hay Adil",
                                "Sociocultural Center Hay Adil",
                                "المركز السوسيوثقافي حي عادل"
                            )}
                            »{" "}
                        </span>
                        {traductionFunction(
                            " le 10 Octobre 2006 à l’Association Initiative Urbaine & à l’Association Marocaine pour la Solidarité et l’ActionSociale (Réunies dans le Réseau des Associations Unies pour la Qualification Sociale) Aujourd’hui Centre de Langues et de Communication.",
                            "On October 10, 2006, to the Urban Initiative Association & the Moroccan Association for Solidarity and Social Action (gathered in the Network of United Associations for Social Qualification), now known as the Center for Languages and Communication.",
                            "في 10 أكتوبر 2006، إلى جمعية المبادرة الحضرية والجمعية المغربية للتضامن والعمل الاجتماعي (المجتمعتين في شبكة الجمعيات المتحدة من أجل التأهيل الاجتماعي)، وهو اليوم مركز اللغات والتواصل."
                        )}
                    </p>
                </div>
            </div>
            <div id="nosmissions">
                <SectionTitle title="mission" />
                <div className="flex flex-col gap-y-5  md:flex-row-reverse md:justify-between md:gap-x-11 md:items-center">
                    <div
                        data-aos="fade-left"
                        className="  w-full h-[14rem] sm:h-[20rem] rounded-t-3xl md:rounded-r-3xl md:rounded-none overflow-hidden hover:border-2 border-blueColor transition-all duration-1000 "
                    >
                        <img
                            className=" w-full h-full object-cover hover:scale-[1.1] transition-all duration-1000 "
                            src="https://img.freepik.com/free-photo/successful-happy-business-team_53876-74892.jpg"
                            alt=""
                        />
                    </div>
                    <ul className="w-full  flex flex-col gap-y-3 ">
                        {missions.map((item, index) => (
                            <li
                                key={index}
                                data-aos={
                                    index % 2 == 0 ? "fade-left" : "fade-right"
                                }
                                className="font-E text-blackColor"
                            >
                                <FontAwesomeIcon
                                    className="text"
                                    color={
                                        index % 2 == 0
                                            ? "var(--orangeColor)"
                                            : "var(--blueColor)"
                                    }
                                    icon={faCheckCircle}
                                />{" "}
                                {item["label_" + currentLangAbrev]},
                            </li>
                        ))}
                    </ul>
                </div>
            </div>{" "}
            <div id="nosvaleurs">
                <SectionTitle title="values" />
                <div className="flex flex-col gap-y-5  md:flex-row md:justify-between md:gap-x-11 md:items-center">
                    <div
                        data-aos="fade-right"
                        className="  w-full h-[14rem] sm:h-[20rem] rounded-t-3xl md:rounded-l-3xl md:rounded-none overflow-hidden hover:border-2 border-orangeColor transition-all duration-1000 "
                    >
                        <img
                            className=" w-full h-full object-cover hover:scale-[1.1] transition-all duration-1000 "
                            src="https://www.ulster.ac.uk/__data/assets/image/0020/1061930/varieties/width-2000.jpg"
                            alt=""
                        />
                    </div>
                    <ul className="w-full  grid grid-cols-2 md:grid-cols-3 gap-4">
                        {valeurs.map((item, index) => (
                            <li
                                key={index}
                                data-aos={
                                    index % 2 == 0 ? "fade-down" : "fade-up"
                                }
                                style={
                                    isDarkMode
                                        ? { border: "1px double white" }
                                        : {}
                                }
                                className="valeurCard font-E select-none    text-sm  w-full shadow text-blackColor transition-all hover:scale-[1.05] duration-1000 hover:bg-blueColor hover:text-white  rounded p-2 flex flex-col gap-y-4 justify-center items-center text-center"
                            >
                                <FontAwesomeIcon
                                    className="text-2xl "
                                    icon={item.icon}
                                />
                                <h1 className="h-11 flex items-center">
                                    {item["label_" + currentLangAbrev]}
                                </h1>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default About;
