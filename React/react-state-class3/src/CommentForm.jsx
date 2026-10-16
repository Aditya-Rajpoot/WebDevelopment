import { useState } from "react";
import { useFormik} from "formik";

export default function CommentForm({addNewComment}){
    // let[formData , setFormData] = useState({
    //     username: "",
    //     remarks: "",
    //     rating: 5,
    // });

      const formik = useFormik({
     initialValues: {
       username: '',
       remarks: '',
       rating: '',
     },
     onSubmit: values => {
       alert(JSON.stringify(values, null, 2));
     },
   });


    let handleInputChange = (event) => {
        setFormData ((currData) => {
            return {...currData, [event.target.name] : event.target.value};
        })
    };

    let handleSubmit = (event) => {
        console.log(formData);
        addNewComment(formData);
        event.preventDefault();
         event.preventDefault();
         setFormData({
            username: "",
            remarks: "",
            rating: 5,
        })
    }

    return(
        <div>
            <h4>Give a comment</h4>
            <form onSubmit={handleSubmit}>

            <label htmlFor="username">Username</label> &nbsp;
            <input placeholder="Username" 
            type="text"
             value={formData.username}
             onChange={handleInputChange}
             id="username"
             name="username"/>
            <br /><br />

             <label htmlFor="remark">Remarks</label> &nbsp;
            <textarea placeholder="remarks" 
            value={formData.remarks}
            onChange={handleInputChange}
            id="remark"
            name="remarks">
            </textarea>
            <br /><br />

             <label htmlFor="rating">Rating</label> &nbsp;
            <input placeholder="rating"
             type="number"
              min={1} max={5} 
              value={formData.rating}
              onChange={handleInputChange}
              id="rating"
              name="rating"/>
            <br /><br />

            <button>add comment</button>
            </form>
        </div>
    );
}