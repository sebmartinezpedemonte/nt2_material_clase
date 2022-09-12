async function entregarComida() {
  console.log("Empieza el proceso..");
  const ensaladaPromise = getEnsalada();
  const hamburguesaPromise = getHamburguesa();
  const bebidaPromise = getBebida();

  try {
    const [ensalada, hamburguesa, bebida] = await Promise.all([
      ensaladaPromise,
      hamburguesaPromise,
      bebidaPromise,
    ]);
    console.log(`Su pedido de ${ensalada} ${hamburguesa} ${bebida} esta listo`);
  } catch (error) {
    console.log("Hubo un problema con su pedido");
  }
}

function getEnsalada() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("🥗");
    }, 2000);
  });
}

function getHamburguesa() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("🍔");
    }, 3000);
  });
}

//no tenes control
function getBebida() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("🍺");
    }, 4000);
  });
}

entregarComida();
