export interface Image {
  uri: string;
  alt: string;
}

export interface Option {
  id: string;
  text: string;
  isCorrect: boolean;
}

export interface Question {
  id: string;
  question: string;
  image?: Image;
  options: Option[];
  hint?: string;
  answerDescription: string;
}

export interface Test {
  id: string;
  title: string;
  image?: Image;
  testName: TestName;
  numOfQuestions: number;
  duration: number;
}



export type TestName = "bsd" |"desamovil"|"seguridad"|"tlou"| "desaweb"| "github" | "persona5" | "jjk" | "bnha" | "music1" | "ciencia" |"pop1"|"pop2" | "programacion1" | "initiald" | "saiki" | "parasocial" | "given" | "ide" | "cars";

