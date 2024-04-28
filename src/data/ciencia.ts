import { Question, Test } from "./types";

export const cienciaTest: Test = {
  id: "id:test/ciencia",
  title: "Cultura Popular 2",
  testName: "ciencia",
  numOfQuestions: 10,
  duration: 10,
  image: {
    uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyvBUTiRpBQtLd2iv2utJYLNo7qa91_GUL-b7OTnNlXg&s",
    alt: "ciencia",
  },
};

export const cienciaQuestions: Question[] = [
  {
    id: "id:question/0",
    question: "Cuantos huesos hay en el cuerpo humano?",
    options: [
      { id: "id:option/0", text: "200", isCorrect: false },
      { id: "id:option/1", text: "206", isCorrect: true },
      { id: "id:option/2", text: "198", isCorrect: false },
      { id: "id:option/3", text: "210", isCorrect: false },
    ],
    answerDescription:
      "Correcto! El cuerpo humano de un adulto tiene 206 huesos!",
  },
  {
    id: "id:question/1",
    question:
      "Como se llama el proceso por el cual las plantas se alimentan?",
    image: {
      uri: "https://cdn0.ecologiaverde.com/es/posts/0/7/8/como_crecen_las_plantas_2870_orig.jpg",
      alt: "Plantas",
    },
    options: [
      { id: "id:option/4", text: "Transpiración", isCorrect: false },
      { id: "id:option/5", text: "Metamorfosis", isCorrect: false },
      { id: "id:option/6", text: "Fotosintesis", isCorrect: true },
      { id: "id:option/7", text: "Esporas", isCorrect: false },
    ],
    answerDescription:
      "Correcto! Las plantas se alimentan mediante la fotosintesis!",
  },
  {
    id: "id:question/2",
    question:
      "Cuantos elementos hay en la tabla periodica?",
    image: {
      uri: "https://wuolah.com/blog/wp-content/uploads/sites/2/2023/09/tabla-periodica-1030x579.jpg",
      alt: "Tabla Periodica",
    },
    options: [
      { id: "id:option/8", text: "120", isCorrect: false },
      { id: "id:option/9", text: "118", isCorrect: true },
      { id: "id:option/10", text: "119", isCorrect: false },
      { id: "id:option/11", text: "115", isCorrect: false },
    ],
    answerDescription:
      "Correcto! La tabla periodica tiene 118!",
  },
  {
    id: "id:question/3",
    question:
      "Cuantos corazones tiene un pulpo?",
    image: {
      uri: "https://okdiario.com/img/2019/12/10/cuantos-corazones-tiene-un-pulpo.jpg",
      alt: "Pulpo",
    },
    options: [
      { id: "id:option/12", text: "2", isCorrect: false },
      { id: "id:option/13", text: "4", isCorrect: false },
      { id: "id:option/14", text: "3", isCorrect: true },
      { id: "id:option/15", text: "6", isCorrect: false },
    ],
    answerDescription:
      "Correcto! Un pulpo tiene 3 corazones!",
  },
  {
    id: "id:question/4",
    question:
      "Cual es el mineral mas duro del planeta?",
    image: {
      uri: "https://pbs.twimg.com/media/D9qn2dWW4AAyhBw.jpg",
      alt: "Minerales",
    },
    options: [
      { id: "id:option/16", text: "diamante", isCorrect: true },
      { id: "id:option/17", text: "Piedra", isCorrect: false },
      { id: "id:option/18", text: "Esmeralda", isCorrect: false },
      { id: "id:option/19", text: "Rubí", isCorrect: false },
    ],
    answerDescription:
      "Correcto! El diamante es el mineral mas duro!",
  },
  {
    id: "id:question/5",
    question:
      "Cual es el animal que mas muertes provoca anualmente?",
    image: {
      uri: "https://cope-cdnmed.cope.es/resources/jpg/6/1/1587503661416.jpg",
      alt: "Serpiente",
    },
    options: [
      { id: "id:option/20", text: "Mosquito", isCorrect: true },
      { id: "id:option/21", text: "Serpiente", isCorrect: false },
      { id: "id:option/22", text: "Tiburon", isCorrect: false },
      { id: "id:option/23", text: "Leon", isCorrect: false },
    ],
    answerDescription:
      "Correcto! Es el mosquito!",
  },
  {
    id: "id:question/6",
    question:
      "Cuantos dientes tiene un humano adulto?",
    options: [
      { id: "id:option/24", text: "30", isCorrect: false },
      { id: "id:option/25", text: "38", isCorrect: false },
      { id: "id:option/26", text: "34", isCorrect: false },
      { id: "id:option/27", text: "32", isCorrect: true },
    ],
    answerDescription:
      "Correcto! El humano adulto 32!",
  },
  {
    id: "id:question/7",
    question:
      "Quién descubrió la penicilina?",
    image: {
      uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuzNYagYI2yUz55CEClcskgHrpp0aswA5bR5IovdSuDA&s",
      alt: "Penicilina",
    },
    options: [
      { id: "id:option/28", text: "Thomas Edison", isCorrect: false },
      { id: "id:option/29", text: "Nikola Tesla", isCorrect: false },
      { id: "id:option/30", text: "Alexander Fleming", isCorrect: true },
      { id: "id:option/31", text: "Isaac Newton", isCorrect: false },
    ],
    answerDescription:
      "Correcto! Alexander Fleming descubrió la penicilina!",
  },
  {
    id: "id:question/8",
    question:
      "Quien inventó la teoria de la relatividad?",
    options: [
      { id: "id:option/32", text: "Werner Heisenberg", isCorrect: false },
      { id: "id:option/33", text: "Alexander von Humboldt", isCorrect: false },
      { id: "id:option/34", text: "Nikola Tesla", isCorrect: false },
      { id: "id:option/35", text: "Albert Einstein", isCorrect: true },
    ],
    answerDescription:
      "Correcto! Einstein formuló la teoria de la relatividad!",
  },
  {
    id: "id:question/9",
    question:
      "Cuantas vertebras tiene el cuerpo humano?",
    image: {
      uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Thoracic_vertebrae_back3.png/320px-Thoracic_vertebrae_back3.png",
      alt: "Vertebra",
    },
    options: [
      { id: "id:option/36", text: "31", isCorrect: false },
      { id: "id:option/37", text: "30", isCorrect: false },
      { id: "id:option/38", text: "33", isCorrect: true },
      { id: "id:option/39", text: "35", isCorrect: false },
    ],
    answerDescription:
      "Correcto! El cuerpo humano tiene 33 vertebras!",
  },
];
