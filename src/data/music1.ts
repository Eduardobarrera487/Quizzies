import { Question, Test } from "./types";

export const music1Test: Test = {
  id: "id:test/music1",
  title: "Musica",
  testName: "music1",
  numOfQuestions: 10,
  duration: 10,
  image: {
    uri: "https://concepto.de/wp-content/uploads/2020/03/musica-e1584123209397.jpg",
    alt: "music1",
  },
};

export const music1Questions: Question[] = [
  {
    id: "id:question/0",
    question: "Quien es este artista?",
    image: {
      uri: "https://www.billboard.com/wp-content/uploads/2023/03/the-weeknd-avatar-premiere-2022-billboard-1548.jpg?w=1024",
      alt: "The Weeknd",
    },
    options: [
      { id: "id:option/0", text: "Childish Gambino", isCorrect: false },
      { id: "id:option/1", text: "The Weeknd", isCorrect: true },
      { id: "id:option/2", text: "Justin Bieber", isCorrect: false },
      { id: "id:option/3", text: "Kid Cudi", isCorrect: false },
    ],
    answerDescription:
      "Correcto! Este arista es The Weeknd!",
  },
  {
    id: "id:question/1",
    question:
      "Cual es el nombre real de Kid Cudi?",
    image: {
      uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp93dmz2rA57wRkrODBaSHMuAUSngRV162jqVPH1031g&s",
      alt: "Kid Cudi",
    },
    options: [
      { id: "id:option/4", text: "Abel Tesfaye", isCorrect: false },
      { id: "id:option/5", text: "Travis Cudi", isCorrect: false },
      { id: "id:option/6", text: "Scott Mescudi", isCorrect: true },
      { id: "id:option/7", text: "Damiano David", isCorrect: false },
    ],
    answerDescription:
      "Correcto! El nombre real de Kid Cudi es Scott Mescudi!",
  },
  {
    id: "id:question/2",
    question:
      "Que duo de DJ hizo el soundtrack para la pelicula Tron el legado?",
    image: {
      uri: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/D2409C8246E0DB1349D3E26A48B496031948EF143AE5F81BDB00579623EF2891/scale?width=1200&aspectRatio=1.78&format=webp",
      alt: "Tron El Legado",
    },
    options: [
      { id: "id:option/8", text: "Dog Blood", isCorrect: false },
      { id: "id:option/9", text: "Daft Punk", isCorrect: true },
      { id: "id:option/10", text: "KnifeParty", isCorrect: false },
      { id: "id:option/11", text: "Swedish House Mafia", isCorrect: false },
    ],
    answerDescription:
      "Correcto! Daft Punk hizo el soundtrack de Tron!",
  },
  {
    id: "id:question/3",
    question:
      "Cual de estas NO es una cancion de Queen?",
    image: {
      uri: "https://www.udiscovermusica.com/wp-content/uploads/sites/7/2022/09/best-queens-songs.jpg",
      alt: "Queen",
    },
    options: [
      { id: "id:option/12", text: "Brighton Rock", isCorrect: false },
      { id: "id:option/13", text: "Killer Queen", isCorrect: false },
      { id: "id:option/14", text: "Hold The Line", isCorrect: true },
      { id: "id:option/15", text: "We Will Rock You", isCorrect: false },
    ],
    answerDescription:
      "Correcto! Hold The Line no es de Queen, sino de TOTO!",
  },
  {
    id: "id:question/4",
    question:
      "Quien produjo el soundtrack de la ultima pelicula de Spiderman Across the spiderverse?",
    image: {
      uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoo3bakZmZUMuQK48taR7eJZP-yOV8ua-fQptl2SkwSQ&s",
      alt: "Spiderman Across The Spider-verse",
    },
    options: [
      { id: "id:option/16", text: "Metro Boomin", isCorrect: true },
      { id: "id:option/17", text: "Murda Beats", isCorrect: false },
      { id: "id:option/18", text: "BNYX", isCorrect: false },
      { id: "id:option/19", text: "Tay Keith", isCorrect: false },
    ],
    answerDescription:
      "Correcto! Metro Boomin produjo el soundtrack!",
  },
  {
    id: "id:question/5",
    question:
      "A que banda perteneció Brian May?",
    image: {
      uri: "https://www.larocknpop.com/wp-content/uploads/2023/07/Brian-May_65.webp",
      alt: "Brian May",
    },
    options: [
      { id: "id:option/20", text: "Queen", isCorrect: true },
      { id: "id:option/21", text: "TOTO", isCorrect: false },
      { id: "id:option/22", text: "Aerosmith", isCorrect: false },
      { id: "id:option/23", text: "Mayhem", isCorrect: false },
    ],
    answerDescription:
      "Correcto! Brian May perteneció a Queen!",
  },
  {
    id: "id:question/6",
    question:
      "Cual es el nombre real de Eminem?",
    image: {
      uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYdXqoNuTnPNr4XWfAIaDEsqNvi2UbylgWvYYLR8UY0w&s",
      alt: "Eminem",
    },
    options: [
      { id: "id:option/24", text: "Kanye West", isCorrect: false },
      { id: "id:option/25", text: "Jacques Webster", isCorrect: false },
      { id: "id:option/26", text: "Abel Tesfaye", isCorrect: false },
      { id: "id:option/27", text: "Marshall Mathers", isCorrect: true },
    ],
    answerDescription:
      "Correcto! El nombre real de eminem es Marshall Mathers!",
  },
  {
    id: "id:question/7",
    question:
      "Cual es la banda más famosa de K-POP?",
    image: {
      uri: "https://6.soompi.io/image/a0f424669b8441a68ab36f456515727c/dummy.png?s=900x600&e=t",
      alt: "kpop",
    },
    options: [
      { id: "id:option/28", text: "ATARASHII GAKKO!", isCorrect: false },
      { id: "id:option/29", text: "Blackpink", isCorrect: false },
      { id: "id:option/30", text: "BTS", isCorrect: true },
      { id: "id:option/31", text: "Twice", isCorrect: false },
    ],
    answerDescription:
      "Correcto! BTS es la banda más famosa de k-pop!",
  },
  {
    id: "id:question/8",
    question:
      "Quien fue el vocalista de Queen?",
    image: {
      uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ81zx4jOjSQRuoIcFikVQnyKtGdw72rvAxu_1-sMyfig&s",
      alt: "Queen",
    },
    options: [
      { id: "id:option/32", text: "Chuck Berry", isCorrect: false },
      { id: "id:option/33", text: "Ringo Starr", isCorrect: false },
      { id: "id:option/34", text: "John Lennon", isCorrect: false },
      { id: "id:option/35", text: "Freddie Mercury", isCorrect: true },
    ],
    answerDescription:
      "Correcto! El vocalista de Queen es Freddie Mercury!",
  },
  {
    id: "id:question/9",
    question:
      "Cual es el verdadero nombre de Bad Bunny?",
    image: {
      uri: "https://hips.hearstapps.com/hmg-prod/images/bad-bunny-1672827485.jpg?crop=1xw:0.8056640625xh;center,top&resize=640:*",
      alt: "Bad Bunny",
    },
    options: [
      { id: "id:option/36", text: "Austin Agustín Santos", isCorrect: false },
      { id: "id:option/37", text: "Ángel Javier Aviles Monzón", isCorrect: false },
      { id: "id:option/38", text: "Benito Antonio Martinez Ocasio", isCorrect: true },
      { id: "id:option/39", text: "Ramón Luis Ayala Rodríguez", isCorrect: false },
    ],
    answerDescription:
      "Correcto! Benito es el nombre real de Bad Bunny!",
  },
];
