const app = Vue.createApp({
    data() {
      return {
        userInput: '',
        confirmedInput: '',
      };
    },
    methods: {
        btnAlert() {
            alert('Submitted!');
        },
        saveInput(event) {
            this.userInput = event.target.value;
        },
        confirmInput(event) {
            this.confirmedInput = this.userInput;
        },
    }, 
  });
  
  app.mount('#assignment');
  