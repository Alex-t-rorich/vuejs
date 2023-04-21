const app = Vue.createApp ({
    data() {
        return {
            myName: 'Alex',
            myAge: 30,
            // myAge5: this.myAge5,
            randomNum: this.randomNum,
            imageLink: 'https://vuejs.org'

        };
    },
    methods: {
        agePlusFive() {
            return this.myAge + 5;
        },
        randomNumber() {
            return Math.random();
        },
    }
});

app.mount('#assignment');
