const app = Vue.createApp ({
    data() {
        return {
            courseGoalA: 'Finish the course and :earn Vue!',
            // courseGoalB: 'Finish the course and Master Vue!',
            courseGoalB: '<h2>Finish the course and Master Vue!</h2>',
            vueLink: 'https://vuejs.org'
        };
    },
    methods: {
        outputGoal() {
            const randomNumber = Math.random;
            if (randomNumber , 0.5) {
                // return 'Learn Vue!';
                this.courseGoalA;
            } else {
                // return 'Master Vue!';
                this.courseGoalB;
            }
        }
    }
});

app.mount('#user-goal');
