const app = Vue.createApp({
    data(){
        return{
            showbooks:true,
            books:[
                {name:'English',author:'Alasford',price:200,purchaseUrl:'http://www.rokomari.com',img:'assets/design-1.png',fav:true},
                {name:'Bangla',author:'John Doe',price:400,purchaseUrl:'http://www.boibazar.com',img:'assets/design-2.png',fav:true},
                {name:'Phycis',author:'Ardan de',price:240,purchaseUrl:'https://www.booktionary.com.bd/',img:'assets/design-3.png',fav:false},
                {name:'Chemistry',author:'Macculam',price:320,purchaseUrl:'https://unb.com',img:'https://images.pexels.com/photos/14446254/pexels-photo-14446254.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',fav:true}
            ],
            url:'http://www.facebook.com/rakhinrohan',
            
        }
    },
    methods:{
       toggle(){
        this.showbooks =! this.showbooks;
       },
       favBook(book){
        book.fav =! book.fav
       }
    },
    computed:{
        filteredBooks(){
            return this.books.filter((book) => book.fav)
        }
    }
})

app.mount('#app')