export default function Cards({productname,features,oldprice,newprice}){
    let styles = {
        textDecorationLine:"Line-through"
    }
    let newstyles ={
        fontWeight:"bold"
    }
    return(
        <div className="smallbox">
        <h3 className="prod">{productname}</h3>
        <div></div>
        <p>{features.map(feature=><li>{feature}</li>)}</p>
        <p><span style={styles}>Rs-{oldprice}</span>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <span style={newstyles}>Rs-{newprice}</span></p>
        </div>
    )
}