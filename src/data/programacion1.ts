import { Question, Test } from "./types";

export const programacion1Test: Test = {
  id: "id:test/programacion1",
  title: "Programacion",
  testName: "programacion1",
  numOfQuestions: 10,
  duration: 10,
  image: {
    uri: "https://concepto.de/wp-content/uploads/2014/08/programacion-2-e1551291144973.jpg",
    alt: "programacion1",
  },
};

export const programacion1Questions: Question[] = [
  {
    id: "id:question/0",
    question: "Que es C++?",
    image: {
      uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/800px-ISO_C%2B%2B_Logo.svg.png",
      alt: "c++",
    },
    options: [
      { id: "id:option/0", text: "Un programa", isCorrect: false },
      { id: "id:option/1", text: "Un lenguaje de programacion", isCorrect: true },
      { id: "id:option/2", text: "Un juego", isCorrect: false },
      { id: "id:option/3", text: "Un lenguaje de etiquetas", isCorrect: false },
    ],
    answerDescription:
      "Correcto! C++ es un lenguaje de programacion!",
  },
  {
    id: "id:question/1",
    question:
      "Que significa POO?",
    image: {
      uri: "https://img-b.udemycdn.com/course/750x422/3820290_4cfe.jpg",
      alt: "POO",
    },
    options: [
      { id: "id:option/4", text: "Problema Observable y Obstructor", isCorrect: false },
      { id: "id:option/5", text: "Programa Olvidado u Obsoleto", isCorrect: false },
      { id: "id:option/6", text: "Programacion Orientada a Objetos", isCorrect: true },
      { id: "id:option/7", text: "Practicas Obsoletas", isCorrect: false },
    ],
    answerDescription:
      "Correcto! Significa Programacion Orientada a objetos!",
  },
  {
    id: "id:question/2",
    question:
      "¿ CUAL FUE LA INTENCION AL CREAR C++ ?",
    image: {
      uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/800px-ISO_C%2B%2B_Logo.svg.png",
      alt: "c++",
    },
    options: [
      { id: "id:option/8", text: "Para desarrollar juegos", isCorrect: false },
      { id: "id:option/9", text: "Extender el lenguaje C", isCorrect: true },
      { id: "id:option/10", text: "Programacion Web", isCorrect: false },
      { id: "id:option/11", text: "Diseño UX/UI", isCorrect: false },
    ],
    answerDescription:
      "Correcto! C++ se hizo para extender al lenguaje C!",
  },
  {
    id: "id:question/3",
    question:
      "En que año fue lanzado PSeint?",
    image: {
      uri: "https://pseint.sourceforge.net/logo-header.png",
      alt: "Pseint",
    },
    options: [
      { id: "id:option/12", text: "1999", isCorrect: false },
      { id: "id:option/13", text: "2005", isCorrect: false },
      { id: "id:option/14", text: "2004", isCorrect: true },
      { id: "id:option/15", text: "2000", isCorrect: false },
    ],
    answerDescription:
      "Correcto! PSeint fue lanzado en 2004!",
  },
  {
    id: "id:question/4",
    question:
      "Para que se usa el pseudocodigo?",
    image: {
      uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqCl7NzBzNGkJR4prPozUBplv0peupOFjVd2KrRRBqVw&s",
      alt: "Pseudocodigo",
    },
    options: [
      { id: "id:option/16", text: "Para practicar conceptos basicos de la programacion", isCorrect: true },
      { id: "id:option/17", text: "Para juegos", isCorrect: false },
      { id: "id:option/18", text: "Para diseño Web", isCorrect: false },
      { id: "id:option/19", text: "Desarrollo de Apps", isCorrect: false },
    ],
    answerDescription:
      "Correcto! Se usa para practicar conceptos basicos!",
  },
  {
    id: "id:question/5",
    question:
      "Que lenguaje es este?",
    image: {
      uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Python.svg/640px-Python.svg.png",
      alt: "Python",
    },
    options: [
      { id: "id:option/20", text: "Python", isCorrect: true },
      { id: "id:option/21", text: "Java", isCorrect: false },
      { id: "id:option/22", text: "HTML", isCorrect: false },
      { id: "id:option/23", text: "JavaScript", isCorrect: false },
    ],
    answerDescription:
      "Correcto! Es Python!",
  },
  {
    id: "id:question/6",
    question:
      "En que etiqueta HTML se puede usar codigo JavaScript?",
    image: {
      uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png",
      alt: "HTML",
    },
    options: [
      { id: "id:option/24", text: "<h1>", isCorrect: false },
      { id: "id:option/25", text: "<js>", isCorrect: false },
      { id: "id:option/26", text: "<div>", isCorrect: false },
      { id: "id:option/27", text: "<script>", isCorrect: true },
    ],
    answerDescription:
      "Correcto! Esa es la etiqueta correcta!",
  },
  {
    id: "id:question/7",
    question:
      "Que es Java?",
    image: {
      uri: "https://rosamarfil.es/tutoriales/wp-content/uploads/2019/08/java-logo-png.png",
      alt: "Java",
    },
    options: [
      { id: "id:option/28", text: "Lenguaje de etiquetas", isCorrect: false },
      { id: "id:option/29", text: "Pseudocodigo", isCorrect: false },
      { id: "id:option/30", text: "Lenguaje de programacion", isCorrect: true },
      { id: "id:option/31", text: "Programa", isCorrect: false },
    ],
    answerDescription:
      "Correcto! Java es un lenguaje de programacion!",
  },
  {
    id: "id:question/8",
    question:
      "Un ___________ es la representacion grafica de un algoritmo",
    image: {
      uri: "https://img.freepik.com/vector-gratis/ilustracion-concepto-cerebro-curiosidad_114360-11037.jpg",
      alt: "Curiosidad",
    },
    options: [
      { id: "id:option/32", text: "Algoritmo", isCorrect: false },
      { id: "id:option/33", text: "Pseudocodigo", isCorrect: false },
      { id: "id:option/34", text: "Programa", isCorrect: false },
      { id: "id:option/35", text: "Diagrama de flujo", isCorrect: true },
    ],
    answerDescription:
      "Correcto! El diagrama de fluo es la representacion grafica de un algoritmo!",
  },
  {
    id: "id:question/9",
    question:
      "Cual de estas NO es una etiqueta HTML?",
    image: {
      uri: "https://img.freepik.com/vector-gratis/ilustracion-concepto-cerebro-curiosidad_114360-11037.jpg",
      alt: "Mick Jagger",
    },
    options: [
      { id: "id:option/36", text: "div", isCorrect: false },
      { id: "id:option/37", text: "footer", isCorrect: false },
      { id: "id:option/38", text: "java", isCorrect: true },
      { id: "id:option/39", text: "img", isCorrect: false },
    ],
    answerDescription:
      "Correcto! Esa etiqueta NO existe en HTMl",
  },
];
