new Vue({
  el: '#vue-app',
  data: {
    health: 100
  },
  methods: {
    punch: function () {
      this.health -= 10;
    },
    restart: function () {
      health = 100;
    }
  },
  computed: {

  }
})