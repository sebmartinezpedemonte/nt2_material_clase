var myVue = new Vue({
  el: "#app",
  data: {
    miTexto: "Hola",
    miArray: [1, 2, 4, 6, 3],
    series: [
      { nombre: "serie 1", estreno: 2010, id: 1 },
      { nombre: "serie 2", estreno: 2010, id: 2 },
    ],
  },
  methods: {
    cambiarTexto() {
      this.miTexto = "Otro texto";
    },
    removeLast() {
      this.miArray.pop();
    },
  },
});
