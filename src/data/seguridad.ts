import { Question, Test } from "./types";

export const seguridadTest: Test = {
  id: "id:test/seguridad",
  title: "Seguridad Informatica",
  testName: "seguridad",
  numOfQuestions: 5,
  duration: 10,
  image: {
    uri: "https://www.obicex.es/sites/obicex/files/styles/blog_desktop/public/images/blog/que-es-seguridad-informatica.jpg?itok=ua3Ux0wS",
    alt: "seguridad",
  },
};

export const seguridadQuestions: Question[] = [
  {
    id: "id:question/0",
    question: "¿Qué es un ataque de fuerza bruta?",
    image: {
      uri: "https://www.ssldragon.com/wp-content/uploads/2023/10/brute-force-attack-1.webp",
      alt: "Un ataque que intenta adivinar contraseñas probando todas las combinaciones posibles.",
    },
    options: [
      { id: "id:option/0", text: "Un ataque que explota una vulnerabilidad en el software.", isCorrect: false },
      { id: "id:option/1", text: "Un ataque que intenta adivinar contraseñas probando todas las combinaciones posibles.", isCorrect: true },
      { id: "id:option/2", text: "Un ataque que intercepta y modifica la comunicación entre dos partes.", isCorrect: false },
    ],
    answerDescription:
      "Correcto! Un ataque de fuerza bruta es un método utilizado por los hackers para intentar adivinar una contraseña probando todas las combinaciones posibles de caracteres hasta encontrar la correcta. Es un enfoque de prueba y error que puede ser muy efectivo, especialmente contra contraseñas débiles.",
    
  },
  {
    id: "id:question/1",
    question:
      "¿Qué es el cifrado de extremo a extremo?",
    image: {
      uri: "https://blogs.unitec.mx/hubfs/Imported_Blog_Media/tips-super-basicos-de-seguridad-informatica-5-Dec-17-2022-06-01-39-3384-PM.png",
      alt: " Un método de cifrado que protege los datos tanto en tránsito como en reposo, desde el origen hasta el destino.",
    },
    options: [
      { id: "id:option/4", text: "Un método de cifrado que protege los datos mientras están en tránsito.", isCorrect: false },
      { id: "id:option/5", text: "Un método de cifrado que solo protege los datos mientras están en reposo.", isCorrect: false },
      { id: "id:option/6", text: " Un método de cifrado que protege los datos tanto en tránsito como en reposo, desde el origen hasta el destino.", isCorrect: true},
    ],
    answerDescription:
      "Correcto! El cifrado de extremo a extremo es un método de cifrado que protege los datos desde el punto de origen hasta el punto de destino, lo que significa que solo los usuarios autorizados pueden descifrar y acceder a los datos. Esto garantiza que la información permanezca segura incluso si es interceptada durante la transmisión.",
  },
  {
    id: "id:question/2",
    question:
      "¿Qué es un malware de tipo ransomware?",
    image: {
      uri: "https://i0.wp.com/bitlifemedia.com/wp-content/uploads/2019/07/que-es-el-malware-como-protegernos-software-malicioso-que-tipos-hay-clases-de-virus-informaticos-ransomware-consejos.jpg?fit=800%2C600&ssl=1",
      alt: " Un malware que secuestra los archivos del usuario y exige un rescate para su liberación.",
    },
    options: [
      { id: "id:option/9", text: "Un malware que roba información confidencial del usuario.", isCorrect: false },
      { id: "id:option/10", text: "Un malware que infecta dispositivos IoT para lanzar ataques DDoS.", isCorrect: false },
      { id: "id:option/11", text: " Un malware que secuestra los archivos del usuario y exige un rescate para su liberación.", isCorrect: true },
    ],
    answerDescription:
      "Correcto! El ransomware es un tipo de malware que infecta los sistemas de los usuarios y cifra sus archivos, impidiendo el acceso a los mismos. Los hackers exigen un rescate para restaurar el acceso a los archivos, lo que puede causar importantes daños y pérdidas de datos para las víctimas.",
  },
  {
    id: "id:question/3",
    question:
      "¿Qué es una vulnerabilidad de día cero?",
    image: {
      uri: "https://media.kasperskydaily.com/wp-content/uploads/sites/87/2021/06/08125942/0day.jpg",
      alt: " Una vulnerabilidad que se ha descubierto y explotado antes de que el fabricante lance un parche.",
    },
    options: [
      { id: "id:option/12", text: "Una vulnerabilidad que ha sido parcheada por el fabricante.", isCorrect: false },
      { id: "id:option/13", text: "Una vulnerabilidad que se ha descubierto y explotado antes de que el fabricante lance un parche.", isCorrect: true },
      { id: "id:option/14", text: "Una vulnerabilidad que afecta a un software muy antiguo y ya no es relevante.", isCorrect: false },
    ],
    answerDescription:
      "Correcto! El comando git commit se utiliza para confirmar los cambios realizados en el repositorio local. Antes de confirmar, es necesario agregar los cambios al área de preparación utilizando el comando git add",
  },
  {
    id: "id:question/4",
    question:
      "¿Qué es el protocolo HTTPS y para qué se utiliza?",
    image: {
      uri: "https://nordvpn.com/wp-content/uploads/http-vs-https_1200x628.png",
      alt: "Es un protocolo de seguridad utilizado para proteger las transacciones en línea, como las compras en sitios web.",
    },
    options: [
      { id: "id:option/16", text: "Descargar cambios del repositorio remoto", isCorrect: false },
      { id: "id:option/17", text: "Fusionar ramas en Git", isCorrect: false },
      { id: "id:option/18", text: "Es un protocolo de seguridad utilizado para proteger las transacciones en línea, como las compras en sitios web.", isCorrect: true },
    ],
    answerDescription:
      "Correcto! HTTPS (Hypertext Transfer Protocol Secure) es un protocolo de comunicación seguro que se utiliza para proteger las transacciones en línea, como las compras en sitios web y el intercambio de datos confidenciales. Utiliza cifrado SSL/TLS para garantizar que la información transmitida entre el navegador del usuario y el servidor web esté protegida contra la interceptación y manipulación por parte de terceros.",
  },
];
