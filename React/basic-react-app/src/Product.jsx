import "./Product.css";
import Price from "./Price.jsx";

function Product({title,idx}){
    let oldPrice = ["12,495", "11,900" ,"1,599", "599"];
    let newPrice = ["11,345", "9,200", "900", "299"];
    let Description = ["8000 DPI" , "intuitive surface", "designed for iphone pro", "wireless"];
    return (
        <div className="Product" >
            <h4>{title}</h4>
            <p>{Description[idx]}</p>
            <Price oldPrice={oldPrice[idx]} newPrice={newPrice[idx]} />
        </div>
    );
}

export default Product;