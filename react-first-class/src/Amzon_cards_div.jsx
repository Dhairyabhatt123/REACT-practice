import "./Amazon.css";
import Cards from "./Amazon_cards";
export default function Group(){
    return(
        <div className="bigbox">
            <p>BlockBusteer Deals on Computer Accessories</p>
            <div className="box">
            <Cards productname="Logitech MX Master 35" features={["8,000 DPI","5 Programmable Buttons"]} oldprice={12495} newprice={8999}/>
            <Cards productname="Apple Pencil(2nd Gen)" features={["Intitutive touch surface","Designed for ipad pro"]} oldprice={11900} newprice={9199}/>
            <Cards productname="Zebronics Zeb-Transformer" features={["Intitutive touch surface","Designed for ipad pro"]} oldprice={1599} newprice={899}/>
            <Cards productname="Portronics Toad 23 Wireless Mouse" features={["abc","abc"]} oldprice={599} newprice={278}/>
            </div>
            
        </div>
    )
}