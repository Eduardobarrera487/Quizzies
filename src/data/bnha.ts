import { Question, Test } from "./types";

export const bnhaTest: Test = {
  id: "id:test/bnha",
  title: "Boku no Hero Academia",
  testName: "bnha",
  numOfQuestions: 10,
  duration: 10,
  image: {
    uri: "https://imgsrv.crunchyroll.com/cdn-cgi/image/format=auto,fit=contain,width=1200,height=675,quality=85/catalog/crunchyroll/aa31911c746c4d7d027b190f2e184834.jpe",
    alt: "bnha",
  },
};

export const bnhaQuestions: Question[] = [
  {
    id: "id:question/0",
    question: "Quien es este personaje?",
    image: {
      uri: "https://static.wikia.nocookie.net/bokunoheroacademia/images/d/dd/Dabi_taunts_Vlad_King.png/revision/latest?cb=20210317234927&path-prefix=es",
      alt: "Dabi",
    },
    options: [
      { id: "id:option/0", text: "All Might", isCorrect: false },
      { id: "id:option/1", text: "Deku", isCorrect: false },
      { id: "id:option/2", text: "Dabi", isCorrect: true },
      { id: "id:option/3", text: "Bakugo", isCorrect: false },
    ],
    answerDescription:
      "Correcto! Este personaje es Dabi, un villano que pertenece a la Liga de Villanos.",
    
  },
  {
    id: "id:question/1",
    question:
      "¿Cual es el quirk de All Might?",
    image: {
      uri: "https://www.korosenai.es/wp-content/uploads/2020/01/all-might.jpg.webp",
      alt: "All Might",
    },
    options: [
      { id: "id:option/4", text: "One For All", isCorrect: true },
      { id: "id:option/5", text: "Hell Flame", isCorrect: false },
      { id: "id:option/6", text: "Larceny", isCorrect: false },
      { id: "id:option/7", text: "Rasengan", isCorrect: true },
    ],
    answerDescription:
      "Correcto! One For All es el quirk de All Might.",
  },
  {
    id: "id:question/2",
    question:
      "¿Quien es el portador actual de One For All?",
    image: {
      uri: "https://i.pinimg.com/originals/63/01/8f/63018f4ff5ba4ffc8c461ecce3dee297.jpg",
      alt: "One For all",
    },
    options: [
      { id: "id:option/8", text: "Deku", isCorrect: true },
      { id: "id:option/9", text: "bakugo", isCorrect: false },
      { id: "id:option/10", text: "All Might", isCorrect: false },
      { id: "id:option/11", text: "Todoroki", isCorrect: false },
    ],
    answerDescription:
      "Correcto! Deku es el actual portador de One For All.",
  },
  {
    id: "id:question/3",
    question:
      "Quien es este personaje?",
    image: {
      uri: "https://static.wikia.nocookie.net/bokunoheroacademia/images/a/ac/Izuku_Midoriya_Traje_de_h%C3%A9roe_2.png/revision/latest/scale-to-width-down/224?cb=20180128234629&path-prefix=es",
      alt: "Deku",
    },
    options: [
      { id: "id:option/12", text: "All Might", isCorrect: false },
      { id: "id:option/13", text: "Deku", isCorrect: true },
      { id: "id:option/14", text: "Dabi", isCorrect: false },
      { id: "id:option/15", text: "Uraraka", isCorrect: false },
    ],
    answerDescription:
      "Correcto! El personaje es Deku!.",
  },
  {
    id: "id:question/4",
    question:
      "Cual es el quirk del padre de Deku?",
    image: {
      uri: "https://tierragamer.com/wp-content/uploads/2021/07/My-Hero-Academia-Deku-Inicios.jpg",
      alt: "Deku",
    },
    options: [
      { id: "id:option/16", text: "Atracción de objetos", isCorrect: false },
      { id: "id:option/17", text: "No tiene", isCorrect: false },
      { id: "id:option/18", text: "Aliento de fuego", isCorrect: true },
      { id: "id:option/19", text: "Regeneración", isCorrect: false },
    ],
    answerDescription:
      "Correcto! El quirk del padre de Deku es aliento de fuego!",
  },
  {
    id: "id:question/5",
    question:
      "Cuantos usuarios ha tenido One For All?",
    image: {
      uri: "https://tierragamer.com/wp-content/uploads/2021/07/all-might-deku.jpg",
      alt: "All Might y Deku",
    },
    options: [
      { id: "id:option/20", text: "3", isCorrect: false },
      { id: "id:option/21", text: "9", isCorrect: true },
      { id: "id:option/22", text: "2", isCorrect: false },
      { id: "id:option/23", text: "6", isCorrect: false },
    ],
    answerDescription:
      "Correcto! One For All ha tenido 9 usuarios.",
  },
  {
    id: "id:question/6",
    question:
      "Donde peleó Endeavor contra All For One durante la guerra final?",
    image: {
      uri: "https://static1.cbrimages.com/wordpress/wp-content/uploads/2022/06/endeavor-all-for-one.jpg",
      alt: "Endeavor y All For One",
    },
    options: [
      { id: "id:option/24", text: "Montaña Gunga", isCorrect: true },
      { id: "id:option/25", text: "Isla flotante U.A", isCorrect: false },
      { id: "id:option/26", text: "El Centro Hospital", isCorrect: false },
      { id: "id:option/27", text: "Ninguna", isCorrect: false },
    ],
    answerDescription:
      "Correcto! Endeavor peleo contra ALl For One en Montaña Gunga.",
  },
  {
    id: "id:question/7",
    question:
      "Quien es este personaje?",
    image: {
      uri: "https://www.mundodeportivo.com/alfabeta/hero/2021/12/don-endeavor-enji-todoroki-my-hero-academia-2.jpg?width=1200&aspect_ratio=16:9",
      alt: "Endeavor",
    },
    options: [
      { id: "id:option/28", text: "Shoto Todoroki", isCorrect: false },
      { id: "id:option/29", text: "Endeavor", isCorrect: true },
      { id: "id:option/30", text: "All Might", isCorrect: false },
      { id: "id:option/31", text: "Mina Ashido", isCorrect: false },
    ],
    answerDescription:
      "Correcto! El personaje es Endeavor.",
  },
  {
    id: "id:question/8",
    question:
      "Cual es el Quirk de Endeavor?",
    image: {
      uri: "https://static.wikia.nocookie.net/bokunoheroacademia/images/a/a6/Hell_Flame_anime.png/revision/latest?cb=20170729213326",
      alt: "Hell Flame",
    },
    options: [
      { id: "id:option/32", text: "One For All", isCorrect: false },
      { id: "id:option/33", text: "Regeneracion", isCorrect: false },
      { id: "id:option/34", text: "Hydra", isCorrect: false },
      { id: "id:option/35", text: "Hell Flame", isCorrect: true },
    ],
    answerDescription:
      "Correcto! El Quirk de Endeavor es Hell Flame.",
  },
  {
    id: "id:question/9",
    question:
      "Que usuario es Deku del One For All?",
    image: {
      uri: "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2022/02/One-For-All-Quirks-Within.jpg",
      alt: "One For All",
    },
    options: [
      { id: "id:option/36", text: "6to", isCorrect: false },
      { id: "id:option/37", text: "8vo", isCorrect: false },
      { id: "id:option/38", text: "9no", isCorrect: true },
      { id: "id:option/39", text: "5to", isCorrect: false },
    ],
    answerDescription:
      "Correcto! Deku es el 9no usuario de One For All.",
  },
];
