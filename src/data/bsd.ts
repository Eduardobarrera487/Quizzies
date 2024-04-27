import { Question, Test } from "./types";

export const BSDTest: Test = {
  id: "id:test/bsd",
  title: "Bungo Stray Dogs",
  testName: "bsd",
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
    question: "Quién es el protagonista del anime?",
    image: {
      uri: "https://resize.cdn.otakumode.com/ex/600.600/shop/product/b241de8fddb94716a00c7858ed859018.jpg",
      alt: "Atsushi",
    },
    options: [
      { id: "id:option/0", text: "Dazai Osamu", isCorrect: false },
      { id: "id:option/1", text: "Atsushi Nakajima", isCorrect: true },
      { id: "id:option/2", text: "Naomi Tanizaki", isCorrect: false },
      { id: "id:option/3", text: "Gin Akutagawa", isCorrect: false },
    ],
    answerDescription:
      "Correcto! Atsushi es el prota de bsd.",
  },
  {
    id: "id:question/1",
    question:
      "Quién es la rata del anime?",
    image: {
      uri: "https://i.pinimg.com/736x/3b/a5/26/3ba526767658a8c412e96fab0742bc5a.jpg",
      alt: "Fyodor",
    },
    options: [
      { id: "id:option/4", text: "Kunikida Doppo", isCorrect: false },
      { id: "id:option/5", text: "Mori Ougai", isCorrect: false },
      { id: "id:option/6", text: "Fyodor Dostoyevsky", isCorrect: true },
      { id: "id:option/7", text: "Nikolai Gogol", isCorrect: false },
    ],
    answerDescription:
      "Correcto! Федор — аниме-крыса.",
  },
  {
    id: "id:question/2",
    question:
      "Cuál personaje tiene 3 años",
    image: {
      uri: "https://s1.zerochan.net/Sigma.%28Bungou.Stray.Dogs%29.600.3970741.jpg",
      alt: "Sigma",
    },
    options: [
      { id: "id:option/8", text: "Chuuya Nakahara", isCorrect: false },
      { id: "id:option/9", text: "Sigma", isCorrect: true },
      { id: "id:option/10", text: "Ouchi Fukuchi", isCorrect: false },
      { id: "id:option/11", text: "Edgar Allan Poe", isCorrect: false },
    ],
    answerDescription:
      "Sigma",
  },
  {
    id: "id:question/3",
    question:
      "Qué personaje tiene super inteligencia?",
    image: {
      uri: "https://i.pinimg.com/564x/8b/a8/a8/8ba8a8a696dc8d8f5924b4b76e4ac189.jpg",
      alt: "Ranpo",
    },
    options: [
      { id: "id:option/12", text: "Chuuya Nakahara", isCorrect: false },
      { id: "id:option/13", text: "Sigma", isCorrect: false },
      { id: "id:option/14", text: "Ranpo Edogawa", isCorrect: true },
      { id: "id:option/15", text: "Koda Aya", isCorrect: false },
    ],
    answerDescription:
      "Correcto! Ranpo",
  },
  {
    id: "id:question/4",
    question:
      "Qué personaje encontró a Atsushi?",
    image: {
      uri: "https://i.pinimg.com/564x/c6/87/96/c68796e9b0bf8f932d7615b8cab9ba3e.jpg",
      alt: "Dazai",
    },
    options: [
      { id: "id:option/16", text: "Dazai Osamu", isCorrect: true },
      { id: "id:option/17", text: "Atsuhi Nakajima", isCorrect: false },
      { id: "id:option/18", text: "Lucy Montgomery", isCorrect: false },
      { id: "id:option/19", text: "Karma", isCorrect: false },
    ],
    answerDescription:
      "Correcto! Dazai",
  },
  {
    id: "id:question/5",
    question:
      "Quién hace el rashomon?",
    image: {
      uri: "https://i.pinimg.com/564x/13/94/dc/1394dc1c97f2bad75e3faf5421689bcb.jpg",
      alt: "Akugatawa",
    },
    options: [
      { id: "id:option/20", text: "Akutagawa Ryunosuke", isCorrect: true },
      { id: "id:option/21", text: "Yumeno Kyusaku", isCorrect: false },
      { id: "id:option/22", text: "Elise", isCorrect: false },
      { id: "id:option/23", text: "Yosano Akiko", isCorrect: false },
    ],
    answerDescription:
      "Akutagawa Ryunosuke",
  },
  {
    id: "id:question/6",
    question:
      "Quién es el de los limones?",
    image: {
      uri: "https://i.pinimg.com/736x/b0/15/f8/b015f8a600a7ab3ec56ed2bcd670ab58.jpg",
      alt: "Kajii",
    },
    options: [
      { id: "id:option/24", text: "Ozaki Koyo", isCorrect: false },
      { id: "id:option/25", text: "Louisa May Alcott", isCorrect: false },
      { id: "id:option/26", text: "Kamui", isCorrect: false },
      { id: "id:option/27", text: "Kajii Motojiro", isCorrect: true },
    ],
    answerDescription:
      "El de los limones es Kajii",
  },
  {
    id: "id:question/7",
    question:
      "Healer de la agencia de detectives",
    image: {
      uri: "https://i.pinimg.com/originals/b1/33/85/b13385292410f4851268c91829c6277a.jpg",
      alt: "Yosano",
    },
    options: [
      { id: "id:option/28", text: "Margaret Mitchell", isCorrect: false },
      { id: "id:option/29", text: "Higuchi Ichiyo", isCorrect: false },
      { id: "id:option/30", text: "Yosano Akiko", isCorrect: true },
      { id: "id:option/31", text: "Kirako Haruno", isCorrect: false },
    ],
    answerDescription:
      "Correcto! Yosano es la healer de la agencia de detectives y la mujer más fuerte de estos",
  },
  {
    id: "id:question/8",
    question:
      "Quién usa gravity?",
    image: {
      uri: "https://i.pinimg.com/564x/4f/df/78/4fdf78b138982d1673ac0615bfcbe3ae.jpg",
      alt: "Chuuya",
    },
    options: [
      { id: "id:option/32", text: "Paul Verlaine", isCorrect: false },
      { id: "id:option/33", text: "Tachihara Michizo", isCorrect: false },
      { id: "id:option/34", text: "Herman Melville", isCorrect: false },
      { id: "id:option/35", text: "Chuuya Nakahara", isCorrect: true },
    ],
    answerDescription:
      "Correcto!",
  },
  {
    id: "id:question/9",
    question:
      "Quienes eran los amigos de Dazai en la Port Mafia?",
    image: {
      uri: "https://static.wikia.nocookie.net/bungostraydogs/images/1/1e/Ango_and_Oda_toast_without_Dazai_%28Wan%21_Anime%29.png/revision/latest?cb=20210326142126",
      alt: "Dazai",
    },
    options: [
      { id: "id:option/36", text: "Fyodor y Nikolai", isCorrect: false },
      { id: "id:option/37", text: "Chuuya y Mori", isCorrect: false },
      { id: "id:option/38", text: "Oda y Ango", isCorrect: true },
      { id: "id:option/39", text: "Netherlands", isCorrect: false },
    ],
    answerDescription:
      "Correcto! Eran Oda y Ango",
  },
];
