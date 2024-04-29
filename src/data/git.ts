import { Question, Test } from "./types";

export const githubTest: Test = {
  id: "id:test/github",
  title: "Github",
  testName: "github",
  numOfQuestions: 10,
  duration: 10,
  image: {
    uri: "https://assets-global.website-files.com/5f5a53e153805db840dae2db/64e79ca5aff2fb7295bfddf9_github-que-es.jpg",
    alt: "github1",
  },
};

export const githubQuestions: Question[] = [
  {
    id: "id:question/0",
    question: "¿Qué es Git?",
    image: {
      uri: "https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_github.jpg",
      alt: "Un sistema de control de versiones",
    },
    options: [
      { id: "id:option/0", text: "Un lenguaje de programación", isCorrect: false },
      { id: "id:option/1", text: "Un sistema de control de versiones", isCorrect: true },
      { id: "id:option/2", text: "Un servicio de alojamiento de repositorios en la nube", isCorrect: false },
    ],
    answerDescription:
      "Correcto! Git es un sistema de control de versiones distribuido que permite a los desarrolladores rastrear los cambios en el código fuente de un proyecto a lo largo del tiempo. Facilita la colaboración en equipo, el seguimiento de versiones y la gestión eficiente de cambios en el código.",
    
  },
  {
    id: "id:question/1",
    question:
      "¿Cuál de las siguientes afirmaciones sobre GitHub es verdadera?",
    image: {
      uri: "https://devblogs.microsoft.com/visualstudio/wp-content/uploads/sites/4/2022/10/github-git-vs-workingtogether.png",
      alt: "GitHub es una plataforma de alojamiento de código y colaboración",
    },
    options: [
      { id: "id:option/4", text: "GitHub es un editor de texto en línea", isCorrect: false },
      { id: "id:option/5", text: "GitHub es un sistema de control de versiones descentralizado", isCorrect: false },
      { id: "id:option/6", text: "GitHub es una plataforma de alojamiento de código y colaboración", isCorrect: true},
    ],
    answerDescription:
      "Correcto! GitHub es una plataforma en línea que permite a los desarrolladores alojar y revisar código, colaborar en proyectos, realizar seguimiento de problemas, y mucho más. Proporciona herramientas para la gestión del desarrollo de software y la colaboración en equipos.",
  },
  {
    id: "id:question/2",
    question:
      "¿Qué comando de Git se utiliza para clonar un repositorio remoto?",
    image: {
      uri: "https://code.visualstudio.com/assets/docs/sourcecontrol/github/open-github-repository-dropdown.png",
      alt: "git clone",
    },
    options: [
      { id: "id:option/9", text: "git pull", isCorrect: false },
      { id: "id:option/10", text: "git push", isCorrect: false },
      { id: "id:option/11", text: "git clone", isCorrect: true },
    ],
    answerDescription:
      "Correcto! El comando git clone se utiliza para clonar un repositorio remoto en tu máquina local. Simplemente proporcionas la URL del repositorio que deseas clonar y Git descargará una copia del repositorio completo en tu sistema.",
  },
  {
    id: "id:question/3",
    question:
      "¿Cuál es el comando de Git utilizado para confirmar cambios en un repositorio local?",
    image: {
      uri: "https://www.wnpower.com/blog/wp-content/uploads/sites/3/2019/08/que-es-github-comandos_gatooctopus.jpg",
      alt: "git commit",
    },
    options: [
      { id: "id:option/12", text: "git push", isCorrect: false },
      { id: "id:option/13", text: "git commit", isCorrect: true },
      { id: "id:option/14", text: "git add", isCorrect: false },
    ],
    answerDescription:
      "Correcto! El comando git commit se utiliza para confirmar los cambios realizados en el repositorio local. Antes de confirmar, es necesario agregar los cambios al área de preparación utilizando el comando git add",
  },
  {
    id: "id:question/4",
    question:
      "¿Cuál es el propósito de la instrucción git push?",
    image: {
      uri: "https://somospnt.com/images/blog/cover/205-git-comandos-basicos.jpg",
      alt: "Subir cambios locales al repositorio remoto",
    },
    options: [
      { id: "id:option/16", text: "Descargar cambios del repositorio remoto", isCorrect: false },
      { id: "id:option/17", text: "Fusionar ramas en Git", isCorrect: false },
      { id: "id:option/18", text: "Subir cambios locales al repositorio remoto", isCorrect: true },
    ],
    answerDescription:
      "Correcto!  El comando git push se utiliza para subir los cambios confirmados desde el repositorio local al repositorio remoto. Esto sincroniza tu trabajo local con el repositorio remoto y permite a otros colaboradores ver y acceder a tus cambios.",
  },
  {
    id: "id:question/5",
    question:
      "¿Qué comando de Git se utiliza para crear una nueva rama?",
    image: {
      uri: "https://res.cloudinary.com/marcomadera/image/upload/c_limit,w_2048/Blog/6/roman-synkevych-wX2L8L-fGeA-unsplash_ti5f7b.jpg",
      alt: "git branch",
    },
    options: [
      { id: "id:option/20", text: "git checkout", isCorrect: false },
      { id: "id:option/21", text: "git branch", isCorrect: true },
      { id: "id:option/22", text: "git commit", isCorrect: false },
    ],
    answerDescription:
      "Correcto! El comando git branch se utiliza para listar, crear o eliminar ramas en un repositorio Git. Para crear una nueva rama, simplemente ejecutas git branch nombre_de_la_rama.",
  },
  {
    id: "id:question/6",
    question:
      "¿Cómo se puede ver el historial de confirmaciones (commits) en Git?",
    image: {
      uri: "https://static.vecteezy.com/system/resources/previews/017/119/660/original/github-logo-git-hub-icon-with-text-on-white-and-black-background-free-vector.jpg",
      alt: "git log",
    },
    options: [
      { id: "id:option/24", text: "git log", isCorrect: true },
      { id: "id:option/25", text: "git status", isCorrect: false },
      { id: "id:option/26", text: "git diff", isCorrect: false },
    ],
    answerDescription:
      "Correcto!  El comando git log muestra el historial de confirmaciones en un repositorio Git. Proporciona detalles como el autor, la fecha y la hora de cada confirmación, así como el mensaje asociado a cada una.",
  },
  {
    id: "id:question/7",
    question:
      "¿Cuál es la diferencia entre git pull y git fetch?",
    image: {
      uri: "https://miro.medium.com/v2/resize:fit:1100/1*CWFkh5z8oa6dZfn5_gkKKQ.jpeg",
      alt: "git pull descarga los cambios y los fusiona automáticamente, mientras que git fetch solo descarga los cambios.",
    },
    options: [
      { id: "id:option/28", text: "git pull descarga los cambios y los fusiona automáticamente, mientras que git fetch solo descarga los cambios.", isCorrect: true },
      { id: "id:option/29", text: "git pull y git fetch hacen lo mismo", isCorrect: false },
      { id: "id:option/30", text: "git pull y git fetch solo descargan los cambios, pero no los fusionan.", isCorrect: false },
    ],
    answerDescription:
      "Correcto! git pull descarga los cambios desde el repositorio remoto y los fusiona automáticamente con la rama actual local. Por otro lado, git fetch descarga los cambios pero no los fusiona automáticamente, dejándolos disponibles para revisión antes de la fusión.",
  },
  {
    id: "id:question/8",
    question:
      "¿Qué comando de Git se utiliza para fusionar una rama con la rama actual?",
    image: {
      uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgPqSAsg9Mub-nfmc8D50vOpX6KB6CoK0UIgsJ_iDE&s",
      alt: "git merge",
    },
    options: [
      { id: "id:option/33", text: "git push", isCorrect: false },
      { id: "id:option/34", text: "git checkout", isCorrect: false },
      { id: "id:option/35", text: "git merge", isCorrect: true },
    ],
    answerDescription:
      "Correcto!  El comando git merge se utiliza para fusionar una rama con la rama actual. Por ejemplo, si estás en la rama master y quieres fusionar los cambios de una rama llamada feature, ejecutas git merge feature.",
  },
  {
    id: "id:question/9",
    question:
      "¿Qué es un conflicto de fusión en Git?",
    image: {
      uri: "https://images.ctfassets.net/lzny33ho1g45/how-to-use-github-p-img/f1f10acdfa6c545337954efb32439232/file.png?w=1520&fm=jpg&q=30&fit=thumb&h=760",
      alt: "Un error que ocurre al fusionar dos ramas y Git no puede resolver automáticamente los cambios.",
    },
    options: [
      { id: "id:option/36", text: "Un problema que surge al crear una nueva rama.", isCorrect: false },
      { id: "id:option/37", text: " Un mensaje que muestra Git cuando una confirmación no cumple con los estándares.", isCorrect: false },
      { id: "id:option/38", text: "Un error que ocurre al fusionar dos ramas y Git no puede resolver automáticamente los cambios.", isCorrect: true },
    ],
    answerDescription:
      "Correcto!Un conflicto de fusión ocurre cuando Git no puede fusionar automáticamente los cambios de dos ramas debido a que modificaciones conflictivas se realizaron en las mismas líneas de código en ambas ramas. Se requiere intervención manual para resolver estos conflictos.",
  },
];
