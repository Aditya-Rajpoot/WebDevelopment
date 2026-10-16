const mongoose = require('mongoose');
main()
.then(() =>{
    console.log("connection successful");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/amazon');
}

const bookSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true,
    },
    author : {
        type : String
    },
    price : {
        type : Number
    },
    discount : {
        type : Number,
        default : 0,
    }
});

const Book = mongoose.model("Book" , bookSchema);

// let book1 = new Book({
//     title : "Ikigai",
//     author : "Héctor García & Francesc Miralles",
//     price : "300",
// });

// book1.save()
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// });

Book.findByIdAndUpdate("6a32eec5640eec6167597aa1",{price : -500}
    
)
.then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.log(err);
})
