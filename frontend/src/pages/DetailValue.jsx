import logo from '../assets/CentrePhotos/photoCentre.png'

import { useParams } from "react-router-dom";
import ValueCard from '../Components/GlobalComponents/ValueCard';
import { useEffect, useState } from 'react';
import { useCustomHooks } from '../Context/contextApi';
const values = {
    'Quality-Education': {
      title: {
        fr: "Éducation de qualité",
        en: "Quality Education",
        ar: "تعليم ذو جودة"
      },
      description: {
        fr: "Nous nous engageons à offrir des enseignements solides, structurés et adaptés aux besoins des apprenants, pour garantir une montée en compétence durable et utile dans la vie quotidienne ou professionnelle.",
        en: "We are committed to providing solid, structured, and learner-oriented instruction to ensure sustainable and practical skill development for everyday or professional life.",
        ar: "نلتزم بتقديم تعليم قوي ومنظم ومناسب لاحتياجات المتعلمين لضمان تطوير مستدام ومفيد للمهارات في الحياة اليومية أو المهنية."
      }
    },
    Professionalism: {
      title: {
        fr: "Professionnalisme",
        en: "Professionalism",
        ar: "الاحترافية"
      },
      description: {
        fr: "Nos équipes pédagogiques et administratives adoptent des méthodes rigoureuses, une organisation efficace et une attitude respectueuse pour garantir un environnement sérieux et productif.",
        en: "Our educational and administrative teams apply rigorous methods, effective organization, and respectful attitudes to ensure a serious and productive environment.",
        ar: "تعتمد فرقنا التعليمية والإدارية على أساليب صارمة وتنظيم فعال وسلوك محترم لضمان بيئة جدية ومنتجة."
      }
    },
    'Kindness-and-Inclusion': {
      title: {
        fr: "Bienveillance et inclusion",
        en: "Care and Inclusion",
        ar: "اللطف والشمولية"
      },
      description: {
        fr: "Chaque apprenant est accueilli avec respect, quelles que soient ses origines ou son parcours. Nous valorisons la diversité et cultivons un climat chaleureux et motivant.",
        en: "Every learner is welcomed with respect, regardless of background. We value diversity and foster a warm and motivating environment.",
        ar: "يُرحب بكل متعلم باحترام، بغض النظر عن أصوله أو مساره. نحن نثمّن التنوع ونخلق مناخًا محفزًا ودافئًا."
      }
    },
    'Personalized-Support': {
      title: {
        fr: "Accompagnement personnalisé",
        en: "Personalized Support",
        ar: "دعم مخصص"
      },
      description: {
        fr: "Nous tenons compte du rythme, des objectifs et des difficultés de chacun pour proposer un suivi adapté, que ce soit dans l’apprentissage des langues, du soutien scolaire ou de la formation professionnelle.",
        en: "We consider each learner's pace, goals, and challenges to offer tailored support in language learning, tutoring, or professional training.",
        ar: "نأخذ بعين الاعتبار وتيرة وأهداف وصعوبات كل شخص لنقدم متابعة ملائمة في تعلم اللغات أو الدعم المدرسي أو التكوين المهني."
      }
    },
    'Social-Commitment': {
      title: {
        fr: "Engagement social",
        en: "Social Engagement",
        ar: "الالتزام الاجتماعي"
      },
      description: {
        fr: "Le centre est aussi un acteur solidaire. Il œuvre pour l’inclusion sociale, l’accès à l’éducation des plus vulnérables et la promotion de l’égalité des chances à travers divers projets et partenariats.",
        en: "The center is also a solidarity actor. It works for social inclusion, access to education for the vulnerable, and equal opportunity through various projects and partnerships.",
        ar: "يُعد المركز فاعلاً متضامنًا، يعمل من أجل الإدماج الاجتماعي، وتوفير التعليم للفئات الهشة، وتعزيز تكافؤ الفرص من خلال مشاريع وشراكات مختلفة."
      }
    },
    'Accessibility-for-All': {
      title: {
        fr: "Accessibilité pour tous",
        en: "Accessibility for All",
        ar: "الولوج للجميع"
      },
      description: {
        fr: "Nos services sont pensés pour être accessibles aux enfants, jeunes, femmes, adultes et personnes en situation de handicap, avec des horaires flexibles, des tarifs adaptés ou des activités gratuites.",
        en: "Our services are designed to be accessible to children, youth, women, adults, and people with disabilities, with flexible schedules, adjusted fees, or free activities.",
        ar: "خدماتنا مصممة لتكون في متناول الأطفال والشباب والنساء والبالغين وذوي الاحتياجات الخاصة، من خلال مواعيد مرنة وأسعار مناسبة أو أنشطة مجانية."
      }
    },
    'Educational-Innovation': {
      title: {
        fr: "Innovation pédagogique",
        en: "Educational Innovation",
        ar: "الابتكار التربوي"
      },
      description: {
        fr: "Nous utilisons des méthodes modernes, interactives et ludiques (jeux éducatifs, outils numériques, projets concrets) pour stimuler l’apprentissage et répondre aux attentes actuelles.",
        en: "We use modern, interactive, and playful methods (educational games, digital tools, real projects) to boost learning and meet current expectations.",
        ar: "نستخدم طرقًا حديثة وتفاعلية وممتعة (ألعاب تعليمية، أدوات رقمية، مشاريع واقعية) لتحفيز التعلم وتلبية الاحتياجات الحالية."
      }
    },
    'Responsibility-and-Transparency': {
      title: {
        fr: "Responsabilité et transparence",
        en: "Responsibility and Transparency",
        ar: "المسؤولية والشفافية"
      },
      description: {
        fr: "Toutes nos actions sont menées dans un souci d’éthique, de transparence financière et de responsabilité vis-à-vis des bénéficiaires, partenaires et bailleurs.",
        en: "All our actions are driven by ethics, financial transparency, and responsibility towards beneficiaries, partners, and funders.",
        ar: "تُنفذ جميع أعمالنا وفقًا للأخلاق، والشفافية المالية، والمسؤولية تجاه المستفيدين والشركاء والممولين."
      }
    },
    'Collaboration-and-Partnerships': {
      title: {
        fr: "Collaboration et partenariats",
        en: "Collaboration and Partnerships",
        ar: "التعاون والشراكات"
      },
      description: {
        fr: "Nous construisons des liens durables avec les associations, établissements scolaires, entreprises et institutions pour enrichir nos offres et créer un véritable réseau éducatif local.",
        en: "We build lasting relationships with associations, schools, businesses, and institutions to enrich our offerings and create a true local educational network.",
        ar: "نُقيم علاقات دائمة مع الجمعيات والمؤسسات التعليمية والشركات من أجل تعزيز عروضنا وبناء شبكة تعليمية محلية حقيقية."
      }
    }
  };
  
  
const DetailValue = () => {
    const params=useParams() 
    const {currentLangAbrev}=useCustomHooks()

    const [item,setItem]=useState(values[params.valueName]) 
    useEffect(()=>{
        setItem(values[params.valueName])
    },[params])
    return (        <div  style={{background:`url(${logo})`,backgroundRepeat:'no-repeat',backgroundSize:'cover'}} className="h-[90vh] flex items-center justify-center w-full ">
      <ValueCard  description={item.description[currentLangAbrev]} title={item.title[currentLangAbrev]}/>

        </div>
    )
};

export default DetailValue;
