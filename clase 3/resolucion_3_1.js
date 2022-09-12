async function iniciarCarrera() {
  console.log("Inicio de la carrera 🏁");
  const corredor1 = correr("Corredor 1");
  const corredor2 = correr("Corredor 2");
  const corredor3 = correr("Corredor 3");
  const resultado = await Promise.all([corredor1, corredor2, corredor3]);

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
