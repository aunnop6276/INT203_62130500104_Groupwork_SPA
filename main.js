const app = Vue.createApp({
    data() {
        return {
            msg: 'Hello, Vue3',
            bigpic: false,
            check: false,
            notfind: false,
            tasks: [{ image: 'images/1.jpg', imagelike: 'images/1like.png', article: "Eren Yeager", done: false, foundx: false },
            { image: 'images/2.jpg', imagelike: 'images/2like.jpg', article: "Mikasa Ackerman", done: false, foundx: false },
            { image: 'images/3.jpg', imagelike: 'images/3like.jpg', article: "Armin Arlert", done: false, foundx: false },
            ],
            inputTask: '',
            indeximg: '',
            findingnemo:[]
            ,switchtrue :true
            ,switchfalse :false
        }
    },
    methods: {
        toggleDone(index) {
            console.log(index)
            this.tasks[index].done = !this.tasks[index].done
         
        }
       
        ,
        popup() {
            this.check = !this.check
            this.inputTask = ''
            this.switchtrue = true;
            this.switchfalse = false;
        }
        , zoomuppic(index) {
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


        }
        , zoomupnemopic(index) {
            this.indeximg = index
            for (a of this.tasks) {
                if (a.foundx = true) {
                    a.foundx = false


                }
            }
            if (this.bigpic == false) {
                this.bigpic = !this.bigpic
            }


            this.findingnemo[index].foundx = !this.findingnemo[index].foundx


        }
        , closebp() {
            this.bigpic = !this.bigpic
            for (a of this.tasks) {
                a.found = false
            }
        }
        , chevron_left() {

            this.indeximg--

            if (this.indeximg < 0) {
                this.indeximg = this.tasks.length - 1

            }
            for (a of this.tasks) {
                if (a.foundx = true) {
                    a.foundx = false


                }
            }
            this.tasks[this.indeximg].foundx = !this.tasks[this.indeximg].foundx
        }
        , chevron_right() {
            this.indeximg++

            if (this.indeximg >= this.tasks.length) {
                this.indeximg = 0

            }
            for (a of this.tasks) {
                if (a.foundx = true) {
                    a.foundx = false


                }
            }
            this.tasks[this.indeximg].foundx = !this.tasks[this.indeximg].foundx
        }
        ,
        // ทำงานได้แล้ว
        searchPressenter(inputTask) {
            console.log('here'+inputTask)
            this.switchtrue = false;
            this.switchfalse = true;
            this.notfind = false;

            if (inputTask == '') {
                this.findingnemo = this.tasks;
            } else {
                
                this.findingnemo = this.tasks.filter(n => n.article.toLowerCase().includes(inputTask.toLowerCase()));
                if (this.findingnemo == '') {
                    this.notfind = true;
                } 

            }
            console.log(this.findingnemo)

        }

    },
    computed: {
        count() {
            return this.tasks.filter(t => t.done).length
        }
        ,
        //แบบไม่ได้ใช้ @keyup.enter
        search() {
            this.notfind = false;
            if (this.inputTask == '') {
                return this.tasks;
            } else {
                let filterpic = this.tasks.filter(n => n.article.toLowerCase().includes(this.inputTask.toLowerCase()));
                if (filterpic == '') {
                    this.notfind = true;
                } else {

                    return filterpic;
                }

            }


        }
        , 
        selectpic() {

            bigp = this.tasks.filter(n => n.foundx == true)

            return bigp
        }
    }

})
//  Vue.createApp(app)