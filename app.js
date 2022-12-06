console.log("Hello, Vue3")

const app = vue.createApp({
    data() {
        return {
            showBooks: true,
            title: 'The final empire',
            author: 'Joshua Abel',
            age: 45,
            x: 0,
            y:0
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