import { Question, Test } from "./types";

export const CarsTest: Test = {
  id: "id:test/carros",
  title: "Cars",
  testName: "cars",
  numOfQuestions: 10,
  duration: 10,
  image: {
    uri: "https://s7ap1.scene7.com/is/image/bigw/Disney_BigW_HeroBanner_Mobile_Cars_828x560_1?$cms-max-image-threshold$&fmt=jpeg&wid=1178&fit=hfit%2C1",
    alt: "Cars",
  },
};

export const carsQuestions: Question[] = [
  {
    id: "id:question/0",
    question: "¿Quién es el protagonista de la película?",
    image: {
      uri: "https://www.journaldugeek.com/app/uploads/2023/12/cars-4-disney-pixar.jpg",
      alt: "Cars",
    },
    options: [
      { id: "id:option/0", text: "Mate", isCorrect: false },
      { id: "id:option/1", text: "El Rayo McQueen", isCorrect: true },
      { id: "id:option/2", text: "Saiki Kuniharo", isCorrect: false },
      { id: "id:option/3", text: "Chick Hicks", isCorrect: false },
    ],
    answerDescription:
      "Correcto! El protagonista es el Rayo McQueen.",
  },
  {
    id: "id:question/1",
    question:
      "¿Cuántas películas tiene la saga?",
    image: {
      uri: "https://m.media-amazon.com/images/I/71dcTxZkWHL._AC_UF894,1000_QL80_DpWeblab_.jpg",
      alt: "Cars",
    },
    options: [
      { id: "id:option/4", text: "4", isCorrect: false },
      { id: "id:option/5", text: "2", isCorrect: false },
      { id: "id:option/6", text: "3", isCorrect: true },
      { id: "id:option/7", text: "1", isCorrect: false },
    ],
    answerDescription:
      "Correcto! La saga tiene 3 películas.",
  },
  {
    id: "id:question/2",
    question:
      "¿Quién acompaña al Rayo en la última película?",
    image: {
      uri: "https://caracoltv.brightspotcdn.com/dims4/default/2461189/2147483647/strip/true/crop/970x509+0+0/resize/1200x630!/quality/90/?url=https%3A%2F%2Fcaracol-brightspot.s3-us-west-2.amazonaws.com%2Fassets%2Fcaracoltv%2Fcars3.jpg",
      alt: "Cars",
    },
    options: [
      { id: "id:option/8", text: "Dinoco", isCorrect: false },
      { id: "id:option/9", text: "Cruz Ramírez", isCorrect: true },
      { id: "id:option/10", text: "Carla Veloso", isCorrect: false },
      { id: "id:option/11", text: "Chucky Fillmore", isCorrect: false },
    ],
    answerDescription:
      "Correcto! Era Cruz Ramírez.",
  },
  {
    id: "id:question/3",
    question:
      "¿Quién es este personaje?",
    image: {
      uri: "https://static.wikia.nocookie.net/el-mundo-de-cars/images/8/8d/FrancescoBernoulliCars2.png/revision/latest?cb=20231128030121&path-prefix=es",
      alt: "Cars",
    },
    options: [
      { id: "id:option/12", text: "Francesco Bernois", isCorrect: false },
      { id: "id:option/13", text: "Francesco Bernoilli", isCorrect: false },
      { id: "id:option/14", text: "Francesco Bernoulli", isCorrect: true },
      { id: "id:option/15", text: "Francesco Bergoulls", isCorrect: false },
    ],
    answerDescription:
      "Correcto! Es Francesco Bernoulli.",
  },
  {
    id: "id:question/4",
    question:
      "¿Cuál es la trama de la segunda entrega de la película?",
    image: {
      uri: "https://material.asset.catchplay.com/DIS-TW-004-A1051/artworks/posters/DIS-TW-004-A1051-P704.jpg?hash=1673343622",
      alt: "Cars",
    },
    options: [
      { id: "id:option/16", text: "Espías que deben resguardar competidores específicos", isCorrect: true },
      { id: "id:option/17", text: "Espías que deben vigilar el transcurso de las carreras mundiales", isCorrect: false },
      { id: "id:option/18", text: "Espías que quieren evitar la caída del imperio petrólero", isCorrect: true },
      { id: "id:option/19", text: "Espías que deben vigilar el lanzamiento del nuevo combustible ecológico", isCorrect: true },
    ],
    answerDescription:
      "Correcto! La segunda entrega trata sobre espías que vigilan el lanzamiento del nuevo combustible, para evitar la caída del imperio petrólero.",
  },
  {
    id: "id:question/5",
    question:
      "¿Cómo se llama el lugar donde queda varado el Rayo en la primer película?",
    image: {
      uri: "https://i.blogs.es/0ee438/cars/450_1000.jpg",
      alt: "Cars",
    },
    options: [
      { id: "id:option/20", text: "Radiator Spring", isCorrect: true },
      { id: "id:option/21", text: "Radiator Springfield", isCorrect: false },
      { id: "id:option/22", text: "Radiator Springter", isCorrect: false },
      { id: "id:option/23", text: "Radiator Springer", isCorrect: false },
    ],
    answerDescription:
      "Correcto! Era Radiator Spring.",
  },
  {
    id: "id:question/6",
    question:
      "¿Quién es el antagonista de la última película?",
    image: {
      uri: "https://static.wikia.nocookie.net/disney/images/6/6d/Profile_-_Jackson_Storm.png/revision/latest?cb=20190425181328",
      alt: "Cars",
    },
    options: [
      { id: "id:option/24", text: "Brick Moon", isCorrect: false },
      { id: "id:option/25", text: "Jakcson Moon", isCorrect: false },
      { id: "id:option/26", text: "River Storm", isCorrect: false },
      { id: "id:option/27", text: "Jackson Storm", isCorrect: true },
    ],
    answerDescription:
      "Correcto! Era Jackson Storm.",
  },
  {
    id: "id:question/7",
    question:
      "¿Cómo se llamaba el interés romántico de Mate en la segunda película?",
    image: {
      uri: "https://i.pinimg.com/564x/ca/8c/41/ca8c41b51110e38c09e32ed7d2575704.jpg",
      alt: "Cars",
    },
    options: [
      { id: "id:option/28", text: "Holley Mixon", isCorrect: false },
      { id: "id:option/29", text: "Holley Nash", isCorrect: false },
      { id: "id:option/30", text: "Holley Shiftwell", isCorrect: true },
      { id: "id:option/31", text: "Holley Swiftwell", isCorrect: false },
    ],
    answerDescription:
      "Correcto! Era Holley shiftwell.",
  },
  {
    id: "id:question/8",
    question:
      "¿Cuántas Copa Pistón tenía Hudson Hornet?",
    image: {
      uri: "https://static.wikia.nocookie.net/disney/images/e/e8/Profile-Doc_hudson.png/revision/latest?cb=20221003162257",
      alt: "Cars",
    },
    options: [
      { id: "id:option/32", text: "Cuatro", isCorrect: false },
      { id: "id:option/33", text: "Dos", isCorrect: false },
      { id: "id:option/34", text: "Cinco", isCorrect: false },
      { id: "id:option/35", text: "Tres", isCorrect: true },
    ],
    answerDescription:
      "Correcto! Hudson Hornet tenía tres Copa Pistón.",
  },
  {
    id: "id:question/9",
    question:
      "¿Cómo se llamaba el camión que transportaba al Rayo en la primer película?",
    image: {
      uri: "https://i.redd.it/xs8hl1q36zna1.jpg",
      alt: "Cars",
    },
    options: [
      { id: "id:option/36", text: "Mark", isCorrect: false },
      { id: "id:option/37", text: "Mack", isCorrect: true },
      { id: "id:option/38", text: "Cam", isCorrect: false },
      { id: "id:option/39", text: "Kam", isCorrect: false },
    ],
    answerDescription:
      "Correcto! Era Mack.",
  },
];
