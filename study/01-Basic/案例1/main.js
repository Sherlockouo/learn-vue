const app = new Vue({
    el: "#app",
    data: {
        books: [
            {
                id: 1,
                name: '《飘》',
                date: 'xxxx',
                price: 85.50,
                count: 1
            },
            {
                id: 2,
                name: '《飘的很高》',
                date: 'xxxx',
                price: 95.50,
                count: 1
            },
            {
                id: 3,
                name: '《不飘了》',
                date: 'xxxx',
                price: 45.50,
                count: 1
            },
            {
                id: 4,
                name: '《尘》',
                date: 'xxxx',
                price: 233.23,
                count: 1
            }
        ]
    },
    computed: {
        total() {
            let total = 0
            for (let i = 0; i < this.books.length; i++) {
                total += this.books[i].price * this.books[i].count
            }
            return total.toFixed(2)
        }
    }
    ,
    methods: {
        rm(index) {
            this.books.splice(index, 1)
        },
        inc(index) {
            this.books[index].count++;
        },
        dec(index) {
            this.books[index].count--;
        }
    },
    filter: {}
})

