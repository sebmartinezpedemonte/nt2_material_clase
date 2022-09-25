new Vue({
  el: "#app",
  data() {
    return {
      coins: [],
      orderBy: 1, //1 ranking, 2 name
    };
  },
  methods: {
    orderByRanking() {
      this.orderBy = 1;
    },
    orderByName() {
      this.orderBy = 2;
    },
  },
  computed: {
    orderedCoins() {
      //Si cambia la propiedad de la que depende la computada, ésta se volvera a evaluar.
      return [...this.coins].sort((a, b) => {
        if (this.orderBy == 1) return a.rank - b.rank;
        else {
          //esto se puede simplicar con un ternario tambien.
          if (a.name < b.name) return -1;
          else if (a.name > b.name) return 1;
          else return 0;
        }
      });
    },
  },
  async created() {
    const result = await fetch("https://api.coincap.io/v2/assets?limit=10");
    const data = await result.json();
    console.log(data.data);
    this.coins = data.data;
  },
});
