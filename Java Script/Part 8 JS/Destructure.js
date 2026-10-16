let names = ["Abhi", "Binny", "Chirag", "David","elly","farhan"];

let [winner, runnerup, ...other] = names;

// De-Structure Object...
const Student = {
    name : "Steve",
    class : 9,
    age : 15,
    subject : ["hindi", "english", "math", "science"],
    username : "Steve@123",
    password : "abcd1234"
};

let {username: user, password, city = "Jaipur"} = Student;