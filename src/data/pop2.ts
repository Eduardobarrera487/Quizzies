import { Question, Test } from "./types";

export const pop2Test: Test = {
  id: "id:test/pop2",
  title: "Cultura Popular 2",
  testName: "pop2",
  numOfQuestions: 10,
  duration: 10,
  image: {
    uri: "https://www.nebrija.com/medios/actualidadnebrija/wp-content/uploads/sites/2/2020/07/lagran_pregunta_nebrija-787x459.jpg",
    alt: "pop2",
  },
};

export const pop2Questions: Question[] = [
  {
    id: "id:question/0",
    question: "Cuando acabó la 2da Guerra Mundial?",
    image: {
      uri: "https://p.calameoassets.com/221112164945-bc19b92d8817b6ffc1a5cd9894b16387/p1.jpg",
      alt: "2da Guerra Mundial",
    },
    options: [
      { id: "id:option/0", text: "1947", isCorrect: false },
      { id: "id:option/1", text: "1945", isCorrect: true },
      { id: "id:option/2", text: "1950", isCorrect: false },
      { id: "id:option/3", text: "1939", isCorrect: false },
    ],
    answerDescription:
      "Correcto! La segunda guerra mundial acabó en 1945",
  },
  {
    id: "id:question/1",
    question:
      "Donde está ubicada la Sagrada Familia?",
    image: {
      uri: "https://www.sacyr.com/documents/121856245/121935575/IMG+0+Sagrada+Familia.jpg/581b6a0d-6ea2-c8c8-e24d-af942bebb396?t=1680604818400",
      alt: "Milhouse",
    },
    options: [
      { id: "id:option/4", text: "Valencia", isCorrect: false },
      { id: "id:option/5", text: "Madrid", isCorrect: false },
      { id: "id:option/6", text: "Barcelona", isCorrect: true },
      { id: "id:option/7", text: "Tenerife", isCorrect: false },
    ],
    answerDescription:
      "Correcto! La Sagrada Familia está en Barcelona!",
  },
  {
    id: "id:question/2",
    question:
      "Cual es el pais mas grande del mundo?",
    image: {
      uri: "https://panamericana.vtexassets.com/arquivos/ids/284975-800-auto?v=636534583271270000&width=800&height=auto&aspect=true",
      alt: "Globo terraqueo",
    },
    options: [
      { id: "id:option/8", text: "China", isCorrect: false },
      { id: "id:option/9", text: "Rusia", isCorrect: true },
      { id: "id:option/10", text: "USA", isCorrect: false },
      { id: "id:option/11", text: "Japón", isCorrect: false },
    ],
    answerDescription:
      "Correcto! Rusia es el pais mas grande del mundo!",
  },
  {
    id: "id:question/3",
    question:
      "Donde se encuentra ubicada la Casa Blanca?",
    image: {
      uri: "https://www.whitehouse.gov/wp-content/uploads/2022/05/WHAJAC.jpg?w=1920",
      alt: "Casa Blanca",
    },
    options: [
      { id: "id:option/12", text: "Miami, Florida", isCorrect: false },
      { id: "id:option/13", text: "Manhattan, NY", isCorrect: false },
      { id: "id:option/14", text: "Washington, DC", isCorrect: true },
      { id: "id:option/15", text: "Houston, Texas", isCorrect: false },
    ],
    answerDescription:
      "Correcto! Está ubicada en Washington, DC!",
  },
  {
    id: "id:question/4",
    question:
      "Cuantas peliculas de harry potter se han hecho?",
    image: {
      uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpcEMv2O-W5D2PR-Bm3m2d1DswuEuJuZ0e9GKevLSFRw&s",
      alt: "Harry Potter",
    },
    options: [
      { id: "id:option/16", text: "8", isCorrect: true },
      { id: "id:option/17", text: "7", isCorrect: false },
      { id: "id:option/18", text: "4", isCorrect: false },
      { id: "id:option/19", text: "6", isCorrect: false },
    ],
    answerDescription:
      "Correcto! Se han hecho 8 peliculas de Harry Potter!",
  },
  {
    id: "id:question/5",
    question:
      "Quién es el enemigo más famoso de batman?",
    image: {
      uri: "https://www.hollywoodreporter.com/wp-content/uploads/2019/01/batman_rogues_gallery-villains-publicity-h_2019.jpg",
      alt: "VIllanos de Batman",
    },
    options: [
      { id: "id:option/20", text: "Joker", isCorrect: true },
      { id: "id:option/21", text: "Hush", isCorrect: false },
      { id: "id:option/22", text: "Ra's Al Ghul", isCorrect: false },
      { id: "id:option/23", text: "Cara de Barro", isCorrect: false },
    ],
    answerDescription:
      "Correcto! Es El Joker!",
  },
  {
    id: "id:question/6",
    question:
      "A que pelicula pertenece Katniss Everdeen?",
    image: {
      uri: "https://static.wikia.nocookie.net/doblaje/images/3/31/KatnissEverdeen.jpg/revision/latest?cb=20171207002459&path-prefix=es",
      alt: "Katniss Everdeen",
    },
    options: [
      { id: "id:option/24", text: "Avatar", isCorrect: false },
      { id: "id:option/25", text: "Maze Runner", isCorrect: false },
      { id: "id:option/26", text: "Saw", isCorrect: false },
      { id: "id:option/27", text: "Los juegos del hambre", isCorrect: true },
    ],
    answerDescription:
      "Correcto! Katniss pertenece a la saga Los Juegos del Hambre!",
  },
  {
    id: "id:question/7",
    question:
      "Quién es el maximo goleador de la historia del futbol?",
    image: {
      uri: "https://www.mundodeportivo.com/files/image_449_220/uploads/2023/09/09/64fccf0320a31.jpeg",
      alt: "Goleadores de futbol",
    },
    options: [
      { id: "id:option/28", text: "Lionel Messi", isCorrect: false },
      { id: "id:option/29", text: "Pelé", isCorrect: false },
      { id: "id:option/30", text: "Cristiano Ronaldo", isCorrect: true },
      { id: "id:option/31", text: "Mesut Ozil", isCorrect: false },
    ],
    answerDescription:
      "Correcto! Cristiano Ronaldo es el maximo goleador!",
  },
  {
    id: "id:question/8",
    question:
      "Quien fue el vocalista de Queen?",
    image: {
      uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ81zx4jOjSQRuoIcFikVQnyKtGdw72rvAxu_1-sMyfig&s",
      alt: "Queen",
    },
    options: [
      { id: "id:option/32", text: "Chuck Berry", isCorrect: false },
      { id: "id:option/33", text: "Ringo Starr", isCorrect: false },
      { id: "id:option/34", text: "John Lennon", isCorrect: false },
      { id: "id:option/35", text: "Freddie Mercury", isCorrect: true },
    ],
    answerDescription:
      "Correcto! El vocalista de Queen es Freddie Mercury!",
  },
  {
    id: "id:question/9",
    question:
      "A que banda perteneció Mick Jagger?",
    image: {
      uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKEhGM-LkNHksKsSgLjnKArrB4LTTYvEfFJF2tvPJXuQ&s",
      alt: "Mick Jagger",
    },
    options: [
      { id: "id:option/36", text: "Motley Crue", isCorrect: false },
      { id: "id:option/37", text: "Queen", isCorrect: false },
      { id: "id:option/38", text: "Rolling Stones", isCorrect: true },
      { id: "id:option/39", text: "Guns n Roses", isCorrect: false },
    ],
    answerDescription:
      "Correcto! Mick Jagger perteneció a los Rolling Stones!",
  },
];
