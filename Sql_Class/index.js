const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');
const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');

app.use(methodOverride('_method'));
app.use(express.urlencoded({extended:true}));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

const connection =mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'delta_app',
    password : 'Adii@9889'
});

let getRandomUser = () => {
  return [
    faker.string.uuid(),
    faker.internet.username(),
     faker.internet.email(),
    // avatar: faker.image.avatar(),
     faker.internet.password(),
    // birthdate: faker.date.birthdate(),
    // registeredAt: faker.date.past(),
  ]
};

// let q = "INSERT IGNORE INTO user (id, username, email, password) VALUES ?";

//   let user = [
//   ["127", "BOB", "bob@gmail.com", "12345678"],
//   ["128", "ALEX", "alex@gmail.com", "12345679"],
//   ["129", "CERRY", "cherry@gmail.com", "12345677"],
//   ["130", "DENY", "deny@gmail.com", "12345676"]
// ];
// let data = [];
// for(let i = 1; i < 100; i++){
//   data.push(getRandomUser());
// };

// home route
app.get("/" ,(req,res) =>{
  let q = `SELECT count(*) from user`;
  try {
  connection.query(q,(err,result) =>{
    if (err) throw err;
    let count = result[0]["count(*)"];
    res.render("home.ejs",{count});
    // console.log(result.length);
  });
  }catch (err){
    console.log(err);
    res.send("some error in DB");
  }
});

// show route
app.get("/user",(req,res) =>{
  let q = `SELECT * from user`;
  try {
  connection.query(q,(err,users) =>{
    if (err) throw err;
    res.render("showusers.ejs",{users});
  });
  }catch (err){
    console.log(err);
    res.send("some error in DB");
  }
});

// Edit route
app.get("/user/:id/edit", (req, res) => {
  let { id } = req.params;
  let q = `SELECT * FROM user WHERE id = '${id}'`;
  try {
    connection.query(q, (err, users) => {
      if (err) throw err;
      let user = users[0]; // ✅ fixed: was 'result[0]'
      res.render("edit.ejs", { user });
    });
  } catch (err) {
    console.log(err);
    res.send("some error in DB");
  }
});

// UPDATE ROUTE
app.patch("/user/:id",(req,res)=>{
  let { id } = req.params;
  let {password: formpass, username: newUsernmae} = req.body;
  let q = `SELECT * FROM user WHERE id = '${id}'`;
  try {
    connection.query(q, (err, users) => {
      if (err) throw err;
      let user = users[0]; // ✅ fixed: was 'result[0]'
      if(formpass != user.password){
        res.send("Wrong password");
      }else{
        let q2 = `UPDATE user SET name='${newUsernmae}' WHERE id = '${id}'`;
        connection.query(q2,(err,result)=>{
          if(err) throw err;
          res.redirect("/user");
        });
      }
    });
  } catch (err) {
    console.log(err);
    res.send("some error in DB");
  }
})

app.listen("8080", ()=>{
  console.log("server in work on port 8080");
});


// connection.end();


// console.log(getRandomUser());