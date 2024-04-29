import { Question, Test } from "./types";

export const IDETest: Test = {
  id: "id:test/ide",
  title: "Herramientas de programación",
  testName: "ide",
  numOfQuestions: 10,
  duration: 10,
  image: {
    uri: "https://templeofgeek.com/wp-content/uploads/2022/09/wordpress-header-1-2.jpg",
    alt: "saiki",
  },
};

export const ideQuestions: Question[] = [
  {
    id: "id:question/0",
    question: "¿Cuál es el nombre de este programa?",
    image: {
      uri: "https://static1.xdaimages.com/wordpress/wp-content/uploads/2022/09/Visual-Studio-Code-featured-2.jpg",
      alt: "ide",
    },
    options: [
      { id: "id:option/0", text: "Visual Studio", isCorrect: false },
      { id: "id:option/1", text: "Visual Studio Code", isCorrect: true },
      { id: "id:option/2", text: "Sql Server", isCorrect: false },
      { id: "id:option/3", text: "Visual Studio Enterprise", isCorrect: false },
    ],
    answerDescription:
      "Correcto! Es el Visual Studio Code.",
  },
  {
    id: "id:question/1",
    question:
      "¿Cuál es el nombre de este programa?",
    image: {
      uri: "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Feature-Visual-Studio-Logo:VP1-539x349",
      alt: "ide",
    },
    options: [
      { id: "id:option/4", text: "Visual Studio", isCorrect: false },
      { id: "id:option/5", text: "Visual Basic", isCorrect: false },
      { id: "id:option/6", text: "Visual Studio", isCorrect: true },
      { id: "id:option/7", text: "Visual Manager", isCorrect: false },
    ],
    answerDescription:
      "Correcto! Es el Visual Studio.",
  },
  {
    id: "id:question/2",
    question:
      "¿Qué representan las figuras de la imagen?",
    image: {
      uri: "data:image/jpeg;base64,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",
      alt: "ide",
    },
    options: [
      { id: "id:option/8", text: "Son programas para manejo de base de datos", isCorrect: false },
      { id: "id:option/9", text: "Son entornos de desarrollo integrados (ide)", isCorrect: true },
      { id: "id:option/10", text: "Son lenguajes de programación", isCorrect: false },
      { id: "id:option/11", text: "Son software para edición de diagrama y modulado", isCorrect: false },
    ],
    answerDescription:
      "Correcto! Son lo que se llama 'ide' (entorno de desarrollo integrado).",
  },
  {
    id: "id:question/3",
    question:
      "¿Cuál es el nombre de este programa?",
    image: {
      uri: "https://img-c.udemycdn.com/course/750x422/3980862_cc25_3.jpg",
      alt: "Saiki",
    },
    options: [
      { id: "id:option/12", text: "PyCode", isCorrect: false },
      { id: "id:option/13", text: "PyC++", isCorrect: false },
      { id: "id:option/14", text: "PyCharm", isCorrect: true },
      { id: "id:option/15", text: "PyC", isCorrect: false },
    ],
    answerDescription:
      "Correcto! Es PyCharm.",
  },
  {
    id: "id:question/4",
    question:
      "¿Qué es MySQL?",
    image: {
      uri: "https://datascientest.com/wp-content/uploads/2022/03/mySQL_blog_4-106-1024x562.png",
      alt: "MySQL",
    },
    options: [
      { id: "id:option/16", text: "Editor de código fuente", isCorrect: false },
      { id: "id:option/17", text: "Entorno de desarrollo integrado", isCorrect: false },
      { id: "id:option/18", text: "Sistema de gestión de base de datos", isCorrect: true },
      { id: "id:option/19", text: "Lenguaje de programación dirigido por eventos", isCorrect: false },
    ],
    answerDescription:
      "Correcto! Es un sistema de gestión de base de datos.",
  },
  {
    id: "id:question/5",
    question:
      "¿Qué es Enterprise Architecht?",
    image: {
      uri: "https://basensei.com/wp-content/uploads/2020/02/EA_LOGO.png",
      alt: "Enterprise Architecht",
    },
    options: [
      { id: "id:option/20", text: "Herramienta de diseño y modelado visual", isCorrect: true },
      { id: "id:option/21", text: "Sistema de gestión de base de datos", isCorrect: false },
      { id: "id:option/22", text: "Entorno de desarrollo integrado", isCorrect: false },
      { id: "id:option/23", text: "Software compuesto por conjunto de herramientas de programación de código abierto", isCorrect: false },
    ],
    answerDescription:
      "Correcto! Es una herramienta de diseño y modelado visual.",
  },
  {
    id: "id:question/6",
    question:
      "¿Qué es Eclipse?",
    image: {
      uri: "https://blog.desafiolatam.com/wp-content/uploads/2019/07/eclipse-ide.png",
      alt: "Eclipse",
    },
    options: [
      { id: "id:option/24", text: "Entorno de desarrollo integrado", isCorrect: false },
      { id: "id:option/25", text: "Sistema de gestión de base de datos", isCorrect: false },
      { id: "id:option/26", text: "Herramienta de diseño y modelado visual", isCorrect: false },
      { id: "id:option/27", text: "Software compuesto por conjunto de herramientas de programación de código abierto", isCorrect: true },
    ],
    answerDescription:
      "Correcto! Es un software compuesto por conjunto de herramientas de programación de código abierto.",
  },
  {
    id: "id:question/7",
    question:
      "¿Cuál es el nombre de este programa?",
    image: {
      uri: "https://cdn2.cellphones.com.vn/1200x400/https://cdn.sforum.vn/sforum/wp-content/uploads/2021/11/netbeans-cover.jpg",
      alt: "ide",
    },
    options: [
      { id: "id:option/28", text: "NetBeans Studio", isCorrect: false },
      { id: "id:option/29", text: "Apache Basics", isCorrect: false },
      { id: "id:option/30", text: "Apache NetBeans", isCorrect: true },
      { id: "id:option/31", text: "NetBeans Enterprise", isCorrect: false },
    ],
    answerDescription:
      "Correcto! Su nombre es Apache NetBeans.",
  },
  {
    id: "id:question/8",
    question:
      "¿Cuál es el nombre de este programa?",
    image: {
      uri: "hhttps://www.muylinux.com/wp-content/uploads/2022/06/Atom.jpg",
      alt: "ide",
    },
    options: [
      { id: "id:option/32", text: "Atom Nuclide", isCorrect: false },
      { id: "id:option/33", text: "Atom Integration", isCorrect: false },
      { id: "id:option/34", text: "Atom Studio", isCorrect: false },
      { id: "id:option/35", text: "Atom", isCorrect: true },
    ],
    answerDescription:
      "Correcto! Es Atom.",
  },
  {
    id: "id:question/9",
    question:
      "¿Cuál es el nombre de este programa?",
    image: {
      uri: "https://www.softzone.es/app/uploads-softzone.es/2021/05/IDE-Sublime-Text.jpg",
      alt: "Saiki",
    },
    options: [
      { id: "id:option/36", text: "Sublime Code", isCorrect: false },
      { id: "id:option/37", text: "Sublime", isCorrect: false },
      { id: "id:option/38", text: "Sublime Text", isCorrect: true },
      { id: "id:option/39", text: "Sublime Studio", isCorrect: false },
    ],
    answerDescription:
      "Correcto! Es Sublime Text.",
  },
];
