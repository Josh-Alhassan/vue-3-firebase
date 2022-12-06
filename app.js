console.log("Hello, Vue3")

const app = vue.createApp({
    data() {
        return {
            showBooks: true,
            books: [
                {title:'name of the wind', author: 'Patrick rothfuss', img: 'assets/1.jpg'},
                {title: 'The way of kings', author: 'Brandon Sanderson', img:'assets/2.jpg'},
                {title: 'The final empire', author: 'Brandon Sanderson', img:'assets/3.jpg'}
            ]
        }
    },
    methods: {
        changeTitle(title) {
            this.title = title
        },
        toggleShowBooks() {
            this.showBooks = !this.showBooks
        },
        handleEvent(e, data) {
            console.log(e, e.type)
            if (data) {
                console.log(data)
            }
        },
        handleMouseMove(e) {
            this.x = this.offsetX
            this.y = this.offsetY
        }
    }
    // template: '<h2>This is my template</h2>'
})

app.mount('#app')