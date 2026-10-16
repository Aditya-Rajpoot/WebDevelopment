const mongoose = require('mongoose');
const Chat = require("./models/chat.js");

main()
.then(()=> console.log("connection successfull")) 
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

let allChats = ([
    {
    from : "Adam",
    to : "Eve",
    msg : "Send me your Exam sheet",
    created_at : new Date()
    },
    {
    from : "Eve",
    to : "Peter",
    msg : "hi peter",
    created_at : new Date()
    },
    {
    from : "Tony",
    to : "Smith",
    msg : "Send me some car photo",
    created_at : new Date()
    }, 
    {
    from : "Ram",
    to : "Shyam",
    msg : "Send me your Exam sheet",
    created_at : new Date()
    },
    {
    from : "Jelly",
    to : "Hydro",
    msg : "hello....",
    created_at : new Date()
    },
]);

Chat.insertMany(allChats);