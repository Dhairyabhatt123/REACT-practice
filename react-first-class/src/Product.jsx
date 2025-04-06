import "./Product.css"
export default function Product({title,price,features}){
    let styles = {backgroundColor: price > 10000 ? "pink" : ""};
    return(
        <div className="product" >
            <h3>product name: {title}</h3>
            <h5 >price of product: {price}</h5>
            <h6>features: {features}</h6>
            {price > 20000 ? <p style={styles}>Discount of 5%</p>:<a href="#">get discount</a>}
        </div>
    )
}    