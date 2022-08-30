const numero = 1;
let nombre = "NT2";

const miObjeto = {
  materia: "NT2",
  cuatrimestre: 2,
  saludar: (nombre) => `Bienvenido ${nombre} a ${this.materia}`,
};

console.log(miObjeto.saludar("Pepe"));

const miObjeto2 = {
  materia: "NT2",
  cuatrimestre: 2,
  saludar: function (nombre) {
    return `Bienvenido ${nombre} a ${this.materia}`;
  },
};

console.log(miObjeto2.saludar("Pepe"));

const saludar = (nombre) => `Hola ${nombre}`;

const gritar = () => console.log("ey!!!");

gritar();
const saludo = saludar("gente");
console.log(saludo);
