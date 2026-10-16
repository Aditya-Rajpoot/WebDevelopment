import { useState } from "react"

export default function Form() {
    let[formData,setFormData] = useState({
        fullName: "",
        userName: "",
        password: "",
    });


    let handleInputChange = (event) => {
        setFormData((currData) => {
            return{...currData ,[event.target.name] : event.target.value};
        })
    };

    let handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
        setFormData({
            fullName: "",
            userName: "",
            password: "",
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="fullName">Full Name</label>
            <input placeholder="enter your name"
            type="text"
            value={formData.fullName}
            // onChange={handleFullName}
            id="fullName"
            name="fullName"
            onChange={handleInputChange}/>
            <br />
            <br />
            <label htmlFor="username">user Name</label>
            <input placeholder="enter user name"
            type="text"
            value={formData.userName}
            // onChange={handleUserName}
            id="username"
            name="userName"
            onChange={handleInputChange}/>
            <br />
            <br />
            <label htmlFor="password">Password</label>
            <input placeholder="enter your password"
            type="password"
            value={formData.password}
            // onChange={handleUserName}
            id="password"
            name="password"
            onChange={handleInputChange}/>
            <br />
            <br />
            <button>Submit</button>
        </form>
    )
}