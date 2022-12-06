console.log("Hello, Vue3")

const app = vue.createApp({
    data() {
        return {
            showBooks: true,
            books: [
                {title:'name of the wind', author: 'Patrick rothfuss'},
                {title: 'The way of kings', author: 'Brandon Sanderson'},
                {title: 'The final empire', author: 'Brandon Sanderson'}
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