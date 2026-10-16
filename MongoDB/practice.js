const mongoose = require('mongoose');
main()
.then(() =>{
    console.log("connection successful");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

const userSchema = new mongoose.Schema({
  name : String,
  email : String,
  age : Number,
});

const User = mongoose.model("User" , userSchema);

// Insert data one

// const user1 = new User ({
//   name : "Adam",
//   email : "adam@gmail.com",
//   age : 25,
// });

// user1.save();

// const user2 = new User ({
//   name : "Eve",
//   email : "eve@gmail.com",
//   age : 20,
// });

// user2.save()
// .then ((res) =>{
//   console.log(res);
// })
// .catch((err) =>{
//   console.log(err);
// });


// Insert data many....

// User.insertMany([
// {
//   name : "Peter",
//   email : "peter@gmail.com",
//   age : 20,
// },
// {
//   name : "Bob",
//   email : "bob@gmail.com",
//   age : 26,
// },
// {
//   name : "Bruce",
//   email : "bruce@gmail.com",
//   age : 25,
// },
// ])
// .then((data)=>{
//   console.log(data);
// });

// Find data as a query form...

// User.find({age : {$gte : 25}})
// .then((res)=>{
//   console.log(res);
// })
// .catch((err)=>{
//   console.log(err);
// });

// findOne data only

// User.findOne({age : {$gte : 25}})
// .then((res)=>{
//   console.log(res);
// })
// .catch((err)=>{
//   console.log(err);
// });

// User.findById("6a2e8caf65be8f3f7641a980")
// .then((res)=>{
//   console.log(res);
// })
// .catch((err)=>{
//   console.log(err);
// });


// Update the data....

// User.updateOne({name : "Bruce"},{name : "Tony"})
// .then((res)=>{
//   console.log(res);
// })
// .catch((err)=>{
//   console.log(err);
// });

// findOne and Update 

// User.findOneAndUpdate({name : "Eve"}, {age : 22},{new: true})
// .then((res)=>{
//   console.log(res);
// })
// .catch((err)=>{
//   console.log(err);
// });


// delete the data....

// User.deleteOne({name : "Adam"})
// .then((res)=>{
//   console.log(res);
// })
// .catch((err)=>{
//   console.log(err);
// })

User.findOneAndDelete({name : "Bob"})
.then((res)=>{
  console.log(res);
})


