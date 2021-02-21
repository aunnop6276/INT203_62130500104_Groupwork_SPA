const app = {
    data() {
        return {
            msg: 'Hello, Vue3',
            bigpic: false,
            check: false,
            notfind: false,
            search: 'images/search.png',
            tasks: [{
                    image: 'images/1.jpg',
                    Title: 'Mount Fuji , Japan',
                    done: false,
                    
                     foundx: false
                },
                {
                    image: 'images/2.jpg',
                    Title: 'Lysefjorden , Norway',
                    done: false,
                     foundx: false
                },
                {
                    image: 'images/3.jpg',
                    Title: 'Plitvice Lake , Croatia',
                    done: false,
                    foundx: false
                },

            ],
            inputTask: '',
            indeximg: '',
            findingnemo: '',
            switchtrue: true,
            switchfalse: false
        }
    },

    methods: {
        toggleDone(index) {
            this.tasks[index].done = !this.tasks[index].done
        },
        
        toggleDoneNemo(index) {
            console.log(index)
            this.lulic[index].done = !this.lulic[index].done
         
        },

        popup() {
            this.check = !this.check
            this.inputTask = ''
            this.switchtrue = true;
            this.switchfalse = false;
        },

        searchPressenter() {
            this.switchtrue = false;
            this.switchfalse = true;
            this.notfind = false;

            if (this.inputTask == '') {
                this.lulic = this.tasks;
            } else {

                this.lulic = this.tasks.filter(n => n.Title.toLowerCase().includes(this.inputTask.toLowerCase()));
                if (this.lulic == '') {
                    this.notfind = true;
                }

            }
            console.log(this.lulic)

        },
        zoomuppic(index) {
            this.indeximg = index
            for (a of this.tasks) {
                if (a.foundx = true) {
                    a.foundx = false


                }
            }
            if (this.bigpic == false) {
                this.bigpic = !this.bigpic
            }


            this.tasks[index].foundx = !this.tasks[index].foundx


        },
        closebp() {
            this.bigpic = !this.bigpic
            for (a of this.tasks) {
                a.found = false
            }
        },

        close() {
            this.showImages = false;
        },

        imgClicked(index) {
            this.showImages = true;
            this.currentIndex = index;
        }
    },

    computed: {
        countUndone() {
            return this.tasks.filter(t => !t.done).length
        },
        selectpic() {

            bigp = this.tasks.filter(n => n.foundx == true)

            return bigp
        }
        
    }


}



Vue.createApp(app).mount('#app')