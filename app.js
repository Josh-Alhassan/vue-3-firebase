console.log("Hello, Vue3")

const app = vue.createApp({
    data() {
        return {
            title: 'The final empire',
            author: 'Joshua Abel',
            age: 45,
        }
    },
    methods: {
        changeTitle(title) {
            this.title = title
        }
    }
    // template: '<h2>This is my template</h2>'
})

app.mount('#app')