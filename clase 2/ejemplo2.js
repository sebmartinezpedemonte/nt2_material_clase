let miArray = [1, 5, 7, 3, 4, 4, 3];

miArray.forEach((elemento) => (elemento = 4));
console.log(miArray);

const resultado = miArray.filter((elemento) => elemento == 2);

console.log(resultado);

function prueba(a, b, miFuncion) {
  console.log("hago algo...");
  // llamo un servicio..
  miFuncion(a, b);
}

prueba(1, 2, (a, b) => a + b);
