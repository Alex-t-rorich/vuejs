const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      lastname: '',
      // fullname: ''
    };
  },
  computed: {
    fullname() {
      console.log('Running again!')
      if (this.name != '' || this.lastname != '') {
        return this.name + ' ' + this.lastname
      }
    },
  },
  watch: {
    // name(value) {
    //   if (value != '') {
    //     this.fullname = value + ' ' + this.lastname
    //   }
    // },
    // lastname(value) {
    //   if (value != '') {
    //     this.fullname =  + this.name + ' ' + value
    //   }
    // },
  },
  methods: {
    outputFullName() {
      // console.log('Running again!')
      // if (this.name != '') {
      //   return this.name + ' ' + 'Rorich'
      // }
    },
    setName(event) {
      this.name = event.target.value;
      // + ' ' + lastName
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput() {
      this.name = ''
    },
  },
});

app.mount('#events');
