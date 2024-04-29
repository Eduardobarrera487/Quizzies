import { Question, Test } from "./types";

export const desawebTest: Test = {
  id: "id:test/desaweb",
  title: "Desarrollo de Aplicaciones Web ",
  testName: "desaweb",
  numOfQuestions: 10,
  duration: 10,
  image: {
    uri: "https://tecnux.net/wp-content/uploads/2018/05/Web-Application-Development1.jpg",
    alt: "desaweb1",
  },
};

export const desawebQuestions: Question[] = [
  {
    id: "id:question/0",
    question: "¿Qué significa HTML?",
    image: {
      uri: "https://www.masterseosem.com/images/etiquetas-html.webp",
      alt: "Hypertext Markup Language",
    },
    options: [
      { id: "id:option/0", text: "Hyperlinks and Text Markup Language", isCorrect: false },
      { id: "id:option/1", text: " Hypertext Markup Language", isCorrect: true },
      { id: "id:option/2", text: "High Technology Markup Language", isCorrect: false },
      { id: "id:option/3", text: "Hyper Transfer Markup Language", isCorrect: false },
    ],
    answerDescription:
      "Correcto! HTML significa Hypertext Markup Language. Es el lenguaje estándar utilizado para crear y diseñar páginas web.",
    
  },
  {
    id: "id:question/1",
    question:
      "¿Qué lenguaje de programación se utiliza principalmente para agregar interactividad a las páginas web?",
    image: {
      uri: "https://www.hostingwordpress.cl/wp-content/uploads/2016/05/dise%C3%B1o-interactivo-2.gif",
      alt: "JavaScript",
    },
    options: [
      { id: "id:option/4", text: "Python", isCorrect: false },
      { id: "id:option/5", text: "CSS", isCorrect: false },
      { id: "id:option/6", text: "JavaScript", isCorrect: true},
      { id: "id:option/7", text: "Ruby", isCorrect: true },
    ],
    answerDescription:
      "Correcto! JavaScript es el lenguaje de programación principal utilizado para agregar interactividad a las páginas web.",
  },
  {
    id: "id:question/2",
    question:
      "¿Qué significa CSS?",
    image: {
      uri: "https://miro.medium.com/v2/resize:fit:600/1*OFsc0SD55jhi8cjo7aCA4w.jpeg",
      alt: "Cascading Style Sheets",
    },
    options: [
      { id: "id:option/8", text: "Computer Style Sheets", isCorrect: false },
      { id: "id:option/9", text: "Creative Style Sheets", isCorrect: false },
      { id: "id:option/10", text: "Colorful Style Sheets", isCorrect: false },
      { id: "id:option/11", text: "Cascading Style Sheets", isCorrect: true },
    ],
    answerDescription:
      "Correcto! CSS significa Cascading Style Sheets. Se utiliza para definir el aspecto y el formato de los documentos HTML.",
  },
  {
    id: "id:question/3",
    question:
      "¿Cuál de los siguientes NO es un lenguaje de marcado utilizado en el desarrollo web?",
    image: {
      uri: "https://habitatweb.mx/images/webapp.png",
      alt: "JSON",
    },
    options: [
      { id: "id:option/12", text: "HTML", isCorrect: false },
      { id: "id:option/13", text: "JSON", isCorrect: true },
      { id: "id:option/14", text: "XML", isCorrect: false },
      { id: "id:option/15", text: "XHTML", isCorrect: false },
    ],
    answerDescription:
      "Correcto! JSON (JavaScript Object Notation) no es un lenguaje de marcado, sino un formato de intercambio de datos.",
  },
  {
    id: "id:question/4",
    question:
      "¿Cuál de las siguientes etiquetas se utiliza para definir un título en HTML?",
    image: {
      uri: "https://i.workana.com/wp-content/uploads/2021/06/HTML5-Workana-Glosario.jpg",
      alt: " <title>",
    },
    options: [
      { id: "id:option/16", text: "<h1>", isCorrect: false },
      { id: "id:option/17", text: "<p>", isCorrect: false },
      { id: "id:option/18", text: "<title>", isCorrect: true },
      { id: "id:option/19", text: "<div>", isCorrect: false },
    ],
    answerDescription:
      "Correcto! La etiqueta <title> se utiliza para definir el título de un documento HTML, que aparece en la barra de título del navegador.",
  },
  {
    id: "id:question/5",
    question:
      "¿Cuál de las siguientes propiedades de CSS se utiliza para cambiar el tamaño de un elemento?",
    image: {
      uri: "https://ralfvanveen.com/wp-content/uploads/2021/06/CSS-_-Begrippenlijst.webp",
      alt: "font-size",
    },
    options: [
      { id: "id:option/20", text: "margin", isCorrect: false },
      { id: "id:option/21", text: "font-size", isCorrect: true },
      { id: "id:option/22", text: "color", isCorrect: false },
      { id: "id:option/23", text: "border", isCorrect: false },
    ],
    answerDescription:
      "Correcto! La propiedad font-size en CSS se utiliza para cambiar el tamaño de la fuente de un elemento.",
  },
  {
    id: "id:question/6",
    question:
      "¿Qué significa HTTP en el contexto de la web?",
    image: {
      uri: "https://verseoads.com/wp-content/uploads/2021/08/http-https.png",
      alt: "Hypertext Transfer Protocol",
    },
    options: [
      { id: "id:option/24", text: "Hypertext Transfer Protocol", isCorrect: true },
      { id: "id:option/25", text: "Hyperlink Transfer Protocol", isCorrect: false },
      { id: "id:option/26", text: "High Tech Transfer Protocol", isCorrect: false },
      { id: "id:option/27", text: "Hypertext Transmission Protoco", isCorrect: false },
    ],
    answerDescription:
      "Correcto! HTTP significa Hypertext Transfer Protocol. Es un protocolo de comunicación utilizado para transferir datos en la web.",
  },
  {
    id: "id:question/7",
    question:
      "¿Qué lenguaje de programación se utiliza principalmente en el lado del servidor para el desarrollo web?",
    image: {
      uri: "https://www.ingeniovirtual.com/wp-content/uploads/tecnologias-de-desarrollo-web.jpg",
      alt: "PHP",
    },
    options: [
      { id: "id:option/28", text: "PHP", isCorrect: true },
      { id: "id:option/29", text: "JavaScript", isCorrect: false },
      { id: "id:option/30", text: "HTML", isCorrect: false },
      { id: "id:option/31", text: "CSS", isCorrect: false },
    ],
    answerDescription:
      "Correcto! PHP es un lenguaje de programación del lado del servidor ampliamente utilizado en el desarrollo web dinámico.",
  },
  {
    id: "id:question/8",
    question:
      "¿Qué etiqueta se utiliza para crear un enlace en HTML?",
    image: {
      uri: "https://www.comunicare.es/wp-content/uploads/2021/08/desarrollo-y-diseno-web_00-1024x675-1.jpg",
      alt: "<a>",
    },
    options: [
      { id: "id:option/32", text: "<link>", isCorrect: false },
      { id: "id:option/33", text: "<href>", isCorrect: false },
      { id: "id:option/34", text: "<url>", isCorrect: false },
      { id: "id:option/35", text: "<a>", isCorrect: true },
    ],
    answerDescription:
      "Correcto! La etiqueta <a> se utiliza para crear enlaces (hipervínculos) en HTML.",
  },
  {
    id: "id:question/9",
    question:
      "¿Cuál de las siguientes opciones es una forma de almacenar datos en el navegador del usuario?",
    image: {
      uri: "https://i.workana.com/wp-content/uploads/2020/01/cookies-glosario-workana-850x400.jpg",
      alt: "Cookies",
    },
    options: [
      { id: "id:option/36", text: "HTML", isCorrect: false },
      { id: "id:option/37", text: "CSS", isCorrect: false },
      { id: "id:option/38", text: "Cookies", isCorrect: true },
      { id: "id:option/39", text: "JSON", isCorrect: false },
    ],
    answerDescription:
      "Correcto! Las cookies son una forma de almacenar datos en el navegador del usuario. Se utilizan para realizar un seguimiento de la información de sesión y personalizar la experiencia del usuario en el sitio web.",
  },
];
