import accueil from './../assets/inscription/accueil.jpg'
import test from './../assets/inscription/test.png'
import inscription from './../assets/inscription/inscri.png'
import presence from './../assets/inscription/suivi.png'
// import gestion from './../assets/inscription/gestion.jpg'
export const InscriptionInformations = [
    {
      image: accueil,
      title: {
        ar: "الاستقبال",
        fr: "Accueil",
        en: "Reception"
      },
      list: {
        ar: [
          "تقديم جميع المعلومات المتعلقة بالخدمات المقدمة",
          "عرض ملخص للأسعار الخاصة بدورات اللغات، الإعلاميات، والمحاسبة",
          "عرض ملخص للأسعار الخاصة بدروس الدعم المدرسي",
          "تسليم النظام الداخلي باللغتين العربية والفرنسية"
        ],
        fr: [
          "Fournir toutes les informations nécessaires concernant les services proposés",
          "Présenter un récapitulatif des tarifs pour les cours de Langues, Bureautique, et Comptabilité",
          "Présenter un récapitulatif des tarifs pour les Cours de Soutien Scolaire",
          "Remettre le règlement interne en version française et arabe"
        ],
        en: [
          "Provide all necessary information about the offered services",
          "Present a summary of the prices for Language, Office, and Accounting courses",
          "Present a summary of the prices for School Support courses",
          "Provide the internal regulations in both French and Arabic"
        ]
      }
    },
    {
      image: inscription,
      title: {
        ar: "التسجيل",
        fr: "Inscription",
        en: "Registration"
      },
      list: {
        ar: [
          "ملء استمارة المعلومات لدروس الدعم المدرسي",
          "ملء استمارة المعلومات لدروس اللغات والإعلاميات",
          "ملء استمارة معلومات أولياء الأمور",
          "تسليم وصل التسجيل (نهائي أو مؤقت)",
          "تسليم بطاقة التسجيل",
          "تقديم جدول الحصص"
        ],
        fr: [
          "Remplir la fiche de renseignements pour les cours de Soutien Scolaire",
          "Remplir la fiche de renseignements pour les cours de Langues et Bureautique",
          "Remplir la fiche de renseignements des parents",
          "Remettre un reçu d'inscription (final ou provisoire)",
          "Remettre le badge d’inscription",
          "Fournir le planning des cours"
        ],
        en: [
          "Fill out the information sheet for School Support courses",
          "Fill out the information sheet for Language and Office courses",
          "Fill out the parent information sheet",
          "Issue a registration receipt (final or provisional)",
          "Issue the registration badge",
          "Provide the class schedule"
        ]
      }
    },
    {
      image: test,
      title: {
        ar: "اختبار تحديد المستوى",
        fr: "Test de positionnement",
        en: "Placement Test"
      },
      list: {
        ar: [
          "تنظيم اختبار كتابي وشفوي (في المركز أو بعد أخذ موعد)",
          "نشر جدول الحصص حسب نتائج الاختبار"
        ],
        fr: [
          "Organiser un test écrit et oral (sur place ou après un rendez-vous)",
          "Publier le planning des cours en fonction des résultats du test"
        ],
        en: [
          "Organize a written and oral test (on-site or after scheduling an appointment)",
          "Publish the class schedule based on the test results"
        ]
      }
    },
    {
      image: presence,
      title: {
        ar: "تتبع الحضور",
        fr: "Suivi de présence",
        en: "Attendance Follow-up"
      },
      list: {
        ar: [
          "متابعة حضور التلاميذ والتواصل مع المستفيدين أو أولياء الأمور في حال الغياب مرتين متتاليتين",
          "تقديم لائحة الحضور للأساتذة لتسجيل الغياب والحضور في كل حصة"
        ],
        fr: [
          "Suivre la présence des élèves et contacter les bénéficiaires ou leurs parents en cas d'absence de 2 séances consécutives",
          "Remettre une liste de présence aux enseignants afin qu’ils notent la présence et l'absence des élèves à chaque séance"
        ],
        en: [
          "Track students' attendance and contact beneficiaries or their parents in case of 2 consecutive absences",
          "Provide attendance lists to teachers to mark presence and absence for each session"
        ]
      }
    }
  ];
  