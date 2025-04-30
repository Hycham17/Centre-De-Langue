//import images

import languesService from "./../assets/ServicesBackground/languesService.jpg";
import schoolcoaching from "./../assets/ServicesBackground/schoolcoaching.jpg";
import soutienScolaire from "./../assets/ServicesBackground/soutienScolaire.png";
import Bureautique from "./../assets/ServicesBackground/Bureautique.jpg";
import alphabetisation from "./../assets/ServicesBackground/alphabetisation.png";
import devP from "./../assets/ServicesBackground/devP.jpg";
import educationaltrips from "./../assets/ServicesBackground/educationaltrips.png";
import Activity from "./../assets/ServicesBackground/activities.png";
//images 

export const services = [
    {
        id: 4,
        name: "languages",
        background: languesService,
        images: [
            '/services/langues/1.jpg',
            '/services/langues/1 (1).png',
            '/services/langues/1 (2).jpg',
            '/services/langues/1 (4).jpg',
            '/services/langues/1 (5).jpg',
            '/services/langues/1 (6).jpg',
          ],        title: {
            fr: "Langues",
            en: "Languages",
            ar: "اللغات",
        },
        description: {
            fr: "Le Centre de Langues et de Communication propose un service complet d’apprentissage des langues étrangères, accessible à tous les âges et à tous les niveaux. Grâce à une approche pédagogique moderne et personnalisée, les apprenants peuvent développer leurs compétences linguistiques dans un environnement bienveillant et motivant. Les langues enseignées au centre sont le français, l’anglais, l’espagnol et l’allemand. Pour le français, les cours permettent d’approfondir la grammaire, la conjugaison, la compréhension écrite et orale, ainsi que l’expression personnelle. Ils s’adressent aussi bien aux débutants qu’aux personnes souhaitant se perfectionner ou préparer des examens officiels tels que le DELF ou le DALF. En ce qui concerne l’anglais, l’enseignement vise à renforcer l’expression orale et écrite, tout en travaillant sur le vocabulaire, la prononciation et la compréhension auditive. Des modules spécifiques sont proposés pour les personnes qui souhaitent passer des tests internationaux comme le TOEFL ou l’IELTS. Pour ceux qui désirent apprendre l’espagnol, le centre met en place un programme vivant et interactif qui introduit progressivement les bases de la langue tout en favorisant la communication. Enfin, les cours d’allemand permettent aux participants de découvrir cette langue à travers des échanges simples, des exercices pratiques et des supports authentiques, allant des niveaux débutants (A1) jusqu’à intermédiaire (B2). Tous les cours sont dispensés par des formateurs expérimentés, dans des groupes réduits, afin de garantir un suivi de qualité et un apprentissage efficace.",
            en: "The Language and Communication Center offers a complete language learning service suitable for all age groups and proficiency levels. With a modern and tailored teaching approach, learners are able to develop their language skills in a friendly and motivating atmosphere. The center provides courses in French, English, Spanish, and German. French classes focus on enhancing grammar, conjugation, reading and listening comprehension, and oral expression. Whether students are beginners or advanced, they can also prepare for official exams such as the DELF or DALF. English courses are designed to improve both spoken and written communication, with emphasis on vocabulary, pronunciation, and listening skills. Dedicated modules are also available for international test preparation such as TOEFL and IELTS. For learners interested in Spanish, the center offers a lively and interactive program that gradually introduces the fundamentals of the language while promoting communication through cultural immersion. German classes allow students to explore the language through simple conversations, practical exercises, and authentic content, from beginner (A1) to intermediate (B2) levels. All classes are delivered by experienced instructors in small groups, ensuring high-quality follow-up and effective learning.",
            ar: "يقدّم مركز اللغات والتواصل خدمة متكاملة لتعليم اللغات الأجنبية، ويستهدف جميع الفئات العمرية والمستويات المختلفة. يعتمد المركز على منهجية تعليمية حديثة وشخصية تساعد المتعلمين على تطوير مهاراتهم في جو محفز وداعم. اللغات المتوفرة في المركز هي الفرنسية، الإنجليزية، الإسبانية، والألمانية. في دروس اللغة الفرنسية، يتم التركيز على تطوير قواعد اللغة، التصريف، الفهم الكتابي والسمعي، والتعبير الشفهي، بالإضافة إلى التحضير لاجتياز امتحانات مثل DELF وDALF. أما اللغة الإنجليزية، فتهدف الدروس إلى تحسين التحدث والكتابة، مع تدريب شامل على المفردات والنطق والاستماع، كما تتوفر برامج خاصة للتحضير لاختبارات TOEFL وIELTS. بالنسبة لتعلم اللغة الإسبانية، يوفر المركز برنامجًا ممتعًا وتدريجيًا يساعد المتعلم على إتقان الأساسيات والتواصل بطلاقة، مع إدماج الثقافة الإسبانية في الدروس. وأخيرًا، تُمكّن دروس اللغة الألمانية الطلاب من دخول عالم هذه اللغة من خلال تمارين تطبيقية ونصوص أصلية، حيث تغطي المستويات من A1 إلى B2. يتم تقديم جميع الدروس من قبل مدرّسين مؤهلين وذوي خبرة، داخل مجموعات صغيرة لضمان متابعة فعالة وجودة في التعلّم.",
        },
    },
    {
        id: 1,
        name: "school-support",
        background: soutienScolaire,
        images: ['/services/soutien/1.jpg','/services/soutien/2.jpg','/services/soutien/3.jpg','/services/soutien/4.jpg','/services/soutien/5.jpg','/services/soutien/6.png',],
        title: {
            fr: "soutien scolaire",
            en: "Academic Support",
            ar: "الدعم المدرسي",
        },
        description: {
            fr: "En complément du soutien scolaire classique, le centre propose un accompagnement en coaching scolaire. Cette approche permet d’identifier les freins personnels, émotionnels ou organisationnels qui peuvent empêcher un élève de réussir. Le coach travaille avec l’élève pour définir des objectifs, structurer son travail, gérer son temps et renforcer sa motivation. Cela permet d’améliorer non seulement les résultats, mais aussi la méthode de travail et l’autonomie de l’élève.",
            en: "The Language and Communication Center offers academic support for students at the primary, middle, and high school levels, covering all major subjects such as mathematics, science, languages, and history. These sessions are led by qualified educators and are tailored to meet each student’s individual needs. The goal is to help learners overcome academic difficulties, boost their confidence, and develop effective study habits that contribute to long-term success.",
            ar: "يقدّم المركز خدمات دعم مدرسي موجهة لتلاميذ المرحلة الابتدائية والإعدادية والثانوية، ويغطي المواد الأساسية مثل الرياضيات، الفيزياء، الكيمياء، اللغات، والتاريخ والجغرافيا. يُشرف على الحصص أساتذة مؤهلون يقدمون متابعة شخصية لكل تلميذ حسب مستواه واحتياجاته، مما يساعده على تجاوز الصعوبات وتحسين نتائجه الدراسية. يهدف البرنامج أيضًا إلى تعزيز الثقة بالنفس لدى التلميذ وتزويده بمنهجية عمل فعّالة.",
        },
    },
    {
        id: 2,
        name: "bureautique",
        background: Bureautique,
        images: ['/services/bureautique/1 (1).JPG','/services/bureautique/1 (1).png','/services/bureautique/1 (2).JPG','/services/bureautique/1 (3).JPG','/services/bureautique/1 (4).JPG',],
        title: {
            fr: "Bureautique",
            en: "Office Software Training",
            ar: "التكوين في البرامج المكتبية",
        },
        description: {
            fr: "Le centre offre des formations en bureautique qui permettent aux participants de maîtriser les outils informatiques essentiels tels que Microsoft Word, Excel et PowerPoint. Ces formations sont conçues pour être accessibles à tous, quel que soit le niveau de départ. Elles visent à améliorer l’employabilité des jeunes et des adultes en leur fournissant des compétences techniques directement applicables dans le monde professionnel ou dans les études supérieures. L’approche est pratique, avec des exercices concrets pour garantir une bonne prise en main des logiciels.",
            en: "The center provides practical training in essential office tools, including Microsoft Word, Excel, and PowerPoint. These courses are designed for beginners and focus on hands-on learning. They help participants gain useful digital skills that can be applied in both professional environments and higher education.",
            ar: "يوفّر المركز دورات تكوينية في مجال الإعلاميات المكتبية، تُمكّن المشاركين من التحكم في أدوات مثل Microsoft Word وExcel وPowerPoint. هذه الدورات مناسبة للمبتدئين وتُركز على الجانب التطبيقي، بهدف تقوية الكفاءات المهنية وتحسين فرص الحصول على عمل أو متابعة الدراسة الجامعية بنجاح.",
        },
    },
    {
        id: 3,
        name: "literacy",
        background: alphabetisation,
        images: ['/services/alphapetisation/1.png','/services/alphapetisation/3.jpg','/services/alphapetisation/2.jpg',],
        title: {
            fr: "Alphabétisation",
            en: "Literacy",
            ar: "محو الأمية",
        },
        description: {
            fr: "Dans une perspective d’inclusion sociale, le centre propose un programme d’alphabétisation principalement destiné aux femmes. Ce programme vise à leur offrir la possibilité d’apprendre à lire, à écrire et à compter, afin de renforcer leur autonomie dans la vie quotidienne. Les cours se déroulent dans un cadre bienveillant et respectueux, avec une pédagogie adaptée aux adultes. L’objectif est de lutter contre l’analphabétisme tout en favorisant l’épanouissement personnel et l’intégration sociale.",
            en: "As part of its social mission, the center offers a literacy program, mainly targeting women, to help them learn how to read, write, and perform basic math. The classes are conducted in a respectful and supportive setting, with a teaching method suited for adult learners. This program promotes independence, empowerment, and social integration.",
            ar: "من أجل تعزيز الإدماج الاجتماعي، يُقدّم المركز برنامج محو الأمية، موجّه خصوصًا للنساء. يهدف هذا البرنامج إلى تعليم القراءة والكتابة والحساب في بيئة تربوية محترمة وداعمة. يوفّر البرنامج فرصة حقيقية للنساء لاكتساب الاستقلالية والمشاركة الفاعلة في المجتمع.",
        },
    },

    {
        id: 5,
        name: "educational-trips",
        background: educationaltrips,
        images: ['/services/sorties/1 (1).JPG','/services/sorties/1 (2).jpg','/services/sorties/1 (3).jpg','/services/sorties/1 (4).jpg','/services/sorties/1 (5).jpg','/services/sorties/1 (6).jpg',],
        title: {
            fr: "Sorties éducatives",
            en: "Educational Trips",
            ar: "رحلات تعليمية",
        },
        description: {
            fr: "Des sorties culturelles et pédagogiques pour explorer musées, jardins, sites historiques, enrichir les connaissances et éveiller la curiosité",
            en: "Educational and cultural trips to explore museums, gardens, historical sites, enriching knowledge and stimulating curiosity",
            ar: "تنظيم خرجات ثقافية وتعليمية لزيارة المتاحف، الحدائق، والمواقع التاريخية لتعزيز المعرفة وتنمية الفضول المعرفي",
        },
    },
    {
        id: 6,
        name: "personal-development",
        images: ['/services/devPersonnel/1.jpg','/services/devPersonnel/2.jpg','/services/devPersonnel/3.jpg','/services/devPersonnel/4.jpg','/services/devPersonnel/5.jpg',],
        background: devP,
        title: {
            fr: "Développement personnel",
            en: "Personal Development",
            ar: "التنمية الذاتية",
        },
        description: {
            fr: "Le CLC organise des ateliers de développement personnel centrés sur des thématiques essentielles comme la confiance en soi, la gestion du stress, la communication interpersonnelle ou encore la motivation. Ces ateliers, animés par des professionnels expérimentés, visent à aider les participants à mieux se connaître, à surmonter leurs blocages émotionnels et à développer leur potentiel. C’est un espace d’échange et d’écoute où chacun peut progresser à son rythme.",
            en: "Beyond regular tutoring, the center provides one-on-one academic coaching to help students identify personal or emotional obstacles that might be hindering their performance. The coaching process involves setting clear goals, learning time management techniques, and strengthening motivation, helping students become more autonomous and efficient in their studies.",
            ar: "إضافة إلى الدعم الأكاديمي، يُقَدم المركز خدمة التوجيه المدرسي الفردي، لمساعدة التلاميذ في تنظيم وقتهم، تحديد أهدافهم الدراسية، وتجاوز العوائق النفسية أو التنظيمية. يشرف على هذه الخدمة مدربون متخصصون في تطوير الأداء الدراسي وبناء الاستقلالية.",
        },
    },
    {
        id: 7,
        name: "fun-activities",
        background: Activity,
        images: ['/services/activities/1 (2).jpg','/services/activities/1 (1).jpg','/services/activities/1 (3).jpg','/services/activities/1 (4).jpg','/services/activities/1 (5).jpg','/services/activities/1 (7).jpg',],
        title: {
            fr: "Activités ludiques",
            en: "Fun Activities",
            ar: "أنشطة ترفيهية",
        },
        description: {
            fr: "Le centre propose également des activités ludiques et des sorties éducatives qui permettent aux enfants de découvrir le monde qui les entoure tout en s’amusant. Les sorties culturelles dans des musées, expositions ou sites historiques sont l’occasion d’apprendre autrement. Quant aux jeux éducatifs et aux matinées thématiques, ils renforcent les apprentissages scolaires de manière interactive et conviviale, tout en développant la créativité et le travail en équipe.",
            en: "To encourage learning outside the classroom, the center also organizes fun activities and educational trips. These include cultural visits to museums or historical sites and themed mornings with games and interactive learning. These initiatives stimulate curiosity, creativity, and teamwork while making education enjoyable and memorable.",
            ar: "يقترح المركز أيضًا أنشطة ترفيهية للأطفال، مثل الألعاب التعليمية، والخرجات التربوية إلى المتاحف والمواقع الثقافية. تُعتبر هذه الأنشطة وسيلة فعّالة للتعلم خارج الفصول الدراسية، وتعزز التفاعل، التعاون، واكتساب المعارف بطريقة ممتعة.",
        },
    },
    {
        id: 8,
        name: "school-coaching",
        background: schoolcoaching,
        images: [
            '/services/coashing/1 (1).jpg',
            '/services/coashing/1 (3).jpg',
            '/services/coashing/1 (4).jpg',
            '/services/coashing/1 (5).JPG',
            '/services/coashing/1 (6).JPG',
            '/services/coashing/1 (2).jpg'
          ]
,                  title: {
            fr: "Coaching Scolaire",
            en: "School Coaching",
            ar: "التوجيه المدرسي",
        },
        description: {
            fr: "En complément du soutien scolaire classique, le centre propose un accompagnement en coaching scolaire. Cette approche permet d’identifier les freins personnels, émotionnels ou organisationnels qui peuvent empêcher un élève de réussir. Le coach travaille avec l’élève pour définir des objectifs, structurer son travail, gérer son temps et renforcer sa motivation. Cela permet d’améliorer non seulement les résultats, mais aussi la méthode de travail et l’autonomie de l’élève.",
            en: "Beyond regular tutoring, the center provides one-on-one academic coaching to help students identify personal or emotional obstacles that might be hindering their performance. The coaching process involves setting clear goals, learning time management techniques, and strengthening motivation, helping students become more autonomous and efficient in their studies.",
            ar: "إضافة إلى الدعم الأكاديمي، يُقَدم المركز خدمة التوجيه المدرسي الفردي، لمساعدة التلاميذ في تنظيم وقتهم، تحديد أهدافهم الدراسية، وتجاوز العوائق النفسية أو التنظيمية. يشرف على هذه الخدمة مدربون متخصصون في تطوير الأداء الدراسي وبناء الاستقلالية.",
        },
    },
   
];
