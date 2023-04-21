const app = Vue.createApp({
    data() {
      return {
        totalNum: 0,
        thereYet: '',
      };
    },
    watch: {
        result(value) {
            const that = this;
            setTimeout(function() {
                that.totalNum = 0;
            }, 5000);
        }
    }
    computed: {
        result() {
            if (totalNum < 37) {
                this.thereYet = this.totalNum
            } else if (totalNum === 37) {
                this.thereYet = 'Not there yet" until you reach a result of exactly 37'
            } else {
                this.thereYet = 'Too much!'
            }
        },           
    },
    // watch: {
    //     thereYet() {
    //         if (totalNum === 37) {
    //             this.thereYet = this.totalNum
    //         } else if (totalNum > 37) {
    //             this.thereYet = 'Not there yet" until you reach a result of exactly 37'
    //         } else {
    //             this.thereYet = 'Too much!'
    //         }
    //     },
    // },
    methods: {
        addNumber(num) {
            this.totalNum = this.totalNum + num
        }
    },
  });

  
  app.mount('#assignment');
  