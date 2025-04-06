import Product from "./product";

function ProductTab(){
    // arrays
    let features =["hitect","durable","cheap"];
    // objects
    // let features2 = {a: "samsung",b:"apple",c:"poco"};
    return(
        <>
        <Product title="laptop" price={30000} features={features[0]}/>
        <Product title="phone" price={20000} features={["cheap", "apple "]}/>
        <Product/>
        </>
    )
}

export default ProductTab;