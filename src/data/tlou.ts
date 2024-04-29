import { Question, Test } from "./types";

export const tlouTest: Test = {
  id: "id:test/tlou",
  title: "The last of us 1",
  testName: "tlou",
  numOfQuestions: 10,
  duration: 10,
  image: {
    uri: "https://image.api.playstation.com/vulcan/ap/rnd/202206/0720/tblnWbNmMDbYJUAu8T4eYWWh.png",
    alt: "tlou",
  },
};

export const tlouQuestions: Question[] = [
  {
    id: "id:question/0",
    question: "¿Cuál es el nombre completo del protagonista del juego?",
    image: {
      uri: "https://dotesports.com/wp-content/uploads/2022/06/09121642/The-Last-of-Us.jpg?w=1200",
      alt: "Joel Miller",
    },
    options: [
      { id: "id:option/0", text: "Nathan Drake", isCorrect: false },
      { id: "id:option/1", text: "Joel Miller", isCorrect: true },
      { id: "id:option/2", text: "Ellie Williams", isCorrect: false },
      { id: "id:option/3", text: "Sarah Miller", isCorrect: false },
    ],
    answerDescription:
      "Correcto! Este personaje es Joel Miller, el protagonista principal de The Last of Us y un superviviente experimentado en un mundo post-apocalíptico",
    
  },
  {
    id: "id:question/1",
    question:
      "¿Qué tipo de pandemia devastadora es el escenario del juego?",
    image: {
      uri: "https://www.latercera.com/resizer/SqNeNWUhXXfh6VblETYEmVnsGms=/arc-anglerfish-arc2-prod-copesa/public/BY36DMRINBDGXIL3GOE5PDASDA.jpg",
      alt: "Infección por hongos",
    },
    options: [
      { id: "id:option/4", text: "Virus informático", isCorrect: false },
      { id: "id:option/5", text: "Epidemia de gripe", isCorrect: false },
      { id: "id:option/6", text: "Infección por hongos", isCorrect: true},
      { id: "id:option/7", text: "Ataque de zombies", isCorrect: true },
    ],
    answerDescription:
      "Correcto! La pandemia devastadora en el juego es una infección por hongos que convierte a las personas en criaturas hostiles conocidas como clickers y chasers.",
  },
  {
    id: "id:question/2",
    question:
      "¿Cuál es el nombre del grupo militar opresivo que controla gran parte del territorio en el juego?",
    image: {
      uri: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgvO0H6rL7Xsw9-EdRFY4Q54QThXi3Gw8p4kmW4C_jzCud_EuAsS5VLkVrtl_fk0z7b9zz_e4tUWi_OjtkXDK0qpX1BoeXhQoPdso_3JvhYKP7cN0qkbRx0upsClKAG94Md0nOaluCVCyIu/s1600/the-last-of-us-ellie-joel.jpg",
      alt: "Los Cazadores",
    },
    options: [
      { id: "id:option/8", text: "Los Luciérnagas", isCorrect: false },
      { id: "id:option/9", text: "La Resistencia", isCorrect: false },
      { id: "id:option/10", text: "Los Rebeldes", isCorrect: false },
      { id: "id:option/11", text: "Los Cazadores", isCorrect: true },
    ],
    answerDescription:
      "Correcto! Los Cazadores son un grupo de supervivientes despiadados que operan como una facción militar autónoma en el mundo post-apocalíptico de The Last of Us. Están dispuestos a hacer cualquier cosa para sobrevivir, incluyendo el robo, el asesinato y el saqueo. Son conocidos por su brutalidad y falta de escrúpulos, y representan una de las principales amenazas para Joel y Ellie durante su viaje.",
  },
  {
    id: "id:question/3",
    question:
      "¿Cuál es el nombre del líder de los Luciérnagas?",
    image: {
      uri: "https://es.web.img2.acsta.net/img/b7/fe/b7fe1067ac09fc62398f7252187a7f92.jpg",
      alt: "Marlene",
    },
    options: [
      { id: "id:option/12", text: "David", isCorrect: false },
      { id: "id:option/13", text: "Marlene", isCorrect: true },
      { id: "id:option/14", text: "Tommy", isCorrect: false },
      { id: "id:option/15", text: "Bill", isCorrect: false },
    ],
    answerDescription:
      "Correcto! Marlene es la líder de los Luciérnagas y tiene una conexión personal con Ellie que influye en la historia.",
  },
  {
    id: "id:question/4",
    question:
      "¿Qué objeto Joel usa como arma principal a lo largo del juego?",
    image: {
      uri: "https://sm.ign.com/ign_latam/screenshot/default/screen-shot-2022-08-31-at-114323-am_nwzj.png",
      alt: "Una palanca",
    },
    options: [
      { id: "id:option/16", text: "Un revólver", isCorrect: false },
      { id: "id:option/17", text: "Una katana", isCorrect: false },
      { id: "id:option/18", text: "Una palanca", isCorrect: true },
      { id: "id:option/19", text: "Un arco y flechas", isCorrect: false },
    ],
    answerDescription:
      "Correcto! Joel usa una palanca como arma principal a lo largo del juego, siendo una herramienta versátil para el combate y la exploración.",
  },
  {
    id: "id:question/5",
    question:
      "¿Dónde tiene lugar la mayor parte de la historia del juego?",
    image: {
      uri: "https://s.libertaddigital.com/videos/trailer-the-last-of-us-6038761.jpg",
      alt: "Boston, Massachusetts",
    },
    options: [
      { id: "id:option/20", text: "Los Ángeles, California", isCorrect: false },
      { id: "id:option/21", text: "Boston, Massachusetts", isCorrect: true },
      { id: "id:option/22", text: "Nueva York, Nueva York", isCorrect: false },
      { id: "id:option/23", text: "Pittsburgh, Pennsylvania", isCorrect: false },
    ],
    answerDescription:
      "Correcto! La mayor parte de la historia tiene lugar en Boston, Massachusetts, donde Joel y Ellie viajan a través de paisajes devastados por la pandemia.",
  },
  {
    id: "id:question/6",
    question:
      "¿Cuál es el nombre del amigo de Ellie que Joel debe escoltar durante una parte del juego?",
    image: {
      uri: "https://monotema.es/wp-content/uploads/2020/01/the-last-of-us-header.jpg",
      alt: "Sam",
    },
    options: [
      { id: "id:option/24", text: "Sam", isCorrect: true },
      { id: "id:option/25", text: "Riley", isCorrect: false },
      { id: "id:option/26", text: "Tess", isCorrect: false },
      { id: "id:option/27", text: "Henry", isCorrect: false },
    ],
    answerDescription:
      "Correcto! Sam es el amigo de Ellie que Joel debe escoltar durante una parte del juego, y su relación añade profundidad emocional a la narrativa.",
  },
  {
    id: "id:question/7",
    question:
      "¿Cuál es el nombre del hermano menor de Joel que desencadena los eventos iniciales del juego?",
    image: {
      uri: "https://assetsio.gnwcdn.com/hbos-the-last-of-us-casts-original-tommy-actor-but-not-as-tommy-1626445152394.jpg?width=1600&height=900&fit=crop&quality=100&format=png&enable=upscale&auto=webp",
      alt: "Tommy",
    },
    options: [
      { id: "id:option/28", text: "Sam", isCorrect: false },
      { id: "id:option/29", text: "Henry", isCorrect: false },
      { id: "id:option/30", text: "Bill", isCorrect: false },
      { id: "id:option/31", text: "Tommy", isCorrect: true},
    ],
    answerDescription:
      "Correcto! Tommy es el hermano menor de Joel y desempeña un papel importante en la trama de The Last of Us. Inicialmente, vive en Boston y tiene una relación tensa con Joel debido a eventos pasados, pero más tarde establece su propio asentamiento en Wyoming. Es un personaje clave en la historia y su relación con Joel se desarrolla a lo largo del juego.",
  },
  {
    id: "id:question/8",
    question:
      "¿Cómo se llama el grupo de rebeldes que Ellie y Joel encuentran en la universidad?",
    image: {
      uri: "https://www.levelup.com/core/scripts/image_proxy.php?img=https://vignette.wikia.nocookie.net/thelastofus/images/7/74/University_of_Eastern_Colorado.jpeg/revision/latest?cb=20130620020917",
      alt: "Los Luciérnagas",
    },
    options: [
      { id: "id:option/32", text: "Los Cazadores", isCorrect: false },
      { id: "id:option/33", text: "Los Víboras", isCorrect: false },
      { id: "id:option/34", text: "Los Víboras", isCorrect: false },
      { id: "id:option/35", text: "Los Luciérnagas", isCorrect: true },
    ],
    answerDescription:
      "Correcto! Los Luciérnagas son el grupo de rebeldes que Ellie y Joel encuentran en la universidad, y su relación con ellos tiene grandes implicaciones en la trama.",
  },
  {
    id: "id:question/9",
    question:
      "¿Cuál es el título completo del DLC (contenido descargable) para The Last of Us que se centra en la historia de Ellie antes de conocer a Joel?",
    image: {
      uri: "https://static1.srcdn.com/wordpress/wp-content/uploads/2023/03/last-of-us-part-1-joel-and-ellie-closeup.jpg",
      alt: "Left Behind",
    },
    options: [
      { id: "id:option/36", text: "The Lost Chronicles", isCorrect: false },
      { id: "id:option/37", text: "Beyond the Walls", isCorrect: false },
      { id: "id:option/38", text: "Left Behind", isCorrect: true },
      { id: "id:option/39", text: "Forgotten Memories", isCorrect: false },
    ],
    answerDescription:
      "Correcto! El título completo del DLC es Left Behind, que explora la historia de Ellie antes de conocer a Joel y ofrece más contexto sobre su personaje.",
  },
];
