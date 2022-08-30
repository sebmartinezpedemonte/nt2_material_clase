const miArray = ["a", "c", "b"];
const miArrayDeNumeros = [10, 5, 3];

const nuevoArray = miArray.sort();
console.log();
console.log(
  miArrayDeNumeros.sort((a, b) => {
    console.log(a);
    console.log(b);
    return b - a;
  })
);

miArray.push("d");
miArray.pop();

console.log(miArray);

miArray.shift();
miArray.unshift("e");
console.log(miArray);
