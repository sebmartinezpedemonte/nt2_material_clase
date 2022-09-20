const vm = new Vue({
  el: "#app",
  data() {
    return {
      texto: "Rick and Morty",
      personas: [],
    };
  },
  computed: {
    textoModificado() {
      return this.texto.split("").reverse().join("").toUpperCase();
    },
    segundoTexto() {
      return this.textoModificado.toLowerCase();
    },
    hayPersonas() {
      return this.personas.length > 0;
    },
    humanos() {
      return this.personas.filter((persona) => persona.species == "Human");
    },
  },
  async created() {
    console.log("created...");
    //mostrar spinner
    const ids = [1, 2, 3, 4, 5, 6, 7];
    const result = await fetch(
      `https://rickandmortyapi.com/api/character/${ids}`
    );
    const data = await result.json();
    console.log(data);
    this.personas = data;
    //ocultar spinner
  },
  mounted() {
    console.log("mounted...");
  },
});
