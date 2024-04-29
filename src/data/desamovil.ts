import { Question, Test } from "./types";

export const desamovilTest: Test = {
  id: "id:test/git",
  title: "Desarrollo de Aplicaciones Moviles ",
  testName: "desamovil",
  numOfQuestions: 10,
  duration: 10,
  image: {
    uri: "https://www.northware.mx/wp-content/uploads/2021/04/desarrollo-de-aplicaciones-moviles-hibridas-me-conviene.jpg",
    alt: "desamovil",
  },
};

export const desamovilQuestions: Question[] = [
  {
    id: "id:question/0",
    question: "¿Cuál de las siguientes plataformas es conocida por su sistema operativo móvil de código abierto?",
    image: {
      uri: "https://blog.internxt.com/es/content/images/2023/02/Blog---Most-Private-Phone---1.png",
      alt: "Android",
    },
    options: [
      { id: "id:option/0", text: "iOS", isCorrect: false },
      { id: "id:option/1", text: "Android", isCorrect: true },
      { id: "id:option/2", text: "Windows Phone", isCorrect: false },
      { id: "id:option/3", text: "BlackBerry OS", isCorrect: false },
    ],
    answerDescription:
      "Correcto! Android es conocido por su sistema operativo móvil de código abierto, desarrollado principalmente por Google.",
    
  },
  {
    id: "id:question/1",
    question:
      "¿Qué lenguaje de programación se utiliza principalmente para desarrollar aplicaciones nativas en iOS?",
    image: {
      uri: "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/323062578/original/e979d3e9b2046c80c71da7916c6a376a089fb7a1/create-ios-application-for-you.png",
      alt: "Swift",
    },
    options: [
      { id: "id:option/4", text: "Java", isCorrect: false },
      { id: "id:option/5", text: "CSS", isCorrect: false },
      { id: "id:option/6", text: "Swift", isCorrect: true},
      { id: "id:option/7", text: "C#", isCorrect: true },
    ],
    answerDescription:
      "Correcto! Swift es el lenguaje de programación principal utilizado para desarrollar aplicaciones nativas en iOS.",
  },
  {
    id: "id:question/2",
    question:
      "¿Cuál es el entorno de desarrollo oficial para Android?",
    image: {
      uri: "https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2022/02/android-2625935.jpg?tf=3840x",
      alt: "Android Studio",
    },
    options: [
      { id: "id:option/8", text: "Xcode", isCorrect: false },
      { id: "id:option/9", text: "Eclipse", isCorrect: false },
      { id: "id:option/10", text: "Visual Studio", isCorrect: false },
      { id: "id:option/11", text: "Android Studio", isCorrect: true },
    ],
    answerDescription:
      "Correcto! Android Studio es el entorno de desarrollo oficial para Android, proporcionado por Google.",
  },
  {
    id: "id:question/3",
    question:
      "¿Qué componente se utiliza para diseñar la interfaz de usuario en una aplicación Android?",
    image: {
      uri: "https://servisoftcorp.com/wp-content/uploads/2019/02/aplicaciones-moviles-apps-servisoftcorp.com_.jpg",
      alt: "XML Layout",
    },
    options: [
      { id: "id:option/12", text: "Storyboard", isCorrect: false },
      { id: "id:option/13", text: "XML Layout", isCorrect: true },
      { id: "id:option/14", text: "Activity", isCorrect: false },
      { id: "id:option/15", text: "Interface Builder", isCorrect: false },
    ],
    answerDescription:
      "Correcto! XML Layout se utiliza en Android para diseñar la interfaz de usuario de una aplicación.",
  },
  {
    id: "id:question/4",
    question:
      "¿Cuál de las siguientes plataformas es conocida por su enfoque en la seguridad y la privacidad?",
    image: {
      uri: "https://revistaseguridad360.com/wp-content/uploads/2022/03/seguridad-app.jpg",
      alt: "iOS",
    },
    options: [
      { id: "id:option/16", text: "Android", isCorrect: false },
      { id: "id:option/17", text: "Windows Phone", isCorrect: false },
      { id: "id:option/18", text: "iOS", isCorrect: true },
      { id: "id:option/19", text: "BlackBerry OS", isCorrect: false },
    ],
    answerDescription:
      "Correcto! iOS, el sistema operativo de Apple para dispositivos móviles, es conocido por su enfoque en la seguridad y la privacidad.",
  },
  {
    id: "id:question/5",
    question:
      "¿Qué lenguajes de programación se utiliza principalmente para desarrollar aplicaciones móviles híbridas?",
    image: {
      uri: "https://ralfvanveen.com/wp-content/uploads/2021/06/CSS-_-Begrippenlijst.webp",
      alt: "HTML, CSS y JavaScript",
    },
    options: [
      { id: "id:option/20", text: "Swift y C++", isCorrect: false },
      { id: "id:option/21", text: "HTML, CSS y JavaScript", isCorrect: true },
      { id: "id:option/22", text: "Kotlin y JavaScript", isCorrect: false },
      { id: "id:option/23", text: "C# y Python", isCorrect: false },
    ],
    answerDescription:
      "Correcto! HTML, CSS y JavaScript se utilizan principalmente para desarrollar aplicaciones móviles híbridas.",
  },
  {
    id: "id:question/6",
    question:
      "¿Qué sistema operativo móvil utiliza el lenguaje de programación Objective-C?",
    image: {
      uri: "https://geekytheory.com/content/images/2013/03/oC.png",
      alt: "iOS",
    },
    options: [
      { id: "id:option/24", text: "iOS", isCorrect: true },
      { id: "id:option/25", text: "Android", isCorrect: false },
      { id: "id:option/26", text: "Windows Phone", isCorrect: false },
      { id: "id:option/27", text: "BlackBerry OS", isCorrect: false },
    ],
    answerDescription:
      "CCorrecto! Objective-C es un lenguaje de programación utilizado principalmente para desarrollar aplicaciones en iOS.",
  },
  {
    id: "id:question/7",
    question:
      "¿Qué tecnología se utiliza para compilar aplicaciones móviles y hacerlas ejecutables en diferentes plataformas?",
    image: {
      uri: "https://www.q2bstudio.com/Recursos/Blog/desarrollo-apps-moviles.jpg",
      alt: "Cross-platform development",
    },
    options: [
      { id: "id:option/28", text: "Cross-platform development", isCorrect: true },
      { id: "id:option/29", text: "Native development", isCorrect: false },
      { id: "id:option/30", text: "Hybrid development", isCorrect: false },
      { id: "id:option/31", text: "Web development", isCorrect: false },
    ],
    answerDescription:
      "Correcto! La tecnología cross-platform development se utiliza para compilar aplicaciones móviles y hacerlas ejecutables en diferentes plataformas.",
  },
  {
    id: "id:question/8",
    question:
      "¿Qué es un emulador en el desarrollo móvil?",
    image: {
      uri: "https://i.blogs.es/288973/retro/1366_2000.jpeg",
      alt: "<a>",
    },
    options: [
      { id: "id:option/32", text: "Un dispositivo físico utilizado para probar aplicaciones", isCorrect: false },
      { id: "id:option/33", text: "Un framework utilizado para el diseño de interfaces de usuario", isCorrect: false },
      { id: "id:option/34", text: "Un sistema de gestión de bases de datos", isCorrect: false },
      { id: "id:option/35", text: "Un programa que simula el comportamiento de un dispositivo móvil en una computadora", isCorrect: true },
    ],
    answerDescription:
      "Correcto! Un emulador en el desarrollo móvil es un programa que simula el comportamiento de un dispositivo móvil en una computadora, lo que permite probar y depurar aplicaciones.",
  },
  {
    id: "id:question/9",
    question:
      "¿Cuál es el nombre de la tienda de aplicaciones oficial para dispositivos iOS?",
    image: {
      uri: "https://imageio.forbes.com/specials-images/imageserve/5f8ab5c07bdfce7eac675e02/In-this-photo-illustration-a-screenshot-from-Apple-s-launch---/960x0.jpg?height=481&width=711&fit=bounds",
      alt: "App Store",
    },
    options: [
      { id: "id:option/36", text: "Google Play Store", isCorrect: false },
      { id: "id:option/37", text: "Microsoft Store", isCorrect: false },
      { id: "id:option/38", text: " App Store", isCorrect: true },
      { id: "id:option/39", text: " BlackBerry World", isCorrect: false },
    ],
    answerDescription:
      " Correcto! App Store es el nombre de la tienda de aplicaciones oficial para dispositivos iOS, donde los usuarios pueden descargar aplicaciones para sus dispositivos Apple.",
  },
];
