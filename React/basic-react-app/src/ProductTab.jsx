import Product from "./Product.jsx";


function ProductTab() {
    let styles = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
};
    return (
       <div style={styles}>
            
            <Product title="Logitect MX player" idx={0}/>
            <Product title="Apple Pencil (2nd Generation)" idx={1}/>
            <Product title="Zebronics Zeb-transformer" idx={2}/>
            <Product title="Patronics Toad 23" idx={3}/>
        </div>
    );
}

export default ProductTab;