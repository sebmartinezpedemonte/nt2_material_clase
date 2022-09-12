async function iniciarCarrera() {
  let array = [];
  for (i = 1; i <= 20; i++) {
    array.push(correr(`Corredor ${i}`));
  }
  console.log("Inicio de la carrera 🏁.");
  const resultado = await Promise.all(array);

  resultado.sort((a, b) => a.tiempo - b.tiempo);
  resultado.forEach((corredor, indice) => {
    console.log(`El corredor ${corredor.nombre} llegó en ${indice + 1} lugar.`);
  });
}

async function correr(nombre) {
  const tiempo = getRamdonTime(3, 10);
  const corredor = { nombre, tiempo };
  return new Promise((resolve) => {
    setTimeout(() => resolve(corredor), tiempo);
  });
}

function getRamdonTime(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  const resultado = Math.floor(Math.random() * (max - min + 1) + min);
  console.log(resultado * 1000);
  return resultado * 1000;
}

(async () => await iniciarCarrera())();
