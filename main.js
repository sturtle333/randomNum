new Vue({
  el: '#app',
  data: {
    message: '',
    numbers: []
  },
  methods: {
    generate: function(){
      this.numbers = [];
      const inst = parseInt(this.message);
      for(var i=0;i<inst;i++){
        var num = Math.random();
        num = num * 10;
        num = parseInt(num);
        this.numbers.push(num);
      }
    }
  }
})
