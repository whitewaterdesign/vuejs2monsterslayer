new Vue({
    el: '#app',
    data: {
        active: false,
        you: 100,
        monster: 100,
        log: []
    },
    watch: {
        you() {
            if(this.you < 1) {
                const restart = confirm('Heads up you lose!\r\rPlay again?');
                if(restart) {
                    this.start();
                } else {
                    this.active = false;
                }
            }
        },
        monster() {
            if(this.monster < 0 && this.you > 0) {
                const restart = confirm('Horay! You are triumphant.\r\rPlay again?');
                if(restart) {
                    this.start();
                } else {
                    this.active = false;
                }
            }
        }
    },
    methods: {
        start() {
            this.you = 100;
            this.monster = 100;
            this.active = true;
            this.log = [];
        },
        attack() {
            const monst = Math.floor(Math.random() * 10);
            const you = Math.floor(Math.random() * 10);
            this.you -= monst;
            this.monster -= you;
            this.log.unshift({you:you,monster:monst});
        },
        special() {
            const monst = Math.floor(Math.random() * 10);
            const you = Math.floor(Math.random() * (18 - 10) + 10);
            this.you -= monst;
            this.monster -= you;
            this.log.unshift({you:you,monster:monst});
        },
        heal() {
            const monst = Math.floor(Math.random() * 10);
            this.you -= monst;
            this.you += 10;
            this.log.unshift({heal:10,monster:monst});
        }
    }
})