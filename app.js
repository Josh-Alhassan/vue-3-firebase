console.log("Hello, Vue3")

const app = vue.createApp({
    data() {
        return {
            showBooks: true,
            title: 'The final empire',
            author: 'Joshua Abel',
            age: 45,
        }
    },
    methods: {
        changeTitle(title) {
            this.title = title
        },
        toggleShowBooks() {
            this.showBooks = !this.showBooks
        }
    }
    // template: '<h2>This is my template</h2>'
})

app.mount('#app')