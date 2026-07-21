export const services = [
  {
    id: 1,
    name: "Consulta médica",
    description: "Consulta clínica general",
    duration: 30,
    price: 12000,
    category: "salud",
    available: true,
    local: this
  },
  {
    id: 2,
    name: "Corte de pelo",
    description: "Corte clásico masculino",
    duration: 45,
    price: 9000,
    category: "peluquería",
    available: true,
  },
  {
    id: 3,
    name: "Clase de yoga",
    description: "Clase grupal inicial",
    duration: 60,
    price: 7000,
    category: "bienestar",
    available: false,
  },
  {
    id: 4,
    name: "Clase de yoga",
    description: "Clase individual inicial",
    duration: 60,
    price: 14000,
    category: "bienestar",
    available: false,
  },
];

// Objeto es de tipo :
// id que es un numero
// name que es un texto
// description es un texto
// duration es un numero
// price es un numero
// category es un texto
// available es un verdadero/falso

// la constante services es un array de objetos de tipo:
// {
//     id: number,
//     name: string,
//     description: string,
//     duration: number,
//     price: number,
//     category: string,
//     available: boolean,
//   },

//  {
//     id: 1,
//     name: "Consulta médica",
//     description: "Consulta clínica general",
//     duration: 30,
//     price: 12000,
//     category: "salud",
//     available: true,
//   },