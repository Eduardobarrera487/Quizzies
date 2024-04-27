import { Question, Test } from "./types";

export const Persona5Test: Test = {
  id: "id:test/persona5",
  title: "Persona 5",
  testName: "persona5",
  numOfQuestions: 10,
  duration: 10,
  image: {
    uri: "https://sm.ign.com/t/ign_nordic/review/p/persona-5-/persona-5-review_htue.1280.jpg",
    alt: "Persona5",
  },
};

export const Persona5Questions: Question[] = [
  {
    id: "id:question/10",
    question: "Quién es el protagonista?",
    image: {
      uri: "https://cdn.atomix.vg/wp-content/uploads/2018/02/Se-libera-el-primer-tr%C3%A1iler-de-Persona-5-The-Animation.jpg",
      alt: "Ren",
    },
    options: [
      { id: "id:option/40", text: "Futaba Sakura", isCorrect: false },
      { id: "id:option/41", text: "Ren Amamiya", isCorrect: true },
      { id: "id:option/42", text: "Ann Takamaki", isCorrect: false },
      { id: "id:option/43", text: "Goro Akechi", isCorrect: false },
    ],
    answerDescription:
      "Correcto! El protagonista es Ren Amamiya",
  },
  {
    id: "id:question/11",
    question: "Quién acoge y cuida al protagonista?",
    image: {
      uri: "https://static.wikia.nocookie.net/megamitensei/images/6/6d/P5A_Soujiro_Sakura.jpg/revision/latest?cb=20180409021734",
      alt: "Ren",
    },
    options: [
      { id: "id:option/44", text: "Yusuke Kitagawa", isCorrect: false },
      { id: "id:option/45", text: "Morgana", isCorrect: false },
      { id: "id:option/46", text: "Sojiro Sakura", isCorrect: true },
      { id: "id:option/47", text: "Ann Takamaki", isCorrect: false },
    ],
    answerDescription: "Correcto! Sojiro le ofrece Cafe Leblanc para vivir ahí.",
  },
  {
    id: "id:question/12",
    question: "Quién es el primer personaje en ser salvado y despertar su persona?",
    image: {
      uri: "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2023/04/persona-5-royal-confidant-lovers-portrait.jpg",
      alt: "Personas",
    },
    options: [
      { id: "id:option/48", text: "Ann Takamaki", isCorrect: true },
      { id: "id:option/49", text: "Sumire Yochizawa", isCorrect: false },
      { id: "id:option/50", text: "Sadayo Kawakami", isCorrect: false },
      { id: "id:option/51", text: "Sae Nijima", isCorrect: false },
    ],
    answerDescription:
      "Correcto!",
  },
  {
    id: "id:question/13",
    question: "Qué son las personas",
    image: {
      uri: "https://static1.cbrimages.com/wordpress/wp-content/uploads/2021/08/Persona-5-Royal.jpg",
      alt: "personas",
    },
    options: [
      { id: "id:option/52", text: "Espíritus invocados gracias a la máscara del portador", isCorrect: false },
      { id: "id:option/53", text: "Seres invocados a través del poder de la voluntad", isCorrect: false },
      { id: "id:option/54", text: "Máscaras que albergan la manifestación de la personalidad de un usuario", isCorrect: true },
      { id: "id:option/55", text: "Poder que solamente puede ser usado en situaciones específicas", isCorrect: false },
    ],
    answerDescription:
      "Correcto! Una persona es una manifestación de la personalidad de un usuario.",
  },
  {
    id: "id:question/14",
    question:
      "Quién es el compañero de la vida diaria del protagonista?",
      image: {
        uri: "https://pm1.aminoapps.com/7762/20cfa0ed31281c473b820001158eff12485db59dr1-720-720v2_00.jpg",
        alt: "persona5",
      },
    options: [
      { id: "id:option/56", text: "Mika", isCorrect: false },
      { id: "id:option/57", text: "Morgana", isCorrect: true },
      { id: "id:option/58", text: "Ryuji Sakamoto", isCorrect: false },
      { id: "id:option/59", text: "Igor", isCorrect: false },
    ],
    answerDescription:
      "Correcto! El compañero es Morgana.",
  },
  {
    id: "id:question/15",
    question:
      "Cómo se llama el lugar donde los enemigos guardan sus tesoros?",
      image: {
        uri: "https://www.yukharyan.com/wp-content/uploads/2020/11/mejores-palacios-persona-5-royal.jpg",
        alt: "Palacios",
      },
    options: [
      { id: "id:option/60", text: "Palacios", isCorrect: true },
      { id: "id:option/61", text: "Mementos", isCorrect: false },
      { id: "id:option/62", text: "La habitación terciopelo", isCorrect: false },
      { id: "id:option/63", text: "Shibuya", isCorrect: false },
    ],
    answerDescription:
      "Correcto! El palacio es el lugar cognitivo donde se alberga el tesoro de cada villano.",
  },
  {
    id: "id:question/16",
    question: "Qué importancia tiene Igor?",
    image: {
      uri: "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2023/08/image-5.jpg",
      alt: "Igor",
    },
    options: [
      { id: "id:option/64", text: "Es el propietario de la habitación terciopelo", isCorrect: true },
      { id: "id:option/65", text: "Es el portero de la entrada a Mementos", isCorrect: false },
      { id: "id:option/66", text: "Guía en la creación, fusión y aniquilación de personas", isCorrect: true },
      { id: "id:option/67", text: "Es el causante del despertar de los corazones", isCorrect: false },
    ],
    answerDescription:
      "Correcto! Igor es tanto el propietario de la habitación terciopelo como el guía en las creaciones, fusiones y aniquilaciones de personas.",
  },
  {
    id: "id:question/17",
    question:
      "Quién estaba en contra los ladrones de corazones y luego se unió a ellos?",
      image: {
        uri: "https://images4.alphacoders.com/128/1282696.jpg",
        alt: "persona5",
      },
    options: [
      { id: "id:option/68", text: "Takuto Maruki", isCorrect: false },
      { id: "id:option/69", text: "Futaba Sakura", isCorrect: false },
      { id: "id:option/70", text: "Tae Takemi", isCorrect: false },
      { id: "id:option/71", text: "Goro Akechi", isCorrect: true },
    ],
    answerDescription:
      "Correcto! Goro Akechi.",
  },
  {
    id: "id:question/18",
    question: "Cuántos finales posee el juego?",
    image: {
      uri: "https://static1.cbrimages.com/wordpress/wp-content/uploads/2021/08/p5-royal-endings-header.jpg",
      alt: "Persona5",
    },
    options: [
      { id: "id:option/72", text: "Cinco", isCorrect: true },
      { id: "id:option/73", text: "Tres", isCorrect: false },
      { id: "id:option/74", text: "Seis", isCorrect: false },
      { id: "id:option/75", text: "Cuatro", isCorrect: false },
    ],
    answerDescription: "Correcto! El juego posee cinco finales.",
  },
];
