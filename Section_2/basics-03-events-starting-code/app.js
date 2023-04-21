const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
    };
  },
  methods: {
    setName(event, lastName) {
      this.name = event.target.value + ' ' + lastName;
    },
    //   addCounter() {
    //     return this.counter++;
    //   },
    //   removeCounter() {
    //     return this.counter--;
    //   }
    // }
    addCounter(num) {
      this.counter = this.counter + num;
    },
    removeCounter(num) {
      this.counter = this.counter - num;
    },
    submitForm(event) {
      event.preventDefault();
      alert('Submitted!');
    },

  },
});

app.mount('#events');
