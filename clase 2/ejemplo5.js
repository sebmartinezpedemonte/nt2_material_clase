const personas = [
  { nombre: "Juan" },
  "Pepe",
  { nombre: "Pedro" },
  { nombre: "Jose" },
];

const copia = [...personas];

personas[0].nombre = "cambio!";

console.log(personas);
console.log(copia);

const resultado = personas.find((persona) => {
  console.log(persona.nombre);
  return persona.nombre == "Jose";
});
console.log(resultado);
