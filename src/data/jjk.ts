import { Question, Test } from "./types";

export const jjkTest: Test = {
  id: "id:test/jjk",
  title: "Jujutsu Kaisen",
  testName: "jjk",
  numOfQuestions: 10,
  duration: 10,
  image: {
    uri: "https://p325k7wa.twic.pics/high/jujutsu-kaisen/jujutsu-kaisen-cursed-clash/00-page-setup/JJK-header-mobile2.jpg?twic=v1/resize=760/step=10/quality=80",
    alt: "jjk",
  },
};

export const jjkQuestions: Question[] = [
  {
    id: "id:question/0",
    question: "Quien es este personaje?",
    image: {
      uri: "https://www.comingsoon.net/wp-content/uploads/sites/3/2023/09/Jujutsu-Kaisen-Chapter-237-Release-Date.jpg",
      alt: "Satoru Gojo",
    },
    options: [
      { id: "id:option/0", text: "Suguru Getou", isCorrect: false },
      { id: "id:option/1", text: "Itadori Yuuji", isCorrect: false },
      { id: "id:option/2", text: "Gojo Satoru", isCorrect: true },
      { id: "id:option/3", text: "Ryomen Sukuna", isCorrect: false },
    ],
    answerDescription:
      "Correcto! Este personaje es Gojo Satoru, uno de los personajes principales de Jujutsu Kaisen y portador de los seis ojos",
    
  },
  {
    id: "id:question/1",
    question:
      "¿Quién es el portador de Ryomen Sukuna?",
    image: {
      uri: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9a84ca41-5d5e-4461-9d21-2147cd63247c/df632zl-961bb9b3-8382-4b33-9d64-8c76905a82cd.jpg/v1/fill/w_1280,h_905,q_75,strp/ryomen_sukuna__jujutsu_kaisen__by_klawddie_df632zl-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTA1IiwicGF0aCI6IlwvZlwvOWE4NGNhNDEtNWQ1ZS00NDYxLTlkMjEtMjE0N2NkNjMyNDdjXC9kZjYzMnpsLTk2MWJiOWIzLTgzODItNGIzMy05ZDY0LThjNzY5MDVhODJjZC5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.J3NtlRMkAtsZDYTvlK3lvl2mTVhAwSZx0LZqDZ5_OEo",
      alt: "Sukuna",
    },
    options: [
      { id: "id:option/4", text: "Itadori Yuuji", isCorrect: true },
      { id: "id:option/5", text: "Todou Aoi", isCorrect: false },
      { id: "id:option/6", text: "Kugisaki Nobara", isCorrect: false },
      { id: "id:option/7", text: "Fushiguro Megumi", isCorrect: true },
    ],
    answerDescription:
      "Correcto! Itadori es el portador! Alerta de spoiler: más adelante Fushiguro se vuelve el portador.",
  },
  {
    id: "id:question/2",
    question:
      "Cual es el clan que hereda los Seis Ojos?",
    image: {
      uri: "https://static.wikia.nocookie.net/jujutsu-kaisen/images/3/3e/Episodio_07_-_193.jpg/revision/latest?cb=20201126154830&path-prefix=es",
      alt: "Gojo Seis Ojos",
    },
    options: [
      { id: "id:option/8", text: "Gojo", isCorrect: true },
      { id: "id:option/9", text: "Zenin", isCorrect: false },
      { id: "id:option/10", text: "Kamo", isCorrect: false },
      { id: "id:option/11", text: "Inumaki", isCorrect: false },
    ],
    answerDescription:
      "Correcto! El clan Gojo es el que hereda los Seis Ojos.",
  },
  {
    id: "id:question/3",
    question:
      "Que clan tiene como técnica especial la manipulación de la sangre?",
    image: {
      uri: "https://static.wikia.nocookie.net/jujutsu-kaisen/images/2/22/Episodio_18_-_356.jpg/revision/latest?cb=20210311154246&path-prefix=es",
      alt: "Noritoshi Kamo",
    },
    options: [
      { id: "id:option/12", text: "Gojo", isCorrect: false },
      { id: "id:option/13", text: "Kamo", isCorrect: true },
      { id: "id:option/14", text: "Zenin", isCorrect: false },
      { id: "id:option/15", text: "Inumaki", isCorrect: false },
    ],
    answerDescription:
      "Correcto! El clan camo tiene como técnica especial la manipulación de la sangre.",
  },
  {
    id: "id:question/4",
    question:
      "Quien es el padre de Megumi Fushiguro?",
    image: {
      uri: "https://www.mundodeportivo.com/alfabeta/hero/2022/08/megumi-fushiguro.jpg?width=1200",
      alt: "Megumi Fushiguro",
    },
    options: [
      { id: "id:option/16", text: "Jin", isCorrect: false },
      { id: "id:option/17", text: "Naobito Zenin", isCorrect: false },
      { id: "id:option/18", text: "Toji", isCorrect: true },
      { id: "id:option/19", text: "Gojo", isCorrect: false },
    ],
    answerDescription:
      "Correcto! El padre de Megumi Fushiguro es Toji",
  },
  {
    id: "id:question/5",
    question:
      "Como se llama la maldicion de Yuta Okkotsu?",
    image: {
      uri: "https://staticg.sportskeeda.com/editor/2023/07/39acf-16888901191619-1920.jpg",
      alt: "Rika",
    },
    options: [
      { id: "id:option/20", text: "Sukuna", isCorrect: false },
      { id: "id:option/21", text: "Rika", isCorrect: true },
      { id: "id:option/22", text: "Choso", isCorrect: false },
      { id: "id:option/23", text: "Aoi", isCorrect: false },
    ],
    answerDescription:
      "Correcto! La maldición de Yuta Okkotsu es Rika.",
  },
  {
    id: "id:question/6",
    question:
      "Donde sellaron a Gojo Satoru?",
    image: {
      uri: "https://static1.dualshockersimages.com/wordpress/wp-content/uploads/2023/09/gojo-satoru-finally-sealed-in-the-latest-episode-of-jujutsu-kaisen.jpg",
      alt: "Gojo sellado",
    },
    options: [
      { id: "id:option/24", text: "Shibuya", isCorrect: true },
      { id: "id:option/25", text: "Escuela de Tokyo", isCorrect: false },
      { id: "id:option/26", text: "Escuela de Kyoto", isCorrect: false },
      { id: "id:option/27", text: "Expansion de Dominio de Dagon", isCorrect: false },
    ],
    answerDescription:
      "Correcto! Gojo fue sellado en el Incidente de Shibuya.",
  },
  {
    id: "id:question/7",
    question:
      "Quien es el mejor amigo de Itadori Yuuji?",
    image: {
      uri: "https://i.pinimg.com/474x/18/c4/a5/18c4a59035770d93cf78a3584d42f83d.jpg",
      alt: "Los pofis",
    },
    options: [
      { id: "id:option/28", text: "Todou Aoi", isCorrect: true },
      { id: "id:option/29", text: "Fushiguro Megumi", isCorrect: false },
      { id: "id:option/30", text: "Yuuta Okkotsu", isCorrect: false },
      { id: "id:option/31", text: "Gojo Satoru", isCorrect: false },
    ],
    answerDescription:
      "Correcto! El mejor amigo de Itadori Yuuji es Todou Aoi.",
  },
  {
    id: "id:question/8",
    question:
      "Quien es el personaje favorito de Gege Akutami?",
    image: {
      uri: "https://static.wikia.nocookie.net/jujutsu-kaisen/images/b/bb/Akutami_Gege.png/revision/latest/thumbnail/width/360/height/360?cb=20200224044104&path-prefix=es",
      alt: "gege Akutami",
    },
    options: [
      { id: "id:option/32", text: "Todou", isCorrect: false },
      { id: "id:option/33", text: "Megumi", isCorrect: false },
      { id: "id:option/34", text: "Gojo", isCorrect: false },
      { id: "id:option/35", text: "Sukuna", isCorrect: true },
    ],
    answerDescription:
      "Correcto! GuionKuna es el personaje favorito de gege Akutami.(ya dejenle de dar powerups porfavor)",
  },
  {
    id: "id:question/9",
    question:
      "Quien es el Gallo de todo el fandom?",
    image: {
      uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsq4wJJDU5MrrhYX7zwNi8pEfvTjcQ1gVZK8LSEpFU_g&s",
      alt: "El gallo itadori",
    },
    options: [
      { id: "id:option/36", text: "Megumi", isCorrect: false },
      { id: "id:option/37", text: "Gojo", isCorrect: false },
      { id: "id:option/38", text: "Yuuji", isCorrect: true },
      { id: "id:option/39", text: "Sukuna", isCorrect: false },
    ],
    answerDescription:
      "El Gallo es Itadori Yuuji, el protagonista de la serie. (Gege, por favor, no lo mates)",
  },
];
