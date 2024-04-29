import { Question, Test } from "./types";

export const SaikiTest: Test = {
  id: "id:test/saikik",
  title: "La desastrosa vida de Saiki K",
  testName: "saiki",
  numOfQuestions: 10,
  duration: 10,
  image: {
    uri: "https://templeofgeek.com/wp-content/uploads/2022/09/wordpress-header-1-2.jpg",
    alt: "saiki",
  },
};

export const saikiQuestions: Question[] = [
  {
    id: "id:question/0",
    question: "¿Quién es el protagonista del anime?",
    image: {
      uri: "https://www.anmosugoi.com/wp-content/uploads/2020/05/portada-scaled.jpg",
      alt: "saiki",
    },
    options: [
      { id: "id:option/0", text: "Saiki Kumi", isCorrect: false },
      { id: "id:option/1", text: "Saiki Kusuo", isCorrect: true },
      { id: "id:option/2", text: "Saiki Kuniharo", isCorrect: false },
      { id: "id:option/3", text: "Saiki Kurumi", isCorrect: false },
    ],
    answerDescription:
      "Correcto! El protagonista es Saiki Kusuo.",
  },
  {
    id: "id:question/1",
    question:
      "Quién es el hermano de Saiki?",
    image: {
      uri: "https://pm1.aminoapps.com/7248/094d4aebabc717f6a447461fb990589f983194b8r1-1000-562v2_hq.jpg",
      alt: "Saiki",
    },
    options: [
      { id: "id:option/4", text: "Saiki Kurumi", isCorrect: false },
      { id: "id:option/5", text: "Saiki Kuniharu", isCorrect: false },
      { id: "id:option/6", text: "Saiki Kusuke", isCorrect: true },
      { id: "id:option/7", text: "Saiki Kumaguro", isCorrect: false },
    ],
    answerDescription:
      "Correcto! El hermano de Saiki es Kusuke.",
  },
  {
    id: "id:question/2",
    question:
      "¿Quién puede ver el aura de las personas?",
    image: {
      uri: "https://i.pinimg.com/originals/af/12/af/af12afb723c60c5e354f65d1b3d8c27a.png",
      alt: "Saiki",
    },
    options: [
      { id: "id:option/8", text: "Ninomiya Kaneko", isCorrect: false },
      { id: "id:option/9", text: "Aiura Mikoto", isCorrect: true },
      { id: "id:option/10", text: "Itano Yoriko", isCorrect: false },
      { id: "id:option/11", text: "Mikamo Aiko", isCorrect: false },
    ],
    answerDescription:
      "Correcto! Aiura es la que puede ver el aura de las personas.",
  },
  {
    id: "id:question/3",
    question:
      "¿Cómo se llama el gato con el símbolo del anime 'Ψ' en su frente?",
    image: {
      uri: "https://i.pinimg.com/564x/8b/a8/a8/8ba8a8a696dc8d8f5924b4b76e4ac189.jpg",
      alt: "Saiki",
    },
    options: [
      { id: "id:option/12", text: "Warp", isCorrect: false },
      { id: "id:option/13", text: "Pushi", isCorrect: false },
      { id: "id:option/14", text: "Anpu", isCorrect: true },
      { id: "id:option/15", text: "Hanako", isCorrect: false },
    ],
    answerDescription:
      "Correcto! Anpu es el gato que autoproclamaba ser la mascota oficial del anime debido al signo en su frente.",
  },
  {
    id: "id:question/4",
    question:
      "¿Qué fobia tiene Saiki?",
    image: {
      uri: "https://www.todofondos.net/wp-content/uploads/1366x768-La-vida-desastrosa-de-Saiki-K.-Temporada-2-ahora-disponible-en-Netflix.jpg",
      alt: "Dazai",
    },
    options: [
      { id: "id:option/16", text: "Riki Nendo", isCorrect: true },
      { id: "id:option/17", text: "Los niños", isCorrect: false },
      { id: "id:option/18", text: "Insectos", isCorrect: true },
      { id: "id:option/19", text: "La oscuridad", isCorrect: false },
    ],
    answerDescription:
      "Correcto! Saiki le tiene miedo tanto a los insectos como a Nendo.",
  },
  {
    id: "id:question/5",
    question:
      "¿A quién admiraba Saiki?",
    image: {
      uri: "https://64.media.tumblr.com/62d8603a5b277e16644918269b56661d/13eb8656e1bcad63-ce/s540x810/7bb9f09978361e29ef4ef2fff01dab7109258c68.jpg",
      alt: "Saiki",
    },
    options: [
      { id: "id:option/20", text: "Satou Hisoshi", isCorrect: true },
      { id: "id:option/21", text: "Murata Shuuji", isCorrect: false },
      { id: "id:option/22", text: "Sawakita Kouki", isCorrect: false },
      { id: "id:option/23", text: "Maeda Takayuki", isCorrect: false },
    ],
    answerDescription:
      "Correcto! Saiki admiraba a Satou por lo normal y promedio que era.",
  },
  {
    id: "id:question/6",
    question:
      "¿Quienes peleaban por ser la más bonita de la escuela pero terminaron siendo amigas?",
    image: {
      uri: "https://static.wikia.nocookie.net/shipping/images/4/4c/ImuTeru_2.jpg/revision/latest/scale-to-width-down/250?cb=20230304225759",
      alt: "Saiki",
    },
    options: [
      { id: "id:option/24", text: "Teruhashi Makoto y Mikamo Aiko", isCorrect: false },
      { id: "id:option/25", text: "Rifuta Imu y Teruhashi Makoto", isCorrect: false },
      { id: "id:option/26", text: "Teruhashi Kokomi y Mikamo Aiko", isCorrect: false },
      { id: "id:option/27", text: "Rifuta Imu y Teruhashi Kokomi", isCorrect: true },
    ],
    answerDescription:
      "Correcto! Imu y Kokomi querían ser la más bonita, pero terminaron haciendose amigas.",
  },
  {
    id: "id:question/7",
    question:
      "¿Qué personaje quería derrotar a la 'organización' Dark Reunion?",
    image: {
      uri: "https://i.pinimg.com/originals/9d/48/ba/9d48ba3c3abb08c67027b4d80dd98870.jpg",
      alt: "Saiki",
    },
    options: [
      { id: "id:option/28", text: "Kaidou Shiiko", isCorrect: false },
      { id: "id:option/29", text: "Kaidou Toki", isCorrect: false },
      { id: "id:option/30", text: "Kaidou Sora", isCorrect: true },
      { id: "id:option/31", text: "Kaidou Shun", isCorrect: false },
    ],
    answerDescription:
      "Correcto! Kaido Shun era quien quería derrotar a 'Dark Reunion'.",
  },
  {
    id: "id:question/8",
    question:
      "¿Quién le escribe una carta a Saiki para su cumpleaños?",
    image: {
      uri: "https://ramenparados.com/wp-content/uploads/2016/05/Saiki-Kusuo-no-Psi-Nan-ilustracion-915x600.jpg",
      alt: "Saiki",
    },
    options: [
      { id: "id:option/32", text: "Chiyo", isCorrect: false },
      { id: "id:option/33", text: "Teruhashi", isCorrect: false },
      { id: "id:option/34", text: "Nendou", isCorrect: false },
      { id: "id:option/35", text: "Kaidou", isCorrect: true },
    ],
    answerDescription:
      "Correcto! Kaidou le escribió una carta expresando su cariño por Saiki.",
  },
  {
    id: "id:question/9",
    question:
      "¿Por qué Akechi seguía mucho a Saiki?",
    image: {
      uri: "https://pm1.aminoapps.com/7042/05a7365a67f219470993a97cae93270d41991397r1-500-302v2_uhq.jpg",
      alt: "Saiki",
    },
    options: [
      { id: "id:option/36", text: "Sentía curiosidad por Saiki", isCorrect: false },
      { id: "id:option/37", text: "Sabía el secreto de Saiki", isCorrect: true },
      { id: "id:option/38", text: "Eran amigos de la infancia", isCorrect: true },
      { id: "id:option/39", text: "Quería exponer a Saiki", isCorrect: false },
    ],
    answerDescription:
      "Correcto! Akechi era amigo de la infancia de Saiki y sabía su secreto.",
  },
];
