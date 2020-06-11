const app=new Vue({
    el:'#app',
    data:{
        books:[
            {
                id:1,
                name:'《算法导论》',
                data:'2020-9',
                price:99.00,
                count:1
            },
            {
                id:2,
                name:'《动画设计实训》',
                data:'2005-12',
                price:56.40,
                count:1
            },
            {
                id:3,
                name:'《离散数学》',
                data:'2010-7',
                price:44.00,
                count:1
            },
            {
                id:4,
                name:'《数据结构》',
                data:'2014-4',
                price:51.00,
                count:2
            },
            {
                id:5,
                name:'《JavaWeb开发》',
                data:'2009-2',
                price:34.00,
                count:1
            }]
    },
    methods:{
        // getFinalPrice(price){
        //     return '￥'+price.toFixed(2)
        // }
        decrenment(index){
            this.books[index].count--
        },
        increnment(index){
            this.books[index].count++
        },
        removebtn(index){
            this.books.splice(index,1)
        }
    },
    computed:{
      totalPrice(){
          let totalPrice=0
          for(let i=0;i<this.books.length;i++){
              totalPrice+=this.books[i].price*this.books[i].count
          }
          return totalPrice
      }
    },
    filters:{
        showPrice(price){
            return '￥'+price.toFixed(2)
        }
    }
})