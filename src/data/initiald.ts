import { Question, Test } from "./types";

export const initialdTest: Test = {
  id: "id:test/initiald",
  title: "Initial D",
  testName: "initiald",
  numOfQuestions: 10,
  duration: 10,
  image: {
    uri: "https://imgsrv.crunchyroll.com/cdn-cgi/image/format=auto,fit=contain,width=1200,height=675,quality=85/catalog/crunchyroll/aaee4e34242e3abc0af317edbada66aa.jpe",
    alt: "initiald",
  },
};

export const initialdQuestions: Question[] = [
  {
    id: "id:question/0",
    question: "Quién es el protagonista del anime?",
    image: {
      uri: "https://static.wikia.nocookie.net/initiald/images/9/9d/Takumi_Ch044.png/revision/latest?cb=20201110200420",
      alt: "Takumi Fujiwara",
    },
    options: [
      { id: "id:option/0", text: "Bunta Fujiwara", isCorrect: false },
      { id: "id:option/1", text: "Takumi Fujiwara", isCorrect: true },
      { id: "id:option/2", text: "Itsuki", isCorrect: false },
      { id: "id:option/3", text: "Ryosuke Takahashi", isCorrect: false },
    ],
    answerDescription:
      "Correcto! Takumi es el protagnista de Initial D.",
  },
  {
    id: "id:question/1",
    question:
      "Que auto conduce Takumi?",
    image: {
      uri: "https://static.wikia.nocookie.net/initiald/images/5/52/AE86T_Manga_Stage_1.png/revision/latest?cb=20200502125651",
      alt: "Toyota AE86",
    },
    options: [
      { id: "id:option/4", text: "Nissan R-32 GTR", isCorrect: false },
      { id: "id:option/5", text: "Mitsubishi Lancer Evo 6", isCorrect: false },
      { id: "id:option/6", text: "Toyota Trueno AE86", isCorrect: true },
      { id: "id:option/7", text: "BMW E36", isCorrect: false },
    ],
    answerDescription:
      "Correcto! El auto de Takumi es un Toyota AE86 Trueno.",
  },
  {
    id: "id:question/2",
    question:
      "Quien es este personaje?",
    image: {
      uri: "https://static.wikia.nocookie.net/initiald/images/5/5b/Keisuke_Ch067.png/revision/latest?cb=20240109190331",
      alt: "keisuke Takahashi",
    },
    options: [
      { id: "id:option/8", text: "natsuki Mogi", isCorrect: false },
      { id: "id:option/9", text: "Keisuke Takahashi", isCorrect: true },
      { id: "id:option/10", text: "Ryosuke Takahashi", isCorrect: false },
      { id: "id:option/11", text: "Wataru Akiyama", isCorrect: false },
    ],
    answerDescription:
      "Correcto! Keisuke es el hermano menor de Ryosuke y miembro de los RedSuns.",
  },
  {
    id: "id:question/3",
    question:
      "Qué personaje pertenece a los RedSuns?",
    image: {
      uri: "https://static.wikia.nocookie.net/initiald/images/a/ac/Ryosuke_Ch039.png/revision/latest?cb=20210710101501",
      alt: "Ryosuke Takahashi",
    },
    options: [
      { id: "id:option/12", text: "Mako Sato", isCorrect: false },
      { id: "id:option/13", text: "Takumi Fujiwara", isCorrect: false },
      { id: "id:option/14", text: "Ryosuke Takahashi", isCorrect: true },
      { id: "id:option/15", text: "Natsuki Mogi", isCorrect: false },
    ],
    answerDescription:
      "Correcto! Ryosuke pertenece a los RedSuns",
  },
  {
    id: "id:question/4",
    question:
      "De quien es este auto?",
    image: {
      uri: "https://static.wikia.nocookie.net/initiald/images/8/85/Nightkids_R32_manga.png/revision/latest?cb=20200628155945",
      alt: "Nissan R-32 GTR",
    },
    options: [
      { id: "id:option/16", text: "Takeshi Nakazato", isCorrect: true },
      { id: "id:option/17", text: "Bunta Fujiwara", isCorrect: false },
      { id: "id:option/18", text: "Mako Sato", isCorrect: false },
      { id: "id:option/19", text: "Iketani", isCorrect: false },
    ],
    answerDescription:
      "Correcto! Este autoo pertenece a Nakazato!",
  },
  {
    id: "id:question/5",
    question:
      "Quién conduce este auto?",
    image: {
      uri: "https://static.wikia.nocookie.net/initiald/images/a/a7/Bunta_Impreza_Manga.png/revision/latest?cb=20200704112542",
      alt: "Bunta Impreza",
    },
    options: [
      { id: "id:option/20", text: "Bunta Fujiwara", isCorrect: true },
      { id: "id:option/21", text: "Iketani", isCorrect: false },
      { id: "id:option/22", text: "Takumi", isCorrect: false },
      { id: "id:option/23", text: "Itsuki", isCorrect: false },
    ],
    answerDescription:
      "Correcto! Bunta conduce este auto!",
  },
  {
    id: "id:question/6",
    question:
      "Que equipo usaba solamente Mitsubishi Lancer Evo?",
    image: {
      uri: "https://static.wikia.nocookie.net/initiald/images/d/dc/Kyoichi_and_Emperor_Chapter_86.png/revision/latest/scale-to-width-down/1000?cb=20231223023923",
      alt: "Emperor",
    },
    options: [
      { id: "id:option/24", text: "Project D", isCorrect: false },
      { id: "id:option/25", text: "RedSuns", isCorrect: false },
      { id: "id:option/26", text: "Akina Speedstars", isCorrect: false },
      { id: "id:option/27", text: "Emperor", isCorrect: true },
    ],
    answerDescription:
      "Correcto! Emperor usaba solamente Mitsubishi Lancer Evo",
  },
  {
    id: "id:question/7",
    question:
        "Quién es el líder de los RedSuns?",
    image: {
      uri: "https://pm1.aminoapps.com/6723/7725ca69951d9053f457c855fe082d221bac0e7e_00.jpg",
      alt: "Ryosuke Takahashi",
    },
    options: [
      { id: "id:option/28", text: "Takumi Fujiwara", isCorrect: false },
      { id: "id:option/29", text: "Keisuke Takahashi", isCorrect: false },
      { id: "id:option/30", text: "Ryosuke Takahashi", isCorrect: true },
      { id: "id:option/31", text: "Iketani", isCorrect: false },
    ],
    answerDescription:
      "Correcto! Ryosuke es el líder de los RedSuns",
  },
  {
    id: "id:question/8",
    question:
      "Quién usa un Mazda RX-7 FC?",
    image: {
      uri: "https://static.wikia.nocookie.net/initiald/images/6/60/Ryosuke_Redsuns_Spec_I_manga.png/revision/latest?cb=20200615012112",
      alt: "RX7 FC",
    },
    options: [
      { id: "id:option/32", text: "Keisuke Takahashi", isCorrect: false },
      { id: "id:option/33", text: "Itsuki", isCorrect: false },
      { id: "id:option/34", text: "Maki Uehara", isCorrect: false },
      { id: "id:option/35", text: "Ryosuke Takahashi", isCorrect: true },
    ],
    answerDescription:
      "Correcto! Ryosuke conduce un Mazda Rx-7 FC",
  },
  {
    id: "id:question/9",
    question:
      "Quien no forma parte de Project D?",
    image: {
      uri: "https://static.wikia.nocookie.net/initiald/images/6/65/Project_D_Final_Stage_Eyecatch.png/revision/latest?cb=20210212193222",
      alt: "Project D",
    },
    options: [
      { id: "id:option/36", text: "Ryosuke", isCorrect: false },
      { id: "id:option/37", text: "Takumi", isCorrect: false },
      { id: "id:option/38", text: "Shingo Shoji", isCorrect: true },
      { id: "id:option/39", text: "Keisuke", isCorrect: false },
    ],
    answerDescription:
      "Correcto! Shingo no pertenece a Project D",
  },
];
