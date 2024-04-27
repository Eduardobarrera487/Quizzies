import { Question, Test } from "./types";

export const pop1Test: Test = {
  id: "id:test/pop1",
  title: "Cultura Popular 1",
  testName: "pop1",
  numOfQuestions: 10,
  duration: 10,
  image: {
    uri: "https://templeofgeek.com/wp-content/uploads/2022/09/wordpress-header-1-2.jpg",
    alt: "bsd",
  },
};

export const bsdQuestions: Question[] = [
  {
    id: "id:question/0",
    question: "De que ciudad son los Beatles?",
    image: {
      uri: "https://www.vostv.com.ni/media/news/b9aa5cfab49511eea46f567103a612d1.jpeg",
      alt: "Beatles",
    },
    options: [
      { id: "id:option/0", text: "Londres", isCorrect: false },
      { id: "id:option/1", text: "Liverpool", isCorrect: true },
      { id: "id:option/2", text: "Los Angeles", isCorrect: false },
      { id: "id:option/3", text: "New York", isCorrect: false },
    ],
    answerDescription:
      "Correcto! Los Beatles son de Liverpool.",
  },
  {
    id: "id:question/1",
    question:
      "Quién es el mejor amigo de Bart Simpson?",
    image: {
      uri: "https://media.diariouno.com.ar/p/c61fa0ced644a615705fbfa6ed903dfc/adjuntos/298/imagenes/009/222/0009222224/1200x0/smart/milhousepng.png",
      alt: "Milhouse",
    },
    options: [
      { id: "id:option/4", text: "Lisa", isCorrect: false },
      { id: "id:option/5", text: "Nelson", isCorrect: false },
      { id: "id:option/6", text: "Milhouse", isCorrect: true },
      { id: "id:option/7", text: "Nikolai", isCorrect: false },
    ],
    answerDescription:
      "Correcto! Milhouse es el mejor amigo de Bart!",
  },
  {
    id: "id:question/2",
    question:
      "Quien es el personaje principal de la serie de libros de Harry Potter?",
    image: {
      uri: "https://media.es.wired.com/photos/64370c54f381a957088482cc/4:3/w_2668,h_2001,c_limit/reboot%20de%20harry%20potter%20warner.jpg",
      alt: "Harry Potter",
    },
    options: [
      { id: "id:option/8", text: "Voldemort", isCorrect: false },
      { id: "id:option/9", text: "Harry Potter", isCorrect: true },
      { id: "id:option/10", text: "Hermione Granger", isCorrect: false },
      { id: "id:option/11", text: "Ron Weasley", isCorrect: false },
    ],
    answerDescription:
      "Correcto! harry Potter es el personaje principal!",
  },
  {
    id: "id:question/3",
    question:
      "Quien es el?",
    image: {
      uri: "https://media.revistagq.com/photos/61570a778052a49b36a0342f/16:9/w_2560%2Cc_limit/GettyImages-131859459%2520(1).jpg",
      alt: "Stephen King",
    },
    options: [
      { id: "id:option/12", text: "F. Scott Fitzgerald", isCorrect: false },
      { id: "id:option/13", text: "Edgar Allan Poe", isCorrect: false },
      { id: "id:option/14", text: "Stephen King", isCorrect: true },
      { id: "id:option/15", text: "Stephen Hawking", isCorrect: false },
    ],
    answerDescription:
      "Correcto! Es Stephen King!",
  },
  {
    id: "id:question/4",
    question:
      "Cual es el hermano de Mario?",
    image: {
      uri: "https://static.wikia.nocookie.net/shipping/images/c/c6/Luigi_Mario_Party_Switch.png/revision/latest?cb=20211012192207&path-prefix=es",
      alt: "Luigi",
    },
    options: [
      { id: "id:option/16", text: "Luigi", isCorrect: true },
      { id: "id:option/17", text: "Yoshi", isCorrect: false },
      { id: "id:option/18", text: "", isCorrect: false },
      { id: "id:option/19", text: "Toad", isCorrect: false },
    ],
    answerDescription:
      "Correcto! Es Luigi!",
  },
  {
    id: "id:question/5",
    question:
      "Quién es el autor de Dragon Ball?",
    image: {
      uri: "https://warp.la/wp-content/uploads/2024/03/493849_1549446.webp",
      alt: "Akira Toriyama",
    },
    options: [
      { id: "id:option/20", text: "Akira Toriyama", isCorrect: true },
      { id: "id:option/21", text: "Akira Nakai", isCorrect: false },
      { id: "id:option/22", text: "Hidetaka Miyazaki", isCorrect: false },
      { id: "id:option/23", text: "Hideo Kojima", isCorrect: false },
    ],
    answerDescription:
      "Correcto! Es Akira toriyama!",
  },
  {
    id: "id:question/6",
    question:
      "Quién es el compañero de batman??",
    image: {
      uri: "https://i.pinimg.com/474x/d5/fe/d8/d5fed8f9ba7868d7cd1efa288c826042.jpg",
      alt: "Robin",
    },
    options: [
      { id: "id:option/24", text: "Pinguino", isCorrect: false },
      { id: "id:option/25", text: "Hush", isCorrect: false },
      { id: "id:option/26", text: "Red Hood", isCorrect: false },
      { id: "id:option/27", text: "Robin", isCorrect: true },
    ],
    answerDescription:
      "Correcto! Es Robin!",
  },
  {
    id: "id:question/7",
    question:
      "Quién es el mejor amigo de Bob Esponja?",
    image: {
      uri: "https://static.wikia.nocookie.net/doblaje/images/d/d3/PatricioEstrellaBobEsponja02.png/revision/latest?cb=20190515235732&path-prefix=es",
      alt: "Patricio",
    },
    options: [
      { id: "id:option/28", text: "Calamardo", isCorrect: false },
      { id: "id:option/29", text: "Arenita", isCorrect: false },
      { id: "id:option/30", text: "Patricio", isCorrect: true },
      { id: "id:option/31", text: "Señora Puff", isCorrect: false },
    ],
    answerDescription:
      "Correcto! Patricio es el mejor de Bob Esponja!",
  },
  {
    id: "id:question/8",
    question:
      "Cual es la ciudad del amor?",
    image: {
      uri: "https://images.adsttc.com/media/images/5d44/14fa/284d/d1fd/3a00/003d/large_jpg/eiffel-tower-in-paris-151-medium.jpg?1564742900",
      alt: "Chuuya",
    },
    options: [
      { id: "id:option/32", text: "Las Vegas", isCorrect: false },
      { id: "id:option/33", text: "managua", isCorrect: false },
      { id: "id:option/34", text: "Estelí", isCorrect: false },
      { id: "id:option/35", text: "Paris", isCorrect: true },
    ],
    answerDescription:
      "Correcto!",
  },
  {
    id: "id:question/9",
    question:
      "Cual es la formula quimica del agua?",
    image: {
      uri: "https://static.wikia.nocookie.net/bungostraydogs/images/1/1e/Ango_and_Oda_toast_without_Dazai_%28Wan%21_Anime%29.png/revision/latest?cb=20210326142126",
      alt: "Dazai",
    },
    options: [
      { id: "id:option/36", text: "CO2", isCorrect: false },
      { id: "id:option/37", text: "O2", isCorrect: false },
      { id: "id:option/38", text: "H2O", isCorrect: true },
      { id: "id:option/39", text: "NaCl", isCorrect: false },
    ],
    answerDescription:
      "Correcto! Es H2O!",
  },
];
