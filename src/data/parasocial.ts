import { Question, Test } from "./types";

export const ParasocialTest: Test = {
  id: "id:test/parasocial",
  title: "Parasocial (Chilla's art)",
  testName: "parasocial",
  numOfQuestions: 10,
  duration: 10,
  image: {
    uri: "https://i.ytimg.com/vi/ewiIsQ7Ubhs/maxresdefault.jpg",
    alt: "parasocial",
  },
};

export const parasocialQuestions: Question[] = [
  {
    id: "id:question/0",
    question: "¿Cómo se llama la protagonista del juego?",
    image: {
      uri: "https://static1.dualshockersimages.com/wordpress/wp-content/uploads/2023/02/chilla-s-art-parasocial.jpg",
      alt: "parasocial",
    },
    options: [
      { id: "id:option/0", text: "Yukiko", isCorrect: false },
      { id: "id:option/1", text: "Nina", isCorrect: true },
      { id: "id:option/2", text: "Asuka", isCorrect: false },
      { id: "id:option/3", text: "Kyoa", isCorrect: false },
    ],
    answerDescription:
      "Correcto! Nina es la protagonista del juego.",
  },
  {
    id: "id:question/1",
    question:
      "¿Cuál era la profesión de la protagonista?",
    image: {
      uri: "https://cdn.akamai.steamstatic.com/steam/apps/2314720/ss_078d22ea1e24e299a0f51725a4c232027bf4a012.1920x1080.jpg?t=1696963440",
      alt: "parasocial",
    },
    options: [
      { id: "id:option/4", text: "Diseñadora gráfica", isCorrect: false },
      { id: "id:option/5", text: "Programadora", isCorrect: false },
      { id: "id:option/6", text: "Vtuber", isCorrect: true },
      { id: "id:option/7", text: "Ninguna de las anteriores", isCorrect: false },
    ],
    answerDescription:
      "Correcto! La protagonista era vtuber.",
  },
  {
    id: "id:question/2",
    question:
      "¿Quién era la mejor amiga de la protagonista?",
    image: {
      uri: "https://cdn.akamai.steamstatic.com/steam/apps/2314720/ss_116dfb9e3edb01414f81605c4a7ce1f5d6515cec.1920x1080.jpg?t=1696963440",
      alt: "parasocial",
    },
    options: [
      { id: "id:option/8", text: "Nina", isCorrect: false },
      { id: "id:option/9", text: "Asuka", isCorrect: true },
      { id: "id:option/10", text: "Sagio", isCorrect: false },
      { id: "id:option/11", text: "Senra", isCorrect: false },
    ],
    answerDescription:
      "Correcto! Asuka era la mejor amiga de la protagonista.",
  },
  {
    id: "id:question/3",
    question:
      "¿Cómo comenzaron los sucesos del juego?",
    image: {
      uri: "https://horrorhopefuls.com/wp-content/uploads/2023/09/20230828165204_1-1024x576.jpg",
      alt: "parasocial",
    },
    options: [
      { id: "id:option/12", text: "Alguien le envió a la prota un email y la hackearon.", isCorrect: false },
      { id: "id:option/13", text: "Se le introdujo un virus a la pc de la prota sin darse cuenta.", isCorrect: false },
      { id: "id:option/14", text: "Alguien le envió a la prota un link de un juego y la hackearon.", isCorrect: true },
      { id: "id:option/15", text: "Alguien entró a la casa de la prota y le colocaron una cámara oculta.", isCorrect: false },
    ],
    answerDescription:
      "Correcto! Todo inició por el link de un juego el cuál era con fin de hackearla.",
  },
  {
    id: "id:question/4",
    question:
      "¿Quién fue la person que planeó todo lo ocurrido a la protagonista?",
    image: {
      uri: "https://cdn2.whatoplay.com/screenshots/129675_slide-1.jpg",
      alt: "parasocial",
    },
    options: [
      { id: "id:option/16", text: "Su ex novio", isCorrect: true },
      { id: "id:option/17", text: "Su mejor amiga", isCorrect: false },
      { id: "id:option/18", text: "Un fan de ella", isCorrect: false },
      { id: "id:option/19", text: "El oficial de policía del área de su residencia", isCorrect: false },
    ],
    answerDescription:
      "Correcto! El que planificó todo fue su ex novio.",
  },
  {
    id: "id:question/5",
    question:
      "¿Con qué otro juego de chilla's art tiene conexión al aparecer un local de este?",
    image: {
      uri: "https://cdn.akamai.steamstatic.com/steam/apps/1843090/ss_740903f6c7f72439bef6a9afa6ddf5ed3a17d1bb.1920x1080.jpg?t=1667383861",
      alt: "parasocial",
    },
    options: [
      { id: "id:option/20", text: "The Closing Shift", isCorrect: true },
      { id: "id:option/21", text: "The Convenience Store", isCorrect: false },
      { id: "id:option/22", text: "Night Delivery", isCorrect: false },
      { id: "id:option/23", text: "Night Security", isCorrect: false },
    ],
    answerDescription:
      "Correcto! En parasocial hace aparición Chilla's Coffee, lugar donde acontece el juego The Closing Shift.",
  },
  {
    id: "id:question/6",
    question:
      "¿Quién es la única persona que verdaderamente quería ayudar a la protagonista?",
    image: {
      uri: "https://cdn.cloudflare.steamstatic.com/steam/apps/2314720/ss_b077ab4ae709b541ec9bd3a1e06f470614d19c73.1920x1080.jpg?t=1696963440",
      alt: "parasocial",
    },
    options: [
      { id: "id:option/24", text: "Sagio", isCorrect: false },
      { id: "id:option/25", text: "Yukiko", isCorrect: false },
      { id: "id:option/26", text: "Rikiya", isCorrect: false },
      { id: "id:option/27", text: "Asuka", isCorrect: true },
    ],
    answerDescription:
      "Correcto! La única persona que realmente quería ayudarla era Asuka, su mejor amiga.",
  },
  {
    id: "id:question/7",
    question:
      "¿Cuántos finales tiene el juego?",
    image: {
      uri: "https://cdn.cloudflare.steamstatic.com/steam/apps/2314720/ss_ef58c87e98265142d182ea76985e140f15855ba4.1920x1080.jpg?t=1696963440",
      alt: "parasocial",
    },
    options: [
      { id: "id:option/28", text: "1", isCorrect: false },
      { id: "id:option/29", text: "4", isCorrect: false },
      { id: "id:option/30", text: "2", isCorrect: true },
      { id: "id:option/31", text: "6", isCorrect: false },
    ],
    answerDescription:
      "Correcto! El juego tiene 2 finales, un good ending y un bad ending.",
  },
  {
    id: "id:question/8",
    question:
      "¿Cuál es la única manera de conseguir el final bueno?",
    image: {
      uri: "https://kingsgame009.com/wp-content/uploads/2023/10/Introduction-Chillas-Art-1024x576.jpg",
      alt: "parasocial",
    },
    options: [
      { id: "id:option/32", text: "Hablando con la administradora del edificio", isCorrect: false },
      { id: "id:option/33", text: "Hablando con el oficial de policía", isCorrect: false },
      { id: "id:option/34", text: "Llamando a Rikiya", isCorrect: false },
      { id: "id:option/35", text: "Correr a la estación de policía", isCorrect: true },
    ],
    answerDescription:
      "Correcto! La única manera de conseguir el final bueno es corriendo a la estación de policía, ya que los demás son familia de Rikiya (su ex novio, quién planificó todo).",
  },
  {
    id: "id:question/9",
    question:
      "¿Por qué la protagonista llega a desconfiar de su mejor amiga?",
    image: {
      uri: "https://automaton-media.com/en/wp-content/uploads/2023/02/20230218-237705-001.jpg",
      alt: "parasocial",
    },
    options: [
      { id: "id:option/36", text: "La administradora del edificio le advierte que la vió con alguien sospechoso", isCorrect: false },
      { id: "id:option/37", text: "Rikiya le muestra una foto de como ella estaba hablando con la persona que la estaba stalkeando", isCorrect: true },
      { id: "id:option/38", text: "Actuaba sospechosa siempre que la iba a visitar a su departamento", isCorrect: false },
      { id: "id:option/39", text: "El oficial de policía le dice que la vió hablando con una persona sospechosa", isCorrect: false },
    ],
    answerDescription:
      "Correcto! Rikiya le muestra una imagen donde salía hablando con su stalker.",
  },
];
