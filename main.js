const app = {
    data() {
        return {
            msg: 'Hello, Vue3',

            tasks: [{image: 'images/1.jpg',article: 'Mount Fuji , Japan',done: false},
            {image: 'images/2.jpg',article: 'Lysefjorden , Norway' ,done: false},
            {image: 'images/3.jpg',article: 'Plitvice Lake , Croatia' ,done: false}
        ]
        }
    },
    methods: {
        toggleDone(index){
            this.tasks[index].done = !this.tasks[index].done
        }
    },
    computed: {
        countUndone(){
            return this.tasks.filter( t => !t.done ).length
        }
    }

}
Vue.createApp(app).mount('#app')