import { Question, Test } from "./types";

export const GivenTest: Test = {
  id: "id:test/given",
  title: "Given",
  testName: "given",
  numOfQuestions: 10,
  duration: 10,
  image: {
    uri: "https://ramenparados.com/wp-content/uploads/2023/09/Given_Films.png",
    alt: "given",
  },
};

export const givenQuestions: Question[] = [
  {
    id: "id:question/0",
    question: "Quién es el protagonista del anime?",
    image: {
      uri: "https://i.redd.it/the-many-sides-of-mafuyu-sato-v0-2vtb4hcd2e891.jpg?width=1280&format=pjpg&auto=webp&s=50f4acdf212b02a2196bead2eda13e36b2a16c36",
      alt: "mafuru",
    },
    options: [
      { id: "id:option/0", text: "Mafuyu Yatake", isCorrect: false },
      { id: "id:option/1", text: "Mafuyu Sato", isCorrect: true },
      { id: "id:option/2", text: "Mafuyu Yagi", isCorrect: false },
      { id: "id:option/3", text: "Mafuyu Kurihara", isCorrect: false },
    ],
    answerDescription:
      "Correcto! El protagonista es Mafuyu Sato.",
  },
  {
    id: "id:question/1",
    question:
      "¿En qué año se empezó a publicar el anime?",
    image: {
      uri: "https://imgsrv.crunchyroll.com/cdn-cgi/image/format=auto,fit=contain,width=1200,height=675,quality=85/catalog/crunchyroll/9560456ffbef41dae4344fde132890d2.jpe",
      alt: "given",
    },
    options: [
      { id: "id:option/4", text: "2020", isCorrect: false },
      { id: "id:option/5", text: "1015", isCorrect: false },
      { id: "id:option/6", text: "2013", isCorrect: true },
      { id: "id:option/7", text: "2010", isCorrect: false },
    ],
    answerDescription:
      "Correcto! El anime empezó a estar en emisión en 2013.",
  },
  {
    id: "id:question/2",
    question:
      "¿Cuál es el nombre del interés romántico del protagonista?",
    image: {
      uri: "https://somoskudasai.com/wp-content/uploads/2019/09/48e6fada-1.jpg",
      alt: "Uenoyama",
    },
    options: [
      { id: "id:option/8", text: "Shougo Uenoyama", isCorrect: false },
      { id: "id:option/9", text: "Hiiragi Uenoyama", isCorrect: true },
      { id: "id:option/10", text: "Ritsuka Uenoyama", isCorrect: false },
      { id: "id:option/11", text: "Nakayama Uenoyama", isCorrect: false },
    ],
    answerDescription:
      "Correcto! Ritsuka Uenoyama es el interés romántico de Mafuyu.",
  },
  {
    id: "id:question/3",
    question:
      "¿Qué papel tiene Ugetsu en el anime?",
    image: {
      uri: "https://i.redd.it/any-given-friday-our-second-weekly-winner-ugetsu-murata-v0-fqy0ij3v0upb1.jpg?width=2048&format=pjpg&auto=webp&s=5389eab735957e3d9f4f9eba882f4bcae39bfd5b",
      alt: "Murata",
    },
    options: [
      { id: "id:option/12", text: "Violinista profesional", isCorrect: true },
      { id: "id:option/13", text: "Ex pareja de Haruki", isCorrect: false },
      { id: "id:option/14", text: "Ex pareja de Akihiko", isCorrect: true },
      { id: "id:option/15", text: "Profesor de violín", isCorrect: false },
    ],
    answerDescription:
      "Correcto! Ugetsu era tanto violinista profesional como ex pareja de Akihiko.",
  },
  {
    id: "id:question/4",
    question:
      "¿Qué personajes tienen protagonismo en la película?",
    image: {
      uri: "https://cupulatrovao.com.br/wp-content/uploads/2019/11/Capa-de-analise-given-1.jpg",
      alt: "Given",
    },
    options: [
      { id: "id:option/16", text: "Akihiko y Haruki", isCorrect: true },
      { id: "id:option/17", text: "Mafuyu y Uenoyama", isCorrect: false },
      { id: "id:option/18", text: "Mafuyu y Yoshida", isCorrect: false },
      { id: "id:option/19", text: "Akihiko y Ugetsu", isCorrect: false },
    ],
    answerDescription:
      "Correcto! Los protagonistas de la película son Akihiko y Haruki.",
  },
  {
    id: "id:question/5",
    question:
      "¿Quién es el dueño de Kedama?",
    image: {
      uri: "https://i.redd.it/02qtwrm3usya1.jpg",
      alt: "Kedama",
    },
    options: [
      { id: "id:option/20", text: "Ugetsu", isCorrect: false },
      { id: "id:option/21", text: "Uenoyama", isCorrect: false },
      { id: "id:option/22", text: "Mafuyu", isCorrect: true },
      { id: "id:option/23", text: "Haruki", isCorrect: false },
    ],
    answerDescription:
      "Correcto! Kedama es la mascota de Mafuyu.",
  },
  {
    id: "id:question/6",
    question:
      "¿De quién era la guitarra que cargaba Mafuyu en el anime?",
    image: {
      uri: "https://static1.cbrimages.com/wordpress/wp-content/uploads/2022/10/Mafuyu-Given-Anime.jpg",
      alt: "Mafuyu",
    },
    options: [
      { id: "id:option/24", text: "Hiiragi Kashima", isCorrect: false },
      { id: "id:option/25", text: "Shizusumi Yagi", isCorrect: false },
      { id: "id:option/26", text: "Ryou Ueki", isCorrect: false },
      { id: "id:option/27", text: "Yuki Yoshida", isCorrect: true },
    ],
    answerDescription:
      "Correcto! La guitarra era de Yuki Yoshida.",
  },
  {
    id: "id:question/7",
    question:
      "¿Qué relación tenían Haruki y Akihiko en la película?",
    image: {
      uri: "https://static1.cbrimages.com/wordpress/wp-content/uploads/2022/10/Akihiko-and-Haruki.jpg",
      alt: "Given",
    },
    options: [
      { id: "id:option/28", text: "Tenían interés romántico mutuo", isCorrect: false },
      { id: "id:option/29", text: "Haruki gustaba de Akihiko", isCorrect: true },
      { id: "id:option/30", text: "Akihiko gustaba de Haruki", isCorrect: false },
      { id: "id:option/31", text: "Solo eran compañeros de banda", isCorrect: false },
    ],
    answerDescription:
      "Correcto! Haruki gustaba de Akihiko.",
  },
  {
    id: "id:question/8",
    question:
      "¿Quién era Yayoi?",
    image: {
      uri: "hhttps://i.redd.it/0beni75s3ok91.jpg",
      alt: "Yayoi",
    },
    options: [
      { id: "id:option/32", text: "Hermana de Ugetsu", isCorrect: false },
      { id: "id:option/33", text: "Antiguo interés romántico de Ugetsu", isCorrect: false },
      { id: "id:option/34", text: "Antiguo interés romántico de Uenoyama", isCorrect: false },
      { id: "id:option/35", text: "Hermana de Uenoyama", isCorrect: true },
    ],
    answerDescription:
      "Correcto! Yayoi era la hermana de Uenoyama.",
  },
  {
    id: "id:question/9",
    question:
      "¿Qué era Yuki Yoshida de Mafuyu?",
    image: {
      uri: "https://pbs.twimg.com/media/Ea6FpD3UMAArQUr.jpg:large",
      alt: "Yoshida",
    },
    options: [
      { id: "id:option/36", text: "Su antiguo compañero de banda", isCorrect: false },
      { id: "id:option/37", text: "Su mejor amigo", isCorrect: false },
      { id: "id:option/38", text: "Su anterior pareja", isCorrect: true },
      { id: "id:option/39", text: "Su amigo de la infancia", isCorrect: true },
    ],
    answerDescription:
      "Correcto! Yuki Yoshida era tanto la anterior pareja como el amigo de la infancia de Mafuyu.",
  },
];
